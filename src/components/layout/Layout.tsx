import React from 'react';
import { Outlet } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';

export function Layout() {
  return (
    <div className="flex min-h-screen w-full max-w-full flex-col bg-white">
      <ScrollToTop />
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />

      <div className="fixed bottom-5 right-4 z-[60] flex flex-col items-end gap-2.5 sm:bottom-6 sm:right-6">
        <a
          href="https://wa.me/919825000000"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="WhatsApp Us"
          className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-green-500/20 bg-white shadow-lg shadow-green-500/20 transition-transform duration-200 ease-smooth hover:-translate-y-0.5 hover:shadow-xl sm:h-12 sm:w-12">
          <img
            src="/whatsapp.png"
            alt="WhatsApp"
            className="h-9 w-9 rounded-full object-cover sm:h-10 sm:w-10"
          />
          <span className="pointer-events-none absolute right-full mr-2 hidden whitespace-nowrap rounded-full bg-slate-900 px-2.5 py-1 text-[10px] font-medium text-white opacity-0 shadow-md transition-all duration-200 group-hover:opacity-100 group-hover:visible sm:block">
            WhatsApp Us
          </span>
        </a>

        <a
          href="tel:+919825000000"
          aria-label="Call Us"
          className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg shadow-slate-200/60 transition-transform duration-200 ease-smooth hover:-translate-y-0.5 hover:shadow-xl sm:h-12 sm:w-12">
          <Phone className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
          <span className="pointer-events-none absolute right-full mr-2 hidden whitespace-nowrap rounded-full bg-slate-900 px-2.5 py-1 text-[10px] font-medium text-white opacity-0 shadow-md transition-all duration-200 group-hover:opacity-100 group-hover:visible sm:block">
            Call Us
          </span>
        </a>
      </div>
    </div>);

}