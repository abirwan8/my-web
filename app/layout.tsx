"use client";
import { Unbounded, Roboto } from "next/font/google";
import SplashScreen from "./components/SplashScreen";
import { usePathname } from "next/navigation";
import "./globals.css";
import { useEffect, useState } from "react";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ['400', '700']
});

const unbounded = Unbounded({
  variable: "--font-unbounded-mono",
  subsets: ["latin"],
  weight: ['400', '700']
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) return
  }, [isLoading]);

  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <head>
        <title>Abi Rahmawan</title>
        <link rel="icon" href="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body
        style={{ fontFamily: 'var(--font-roboto)' }}
        className={`${robotoSans.variable} ${unbounded.variable} antialiased`}
      >
          {isLoading && isHome ? (
            <SplashScreen finishLoading={() => setIsLoading(false)} />
          ) : (
            <>
              {children}
            </>
          )}
      </body>
    </html>
  );
}
