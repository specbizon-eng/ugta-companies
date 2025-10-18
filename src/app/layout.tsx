
import type { Metadata } from "next";
import "./globals.css";
import ClientHeader from "@/components/ClientHeader";
export const metadata: Metadata = { title: "01 CENTRAL UKRAINE | U-GTA — Компанії", description: "Юридичні послуги та оренда вантажівок" };
export default function RootLayout({ children }: { children: React.ReactNode }){
  return (<html lang="uk"><body className="min-h-screen bg-slate-950 text-slate-100 antialiased"><ClientHeader /><main className="max-w-6xl mx-auto px-6 py-8">{children}</main></body></html>);
}
