import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import { Toaster } from "@/components/ui/sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Umeet",
  description: "A simple video conferencing app",
  icons: {
    icon: "/icons/logo.svg",
    shortcut: "/icons/logo.svg",
    apple: "/icons/apple-touch-icon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark-2`}>
                <ClerkProvider
                  appearance={{
                    layout:{
                      logoImageUrl: '/icons/logo.svg',
                      socialButtonsVariant: 'iconButton'
                    },
                    variables: {
                      colorText: '#fff',
                      colorPrimary: '#0e78f9',
                      colorBackground: '#1c1f2e',
                      colorInputBackground: '#252a41',
                      colorInputText: '#fff',
                    }
                  }}
                >
              {children}
              <Toaster />
                </ClerkProvider>
              </body>
        </html>
  );
}
