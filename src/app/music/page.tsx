'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { musicLinks } from '@/data/musicLinks';
import { useLanguage } from '@/contexts/LanguageContext';

export default function MusicPage() {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="relative pt-32 pb-16 bg-gradient-to-b from-black to-[var(--accent-burgundy)]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">
              {language === 'en' ? 'Listen to Atherton Music' : 'Escucha Atherton Music'}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Stream on your favorite platform and discover decades of Texas blues, gospel, and Americana'
                : 'Transmite en tu plataforma favorita y descubre décadas de blues, gospel y Americana de Texas'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Streaming Platforms */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--accent-gold)] mb-12">
            {language === 'en' ? 'Stream Everywhere' : 'Transmitir en Todas Partes'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {musicLinks.map((link, index) => (
              <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-gradient-to-br from-[var(--accent-burgundy)]/40 to-[var(--accent-warm)]/40 rounded-2xl border-2 border-[var(--accent-gold)]/40 hover:border-[var(--accent-gold)] transition-all shadow-lg hover:shadow-2xl text-center group"
              >
                <div className="text-6xl mb-4 text-[var(--accent-gold)]">♪</div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[var(--accent-gold)] transition-colors mb-2">
                  {link.platform}
                </h3>
                <p className="text-gray-400 text-sm">
                  {language === 'en' ? 'Listen Now' : 'Escuchar Ahora'}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Spotify Embed */}
      <section className="py-20 bg-gradient-to-b from-black to-[var(--accent-burgundy)]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[var(--accent-gold)] mb-4">
              {language === 'en' ? 'Listen on Spotify' : 'Escuchar en Spotify'}
            </h2>
            <p className="text-gray-300 text-lg">
              {language === 'en'
                ? 'Stream the complete Atherton Music catalog'
                : 'Transmite el catálogo completo de Atherton Music'
              }
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[var(--accent-gold)]/30"
          >
            <iframe
              style={{ borderRadius: '12px', border: 0 }}
              src="https://open.spotify.com/embed/artist/4RHxs2rK2iKABmhgqHH2Fb?utm_source=generator"
              width="100%"
              height="500"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Player"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {language === 'en' ? 'Explore More' : 'Explorar Más'}
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/discography"
                className="px-8 py-4 bg-[var(--accent-gold)] text-black font-bold rounded-xl hover:bg-[var(--accent-gold)]/90 transition-all transform hover:scale-105"
              >
                {language === 'en' ? 'View Discography' : 'Ver Discografía'}
              </Link>
              <Link
                href="/videos"
                className="px-8 py-4 bg-transparent border-2 border-[var(--accent-gold)] text-[var(--accent-gold)] font-bold rounded-xl hover:bg-[var(--accent-gold)] hover:text-black transition-all transform hover:scale-105"
              >
                {language === 'en' ? 'Watch Videos' : 'Ver Videos'}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
