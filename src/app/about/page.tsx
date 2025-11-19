'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { bioContent } from '@/data/bio';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-black to-[var(--accent-burgundy)]/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">
              {language === 'en' ? 'About Atherton' : 'Acerca de Atherton'}
            </h1>
            <p className="text-2xl md:text-3xl text-[var(--accent-cream)] italic">
              "{bioContent.tagline}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Bio Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <Image
                src="/images/atherton-duo-2.jpeg"
                alt="Atherton Music Duo"
                width={600}
                height={800}
                className="rounded-2xl shadow-2xl"
              />
              <div className="mt-6 p-6 bg-[var(--accent-burgundy)]/30 rounded-xl border border-[var(--accent-gold)]/30">
                <h3 className="text-2xl font-bold text-[var(--accent-gold)] mb-4">
                  {language === 'en' ? 'Mother & Son Duo' : 'Dúo de Madre e Hijo'}
                </h3>
                <p className="text-gray-200 mb-4">{bioContent.basedIn}</p>
                <div className="flex flex-wrap gap-2">
                  {bioContent.genres.map((genre) => (
                    <span
                      key={genre}
                      className="px-3 py-1 bg-[var(--accent-burgundy)] border border-[var(--accent-gold)]/30 rounded-full text-sm text-white"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-bold text-[var(--accent-gold)] mb-6">
                  {language === 'en' ? 'The Story of Atherton Music' : 'La Historia de Atherton Music'}
                </h2>
                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-gray-200 leading-relaxed text-lg mb-6">{bioContent.intro}</p>
                  <p className="text-gray-200 leading-relaxed text-lg mb-6">{bioContent.motherSonDuo}</p>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-[var(--accent-burgundy)]/20 to-[var(--accent-warm)]/20 rounded-xl border border-[var(--accent-gold)]/20">
                <h2 className="text-3xl font-bold text-[var(--accent-gold)] mb-6">Leeann's Journey</h2>
                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-gray-200 leading-relaxed text-lg mb-6">{bioContent.leeannStory}</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[var(--accent-gold)] mb-6">Musical Journey</h2>
                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-gray-200 leading-relaxed text-lg mb-6">{bioContent.musicalJourney}</p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[var(--accent-gold)] mb-6">Current Chapter</h2>
                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-gray-200 leading-relaxed text-lg mb-6">{bioContent.currentChapter}</p>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-[var(--accent-burgundy)]/30 to-[var(--accent-warm)]/30 rounded-xl border-2 border-[var(--accent-gold)]/50">
                <h2 className="text-3xl font-bold text-[var(--accent-gold)] mb-6">Musical Philosophy</h2>
                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-gray-200 leading-relaxed text-lg italic">{bioContent.philosophy}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Press Quotes */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-center text-[var(--accent-gold)] mb-12">
              {language === 'en' ? 'What Critics Say' : 'Lo Que Dicen Los Críticos'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {bioContent.pressQuotes.map((quote, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 bg-black/60 backdrop-blur-sm rounded-xl border border-[var(--accent-gold)]/30 hover:border-[var(--accent-gold)] transition-all"
                >
                  <p className="text-gray-200 text-lg italic mb-6 leading-relaxed">"{quote.quote}"</p>
                  <p className="text-[var(--accent-gold)] font-bold">— {quote.source}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
