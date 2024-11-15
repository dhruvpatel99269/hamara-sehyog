import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Toaster } from 'react-hot-toast'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hamara Sehyog",
  description: "NGO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased flex flex-col w-full bg-white`}
      >
        <div className="mt-0 w-full">
          <FloatingNav navItems={navItems} />
        </div>
        <AppRouterCacheProvider>
          <div className="mt-20 w-full">
            <Toaster position='top-center' reverseOrder={false} />
            {children}
          </div>
        </AppRouterCacheProvider>
        <div className="mt-0 w-full">
          <Footer />
        </div>
      </body>
    </html>
  );
}
