'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { tourDates } from '@/data/tourDates';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TourPage() {
  const { language } = useLanguage();

  const spainTourDates = tourDates.filter((show) => show.isSpainTour);
  const otherShows = tourDates.filter((show) => !show.isSpainTour);

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-black to-[var(--accent-burgundy)]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">
              {language === 'en' ? '2025 Tour Dates' : 'Fechas de Gira 2025'}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Join us for live performances across Texas and our Spain Gospel Tour'
                : 'Únete a nosotros para presentaciones en vivo en Texas y nuestra Gira Gospel en España'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Spain Gospel Tour Highlight */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            {/* Tour Info Card */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-[var(--accent-gold)] mb-8 bg-gradient-to-r from-[var(--accent-burgundy)]/80 to-[var(--accent-warm)]/80">
              <div className="relative p-10 text-center">
                <div className="text-6xl mb-4">🇪🇸</div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {language === 'en' ? 'Spain Gospel Tour 2025' : 'Gira Gospel en España 2025'}
                </h2>
                <p className="text-xl text-gray-100 mb-6">
                  {language === 'en'
                    ? 'Celebrating the new gospel album release with performances across Spain'
                    : 'Celebrando el lanzamiento del nuevo álbum gospel con presentaciones en toda España'}
                </p>
                <div className="inline-block px-6 py-3 bg-[var(--accent-gold)] text-black font-bold rounded-xl text-lg">
                  {language === 'en' ? 'December 2025 - January 2026' : 'Diciembre 2025 - Enero 2026'}
                </div>
              </div>
            </div>

            {/* Tour Poster */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-2xl rounded-xl overflow-hidden shadow-2xl border-2 border-[var(--accent-gold)]/50">
                <Image
                  src="/images/spain-gospel-tour.jpeg"
                  alt="Spain Gospel Tour 2025 Poster"
                  width={800}
                  height={1000}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Spain Tour Dates */}
          <div className="space-y-4 mb-16">
            <h3 className="text-3xl font-bold text-[var(--accent-gold)] mb-8 text-center">
              {language === 'en' ? 'Spain Tour Schedule' : 'Calendario de Gira en España'}
            </h3>
            {spainTourDates.map((show, index) => (
              <motion.div
                key={`${show.date}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-gradient-to-r from-[var(--accent-burgundy)]/50 to-[var(--accent-warm)]/50 rounded-xl border-2 border-[var(--accent-gold)] hover:scale-[1.02] transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className="px-4 py-2 bg-[var(--accent-gold)] text-black text-sm font-bold rounded-full">
                        SPAIN 🇪🇸
                      </span>
                      <p className="text-[var(--accent-gold)] font-bold text-xl">
                        {new Date(show.date).toLocaleDateString(language === 'en' ? 'en-US' : 'es-ES', {
                          weekday: 'long',
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </p>
                      {show.time && <span className="text-gray-300 text-base">{show.time}</span>}
                    </div>
                    <h4 className="text-white font-bold text-2xl mb-2">{show.venue}</h4>
                    <p className="text-gray-200 text-lg">{show.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Texas & Other Shows */}
      <section className="py-16 bg-gradient-to-b from-black to-[var(--accent-burgundy)]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-[var(--accent-gold)] mb-8 text-center">
            {language === 'en' ? 'Texas Shows' : 'Shows en Texas'}
          </h3>
          <div className="space-y-4">
            {otherShows.map((show, index) => (
              <motion.div
                key={`${show.date}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-black/50 border-2 border-[var(--accent-gold)]/30 hover:border-[var(--accent-gold)] rounded-xl hover:scale-[1.02] transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <p className="text-[var(--accent-gold)] font-bold text-lg">
                        {new Date(show.date).toLocaleDateString(language === 'en' ? 'en-US' : 'es-ES', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </p>
                      {show.time && <span className="text-gray-400 text-sm">{show.time}</span>}
                    </div>
                    <h4 className="text-white font-bold text-xl mb-1">{show.venue}</h4>
                    <p className="text-gray-300 text-base">{show.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Information */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              {language === 'en' ? 'Book Atherton Music' : 'Reservar Atherton Music'}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {language === 'en'
                ? 'Interested in booking us for your event, church, or venue?'
                : '¿Interesado en reservarnos para tu evento, iglesia o lugar?'}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-[var(--accent-gold)] text-black font-bold rounded-xl hover:bg-[var(--accent-gold)]/90 transition-all transform hover:scale-105"
              >
                {language === 'en' ? 'Contact Us' : 'Contáctanos'}
              </a>
              <a
                href="/music"
                className="px-8 py-4 bg-transparent border-2 border-[var(--accent-gold)] text-[var(--accent-gold)] font-bold rounded-xl hover:bg-[var(--accent-gold)] hover:text-black transition-all transform hover:scale-105"
              >
                {language === 'en' ? 'Listen to Our Music' : 'Escuchar Nuestra Música'}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
