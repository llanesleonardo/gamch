'use client';
import { useEffect, useState } from 'react';
import '@/i18n'; // or '../i18n' depending on your file structure
import { useTranslation } from 'react-i18next';





export default function EventDescription() {

  const { i18n, ready } = useTranslation();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (ready) {
      setIsReady(true);
    }
  }, [ready]);

  if (!isReady) {
    return <div>Loading...</div>;
  }


  return (
    <section className="py-15 w-[330px] md:w-[80%] md:max-w-7xl mx-auto bg-white">
           
      <h2 className="text-[#b53639] text-3xl md:text-5xl text-center font-semibold mb-4">{i18n.t('VBS - Annual Event for Children')}</h2>
      <br/>
    <p className="text-[#b53639] text-lg md:text-2xl  mb-4 text-center md:text-left">
      {i18n.t('VBS is the most important annual event for our children!')}</p>
    <p className="text-[#b53639] text-lg md:text-2xl  mb-4 text-center md:text-left">
        {i18n.t('Every year we design the details so that it is an unforgettable experience for them and remains in their memory forever.')}
    </p>
   <p className="text-[#b53639] text-lg md:text-2xl  mb-4 text-center md:text-left">
       {i18n.t('In a fun way, they will learn biblical principles so that they build a life of success in their adult life.')}
    </p>
    <p className="text-[#b53639] text-lg md:text-2xl  mb-4 text-center md:text-left">
        {i18n.t('Our work team, from teachers, decorators, and kitchen staff, are people with great hearts and a spirit of service who will treat your children in a very kind and responsible manner.')}
    </p>
    <p className="text-[#b53639] text-lg md:text-2xl  mb-4 text-center md:text-left">
        {i18n.t('Thank you for entrusting us with your most valuable treasure.')}
    </p>
     <p className="text-[#b53639] text-lg md:text-2xl font-semibold mb-4 text-center md:text-left">
        {i18n.t('Let the children come to me, for the kingdom of heaven belongs to them. Jesus.')}
    </p>
    </section>
  )
}
