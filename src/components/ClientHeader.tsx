
"use client";
import Link from "next/link"; import { useEffect, useState } from "react";
export default function ClientHeader(){ const [user,setUser]=useState<any>(null); useEffect(()=>{ fetch("/api/me").then(r=>r.json()).then(d=>setUser(d.user)); },[]);
  return (<header className="border-b border-slate-800 bg-slate-900/50"><div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between"><div className="font-semibold">01 CENTRAL UKRAINE | U-GTA</div>{!user?(<div className="flex gap-2"><Link className="px-3 py-1.5 rounded bg-sky-500/90" href="/auth/login">Вхід</Link><Link className="px-3 py-1.5 rounded border border-slate-700" href="/auth/register">Реєстрація</Link></div>):(<div className="flex items-center gap-3"><span className="text-slate-300">Вітаю, {user.name}</span><Link className="px-3 py-1.5 rounded border border-slate-700" href="/dashboard">Кабінет</Link><button onClick={async()=>{await fetch("/api/auth/logout",{method:"POST"}); location.href="/";}} className="px-3 py-1.5 rounded bg-slate-800 border border-slate-700">Вийти</button></div>)}</div></header>);
}
