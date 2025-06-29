import Image from "next/image";
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="bg-white px-6 py-10" id="contact">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-evenly gap-10">
        <div className="flex flex-col items-center md:items-start justify-center gap-10">
          <h3 className="text-3xl md:text-5xl text-[#b53639] font-bold text-center md:text-left">Lorem ipsum</h3>
          <p className="text-[#b53639] text-lg md:text-2xl font-bold text-center md:text-left">
            Lorem ipsum dolor sit amet,
            <br />
            consectetuer adipiscing
          </p>
        </div>
        <div className="flex flex-col  items-center  md:items-start justify-center gap-5">
          <div className="flex flex-col  md:flex-row items-center md:items-start justify-center gap-5">
            <div>
              <Image
                src={
                  "https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-09.png"
                }
                alt="Phone number"
              className="mb-4"
              width={40}
              height={20}
              />
            </div>
            <div className="font-bold">
              <p className="text-lg md:text-2xl text-[#b53639]">(520)247-2460</p>
            </div>
          </div>
          <div className="flex flex-col  md:flex-row items-center md:items-start justify-center gap-5">
            <div>
              <Image
                src={
                  "https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-10.png"
                }
                alt="Phone number"
              className="mb-4"
              width={40}
              height={20}
              />
            </div>
            <div className="font-bold">
              <p className="text-lg md:text-2xl text-[#b53639]">(714) 227-5173</p>
            </div>
          </div>
          <div className="flex flex-col  md:flex-row items-center md:items-start justify-center gap-5">
            <div>
              <Image
                src={
                  "https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-11.png"
                }
                alt="Phone number"
              className="mb-4"
              width={40}
              height={20}
              />
            </div>
            <div className="font-bold">
              <p className="text-lg md:text-2xl text-[#b53639]">gammy.ruiz@usw.salvationarmy.org</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-10">
             <a
             href="https://wa.me/17142275173"
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center gap-2 bg-[#b53639] text-white font-medium px-10 py-3 rounded-lg shadow hover:bg-green-700 transition"
           >
             <FaWhatsapp className="w-10 h-10" />
             ¡Da click aquí!
           </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <hr className=" my-10 border border-[#b53639]" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-row items-center justify-center md:justify-between">
        <div className="flex flex-row items-start justify-center gap-5">
         <div className="flex flex-row items-center justify-center gap-5">
                     <a href="https://www.facebook.com/SalvationArmyUSA/?locale=es_LA" target="_blank"><Image
                       src={
                         "https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-12.png"
                       }
                       alt="Email"
                       className="mb-4"
                       width={40}
                       height={20}
                     /></a>
                     <a href="https://www.instagram.com/salvationarmyus/?hl=es" target="_blank"><Image
                       src={
                         "https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-13.png"
                       }
                       alt="Email"
                       className="mb-4"
                       width={40}
                       height={20}
                     /></a>
                    <a href="https://www.linkedin.com/company/salvationarmyus/" target="_blank"> <Image
                       src={
                         "https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-14.png"
                       }
                       alt="Email"
                       className="mb-4"
                       width={40}
                       height={20}
                     /></a>
                   </div>
          <div className="font-bold">
            <p className="text-2xl hidden md:block text-[#b53639]">Social Media</p>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center gap-5 hidden md:block">
          <Image
            src={
              "https://gamch.blob.core.windows.net/gamch/ebf2a5f2-bca3-11ef-bf00-0a58a9feac03.png"
            }
            alt="Gamch Logo"
            className="mb-4"
            width={100}
            height={50}
          />
        </div>
      </div>
    </section>
  );
}
