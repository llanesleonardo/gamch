import React from "react";
import Image from 'next/image';

export default function AboutChurch() {
  return (
    <section className="bg-white px-6 py-10">
      <div className="bg-white max-w-7xl mx-auto  px-6 py-10 flex flex-col items-center justify-center gap-10">
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
          <h3 className="text-5xl text-[#b53639] font-bold">Sobre la inglesia</h3>
        </div>
        <div className="flex flex-row items-start justify-center gap-5">
          <p className="text-center font-bold text-[#b53639] text-xl">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            no- nummy nibh euismod tincidunt ut laoreet dolore magna aliquam
            erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
            tation ullamcor Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
            magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
            nostrud exerci tation ullamcor
          </p>
        </div>
      </div>
    </section>
  );
}
