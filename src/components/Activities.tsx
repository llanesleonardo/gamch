'use client';

import Carousel from "./Carousel";
import { useEffect, useState } from 'react';
import '@/i18n'; // or '../i18n' depending on your file structure
import { useTranslation } from 'react-i18next';

export default function Activities() {

   const { i18n, ready } = useTranslation();
      const [isReady, setIsReady] = useState(false);
    
      useEffect(() => {
        if (ready) {
          setIsReady(true);
        }
      }, [ready]);
    
      if (!isReady) {
        return <div>Loading...</div>;
      }

  return (
     <section className="py-15 max-w-7xl mx-auto bg-white" id="activities">
      <h2 className="text-[#b53639] text-3xl md:text-5xl text-center font-semibold mb-20 ">{i18n.t('Event Activities')}</h2>
      <Carousel />
    </section>
  )
}
