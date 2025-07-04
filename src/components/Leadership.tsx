'use client';

import { useEffect, useState } from 'react';
import '@/i18n'; // or '../i18n' depending on your file structure
import { useTranslation } from 'react-i18next';
import Image from "next/image";

export default function Leadership() {

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
    <section className="py-15  bg-[#b53639]" id="leadership">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-3xl md:text-5xl text-center font-semibold mb-10 md:mb-4">
          {i18n.t('Leadership Team')}
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-20 border-b-1 md:border-b-4 border-white pb-8 mb-8 ">
          <div>
            <Image
              src={
                "https://gamch.blob.core.windows.net/gamch/Img/Landing - VBS-20.png"
              }
              alt="Leadership Member 1"
              className="rounded-full mx-auto mb-4"
              width={200}
              height={200}
            />
          </div>
          <div className="text-white">
            <h3 className="text-xl md:text-3xl text-center md:text-left">Verónica Arvizu</h3>
            <p className="text-lg md:text-xl mb-4 text-center md:text-left"> {i18n.t('Group')}-A /  {i18n.t('Ages')}: 3-6  {i18n.t('years old')}</p>
            <div className="flex flex-row justify-start items-center gap-10">
              <div className="flex flex-row justify-evenly items-center gap-10 mx-auto ">
                <a href="mailto:gammy.ruiz@usw.salvationarmy.org">
                  {" "}
                  <Image
                    src="https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-05.png"
                    alt="Leadership Member 1"
                    className="mx-auto "
                    width={40}
                    height={20}
                  />{" "}
                </a>
                <p className="hidden md:block">
                  gammy.ruiz@usw.salvationarmy.org
                </p>
              </div>
              {/*  <div className="flex flex-row justify-evenly items-center gap-10">
                <Image
                  src="https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-04.png"
                  alt="Leadership Member 1"
                  className="mx-auto mb-4"
                  width={40}
                  height={20}
                />
                <p className="hidden md:block">LinkedIn</p>
              </div>*/}
            </div>
          </div>
        </div>
        <div className="flex-col md:flex-row justify-center items-center gap-5 md:gap-20   border-b-1 md:border-b-4 border-white pb-8 mb-8 hidden md:flex ">
          <div className="text-white">
            <h3 className="text-xl md:text-3xl text-center md:text-right">Jackie Murillo</h3>
            <p className="text-lg md:text-xl mb-4 text-center md:text-right">
              {i18n.t('Group')}-B /  {i18n.t('Ages')}: 7-12 {i18n.t('years old')}
            </p>
            <div className="flex flex-row justify-end items-center gap-10">
              <div className="flex flex-row justify-evenly items-center gap-10 mx-auto. md:mx-0">
                <a href="mailto:gammy.ruiz@usw.salvationarmy.org">
                  {" "}
                  <Image
                    src="https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-05.png"
                    alt="Leadership Member 1"
                    className="mx-auto "
                    width={40}
                    height={20}
                  />{" "}
                </a>
                <p className="hidden md:block">
                  gammy.ruiz@usw.salvationarmy.org
                </p>
              </div>
              {/*  <div className="flex flex-row justify-evenly items-center gap-10">
                <Image
                  src="https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-04.png"
                  alt="Leadership Member 1"
                  className="mx-auto mb-4"
                  width={40}
                  height={20}
                />
                <p className="hidden md:block">LinkedIn</p>
              </div>*/}
            </div>
          </div>
          <div>
            <Image
              src={
                "https://gamch.blob.core.windows.net/gamch/Img/Landing - VBS-20.png"
              }
              alt="Leadership Member 1"
              className="rounded-full mx-auto mb-4"
              width={200}
              height={200}
            />
          </div>
        </div>

           <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-20   border-b-1 md:border-b-4 border-white pb-8 mb-8  md:hidden">
           <div>
            <Image
              src={
                "https://gamch.blob.core.windows.net/gamch/Img/Landing - VBS-20.png"
              }
              alt="Leadership Member 1"
              className="rounded-full mx-auto mb-4"
              width={200}
              height={200}
            />
          </div>
          <div className="text-white">
            <h3 className="text-xl md:text-3xl text-center md:text-right">Jackie Murillo</h3>
            <p className="text-lg md:text-xl mb-4 text-center md:text-right">
                           {i18n.t('Group')}-B /  {i18n.t('Ages')}: 7-12 {i18n.t('years old')}
            </p>
            <div className="flex flex-row justify-end items-center gap-10">
              <div className="flex flex-row justify-evenly items-center gap-10 mx-auto">
                <a href="mailto:gammy.ruiz@usw.salvationarmy.org">
                  {" "}
                  <Image
                    src="https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-05.png"
                    alt="Leadership Member 1"
                    className="mx-auto "
                    width={40}
                    height={20}
                  />{" "}
                </a>
                <p className="hidden md:block">
                  gammy.ruiz@usw.salvationarmy.org
                </p>
              </div>
              {/*  <div className="flex flex-row justify-evenly items-center gap-10">
                <Image
                  src="https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-04.png"
                  alt="Leadership Member 1"
                  className="mx-auto mb-4"
                  width={40}
                  height={20}
                />
                <p className="hidden md:block">LinkedIn</p>
              </div>*/}
            </div>
          </div>
         
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-20  border-b-1 md:border-b-4 border-white pb-8 mb-8">
          <div>
            <Image
              src={
                "https://gamch.blob.core.windows.net/gamch/team/p1.png"
              }
              alt="Leadership Member 1"
              className="rounded-full mx-auto mb-4"
              width={200}
              height={200}
            />
          </div>
          <div className="text-white">
            <h3 className="text-xl md:text-3xl text-center md:text-left">Mariano Almada</h3>
            <p className="text-lg md:text-xl mb-4 text-center md:text-left"> {i18n.t('Group')}-C /  {i18n.t('Ages')}: 13-17 {i18n.t('years old')}</p>
            <div className="flex flex-row justify-start items-center gap-10">
              <div className="flex flex-row justify-evenly items-center gap-10 mx-auto">
                <a href="mailto:gammy.ruiz@usw.salvationarmy.org">
                  {" "}
                  <Image
                    src="https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-05.png"
                    alt="Leadership Member 1"
                    className="mx-auto "
                    width={40}
                    height={20}
                  />{" "}
                </a>
                <p className="hidden md:block">
                  gammy.ruiz@usw.salvationarmy.org
                </p>
              </div>
              {/*  <div className="flex flex-row justify-evenly items-center gap-10">
                <Image
                  src="https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-04.png"
                  alt="Leadership Member 1"
                  className="mx-auto mb-4"
                  width={40}
                  height={20}
                />
                <p className="hidden md:block">LinkedIn</p>
              </div>*/}
            </div>
          </div>
        </div>
        
        <div className=" flex-col md:flex-row justify-center items-center gap-5 md:gap-20    pb-8 mb-8  hidden md:flex ">
          <div className="text-white">
            <h3 className="text-xl md:text-3xl text-center md:text-right">Jr Jiménez</h3>
            <p className="text-lg md:text-xl mb-4 text-center md:text-right">
              {i18n.t("Games and activities manager")}
            </p>
            <div className="flex flex-row justify-end items-center gap-10">
              <div className="flex flex-row justify-evenly items-center gap-10 mx-auto md:mx-0">
                <a href="mailto:gammy.ruiz@usw.salvationarmy.org">
                  {" "}
                  <Image
                    src="https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-05.png"
                    alt="Leadership Member 1"
                    className="mx-auto "
                    width={40}
                    height={20}
                  />{" "}
                </a>
                <p className="hidden md:block">
                  gammy.ruiz@usw.salvationarmy.org
                </p>
              </div>
              {/*  <div className="flex flex-row justify-evenly items-center gap-10">
                <Image
                  src="https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-04.png"
                  alt="Leadership Member 1"
                  className="mx-auto mb-4"
                  width={40}
                  height={20}
                />
                <p className="hidden md:block">LinkedIn</p>
              </div>*/}
            </div>
          </div>
          <div>
            <Image
              src={
                "https://gamch.blob.core.windows.net/gamch/team/p2.png"
              }
              alt="Leadership Member 1"
              className="rounded-full mx-auto mb-4"
              width={200}
              height={200}
            />
          </div>
        </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-20    pb-8 mb-8  md:hidden">
           <div>
            <Image
              src={
                "https://gamch.blob.core.windows.net/gamch/team/p2.png"
              }
              alt="Leadership Member 1"
              className="rounded-full mx-auto mb-4"
              width={200}
              height={200}
            />
          </div>
         <div className="text-white">
            <h3 className="text-xl md:text-3xl text-center md:text-right">Jr Jiménez</h3>
            <p className="text-lg md:text-xl mb-4 text-center md:text-right">
             {i18n.t("Games and activities manager")}
            </p>
            <div className="flex flex-row justify-end items-center gap-10">
              <div className="flex flex-row justify-evenly items-center gap-10 mx-auto">
                <a href="mailto:gammy.ruiz@usw.salvationarmy.org">
                  {" "}
                  <Image
                    src="https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-05.png"
                    alt="Leadership Member 1"
                    className="mx-auto "
                    width={40}
                    height={20}
                  />{" "}
                </a>
                <p className="hidden md:block">
                  gammy.ruiz@usw.salvationarmy.org
                </p>
              </div>
              {/*  <div className="flex flex-row justify-evenly items-center gap-10">
                <Image
                  src="https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-04.png"
                  alt="Leadership Member 1"
                  className="mx-auto mb-4"
                  width={40}
                  height={20}
                />
                <p className="hidden md:block">LinkedIn</p>
              </div>*/}
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
}


   