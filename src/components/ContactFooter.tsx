import Image from "next/image";

export default function Contact() {
  return (
    <section className="bg-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-center gap-30">
        <div className="flex flex-row items-start justify-center gap-5">
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
            <p className="text-2xl text-[#b53639]">
              Lorem ipsum dolor sit amet, consectetuer
            </p>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center gap-5">
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
            <p className="text-2xl text-[#b53639]">(662) 0000 000</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-row items-center justify-center gap-30 mt-10">
        <div className="flex flex-row items-start justify-center gap-5">
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
            <p className="text-2xl text-[#b53639]">hola@email.com</p>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center gap-5">
          <div className="flex flex-row items-center justify-center gap-5">
            <Image
              src={
                "https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-12.png"
              }
              alt="Email"
              className="mb-4"
              width={40}
              height={20}
            />
            <Image
              src={
                "https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-13.png"
              }
              alt="Email"
              className="mb-4"
              width={40}
              height={20}
            />
            <Image
              src={
                "https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-14.png"
              }
              alt="Email"
              className="mb-4"
              width={40}
              height={20}
            />
          </div>
          <div className="font-bold">
            <p className="text-2xl text-[#b53639]">Social Media</p>
          </div>
        </div>
      </div>
    </section>
  );
}
