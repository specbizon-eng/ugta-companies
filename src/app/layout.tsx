import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "01 CENTRAL UKRAINE | U-GTA",
  description: "Онлайн Площадка для Торговлі та сервіс для бізнесу і Юридичних послуг",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body className="min-h-[100dvh] bg-bg text-text-primary antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
