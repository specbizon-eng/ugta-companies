import Image from "next/image";

export const metadata = {
  title: "01 CENTRAL UKRAINE | U-GTA — Онлайн сервіс",
  description:
    "Юридичні послуги, договори, статуси. Оренда вантажівок із бронюванням. Транспортні компанії.",
};

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0b0d12]">
      <section className="container mx-auto text-center px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Зліва — текст */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6">
              ОНЛАЙН СЕРВІС <br /> ДЛЯ БІЗНЕСУ ТА RP
            </h1>
            <p className="text-gray-400 mb-8">
              Юридичні послуги, договори, статуси. <br />
              Оренда вантажівок із бронюванням.
            </p>
            <a
              href="/auth/login"
              className="bg-[#e74c3c] text-white px-6 py-3 rounded-xl text-lg hover:bg-[#c0392b] transition"
            >
              Розпочати
            </a>
          </div>

          {/* Справа — зображення */}
          <div className="relative w-full max-w-xl aspect-[16/10]">
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
