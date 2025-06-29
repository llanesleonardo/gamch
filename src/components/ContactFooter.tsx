import Image from "next/image";

export default function Contact() {
  return (
    <section className="bg-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-5 md:gap-30">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-5">
          <div className="flex flex-row items-center justify-center gap-5">
            <Image
              src={
                "https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-06.png"
              }
              alt="Location"
              className="mb-4"
              width={40}
              height={20}
            />
          </div>
          <div className="font-bold">
            <p className="text-lg md:text-2xl text-[#b53639]">
              501 Broadway Blvd SE
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-5">
          <div className="flex flex-row items-center justify-center gap-5">
            <Image
              src={
                "https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-09.png"
              }
              alt="Email"
              className="mb-4"
              width={40}
              height={20}
            />
          </div>
          <div className="font-bold">
            <p className="text-lg md:text-2xl text-[#b53639]">(520)247-2460</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-30 mt-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-5">
          <div className="flex flex-row items-center justify-center gap-5">
            <Image
              src={
                "https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-11.png"
              }
              alt="Email"
              className="h-8 mb-4"
              width={40}
              height={20}
            />
          </div>
          <div className="font-bold">
            <p className="text-lg md:text-2xl text-[#b53639]">gammy.ruiz@usw.salvationarmy.org</p>
          </div>
        </div>
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
            <p className="text-2xl text-[#b53639] hidden md:block">Social Media</p>
          </div>
        </div>
      </div>
    </section>
  );
}
