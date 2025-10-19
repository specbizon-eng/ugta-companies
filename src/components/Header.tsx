"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const nav = [
  { href: "/", label: "Головна" },
  { href: "/chat", label: "Чат" },
  { href: "/market", label: "Маркет" },
  { href: "/legal", label: "Юридична" },
  { href: "/trucks", label: "Вантажівки" },
];

export function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 w-full border-b border-outline/40 bg-bg/80 backdrop-blur">
      <div className="container h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide">
          01 CENTRAL UKRAINE | U-GTA
        </Link>
        <nav className="hidden md:flex gap-4">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className={clsx(
                "px-3 py-1.5 rounded-lg text-sm transition",
                pathname === i.href
                  ? "bg-outline/40"
                  : "hover:bg-outline/30 text-text-muted"
              )}
            >
              {i.label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-2">
          <Link href="/auth/login" className="px-3 py-1.5 rounded-lg text-sm bg-outline/40 hover:bg-outline/60">
            Вхід
          </Link>
          <Link href="/auth/register" className="px-3 py-1.5 rounded-lg text-sm bg-accent text-white hover:bg-accent-hover">
            Реєстрація
          </Link>
        </div>
      </div>
    </header>
  );
}
