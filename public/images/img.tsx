"use client";

import { useState } from "react";
import Hero from "./Hero";
import AuthModal from "./AuthModal";

export default function ClientLanding() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Hero onStart={() => setOpen(true)} />
      <AuthModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
