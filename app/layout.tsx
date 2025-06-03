import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import { ClerkProviderWrapper } from "@/components/ClerkProviderWrapper";

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
        <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark-2`}>
        <ClerkProviderWrapper>
          {children}
        </ClerkProviderWrapper>
        </body>
      </html>
  );
}
