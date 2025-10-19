"use client";

import { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function AuthModal({ open, onClose }: Props) {
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-slate-900/90 ring-1 ring-white/10 p-6 text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold">Вхід або реєстрація</h2>
        <p className="mt-1 text-sm text-slate-300">
          Увійдіть у свій кабінет або створіть новий акаунт.
        </p>

        <div className="mt-6 grid gap-3">
          <a
            href="/auth/login"
            className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/15 transition px-4 py-2"
          >
            Вхід
          </a>
          <a
            href="/auth/register"
            className="inline-flex items-center justify-center rounded-lg bg-rose-500 hover:bg-rose-400 transition text-white px-4 py-2"
          >
            Реєстрація
          </a>
        </div>

        <button
          onClick={onClose}
          className="mt-6 block w-full rounded-lg border border-white/10 hover:bg-white/5 px-4 py-2 text-slate-300"
        >
          Закрити
        </button>
      </div>
    </div>
  );
}
