import Image from 'next/image';


export default function ChurchInfo() {
  return (
    <section className="bg-[#b53639] text-white px-20 py-15 ">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-center gap-5">
        <div className="border-r-1 border-white pr-5">
          <Image src={"https://gamch.blob.core.windows.net/gamch/ebf2a5f2-bca3-11ef-bf00-0a58a9feac03.png"} 
          alt="Gamch Logo" 
          className="mb-4"   
          width={100}
          height={100}
          />
        </div>
        <div className="flex flex-row items-center justify-evenly gap-5 border-r-1 border-white pr-5">
            <div className="">
              <Image src={"https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-02.png"}
               alt="Gamch Logo" 
               className=" mb-4"
                  width={60}
                  height={50}
               />
            </div>
            <div className="font-bold">
              <p className="text-5xl">July 14-20</p>
              <p className="text-4xl">6:30PM-8:30PM</p>
            </div>
        </div>
        <div>
          <div className="text-5xl flex flex-row items-end justify-around font-bold">
            <Image src={"https://gamch.blob.core.windows.net/gamch/iconos/Landing - VBS-03.png"} 
            alt="Gamch Logo" 
            className="pr-3" 
                  width={50}
                  height={30}
            />
            <p>The Salvation Army Temple</p></div>
          <p className="text-3xl font-bold">501 Broadway Blvd SE Albuquerque, NM 87102</p>
        </div>
      </div>
    </section>
  )
}
