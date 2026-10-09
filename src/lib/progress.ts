"use client";

import { useCallback, useSyncExternalStore } from "react";

interface Attempt {
  correct: boolean;
  timestamp: number;
}

type ProgressState = Record<string, Attempt[]>;

const STORAGE_KEY = "desmos-guide-progress-v1";

// Sentinel reference used before localStorage has been read on the client,
// so consumers can tell "not loaded yet" apart from "genuinely empty".
const EMPTY_STATE: ProgressState = {};

let state: ProgressState = EMPTY_STATE;
let initialized = false;
const listeners = new Set<() => void>();

function emitChange() {
  for (const listener of listeners) listener();
}

function loadFromStorage() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    state = raw ? (JSON.parse(raw) as ProgressState) : {};
  } catch {
    state = {};
  }
}

function persist() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore (private browsing, quota, etc.)
  }
}

function ensureInitialized() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;
  loadFromStorage();
  window.addEventListener("storage", (e) => {
    if (e.key === STORAGE_KEY) {
      loadFromStorage();
      emitChange();
    }
  });
}

function subscribe(listener: () => void) {
  ensureInitialized();
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return state;
}

function getServerSnapshot() {
  return EMPTY_STATE;
}

function recordAttemptGlobal(questionId: string, correct: boolean) {
  state = {
    ...state,
    [questionId]: [...(state[questionId] ?? []), { correct, timestamp: Date.now() }],
  };
  persist();
  emitChange();
}

function resetAllGlobal() {
  state = {};
  persist();
  emitChange();
}

export function useProgress() {
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const hydrated = snapshot !== EMPTY_STATE;

  const recordAttempt = recordAttemptGlobal;
  const resetAll = resetAllGlobal;

  const isSolved = useCallback(
    (questionId: string) => (snapshot[questionId] ?? []).some((a) => a.correct),
    [snapshot],
  );

  const attemptCount = useCallback(
    (questionId: string) => (snapshot[questionId] ?? []).length,
    [snapshot],
  );

  return { state: snapshot, hydrated, recordAttempt, isSolved, attemptCount, resetAll };
}
