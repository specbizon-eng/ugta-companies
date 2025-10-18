// src/components/AuthModal.tsx
"use client";
import { useState } from "react";

export default function AuthModal({open,onClose}:{open:boolean; onClose:()=>void}) {
  if(!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-[480px] rounded-xl bg-slate-900 p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold">Увійти або зареєструватись</h3>
          <button onClick={onClose} className="opacity-70 hover:opacity-100">✕</button>
        </div>
        <div className="grid gap-3">
          <a href="/auth/login" className="rounded-lg border border-slate-700 px-4 py-3 text-center hover:bg-slate-800">Вхід</a>
          <a href="/auth/register" className="rounded-lg border border-slate-700 px-4 py-3 text-center hover:bg-slate-800">Реєстрація</a>
        </div>
      </div>
    </div>
  );
}
