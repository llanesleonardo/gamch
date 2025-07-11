import { ReactNode } from 'react';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainMenu from "@/components/mainMenu";
import MobileBottomMenu from "@/components/MobileBottomMenu";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata:Metadata = {
  title: "Yeehaw Event",
  description: "Yeehaw Event Registration",
  keywords: "Yeehaw, Salvation Army, Salvation Army Church, Children event",
    manifest: "/site.webmanifest",
  authors: [{ name: "Salvation Army", url: "https://thesatemple.com/" }],
  creator: "3L & Valente Diseniador",
  openGraph: {
  title: "Yeehaw Event",
  description: "Yeehaw Event Registration",
    url: "https://thesatemple.com/",
    siteName: "Yeehaw Event",
    images: [
      {
        url: "https://gamch.blob.core.windows.net/gamch/Img/Landing%20-%20VBS-15-LR-BGW.png",
        width: 1200,
        height: 630,
        alt: "Your App Name",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  title: "Yeehaw Event",
  description: "Yeehaw Event Registration",
    creator: "@yourtwitter",
    images: ["https://gamch.blob.core.windows.net/gamch/Img/Landing%20-%20VBS-15-LR-BGW.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};




export default async function Layout({children}:{children: ReactNode;}) {



  return (
    <html>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
   
      <MainMenu />
        {children}
        <MobileBottomMenu />

      </body>
    </html>
  );
}
