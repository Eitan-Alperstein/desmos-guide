"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

// Desmos's public demo API key (documented at desmos.com/api) — fine for
// personal / educational, non-commercial use. Swap for your own free key
// from https://www.desmos.com/api for production traffic.
const DESMOS_API_KEY = "dcb31709b452b1cf9dc26972add0fda6";

declare global {
  interface Window {
    Desmos?: {
      GraphingCalculator: (
        element: HTMLElement,
        options?: Record<string, unknown>,
      ) => { destroy: () => void };
    };
  }
}

interface DesmosCalculatorProps {
  className?: string;
  resetKey?: string | number;
}

export function DesmosCalculator({ className, resetKey }: DesmosCalculatorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const calculatorRef = useRef<{ destroy: () => void } | null>(null);
  const [scriptReady, setScriptReady] = useState(
    typeof window !== "undefined" && !!window.Desmos,
  );

  useEffect(() => {
    if (!scriptReady || !containerRef.current) return;

    const calculator = window.Desmos!.GraphingCalculator(containerRef.current, {
      keypad: true,
      expressionsTopbar: true,
      settingsMenu: true,
      zoomButtons: true,
      border: false,
      lockViewport: false,
    });
    calculatorRef.current = calculator;

    return () => {
      calculator.destroy();
      calculatorRef.current = null;
    };
    // resetKey intentionally remounts the calculator for a fresh question
  }, [scriptReady, resetKey]);

  return (
    <>
      <Script
        src={`https://www.desmos.com/api/v1.11/calculator.js?apiKey=${DESMOS_API_KEY}`}
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
      />
      <div
        key={resetKey}
        ref={containerRef}
        className={className ?? "h-[480px] w-full rounded-lg border"}
      />
    </>
  );
}
