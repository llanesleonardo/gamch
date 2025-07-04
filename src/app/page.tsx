'use client';

import Hero from '@/components/Hero'
import EventDescription from '@/components/EventDescription'
import ChurchInfo from '@/components/ChurchInfo'
import ChurchLocation from '@/components/ChurchLocation'
import Activities from '@/components/Activities'
import Leadership from '@/components/Leadership'
import RegistrationForm from '@/components/RegistrationForm'
import AboutChurch from '@/components/AboutChurch'
import ChurchHero from '@/components/ChurchHero'
import ContactFooter from '@/components/ContactFooter'
import Footer from '@/components/Footer'

export default function Home() {
 


  return (
    <main className="bg-white text-gray-800">
      <Hero />
      <EventDescription />
      <ChurchInfo />
      <ChurchLocation />
      <Activities />
      <Leadership />
      <RegistrationForm />
      <AboutChurch />
      <ChurchHero />
      <ContactFooter />
      <Footer />
    </main>
  )
}
