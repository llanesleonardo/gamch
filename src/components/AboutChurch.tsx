import React from "react";
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';

export default function AboutChurch() {
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
          <h3 className="text-3xl md:text-5xl text-[#b53639] font-bold">En Salvation Army</h3>
        </div>
        <div className="flex flex-row items-start justify-center gap-5">
        <section className="bg-white text-[#b53639] px-6 py-12 max-w-4xl mx-auto text-center">
  <p className="mb-4 text-xl">
    Queremos el bienestar de nuestra comunidad. Trabajamos y extendemos la mano a través de diferentes actividades, todo sin fines de lucro.
  </p>
  <p className="mb-4 text-xl">
    Nos gusta conocer tu necesidad y ayudarte a mejorar en todas las áreas.
  </p>
  <p className="mb-4 text-xl">
    Somos una iglesia con brazos abiertos para ti y tu familia, y si no tienes una, aquí te sentirás en casa.
  </p>
  <p className="mb-4 text-xl font-semibold">
    Dios tiene mucho para ti.
  </p>
  <p className="mb-6 text-xl">
    Te invitamos a unirte a nuestro WhatsApp para enviarte las notificaciones de cada evento.
  </p>
      <a
      href="https://wa.me/17142275173"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-[#b53639] text-white font-medium px-10 py-3 rounded-lg shadow hover:bg-green-700 transition"
    >
      <FaWhatsapp className="w-10 h-10" />
      ¡Da click aquí!
    </a>
</section>

        </div>
      </div>
    </section>
  );
}
