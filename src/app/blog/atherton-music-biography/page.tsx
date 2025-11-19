'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { bioContent } from '@/data/bio';

export default function BiographyPost() {



  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-b from-black to-[var(--accent-burgundy)]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-[var(--accent-gold)] hover:text-white transition-colors mb-6 inline-block">
            ← Back to Blog
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-[var(--accent-gold)] text-black text-xs font-bold rounded-full uppercase">
                Story
              </span>
              <time className="text-gray-400 text-sm">January 15, 2025</time>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              The Atherton Music Story: A Mother-Son Journey Through Faith and Song
            </h1>
            <p className="text-xl text-gray-300">
              Discover the inspiring story of Leeann Atherton and her son, a mother-son duo bringing authentic Texas blues, gospel, and Americana to the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[var(--accent-gold)] mb-6">The Beginning</h2>
                <p className="text-gray-200 leading-relaxed text-lg">
                  {bioContent.intro}
                </p>
                <p className="text-gray-200 leading-relaxed text-lg mt-4">
                  {bioContent.motherSonDuo}
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-[var(--accent-burgundy)]/20 to-[var(--accent-warm)]/20 rounded-xl border border-[var(--accent-gold)]/20">
                <h2 className="text-3xl font-bold text-[var(--accent-gold)] mb-6">Leeann's Journey</h2>
                <p className="text-gray-200 leading-relaxed text-lg">
                  {bioContent.leeannStory}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[var(--accent-gold)] mb-6">Musical Evolution</h2>
                <p className="text-gray-200 leading-relaxed text-lg">
                  {bioContent.musicalJourney}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[var(--accent-gold)] mb-6">Today</h2>
                <p className="text-gray-200 leading-relaxed text-lg">
                  {bioContent.currentChapter}
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-[var(--accent-burgundy)]/30 to-[var(--accent-warm)]/30 rounded-xl border-2 border-[var(--accent-gold)]/50">
                <h2 className="text-3xl font-bold text-[var(--accent-gold)] mb-6">Their Philosophy</h2>
                <p className="text-gray-200 leading-relaxed text-lg italic">
                  "{bioContent.philosophy}"
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[var(--accent-gold)] mb-6">The Music</h2>
                <p className="text-gray-200 leading-relaxed text-lg">
                  With 11 albums spanning three decades, Atherton Music has established itself as a unique voice in Texas music. From the raw emotion of "Fallen Angel" to the intimate beauty of "Barefoot Fields," their catalog showcases a rare authenticity that critics have praised for its "equal parts honey and gunpowder" vocal delivery.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {bioContent.genres.map((genre) => (
                    <span
                      key={genre}
                      className="px-4 py-2 bg-[var(--accent-burgundy)] border border-[var(--accent-gold)]/30 rounded-full text-sm text-white"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-gradient-to-r from-[var(--accent-burgundy)]/40 to-[var(--accent-warm)]/40 rounded-xl border-2 border-[var(--accent-gold)]/50 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Experience Atherton Music</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/music"
                className="px-8 py-4 bg-[var(--accent-gold)] text-black font-bold rounded-xl hover:bg-[var(--accent-gold)]/90 transition-all transform hover:scale-105"
              >
                Listen Now
              </Link>
              <Link
                href="/tour"
                className="px-8 py-4 bg-transparent border-2 border-[var(--accent-gold)] text-[var(--accent-gold)] font-bold rounded-xl hover:bg-[var(--accent-gold)] hover:text-black transition-all transform hover:scale-105"
              >
                Tour Dates
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
