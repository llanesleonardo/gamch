'use client';
import React from "react";
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import '@/i18n'; // or '../i18n' depending on your file structure
import { useTranslation } from 'react-i18next';


export default function AboutChurch() {
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
    <section className="bg-white px-1 md:px-6 py-10" id='aboutus'>
      <div className="bg-white max-w-7xl mx-auto  px-1 md:px-6 py-10 flex flex-col items-center justify-center gap-10">
        <div className="flex flex-row items-start justify-center gap-5">
          <Image
            src={
              "https://gamch.blob.core.windows.net/gamch/ebf2a5f2-bca3-11ef-bf00-0a58a9feac03.png"
            }
            className="h-50 mb-4"
            alt="Logo" width={170} height={100}
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-5">
          <h3 className="text-3xl md:text-5xl text-[#b53639] font-bold">{i18n.t('At Salvation Army')}</h3>
        </div>
        <div className="flex flex-row items-start justify-center gap-5">
        <section className="bg-white text-[#b53639] px-6 py-1 md:py-12 max-w-4xl mx-auto text-center">
  <p className="mb-4 text-xl">
{i18n.t('We want the well-being of our community. We work and reach out through various activities, all on a nonprofit basis.')}  </p>
  <p className="mb-4 text-xl">
    {i18n.t('We like to understand your needs and help you improve in all areas.')}
  </p>
  <p className="mb-4 text-xl">
   {i18n.t('We are a church with open arms for you and your family, and if you do not have one, here you will feel at home.')}
  </p>
  <p className="mb-4 text-xl font-semibold">
    {i18n.t('God has so much for you.')}
  </p>
  <p className="mb-6 text-xl">
    {i18n.t('We invite you to join our WhatsApp group so we can send you notifications for each event.')}
  </p>
      <a
      href="https://wa.me/17142275173"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-[#b53639] text-white font-medium px-10 py-3 rounded-lg shadow hover:bg-green-700 transition"
    >
      <FaWhatsapp className="w-10 h-10" />
      ¡{i18n.t('Click here')}!
    </a>
</section>

        </div>
      </div>
    </section>
  );
}
