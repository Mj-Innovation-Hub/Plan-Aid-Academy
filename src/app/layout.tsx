import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/lib/authContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloatingWidget } from '@/components/ui/WhatsAppFloatingWidget';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Plan Aid Academy | Nurturing Excellence in Academics, Character & Faith',
  description: 'Premier educational academy combining STEM Robotics, WAEC/NECO Academic Excellence, and accredited Madrasah Tahfiz & Quranic Education.',
  openGraph: {
    title: 'Plan Aid Academy',
    description: 'Nurturing Excellence in Academics, Character & Faith.',
    url: 'https://planaid.edu.ng',
    siteName: 'Plan Aid Academy',
    locale: 'en_NG',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-slate-50 text-slate-900 selection:bg-primary-300 selection:text-royal-950 flex flex-col min-h-screen">
        <AuthProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloatingWidget />
        </AuthProvider>
      </body>
    </html>
  );
}
