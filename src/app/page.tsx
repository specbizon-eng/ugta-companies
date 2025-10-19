import ClientLanding from "@/components/landing/ClientLanding";

export const metadata = {
  title: "01 CENTRAL UKRAINE | U-GTA — Сервіс",
  description: "Юридичні послуги, Оренда вантажівок з бронюванням, Транспортни компанії",
};

export default function Page() {
  return <ClientLanding />;
}

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="container py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Ліва частина — ваш текст і кнопки (залишайте як було) */}

          {/* Права частина — зображення */}
          <div className="relative w-full aspect-[16/10]">
            <Image
              src="/images/hero/hero.png"   // <— наш файл з /public
              alt="UGTA герої"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
