import React from "react";
import Button from "../components/Buttons";

export default function Home() {
  const email = "earldemesa69@gmail.com";

  return (
    <section className='min-h-screen relative flex flex-col justify-center items-start px-8 md:px-20 bg-background'>
      <div className='fixed bottom-0 right-6 flex flex-col items-center z-50 hidden md:flex'>
        <a
          href={`mailto:${email}`}
          className='text-accentTerracotta font-semibold text-sm transition-transform duration-300 hover:-translate-y-1 cursor-pointer'
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            transformOrigin: "center bottom",
            display: "inline-block",
          }}
          title={email}
        >
          {email}
        </a>

        <div className='h-8' />
        <div className='h-20 w-[2px] bg-gray-900' />
      </div>

      <h1 className='text-5xl md:text-6xl font-heading mb-4 max-w-xl leading-tight'>
        Hello, I'm <span className='text-accentTerracotta'>Earl</span>
      </h1>

      <div className='space-y-4 max-w-xl'>
        <p>
          This is a simple, clean, and cozy portfolio that highlights what I've
          learned throughout this course.
        </p>
        <Button href='/projects'>View Projects</Button>
      </div>
    </section>
  );
}
