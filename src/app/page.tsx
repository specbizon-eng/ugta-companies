import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative">
      {/* hero */}
      <section className="relative">
        {/* фон: своя картинка у /public/hero.jpg (без копіювання з чужого сайту) */}
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="UGTA cover"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-bg" />
        </div>

        <div className="container relative z-10 flex min-h-[calc(100dvh-56px)] flex-col justify-center">
          <span className="inline-block text-xs tracking-widest text-text-muted mb-4">
            01 CENTRAL UKRAINE | U-GTA
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl">
            ОНЛАЙН СЕРВІС
            <br />
            ДЛЯ БІЗНЕСУ ТА RP
          </h1>

          <p className="mt-4 max-w-2xl text-text-muted">
            Юридичні послуги, договори, статуси. Оренда вантажівок із бронюванням.
          </p>

          <div className="mt-8">
            <Link href="/auth/login" className="btn-accent">
              Розпочати
            </Link>
          </div>

          {/* місце під майбутній прев’ю/слайдер праворуч (порожній блок) */}
          <div className="mt-10 h-64 rounded-2xl border border-outline/40 bg-bg/60" />
        </div>
      </section>
    </main>
  );
}
