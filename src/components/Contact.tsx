import Image from "next/image";

export default function Contact() {
  return (
    <section className="bg-white px-6 py-10">
      <div className="max-w-8xl mx-auto flex flex-row items-start justify-evenly gap-10">
        <div className="flex flex-col items-start justify-center gap-10">
          <h3 className="text-5xl text-[#b53639] font-bold ">Lorem ipsum</h3>
          <p className="text-[#b53639] text-2xl font-bold ">
            Lorem ipsum dolor sit amet,
            <br />
            consectetuer adipiscing
          </p>
        </div>
        <div className="flex flex-col md:flex-col items-start justify-center gap-5">
          <div className="flex flex-row items-start justify-center gap-5">
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
              <p className="text-2xl text-[#b53639]">(662) 0000 000</p>
            </div>
          </div>
          <div className="flex flex-row items-start justify-center gap-5">
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
              <p className="text-2xl text-[#b53639]">(662) 0000 000</p>
            </div>
          </div>
          <div className="flex flex-row items-start justify-center gap-5">
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
              <p className="text-2xl text-[#b53639]">hola@email.com</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-10">
          <button className="text-white bg-[#b53639] px-6 py-2 rounded font-bold">
            Enviar mensaje
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <hr className=" my-10 border border-[#b53639]" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between">
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
            <p className="text-2xl">Social Media</p>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center gap-5">
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
