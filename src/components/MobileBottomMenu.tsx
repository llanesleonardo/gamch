// components/MobileBottomMenu.tsx
'use client'
import Link from 'next/link'
import Image from 'next/image'
import { FaHome, FaCalendarAlt, FaRegClipboard } from 'react-icons/fa'

const bottomMenuItems = [
  {
    href: '#home',
    label: 'Inicio',
    icon: <FaHome size={24} />,
  },
  {
    href: '#activities',
    label: 'Actividades',
    icon: <FaCalendarAlt size={24} />,
  },
  {
    href: '#registration',
    label: 'Registro',
    icon: <FaRegClipboard size={24} />,
  },
  {
    href: '#aboutus',
    label: 'Salvation Army',
    icon: (
      <Image
        src="https://upload.wikimedia.org/wikipedia/en/c/c4/The_Salvation_Army.svg"
        alt="Salvation Army"
        width={24}
        height={24}
        style={{ objectFit: 'contain' }}
      />
    ),
  },
];


export default function MobileBottomMenu() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-white shadow-md md:hidden">
      <nav className="bg-[#b53639] text-white px-4 py-2">
        <ul className="flex justify-around items-center text-xs font-bold">
          {bottomMenuItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="flex flex-col items-center hover:text-yellow-200">
                {item.icon}
                <span className="mt-1">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
