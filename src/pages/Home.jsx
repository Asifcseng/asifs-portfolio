// src/pages/Home.jsx
import React from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
        Hi, I'm <span className="text-[#28AE60;]">Asif Shaikh</span>
      </h1>
      <p className="text-lg text-[#F2D9CD] sm:text-xl max-w-2xl mb-8 text-muted-foreground">
        I’m a frontend developer specializing in building beautiful and
        functional web apps using React, Tailwind, and modern UI libraries.
      </p>
      <Button size="lg" className="bg-[#28AE60;]" variant="default">
        View My Work
      </Button>
    </section>
  );
}
