// src/app/page.tsx
import Image from "next/image";
import ClientLanding from "@/components/landing/ClientLanding";

export const metadata = {
  title: "01 CENTRAL UKRAINE | U-GTA — Сервіс",
  description:
    "Юридичні послуги, договори, статуси. Оренда вантажівок із бронюванням. Транспортні компанії.",
};

export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="container py-12 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Ліва колонка — ваш існуючий контент */}
          <ClientLanding />

          {/* Права колонка — ілюстрація */}
          <div className="relative w-full aspect-[16/10]">
            <Image
              src="/images/hero/hero.png"
              alt="UGTA герої"
              fill
              priority
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
