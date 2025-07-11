'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import '@/i18n'; // or '../i18n' depending on your file structure
import { useTranslation } from 'react-i18next';





export default function ChurchInfo() {

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
    <section className="bg-[#b53639] text-white px-5 md:px-20 py-15 " id="event">
      <div className="md:max-w-8xl mx-auto flex flex-col md:flex-row items-center justify-center gap-5">
        <div className="border-none md:border-r-1 border-white pr-5">
          <Image src={"https://gamch.blob.core.windows.net/gamch/ebf2a5f2-bca3-11ef-bf00-0a58a9feac03.png"} 
          alt="Gamch Logo" 
          className="mb-4"   
          width={100}
          height={100}
          />
        </div>
        <div className="flex flex-row items-center justify-evenly gap-5 border-none md:border-r-1 border-white pr-5">
            <div className="">
              <Image src={"https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-02.png"}
               alt="Gamch Logo" 
               className=" mb-4"
                  width={60}
                  height={50}
               />
            </div>
            <div className="font-bold">
              <p className="text-3xl md:text-5xl">{i18n.t('July')} 14-20</p>
              <p className="text-2xl md:text-4xl">6:30 P.M.-8:30 P.M.</p>
            </div>
        </div>
        <div className='flex flex-col md:flex-row  items-center md:items-end justify-around '>
          <div className="text-5xl flex flex-col md:flex-row items-center md:items-end justify-around font-bold">
            <Image src={"https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-03.png"} 
            alt="Gamch Logo" 
            className="pr-3 pt-10 md:pt-1" 
                  width={50}
                  height={30}
            />
            <p className='text-2xl md:text-5xl pt-5 md:pt-1'>The Salvation Army Temple</p></div>
          <p className="text-2xl md:text-3xl font-bold text-cetner md:text-left pt-5 md:pt-1 hidden md:block">501 Broadway Blvd SE Albuquerque, NM 87102</p>
          <p className="text-2xl md:text-3xl font-bold text-cetner md:text-left pt-5 md:pt-1 md:hidden block" >501 Broadway Blvd SE <br/>Albuquerque, NM 87102</p>
        </div>
      </div>
    </section>
  )
}
