'use client';
import { useEffect, useState } from 'react';
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
import '@/i18n'; // or '../i18n' depending on your file structure
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguagesSwitcher';

export default function Home() {
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

  console.log("languages ---- >",i18n.language," ---->", i18n.languages);
  return (
    <main className="bg-white text-gray-800">
      <LanguageSwitcher />
      <Hero />
      <h1>{i18n.t('title')}</h1>
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
