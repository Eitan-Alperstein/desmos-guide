import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
            D
          </span>
          Desmos SAT Prep
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-primary">
            Categories
          </Link>
          <Link href="/reference" className="transition-colors hover:text-primary">
            Cheat Sheet
          </Link>
        </nav>
      </div>
    </header>
  );
}
