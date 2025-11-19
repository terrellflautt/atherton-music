'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { musicLinks, socialLinks } from '@/data/musicLinks';
import { useLanguage } from '@/contexts/LanguageContext';

interface LinkCategory {
  title: string;
  links: Array<{
    platform: string;
    url: string;
    description?: string;
  }>;
}

export default function LinksPage() {
  const { language } = useLanguage();

  const categories: LinkCategory[] = [
    {
      title: language === 'en' ? 'Streaming Platforms' : 'Plataformas de Transmisión',
      links: musicLinks.map((link) => ({
        ...link,
        description:
          language === 'en'
            ? 'Listen to our complete discography'
            : 'Escucha nuestra discografía completa',
      })),
    },
    {
      title: language === 'en' ? 'Social Media' : 'Redes Sociales',
      links: socialLinks.map((link) => ({
        ...link,
        description:
          language === 'en' ? 'Follow us for updates and behind-the-scenes content' : 'Síguenos para actualizaciones y contenido detrás de escena',
      })),
    },
    {
      title: language === 'en' ? 'Official Pages' : 'Páginas Oficiales',
      links: [
        {
          platform: 'Official Website',
          url: 'https://athertonmusic.com',
          description:
            language === 'en'
              ? 'Visit our official website for tour dates, music, and more'
              : 'Visita nuestro sitio web oficial para fechas de gira, música y más',
        },
      ],
    },
  ];

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
              {language === 'en' ? 'All Our Links' : 'Todos Nuestros Enlaces'}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Find Atherton Music on all major platforms - streaming, social media, and more'
                : 'Encuentra Atherton Music en todas las plataformas principales - transmisión, redes sociales y más'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Link Categories */}
      {categories.map((category, categoryIndex) => (
        <section
          key={category.title}
          className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-black' : 'bg-gradient-to-b from-black to-[var(--accent-burgundy)]/20'}`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-[var(--accent-gold)] mb-8 text-center"
            >
              {category.title}
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.links.map((link, index) => (
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
                  className="p-6 bg-gradient-to-br from-[var(--accent-burgundy)]/40 to-[var(--accent-warm)]/40 rounded-2xl border-2 border-[var(--accent-gold)]/40 hover:border-[var(--accent-gold)] transition-all shadow-lg hover:shadow-2xl group"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">🎵</div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[var(--accent-gold)] transition-colors mb-2">
                      {link.platform}
                    </h3>
                    {link.description && (
                      <p className="text-gray-400 text-sm">{link.description}</p>
                    )}
                    <p className="text-[var(--accent-gold)] text-sm mt-3 font-medium">
                      {language === 'en' ? 'Visit →' : 'Visitar →'}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Quick Actions */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {language === 'en' ? 'Explore More' : 'Explorar Más'}
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              {language === 'en'
                ? 'Discover our music, watch videos, and connect with us'
                : 'Descubre nuestra música, mira videos y conéctate con nosotros'}
            </p>
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
              <a
                href="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all transform hover:scale-105"
              >
                {language === 'en' ? 'Contact Us' : 'Contáctanos'}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* New Album Promotion */}
      <section className="py-16 bg-gradient-to-b from-black to-[var(--accent-burgundy)]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-gradient-to-r from-[var(--accent-burgundy)]/50 to-[var(--accent-warm)]/50 rounded-2xl border-2 border-[var(--accent-gold)] text-center"
          >
            <p className="text-[var(--accent-gold)] font-bold text-base uppercase tracking-wider mb-3">
              {language === 'en' ? 'New Gospel Album' : 'Nuevo Álbum Gospel'}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {language === 'en' ? 'Coming December 15, 2025' : '15 de Diciembre, 2025'}
            </h2>
            <p className="text-gray-100 text-lg mb-6">
              {language === 'en'
                ? 'Six soul-stirring tracks celebrating faith, community, and the transformative power of song'
                : 'Seis pistas conmovedoras que celebran la fe, la comunidad y el poder transformador de la canción'}
            </p>
            <a
              href="/music"
              className="inline-block px-8 py-3 bg-[var(--accent-gold)] text-black font-bold rounded-xl hover:bg-[var(--accent-gold)]/90 transition-all transform hover:scale-105"
            >
              {language === 'en' ? 'Pre-Order Now' : 'Pre-Ordenar Ahora'}
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
