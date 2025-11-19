'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function NewAlbumPost() {



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
                Music
              </span>
              <time className="text-gray-400 text-sm">January 5, 2025</time>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              New Gospel Album Coming December 15, 2025
            </h1>
            <p className="text-xl text-gray-300">
              Six soul-stirring tracks celebrating faith, community, and the transformative power of song. Our upcoming gospel album represents decades of musical journey and spiritual growth.
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
              <div className="p-10 bg-gradient-to-r from-[var(--accent-burgundy)]/50 to-[var(--accent-warm)]/50 rounded-2xl border-2 border-[var(--accent-gold)] text-center">
                <p className="text-[var(--accent-gold)] font-bold text-lg uppercase tracking-wider mb-3">
                  New Gospel Album
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Coming December 15, 2025
                </h2>
                <p className="text-xl text-gray-100">
                  Six tracks of pure, authentic gospel music
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[var(--accent-gold)] mb-6">A Spiritual Journey</h2>
                <p className="text-gray-200 leading-relaxed text-lg">
                  After 11 albums spanning three decades of Texas blues, soul, and Americana, we're proud to announce our most deeply personal work yet—a gospel album that represents the spiritual foundation that has always been at the heart of our music.
                </p>
                <p className="text-gray-200 leading-relaxed text-lg mt-4">
                  As the tagline says, "God speaks, we listen, Atherton sings." This album is the purest expression of that philosophy we've ever created.
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-[var(--accent-burgundy)]/20 to-[var(--accent-warm)]/20 rounded-xl border border-[var(--accent-gold)]/20">
                <h2 className="text-3xl font-bold text-[var(--accent-gold)] mb-6">The Album</h2>
                <p className="text-gray-200 leading-relaxed text-lg mb-6">
                  Six carefully crafted tracks that celebrate faith, community, and the transformative power of song. Each piece draws from our deep well of musical experience while honoring the traditional gospel that influenced our earliest musical awakening.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-[var(--accent-gold)] text-2xl">🎵</span>
                    <p className="text-white">Authentic Texas gospel sound</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[var(--accent-gold)] text-2xl">🎵</span>
                    <p className="text-white">Mother-son harmonies</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[var(--accent-gold)] text-2xl">🎵</span>
                    <p className="text-white">Messages of hope and faith</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[var(--accent-gold)] mb-6">The Vision</h2>
                <p className="text-gray-200 leading-relaxed text-lg">
                  This album embodies what we call "Good God Gospel"—music that uplifts, inspires, and brings people together. It's gospel music that honors tradition while speaking to contemporary hearts and souls.
                </p>
                <p className="text-gray-200 leading-relaxed text-lg mt-4">
                  From our upcoming Spain Gospel Tour to intimate church performances, these songs are designed to create moments of connection, reflection, and celebration.
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-[var(--accent-burgundy)]/30 to-[var(--accent-warm)]/30 rounded-xl border-2 border-[var(--accent-gold)]/50">
                <h2 className="text-3xl font-bold text-[var(--accent-gold)] mb-6">Pre-Order Now</h2>
                <p className="text-gray-200 leading-relaxed text-lg mb-6">
                  Be among the first to experience our new gospel album. Pre-orders are now available on all major streaming platforms and direct from our website.
                </p>
                <div className="text-center">
                  <Link
                    href="/music"
                    className="inline-block px-8 py-4 bg-[var(--accent-gold)] text-black font-bold rounded-xl hover:bg-[var(--accent-gold)]/90 transition-all transform hover:scale-105"
                  >
                    Pre-Order Album
                  </Link>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[var(--accent-gold)] mb-6">Release Celebration</h2>
                <p className="text-gray-200 leading-relaxed text-lg">
                  The album release on December 15, 2025 will coincide with our Spain Gospel Tour, where we'll be performing these new songs alongside classics from our three-decade catalog. Join us in Madrid, Valencia, and Alicante as we celebrate this milestone with the Jones Family Singers.
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
            <h3 className="text-2xl font-bold text-white mb-6">Experience Atherton Music</h3>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/music"
                className="px-8 py-4 bg-[var(--accent-gold)] text-black font-bold rounded-xl hover:bg-[var(--accent-gold)]/90 transition-all transform hover:scale-105"
              >
                Pre-Order Now
              </Link>
              <Link
                href="/tour"
                className="px-8 py-4 bg-transparent border-2 border-[var(--accent-gold)] text-[var(--accent-gold)] font-bold rounded-xl hover:bg-[var(--accent-gold)] hover:text-black transition-all transform hover:scale-105"
              >
                View Tour Dates
              </Link>
              <Link
                href="/discography"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all transform hover:scale-105"
              >
                Full Discography
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
