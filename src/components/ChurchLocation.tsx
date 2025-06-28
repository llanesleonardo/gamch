import Image from 'next/image';

export default function ChurchInfo() {
  return (
    <section className="bg-[#b53639] text-white">
      <div className="">
          <Image src={"https://gamch.blob.core.windows.net/gamch/Img/salvationarmymap.png"} 
          alt="Gamch Logo"  
          className="min-w-screen"
          width={2100}
          height={1400}
          />
      </div>
    </section>
  )
}
