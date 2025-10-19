"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  onStart: () => void;
};

export default function Hero({ onStart }: Props) {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16">
      {/* Зображення */}
      <div className="relative aspect-[16/7] w-full overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900/10 to-slate-900/40 ring-1 ring-white/5">
        <Image
          src="/images/hero/hero-team.png"
          alt="UGTA — сервіс для бізнесу та RP"
          fill
          priority
          sizes="100vw"
          className="object-contain object-center select-none pointer-events-none"
        />
      </div>

      {/* Кнопка «Розпочати» */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={onStart}
          className="px-6 py-3 rounded-xl text-base font-semibold bg-rose-500 hover:bg-rose-400 active:bg-rose-600 text-white shadow-lg shadow-rose-500/25 transition"
        >
          Розпочати
        </button>
      </div>
    </section>
  );
}
