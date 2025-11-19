'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

interface Video {
  id: string;
  title: string;
  embedUrl: string;
}

const featuredVideos: Video[] = [
  {
    id: '1',
    title: 'Cleaning House - Atherton Music',
    embedUrl: 'https://www.youtube.com/embed/IDdKzlqXp1g',
  },
];

export default function VideosPage() {
  const { language } = useLanguage();

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
              {language === 'en' ? 'Videos & Performances' : 'Videos y Presentaciones'}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Watch live performances, music videos, and behind-the-scenes content'
                : 'Mira presentaciones en vivo, videos musicales y contenido detrás de escena'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* YouTube Channel Section */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[var(--accent-gold)] mb-4">
              {language === 'en' ? 'YouTube' : 'Canal de YouTube'}
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              {language === 'en'
                ? 'Subscribe to @LeeannAtherton for the latest videos and performances'
                : 'Suscríbete a @LeeannAtherton para los últimos videos y presentaciones'}
            </p>
            <a
              href="https://www.youtube.com/@LeeannAtherton"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[var(--accent-gold)] text-black font-bold rounded-xl hover:bg-[var(--accent-gold)]/90 transition-all transform hover:scale-105"
            >
              {language === 'en' ? 'Visit YouTube' : 'Visitar Canal de YouTube'}
            </a>
          </motion.div>

          {/* Featured Playlist Embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[var(--accent-gold)]/30"
          >
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={featuredVideos[0].embedUrl}
                title="Atherton Music YouTube Channel"
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Album Videos Section */}
      <section className="py-20 bg-gradient-to-b from-black to-[var(--accent-burgundy)]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[var(--accent-gold)] mb-4">
              {language === 'en' ? 'Featured Performances' : 'Presentaciones Destacadas'}
            </h2>
            <p className="text-gray-300 text-lg">
              {language === 'en'
                ? 'Watch our most popular performances and music videos'
                : 'Mira nuestras presentaciones y videos musicales más populares'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Placeholder for individual video embeds - can be added as data becomes available */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-br from-[var(--accent-burgundy)]/30 to-[var(--accent-warm)]/30 rounded-xl border-2 border-[var(--accent-gold)]/30 text-center"
            >
              <p className="text-gray-300 mb-4">
                {language === 'en'
                  ? 'Visit our YouTube channel to watch all our videos and performances'
                  : 'Visita nuestro canal de YouTube para ver todos nuestros videos y presentaciones'}
              </p>
              <a
                href="https://www.youtube.com/@LeeannAtherton"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent-burgundy)] text-white rounded-lg hover:bg-[var(--accent-burgundy)]/80 transition-colors font-medium"
              >
                <span>▶</span>
                {language === 'en' ? 'Watch on YouTube' : 'Ver en YouTube'}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-gradient-to-br from-[var(--accent-burgundy)]/30 to-[var(--accent-warm)]/30 rounded-xl border-2 border-[var(--accent-gold)]/30 text-center"
            >
              <p className="text-gray-300 mb-4">
                {language === 'en'
                  ? 'Subscribe to get notified about new video releases and live performances'
                  : 'Suscríbete para recibir notificaciones sobre nuevos videos y presentaciones en vivo'}
              </p>
              <a
                href="https://www.youtube.com/@LeeannAtherton?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent-gold)] text-black font-bold rounded-lg hover:bg-[var(--accent-gold)]/90 transition-colors"
              >
                {language === 'en' ? 'Subscribe Now' : 'Suscríbete Ahora'}
              </a>
            </motion.div>
          </div>
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
              <a
                href="/music"
                className="px-8 py-4 bg-[var(--accent-gold)] text-black font-bold rounded-xl hover:bg-[var(--accent-gold)]/90 transition-all transform hover:scale-105"
              >
                {language === 'en' ? 'Listen to Music' : 'Escuchar Música'}
              </a>
              <a
                href="/tour"
                className="px-8 py-4 bg-transparent border-2 border-[var(--accent-gold)] text-[var(--accent-gold)] font-bold rounded-xl hover:bg-[var(--accent-gold)] hover:text-black transition-all transform hover:scale-105"
              >
                {language === 'en' ? 'Tour Dates' : 'Fechas de Gira'}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
