
const { PrismaClient } = require('@prisma/client'); const bcrypt = require('bcryptjs'); const prisma = new PrismaClient();
async function main(){ const email=process.env.ADMIN_EMAIL||'admin@ugta.local'; const name=process.env.ADMIN_NAME||'UGTA Admin'; const password=process.env.ADMIN_PASSWORD||'changeme123'; const exists=await prisma.user.findUnique({where:{email}}); if(!exists){ await prisma.user.create({data:{email,name,role:'ADMIN',passwordHash:await bcrypt.hash(password,10)}}); console.log('Seed admin:', email, '(pass:', password, ')'); } else { console.log('Seed admin exists:', email); } }
main().finally(()=>prisma.$disconnect());
