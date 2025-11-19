'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function SpainTourPost() {



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
                Tour
              </span>
              <time className="text-gray-400 text-sm">January 10, 2025</time>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Atherton Music Announces Spain Gospel Tour 2025
            </h1>
            <p className="text-xl text-gray-300">
              We're thrilled to announce our Spain Gospel Tour, celebrating the release of our new gospel album. Join us for intimate performances across Spain in December 2025 and January 2026.
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
              <div className="p-10 bg-gradient-to-r from-[var(--accent-burgundy)]/60 to-[var(--accent-warm)]/60 rounded-2xl border-2 border-[var(--accent-gold)] text-center">
                <div className="text-6xl mb-4">🇪🇸</div>
                <h2 className="text-4xl font-bold text-white mb-4">Spain Gospel Tour 2025</h2>
                <p className="text-xl text-gray-100">December 2025 - January 2026</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[var(--accent-gold)] mb-6">A Celebration of Faith and Music</h2>
                <p className="text-gray-200 leading-relaxed text-lg">
                  After decades of creating authentic Texas blues, soul, and gospel music, we're embarking on our most meaningful journey yet—bringing our new gospel album to the beautiful country of Spain. This tour represents not just a geographic milestone, but a spiritual one.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[var(--accent-gold)] mb-6">Tour Dates</h2>
                <div className="space-y-4">
                  <div className="p-6 bg-gradient-to-r from-[var(--accent-burgundy)]/40 to-[var(--accent-warm)]/40 rounded-xl border border-[var(--accent-gold)]/50">
                    <p className="text-[var(--accent-gold)] font-bold mb-2">July 31 - August 3, 2025</p>
                    <h3 className="text-white font-bold text-xl mb-1">Spain - Pueblos Blancas Music Festival</h3>
                    <p className="text-gray-300">Southern Spain</p>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-[var(--accent-burgundy)]/40 to-[var(--accent-warm)]/40 rounded-xl border border-[var(--accent-gold)]/50">
                    <p className="text-[var(--accent-gold)] font-bold mb-2">December 6-11, 2025</p>
                    <h3 className="text-white font-bold text-xl mb-1">Jones Family Singers & The Athertons - Los Matinales Gospel</h3>
                    <p className="text-gray-300">Madrid, Valencia, Alicante</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-[var(--accent-burgundy)]/20 to-[var(--accent-warm)]/20 rounded-xl border border-[var(--accent-gold)]/20">
                <h2 className="text-3xl font-bold text-[var(--accent-gold)] mb-6">What to Expect</h2>
                <p className="text-gray-200 leading-relaxed text-lg mb-4">
                  Our Spain Gospel Tour will feature intimate performances showcasing our new gospel album alongside beloved classics from our 30-year catalog. Each show will be a celebration of faith, community, and the transformative power of music.
                </p>
                <p className="text-gray-200 leading-relaxed text-lg">
                  We'll be sharing the stage with the incredible Jones Family Singers during the Los Matinales Gospel performances, creating a unique blend of American gospel and international collaboration.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[var(--accent-gold)] mb-6">New Gospel Album</h2>
                <p className="text-gray-200 leading-relaxed text-lg">
                  Coinciding with this tour, we're releasing our new gospel album on December 15, 2025. Six soul-stirring tracks that represent our deepest expression of faith and musical artistry. Pre-order now to be among the first to experience this special collection.
                </p>
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
            <h3 className="text-2xl font-bold text-white mb-6">Join Us on This Journey</h3>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/tour"
                className="px-8 py-4 bg-[var(--accent-gold)] text-black font-bold rounded-xl hover:bg-[var(--accent-gold)]/90 transition-all transform hover:scale-105"
              >
                View Full Tour Schedule
              </Link>
              <Link
                href="/music"
                className="px-8 py-4 bg-transparent border-2 border-[var(--accent-gold)] text-[var(--accent-gold)] font-bold rounded-xl hover:bg-[var(--accent-gold)] hover:text-black transition-all transform hover:scale-105"
              >
                Pre-Order Album
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
