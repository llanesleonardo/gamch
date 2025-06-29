// components/MainMenu.tsx
'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link'
import { menuItems } from '@/data/menuItems'
import Image from 'next/image';
import LanguageSwitcher from './LanguagesSwitcher'

import '@/i18n'; // or '../i18n' depending on your file structure
import { useTranslation } from 'react-i18next';
export default function MainMenu() {


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
    <div className='fixed top-0 left-0 w-full z-50 bg-white shadow-md'>
      <div className='flex flex-row items-center justify-end bg-[#b53639] pr-5 md:pr-20'>
        <LanguageSwitcher />
      </div>
      <nav className="bg-[#b53639] text-white px-1 py-1  shadow-md hidden md:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">
            <Image src={"https://gamch.blob.core.windows.net/gamch/ebf2a5f2-bca3-11ef-bf00-0a58a9feac03.png"} 
            alt="Gamch Logo" 
            className="" 
            width={100} 
            height={100}
            />
          </Link>
        </div>

        {/* Menu Items */}
        <ul className="flex gap-6  md:text-xl font-normal font-bold ">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:underline">
                {i18n.t(item.label)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
    </div>
  )
}
