"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { href: "/", label: "Головна" },
  { href: "/chat", label: "Чат" },
  { href: "/market", label: "Маркет" },
  { href: "/legal", label: "Юридична" },
  { href: "/trucks", label: "Вантажівки" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-border">
      <div className="container flex h-14 items-center gap-4">
        <div className="font-semibold">01 CENTRAL UKRAINE | U-GTA</div>
        <nav className="ml-auto flex gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={clsx(
                "rounded-md px-3 py-1.5 text-sm hover:bg-muted/40",
                pathname === l.href && "bg-muted/60"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
