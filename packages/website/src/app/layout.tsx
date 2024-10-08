import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/layout/navbar/navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ideas',
  description: 'Ideas by Maurício Piber Fão',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-white text-black">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
