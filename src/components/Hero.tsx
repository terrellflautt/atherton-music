'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
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

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Image
              src="/images/atherton-logo.png"
              alt="Atherton Music Logo"
              width={300}
              height={100}
              className="mx-auto drop-shadow-2xl"
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl mb-6 text-[var(--accent-cream)] font-light italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            "God speaks, we listen, Atherton sings."
          </motion.p>

          {/* Main Title */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Atherton Music
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Texas Songwriter Country Blues & Good God Gospel
          </motion.p>

          {/* Genre Tags */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {['Americana', 'Blues', 'Soul', 'Gospel', 'Country'].map((genre, index) => (
              <span
                key={genre}
                className="px-4 py-2 bg-[var(--accent-burgundy)]/30 backdrop-blur-sm border border-[var(--accent-gold)]/30 rounded-full text-sm md:text-base text-[var(--accent-cream)]"
              >
                {genre}
              </span>
            ))}
          </motion.div>

          {/* New Album Announcement */}
          <motion.div
            className="mb-10 p-8 bg-gradient-to-r from-[var(--accent-burgundy)]/40 to-[var(--accent-warm)]/40 backdrop-blur-md rounded-2xl border-2 border-[var(--accent-gold)]/50 max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <p className="text-[var(--accent-gold)] font-semibold text-sm md:text-base mb-2 uppercase tracking-wider">
              New Gospel Album
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Coming December 15, 2025
            </h2>
            <p className="text-gray-200 text-sm md:text-base mb-6">
              Six soul-stirring tracks celebrating faith, community, and the transformative power of song
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#music"
                className="px-8 py-4 bg-[var(--accent-gold)] text-black font-bold rounded-lg hover:bg-[var(--accent-gold)]/90 transition-all transform hover:scale-105 shadow-lg"
              >
                Pre-Order Now
              </a>
              <a
                href="#tour"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all transform hover:scale-105"
              >
                Spain Gospel Tour
              </a>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <a
              href="#music"
              className="px-8 py-4 bg-transparent border-2 border-[var(--accent-gold)] text-[var(--accent-gold)] font-bold rounded-lg hover:bg-[var(--accent-gold)] hover:text-black transition-all transform hover:scale-105"
            >
              Listen Now
            </a>
            <a
              href="#about"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all transform hover:scale-105"
            >
              Our Story
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2,
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="w-6 h-10 border-2 border-[var(--accent-gold)] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[var(--accent-gold)] rounded-full mt-2"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
