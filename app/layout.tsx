import type { Metadata } from "next";
import { Unbounded, Roboto } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Abi Rahmawan"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body
        style={{ fontFamily: 'var(--font-roboto)' }}
        className={`${robotoSans.variable} ${unbounded.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
