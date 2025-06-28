import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white relative">
      <Image  
      src={"https://gamch.blob.core.windows.net/gamch/Img/Landing - VBS-15-LR-BGW.png"} 
      alt="VBS Banner" 
      className="mx-auto mb-6 w-full object-cover z-0" 
      width={2100} height={1400}
      />
     {/* Overlay white rectangle to cover black curve */}
    </section>
  )
}
