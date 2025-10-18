
import { cookies } from "next/headers"; import jwt from "jsonwebtoken"; import bcrypt from "bcryptjs";
const JWT_SECRET = process.env.JWT_SECRET || "dev-secret";
export async function hashPassword(pw:string){ return bcrypt.hash(pw,10) }
export async function verifyPassword(pw:string,hash:string){ return bcrypt.compare(pw,hash) }
export function signSession(payload:any){ return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" }) }
export async function setSessionCookie(token:string){ (await cookies()).set("session", token, { httpOnly:true, sameSite:"lax", path:"/", maxAge:60*60*24*7 }) }
export async function getUserFromCookie(){ try{ const c=(await cookies()).get("session")?.value; if(!c) return null; return jwt.verify(c, JWT_SECRET) as any } catch { return null } }
