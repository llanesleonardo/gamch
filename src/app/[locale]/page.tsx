'use client';
//import {use} from 'react';
import Hero from '@/components/Hero'
import EventDescription from '@/components/EventDescription'
import ChurchInfo from '@/components/ChurchInfo'
import ChurchLocation from '@/components/ChurchLocation'
import Activities from '@/components/Activities'
import Contact from '@/components/Contact'
import Leadership from '@/components/Leadership'
import RegistrationForm from '@/components/RegistrationForm'
import Reviews from '@/components/Reviews'
import AboutChurch from '@/components/AboutChurch'
import ChurchHero from '@/components/ChurchHero'
import ContactFooter from '@/components/ContactFooter'
import Footer from '@/components/Footer'
import { useTranslations } from 'next-intl';
//import {setRequestLocale} from 'next-intl/server';

export default function Home({ params }: { params: Promise<{ locale: string }> | undefined }) {
  const t = useTranslations('Home');
  
  if (!params) {
    return <div>No locale provided</div>;
  }

 // const { locale } = use(params);
  //setRequestLocale(locale);
  // Note: You cannot use setRequestLocale here!
  


  return (
    <main className="bg-white text-gray-800">
      
      <Hero />
      <h1>{t('title')}</h1>
      <EventDescription />
      <ChurchInfo />
      <ChurchLocation />
      <Activities />
      <Leadership />
      <RegistrationForm />
      <Reviews />
      <Contact />
      <AboutChurch />
      <ChurchHero />
      <ContactFooter />
      <Footer />
    </main>
  )
}
