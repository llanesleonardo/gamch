'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '@/i18n';

const cards = [
  { title: "Music", image: "https://gamch.blob.core.windows.net/gamch/activities/1.png" },
  { title: "New Friends", image: "https://gamch.blob.core.windows.net/gamch/activities/2.png" },
  { title: "Games", image: "https://gamch.blob.core.windows.net/gamch/activities/4.png" },
  { title: "Crafts", image: "https://gamch.blob.core.windows.net/gamch/activities/3.png" },
  { title: "Surprises", image: "https://gamch.blob.core.windows.net/gamch/activities/5.png" },
  { title: "Gifts", image: "https://gamch.blob.core.windows.net/gamch/activities/6.png" },
];

export default function Carousel() {
  const { i18n, ready } = useTranslation();
  const [isReady, setIsReady] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    if (ready) setIsReady(true);
  }, [ready]);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cardWidth = 300;
  const visibleCards = isMobile ? 1 : 3;
  const totalVisibleWidth = cardWidth * visibleCards;
  const maxIndex = cards.length - visibleCards;

  const prev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const next = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));

  if (!isReady) return <div>Loading...</div>;

  return (
    <div className="w-full flex flex-col items-center">
      {/* Carousel */}
      <div className="overflow-hidden w-full mb-6">
        <div
          className="flex gap-5 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * cardWidth}px)`,
            width: `${cards.length * cardWidth}px`
          }}
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="w-[300px] h-[300px] flex-shrink-0 rounded-xl overflow-hidden bg-white shadow-md relative mx-auto"
            >
              <Image
                src={card.image}
                alt={card.title}
                width={300}
                height={300}
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-2">
                <h2 className="text-lg font-semibold">{i18n.t(card.title)}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows below */}
      <div className="flex justify-center gap-6">
        <button onClick={prev} disabled={currentIndex === 0}>
          <Image
            src="https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-07.png"
            width={50}
            height={50}
            alt="Prev"
          />
        </button>
        <button onClick={next} disabled={currentIndex >= maxIndex}>
          <Image
            src="https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-08.png"
            width={50}
            height={50}
            alt="Next"
          />
        </button>
      </div>
    </div>
  );
}
