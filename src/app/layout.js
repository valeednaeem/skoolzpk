import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Footer from './components/footer';
import Header from './components/header';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Skoolz.PK - Academy World Wide",
  description: "Skoolz.PK is a platform for students and teachers to connect.",
  keywords: "Skoolz, PK, Academy, Worldwide, Students, Teachers, Connect, online learning, courses, students, education, skoolz.pk",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="container-0">
          <div className="d-flex-container flex-column align-items-start">

            <Header />
            {children}
            <Footer />

          </div>
        </div>
      </body>
    </html>
  );
}
