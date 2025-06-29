'use client';

import { useState } from "react";
import Image from 'next/image';


const cards = [
  { title: "Musica", description: "", image: "https://gamch.blob.core.windows.net/gamch/activities/1.png" },
  { title: "Nuevos amigos", description: "", image: "https://gamch.blob.core.windows.net/gamch/activities/2.png" },
  { title: "Juegos", description: "", image: "https://gamch.blob.core.windows.net/gamch/activities/4.png" },
  { title: "Manualidades", description: "", image: "https://gamch.blob.core.windows.net/gamch/activities/3.png" },
    { title: "Premios", description: "", image: "https://gamch.blob.core.windows.net/gamch/activities/5.png" },
      { title: "Reglos", description: "", image: "https://gamch.blob.core.windows.net/gamch/activities/6.png" },
];

const cardWidth = 500;
const gap = 32;
const visibleCards = 2.5;
const scrollAmount = cardWidth + gap;

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.ceil(cards.length - visibleCards);

  const prev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const next = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));

  return (
    <div className="relative  md:mx-4 " >
      <div className="absolute left-[70px] bottom-[-100px] -translate-y-1/2 z-10 block md:hidden">
        <button onClick={prev} className="ext-[#b53639] text-4xl p-2 cursor-pointer ">
          <Image src={"https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-07.png"} 
          className=""
                  width={50} 
                  height={50}
                  alt="arrow left"
           /></button>
      </div>
      <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 z-10 hidden md:block">
        <button onClick={prev} className="ext-[#b53639] text-4xl p-2 cursor-pointer ">
          <Image src={"https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-07.png"} 
          className=""
                  width={50} 
                  height={50}
                  alt="arrow left"
           /></button>
      </div>
      <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 z-10 hidden md:block">
        <button onClick={next} className="text-[#b53639] text-4xl p-2 cursor-pointer">
          <Image src={"https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-08.png"} 
          className=""
                  width={50} 
                  height={50}
                  alt="arrow right"
           /></button>
      </div>
  <div className="absolute right-[70px] bottom-[-100px] -translate-y-1/2 z-10 block md:hidden">
        <button onClick={next} className="text-[#b53639] text-4xl p-2 cursor-pointer">
          <Image src={"https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-08.png"} 
          className=""
                  width={50} 
                  height={50}
                  alt="arrow right"
           /></button>
      </div>
      <div className="overflow-hidden pb-10 mb-20 md:pb-0 md:mb-0">
        <div
          className="flex transition-transform duration-500 ease-in-out space-x-8"
          style={{ transform: `translateX(-${currentIndex * scrollAmount}px)` }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-none max-w-[300px] md:max-w-[500px] shrink-0 rounded-xl overflow-hidden bg-white shadow-lg"
            >
              <div className="relative max-w-[300px] md:h-[500px]">
                {/* Background image */}
                <Image
                  src={card.image}
                  alt={card.title}
                  className="object-cover w-full h-full"
                  width={100} 
                  height={100}
                />

                {/* Optional full overlay if needed over the image */}
                {/* <div className="absolute inset-0 bg-black bg-opacity-60 z-0" /> */}

                {/* Decorative circle */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-teal-200 w-8 h-8  md:w-20 md:h-20 rounded-full z-10"></div>

                {/* Text content with separate background overlay */}
                <div className="absolute bottom-0  md:w-full p-4 text-center text-white z-10">
                  {/* Background behind the text only */}
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black to-teal-300 opacity-70 z-0 rounded-b-xl" />


                  {/* Foreground content */}
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-3xl font-bold">{card.title}</h2>
                    <p className="text-lg md:text-2xl px-10">{card.description}</p>
                    <a href="#registration" className="mx-auto mt-2 text-xl md:text-2xl bg-[#b53639] px-4 py-2 rounded-full text-white font-bold hidden md:block">
                      Contáctanos
                    </a>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
