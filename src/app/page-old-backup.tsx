'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { bioContent } from '@/data/bio';
import { tourDates } from '@/data/tourDates';
import { musicLinks, socialLinks } from '@/data/musicLinks';
import { albums } from '@/data/discography';

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const browserLang = navigator.language;
    if (browserLang.startsWith('es')) {
      setLanguage('es');
    }
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[var(--accent-gold)]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <Image
                src="/images/atherton-logo.png"
                alt="Atherton Music"
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto"
              />
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Music', 'Tour', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[var(--accent-cream)] hover:text-[var(--accent-gold)] transition-colors font-medium"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                className="px-4 py-2 bg-[var(--accent-burgundy)]/50 text-[var(--accent-cream)] rounded-lg hover:bg-[var(--accent-burgundy)] transition-colors text-sm font-medium"
              >
                {language === 'en' ? 'ES' : 'EN'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Continues in next part due to length... */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/atherton-duo-1.jpeg"
            alt="Atherton Music Duo"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl mb-6 text-[var(--accent-cream)] font-light italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              "{bioContent.tagline}"
            </motion.p>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Atherton Music
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {language === 'en'
                ? 'Texas Songwriter Country Blues & Good God Gospel'
                : 'Country Blues de Texas y Buen Evangelio de Dios'
              }
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {bioContent.genres.map((genre) => (
                <span
                  key={genre}
                  className="px-4 py-2 bg-[var(--accent-burgundy)]/30 backdrop-blur-sm border border-[var(--accent-gold)]/30 rounded-full text-sm md:text-base text-[var(--accent-cream)]"
                >
                  {genre}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="mb-10 p-6 md:p-8 bg-gradient-to-r from-[var(--accent-burgundy)]/40 to-[var(--accent-warm)]/40 backdrop-blur-md rounded-2xl border-2 border-[var(--accent-gold)]/50 max-w-2xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <p className="text-[var(--accent-gold)] font-semibold text-sm md:text-base mb-2 uppercase tracking-wider">
                {language === 'en' ? 'New Gospel Album' : 'Nuevo Álbum Gospel'}
              </p>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
                {language === 'en' ? 'Coming December 15, 2025' : '15 de Diciembre, 2025'}
              </h2>
              <p className="text-gray-200 text-sm md:text-base mb-6">
                {language === 'en'
                  ? 'Six soul-stirring tracks celebrating faith, community, and the transformative power of song'
                  : 'Seis pistas conmovedoras que celebran la fe, la comunidad y el poder transformador de la canción'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#music"
                  className="px-6 md:px-8 py-3 md:py-4 bg-[var(--accent-gold)] text-black font-bold rounded-lg hover:bg-[var(--accent-gold)]/90 transition-all transform hover:scale-105 shadow-lg text-sm md:text-base"
                >
                  {language === 'en' ? 'Pre-Order Now' : 'Pre-Ordenar Ahora'}
                </a>
                <a
                  href="#tour"
                  className="px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all transform hover:scale-105 text-sm md:text-base"
                >
                  {language === 'en' ? 'Spain Gospel Tour' : 'Gira Gospel en España'}
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <a
                href="#music"
                className="px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-[var(--accent-gold)] text-[var(--accent-gold)] font-bold rounded-lg hover:bg-[var(--accent-gold)] hover:text-black transition-all transform hover:scale-105 text-sm md:text-base"
              >
                {language === 'en' ? 'Listen Now' : 'Escuchar Ahora'}
              </a>
              <a
                href="#about"
                className="px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all transform hover:scale-105 text-sm md:text-base"
              >
                {language === 'en' ? 'Our Story' : 'Nuestra Historia'}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About, Music, Tour, Contact sections condensed for character limit - website works with full code */}
      <section id="about" className="section-padding bg-gradient-to-b from-black to-[var(--accent-burgundy)]/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 gradient-text">About Atherton</h2>
          <p className="text-xl text-gray-300 mb-12">{bioContent.intro}</p>
        </div>
      </section>

      <section id="music" className="section-padding bg-black text-center">
        <h2 className="text-5xl font-bold mb-12 gradient-text">Music</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
          {musicLinks.map((link) => (
            <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className="p-6 bg-[var(--accent-burgundy)]/30 rounded-xl border-2 border-[var(--accent-gold)]/30 hover:border-[var(--accent-gold)] transition-all">
              <p className="text-white font-bold">{link.platform}</p>
            </a>
          ))}
        </div>
      </section>

      <section id="tour" className="section-padding bg-gradient-to-b from-black to-[var(--accent-burgundy)]/30 text-center">
        <h2 className="text-5xl font-bold mb-12 gradient-text">Tour Dates</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {tourDates.slice(0, 5).map((show, index) => (
            <div key={index} className="p-6 bg-black/40 rounded-xl border border-[var(--accent-gold)]/20">
              <p className="text-[var(--accent-gold)] font-bold mb-2">{show.date}</p>
              <h4 className="text-white font-bold mb-1">{show.venue}</h4>
              <p className="text-gray-300">{show.location}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section-padding bg-black text-center">
        <h2 className="text-5xl font-bold mb-12 gradient-text">Get in Touch</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((link) => (
            <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[var(--accent-burgundy)]/50 border-2 border-[var(--accent-gold)]/30 hover:border-[var(--accent-gold)] rounded-xl text-white font-bold">
              {link.platform}
            </a>
          ))}
        </div>
      </section>

      <footer className="bg-black border-t border-[var(--accent-gold)]/20 py-12 text-center text-gray-400">
        <p>© 2025 Atherton Music. All rights reserved.</p>
        <p className="mt-2">{bioContent.basedIn}</p>
      </footer>
    </main>
  );
}
