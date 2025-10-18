// scripts/postinstall.cjs
const { execSync } = require("node:child_process");

function run(cmd) {
  execSync(cmd, { stdio: "inherit", env: process.env });
}

try {
  // 1) згенерувати клієнт
  run("npx prisma generate");

  if (process.env.DATABASE_URL) {
    console.log("DATABASE_URL found → db push + seed");

    // 2) створити таблиці в БД за схемою (без файлів міграцій)
    run("npx prisma db push");

    // 3) засіяти адміна
    run("node prisma/seed.cjs");
  } else {
    console.log("DATABASE_URL not set → skipping db push/seed");
  }
} catch (e) {
  console.error("postinstall failed:", e?.message || e);
  process.exit(1);
}
