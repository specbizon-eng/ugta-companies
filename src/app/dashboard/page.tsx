
"use client";
import { useEffect, useState } from "react"; import Link from "next/link";
export default function Dashboard(){
  const [me,setMe]=useState<any>(null);
  useEffect(()=>{ fetch('/api/me').then(r=>r.json()).then(d=>setMe(d.user)); },[]);
  if(!me) return <main className="p-6">Увійди, щоб бачити кабінет.</main>;
  return (<main className="p-6 space-y-6"><h1 className="text-2xl font-bold">Кабінет — {me.name}</h1><div className="grid sm:grid-cols-2 gap-4"><Link href="/legal" className="block p-5 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900"><div className="font-semibold">Юридична компанія</div><div className="text-slate-300 text-sm">Договори, статуси, подання</div></Link><Link href="/trucks" className="block p-5 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900"><div className="font-semibold">Оренда вантажівок</div><div className="text-slate-300 text-sm">Каталог, бронювання</div></Link></div></main>);
}
