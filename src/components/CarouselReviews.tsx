"use client";

import { useState } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';


const cards = [
  {
    title: "Lorem ipsum 4",
    description:
      "Lorem ipsum dolor sit amet, consectetuer,Lorem ipsum dolor sit amet, consectetuer,Lorem ipsum dolor sit amet, consectetuer",
    image: "https://gamch.blob.core.windows.net/gamch/Img/Landing - VBS-18.jpg",
  },
  {
    title: "Lorem ipsum 4",
    description:
      "Lorem ipsum dolor sit amet, consectetuer,Lorem ipsum dolor sit amet, consectetuer,Lorem ipsum dolor sit amet, consectetuer",
    image: "https://gamch.blob.core.windows.net/gamch/Img/Landing - VBS-18.jpg",
  },
  {
    title: "Lorem ipsum 4",
    description:
      "Lorem ipsum dolor sit amet, consectetuer,Lorem ipsum dolor sit amet, consectetuer,Lorem ipsum dolor sit amet, consectetuer",
    image: "https://gamch.blob.core.windows.net/gamch/Img/Landing - VBS-18.jpg",
  },
  {
    title: "Lorem ipsum 4",
    description:
      "Lorem ipsum dolor sit amet, consectetuer,Lorem ipsum dolor sit amet, consectetuer,Lorem ipsum dolor sit amet, consectetuer",
    image: "https://gamch.blob.core.windows.net/gamch/Img/Landing - VBS-18.jpg",
  },
];

const cardWidth = 500;
const gap = 32;
const visibleCards = 2.5;
const scrollAmount = cardWidth + gap;

export default function CarouselReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.ceil(cards.length - visibleCards);

  const prev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const next = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));

  return (
    <div className="relative   mx-1 md:mx-4 ">
      <div className="absolute left-[70px] top-[-40px] -translate-y-1/2 z-10 block md:hidden">
        <button
          onClick={prev}
          className="ext-[#b53639] text-4xl p-2 cursor-pointer"
        >
          <Image
            src={
              "https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-07.png"
            }
            className=""
            alt="Logo"
             width={50} 
            height={40}
          />
        </button>
      </div>
      <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 z-10 ">
        <button
          onClick={prev}
          className="ext-[#b53639] text-4xl p-2 cursor-pointer hidden md:block"
        >
          <Image
            src={
              "https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-07.png"
            }
            className=""
            alt="Logo"
             width={50} 
            height={40}
          />
        </button>
      </div>
      <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 z-10 ">
        <button
          onClick={next}
          className="text-[#b53639] text-4xl p-2 cursor-pointer hidden md:block"
        >
          <Image
                       width={50} 
            height={40}
            alt="Logo" 
            src={
              "https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-08.png"
            }
            className=""
          />
        </button>
      </div>

            <div className="absolute right-[70px] top-[-40px] -translate-y-1/2 z-10 block md:hidden">
        <button
          onClick={next}
          className="text-[#b53639] text-4xl p-2 cursor-pointer"
        >
          <Image
                       width={50} 
            height={40}
            alt="Logo" 
            src={
              "https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-08.png"
            }
            className=""
          />
        </button>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out space-x-10"
          style={{ transform: `translateX(-${currentIndex * scrollAmount}px)` }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-none w-[300px] md:w-[500px] shrink-0 rounded-xl overflow-hidden bg-white shadow-lg"
            >
              <div className="relative h-auto md:h-[300px]">
                {/* Background image */}
                <div className="flex flex-row items-center justify-start gap-5 pl-10">
                  <Image
                    src={card.image}
                    alt={card.title}
                    className="object-cover w-[100px] h-[100px] rounded-full"
                     width={100} 
                     height={100}
                  />
                 <div className="flex flex-col items-start">
                  <h2 className="text-3xl font-bold">{card.title}</h2>
                  <div className="flex items-center">
                    <StarIcon className="h-6 w-6 text-yellow-500" />
                    <StarIcon className="h-6 w-6 text-yellow-500" />
                    <StarIcon className="h-6 w-6 text-yellow-500" />
                    <StarIcon className="h-6 w-6 text-yellow-500" />
                    <StarIcon className="h-6 w-6 text-gray-300" />
                  </div>
                 </div>
                   </div>

                {/* Text content with separate background overlay */}
                <div className="w-full px-10 py-10 text-left text-black z-10">
                  {/* Foreground content */}
                  <div className="relative z-10">
                    <p className="text-xl">{card.description}</p>
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
