'use client';

import { useState } from "react";
import Image from 'next/image';


const cards = [
  { title: "Lorem ipsum 1", description: "Lorem ipsum dolor sit amet, consectetuer", image: "https://gamch.blob.core.windows.net/gamch/Img/Landing - VBS-18.jpg" },
  { title: "Lorem ipsum 2", description: "Lorem ipsum dolor sit amet, consectetuer", image: "https://gamch.blob.core.windows.net/gamch/Img/Landing - VBS-18.jpg" },
  { title: "Lorem ipsum 3", description: "Lorem ipsum dolor sit amet, consectetuer", image: "https://gamch.blob.core.windows.net/gamch/Img/Landing - VBS-18.jpg" },
  { title: "Lorem ipsum 4", description: "Lorem ipsum dolor sit amet, consectetuer", image: "https://gamch.blob.core.windows.net/gamch/Img/Landing - VBS-18.jpg" },
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
    <div className="relative w-full  mx-4 " >
      <div className="absolute left-[-70px] top-1/2 -translate-y-1/2 z-10">
        <button onClick={prev} className="ext-[#b53639] text-4xl p-2 cursor-pointer">
          <Image src={"https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-07.png"} 
          className="h-13"
                  width={100} 
                  height={100}
                  alt="arrow left"
           /></button>
      </div>
      <div className="absolute right-[-70px] top-1/2 -translate-y-1/2 z-10 ">
        <button onClick={next} className="text-[#b53639] text-4xl p-2 cursor-pointer ">
          <Image src={"https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-08.png"} 
          className="h-13"
                  width={100} 
                  height={100}
                  alt="arrow right"
           /></button>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out space-x-8"
          style={{ transform: `translateX(-${currentIndex * scrollAmount}px)` }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-none w-[500px] shrink-0 rounded-xl overflow-hidden bg-white shadow-lg"
            >
              <div className="relative h-[500px]">
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
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-teal-200 w-20 h-20 rounded-full z-10"></div>

                {/* Text content with separate background overlay */}
                <div className="absolute bottom-0 w-full p-4 text-center text-white z-10">
                  {/* Background behind the text only */}
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black to-teal-300 opacity-70 z-0 rounded-b-xl" />


                  {/* Foreground content */}
                  <div className="relative z-10">
                    <h2 className="text-3xl font-bold">{card.title}</h2>
                    <p className="text-2xl px-10">{card.description}</p>
                    <button className="mt-2 text-2xl bg-[#b53639] px-4 py-2 rounded-full text-white font-bold">
                      Contáctanos
                    </button>
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
