// scripts/postinstall.cjs
const { execSync } = require("node:child_process");

function run(cmd) {
  execSync(cmd, { stdio: "inherit", env: process.env });
}

try {
  // Використовуємо npx (працює і з npm, і з pnpm, і з yarn)
  run("npx prisma generate");

  if (process.env.DATABASE_URL) {
    console.log("DATABASE_URL found → migrate deploy + seed");
    run("npx prisma migrate deploy");
    run("node prisma/seed.cjs");
  } else {
    console.log("DATABASE_URL not set → skipping migrate/seed");
  }
} catch (e) {
  console.error("postinstall failed:", e?.message || e);
  process.exit(1);
}
