// components/MainMenu.tsx
'use client'
import Link from 'next/link'
import { menuItems } from '@/data/menuItems'
import Image from 'next/image';
import { FaHome, FaCalendarAlt, FaRegClipboard } from 'react-icons/fa'


export default function MainMenu() {
  return (
    <div className='fixed top-0 left-0 w-full z-50 bg-white shadow-md'>
      <nav className="bg-[#b53639] text-white px-6 py-1  shadow-md hidden md:block">
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
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
    </div>
  )
}
