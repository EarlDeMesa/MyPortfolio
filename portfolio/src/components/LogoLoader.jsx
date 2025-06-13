import React, { useEffect, useState } from "react";
import Logo from "./Logo";

export default function LogoLoader() {
  const [strokeOffset, setStrokeOffset] = useState(300);

  useEffect(() => {
    setTimeout(() => setStrokeOffset(0), 500);
  }, []);

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-background z-50'>
      <div className='relative w-16 h-16 flex items-center justify-center'>
        <div className='absolute w-full h-full border-2 border-accentTerracotta rounded-full' />

        <svg className='absolute w-full h-full' viewBox='0 0 100 100'>
          <circle
            cx='50'
            cy='50'
            r='48'
            stroke='#B45235'
            strokeWidth='2'
            fill='none'
            strokeDasharray='300'
            strokeDashoffset={strokeOffset}
            className='transition-all duration-1000 ease-linear'
          />
        </svg>

        <Logo variant='initial' />
      </div>
    </div>
  );
}
