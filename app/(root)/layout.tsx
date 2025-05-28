import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import React, {ReactNode } from 'react'

export const metadata: Metadata = {
  title: "Umeet",
  description: "A simple video conferencing app",
  icons: {
    icon: "/icons/logo.svg",
    shortcut: "/icons/logo.svg",
    apple: "/icons/apple-touch-icon.png",
  }
};

// Route Groups
const RootLayout = ({children} : {children: ReactNode}) => {
  return (
    <main>
      <StreamVideoProvider>
      {children}
        </StreamVideoProvider>
      
    </main>
  )
}

export default RootLayout