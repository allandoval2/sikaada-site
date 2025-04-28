import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { Metadata } from 'next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Sikaada | Private Equity para Empresas de Mídia',
  description: 'Fundo de Private Equity focado em mídia, com tíquete inteligente e participação estratégica. Investimos em operação e expansão.',
  icons: {
    icon: '/sikaada-logo.svg', 
  },
  openGraph: {
    title: 'Sikaada | Private Equity para Empresas de Mídia',
    description: 'Fundo de Private Equity focado em mídia, com tíquete inteligente e participação estratégica.',
    url: 'https://sikaada.vercel.app', // depois ajustamos se quiser domínio próprio
    siteName: 'Sikaada',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
