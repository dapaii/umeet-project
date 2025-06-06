import React, { ReactNode } from 'react'
import { Metadata } from 'next';

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export const metadata: Metadata = {
  title: "Umeet",
  description: "A simple video conferencing app",
  icons: {
    icon: "/icons/logo.svg",
    shortcut: "/icons/logo.svg",
    apple: "/icons/apple-touch-icon.png",
  }
};

const HomeLayout = ({children} : {children: ReactNode}) => {
  return (
    <main className='relative'>
    {/* Navbar Section */}
    <Navbar />
    
      <div className="flex">
        {/* Sidebar Section */}
        <Sidebar />

        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full">
          {children}
          </div>
        </section>
      
      </div>
    </main>
  )
}

export default HomeLayout