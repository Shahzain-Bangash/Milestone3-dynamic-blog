import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Container from '@/app/components/Container';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AREEB BLOG: Discover the Latest in Web Development and AI',
  description: 'Welcome to our web development and AI blog...',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.className} dark`}>
      <body>
        <Container>
          <Navbar />
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  );
}
