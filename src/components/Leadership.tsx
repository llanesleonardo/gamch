import Image from "next/image";

export default function Leadership() {
  return (
    <section className="py-15  bg-[#b53639]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-5xl text-center font-semibold mb-4">
          Leadership Team
        </h2>
        <div className="flex flex-row justify-evenly items-center gap-20 border-b-4 border-white pb-8 mb-8">
          <div>
            <Image
              src={
                "https://gamch.blob.core.windows.net/gamch/Img/Landing - VBS-20.png"
              }
              alt="Leadership Member 1"
              className="w-[400px] rounded-full mx-auto mb-4"
                  width={400}
                  height={200}
            />
          </div>
          <div className="text-white">
            <h3 className="text-3xl">Lorem ipsum</h3>
            <p className="text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcor
            </p>
            <div className="flex flex-row justify-start items-center gap-10">
              <div className="flex flex-row justify-evenly items-center gap-10">
                <Image
                  src="https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-05.png"
                  alt="Leadership Member 1"
                  className="mx-auto mb-4"
                  width={40}
                  height={20}
                />
                <p>Nombre y apellido</p>
              </div>
              <div className="flex flex-row justify-evenly items-center gap-10">
                <Image
                  src="https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-04.png"
                  alt="Leadership Member 1"
                  className="mx-auto mb-4"
                  width={40}
                  height={20}
                />
                <p>Nombre y apellido</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-evenly items-center gap-20 border-b-4 border-white pb-8 mb-8">
          <div className="text-white">
            <h3 className="text-3xl text-right">Lorem ipsum</h3>
            <p className="text-lg mb-4 text-right">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcor
            </p>
            <div className="flex flex-row justify-end items-center gap-10">
              <div className="flex flex-row justify-evenly items-center gap-10">
                <Image
                  src="https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-05.png"
                  alt="Leadership Member 1"
                  className="mx-auto mb-4"
                  width={40}
                  height={20}
                />
                <p>Nombre y apellido</p>
              </div>
              <div className="flex flex-row justify-evenly items-center gap-10">
                <Image
                  src="https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-04.png"
                  alt="Leadership Member 1"
                  className="mx-auto mb-4"
                  width={40}
                  height={20}
                />
                <p>Nombre y apellido</p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={
                "https://gamch.blob.core.windows.net/gamch/Img/Landing - VBS-20.png"
              }
              alt="Leadership Member 1"
              className="w-[400px] rounded-full mx-auto mb-4"
                  width={400}
                  height={200}
            />
          </div>
        </div>
        <div className="flex flex-row justify-evenly items-center gap-20">
          <div>
            <Image
              src={
                "https://gamch.blob.core.windows.net/gamch/Img/Landing - VBS-20.png"
              }
              alt="Leadership Member 1"
              className="w-[400px] rounded-full mx-auto mb-4"
                  width={50}
                  height={50}
            />
          </div>
          <div className="text-white">
            <h3 className="text-3xl">Lorem ipsum</h3>
            <p className="text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcor
            </p>
            <div className="flex flex-row justify-start items-center gap-10">
              <div className="flex flex-row justify-evenly items-center gap-10">
                <Image
                  src="https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-05.png"
                  alt="Leadership Member 1"
                  className="mx-auto mb-4"
                  width={40}
                  height={20}
                />
                <p>Nombre y apellido</p>
              </div>
              <div className="flex flex-row justify-evenly items-center gap-10">
                <Image
                  src="https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-04.png"
                  alt="Leadership Member 1"
                  className="mx-auto mb-4"
                  width={40}
                  height={20}
                />
                <p>Nombre y apellido</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
