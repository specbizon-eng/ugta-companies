import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "01 CENTRAL UKRAINE | U-GTA — Сервіс",
  description:
    "Юридичні послуги, договори та статуси. Оренда вантажівок із бронюванням. Транспортні компанії.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="container py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Ліва колонка: текст + кнопки */}
          <div>
            <span className="inline-block rounded-full bg-muted px-3 py-1 text-xs text-foreground/80">
              01 CENTRAL UKRAINE | U-GTA
            </span>

            <h1 className="mt-4 text-4xl/tight font-extrabold tracking-tight md:text-5xl lg:text-6xl">
              ОНЛАЙН СЕРВІС
              <br /> ДЛЯ БІЗНЕСУ
            </h1>

            <p className="mt-4 max-w-xl text-base text-foreground/70">
              Юридичні послуги, договори, статуси. Оренда вантажівок із
              бронюванням.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/auth/login"
                className="rounded-md bg-rose-500 px-5 py-2.5 text-white transition hover:bg-rose-600"
              >
                Розпочати
              </Link>

              <Link
                href="/dashboard"
                className="rounded-md border border-border px-5 py-2.5 text-foreground/90 hover:bg-muted/30"
              >
                Кабінет
              </Link>

              <Link
                href="/legal"
                className="rounded-md border border-border px-5 py-2.5 text-foreground/90 hover:bg-muted/30"
              >
                Юридична
              </Link>

              <Link
                href="/trucks"
                className="rounded-md border border-border px-5 py-2.5 text-foreground/90 hover:bg-muted/30"
              >
                Вантажівки
              </Link>
            </div>
          </div>

          {/* Права колонка: картинка героїв */}
          <div className="relative w-full aspect-[16/10]">
            <Image
              src="/public/images/hero/hero.png"
              alt="UGTA герої"
              fill
              priority
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-contain drop-shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
