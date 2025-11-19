'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { completeAlbums } from '@/data/albums-complete';
import { useLanguage } from '@/contexts/LanguageContext';

export default function DiscographyPage() {
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
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">
              {language === 'en' ? 'Discography' : 'Discografía'}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              {language === 'en'
                ? '11 albums spanning three decades of Texas blues, gospel, and Americana'
                : '11 álbumes que abarcan tres décadas de blues, gospel y Americana de Texas'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Albums Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {completeAlbums.map((album, index) => (
              <motion.div
                key={album.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6 shadow-2xl">
                  <Image
                    src={album.coverArt}
                    alt={album.title}
                    width={500}
                    height={500}
                    className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {album.featured && (
                    <div className="absolute top-4 right-4 px-4 py-2 bg-[var(--accent-gold)] text-black font-bold rounded-full text-sm animate-pulse">
                      NEW RELEASE
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {album.youtubeLink && (
                        <a
                          href={album.youtubeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-6 py-3 bg-[var(--accent-gold)] text-black font-bold rounded-lg hover:bg-[var(--accent-gold)]/90 transition-colors"
                        >
                          Watch Video
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{album.title}</h3>
                    <p className="text-[var(--accent-gold)] font-bold text-lg">{album.year}</p>
                    {album.producer && (
                      <p className="text-gray-400 text-sm mt-1">Produced by {album.producer}</p>
                    )}
                  </div>

                  <p className="text-gray-300 leading-relaxed">{album.description}</p>

                  {album.keyTracks && album.keyTracks.length > 0 && (
                    <div>
                      <p className="text-[var(--accent-gold)] font-semibold text-sm mb-2">
                        {language === 'en' ? 'Key Tracks:' : 'Pistas Clave:'}
                      </p>
                      <ul className="text-gray-400 text-sm space-y-1">
                        {album.keyTracks.map((track, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="text-[var(--accent-gold)]">♪</span>
                            {track}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {album.youtubeLink && (
                    <a
                      href={album.youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent-burgundy)] text-white rounded-lg hover:bg-[var(--accent-burgundy)]/80 transition-colors font-medium"
                    >
                      <span>▶</span>
                      {language === 'en' ? 'Watch on YouTube' : 'Ver en YouTube'}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-black to-[var(--accent-burgundy)]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              {language === 'en' ? 'Listen Now' : 'Escuchar Ahora'}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {language === 'en'
                ? 'Stream Atherton Music on your favorite platform'
                : 'Transmite Atherton Music en tu plataforma favorita'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://open.spotify.com/artist/4RHxs2rK2iKABmhgqHH2Fb"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[var(--accent-gold)] text-black font-bold rounded-xl hover:bg-[var(--accent-gold)]/90 transition-all transform hover:scale-105"
              >
                Spotify
              </a>
              <a
                href="https://music.apple.com/us/artist/leeann-atherton/255104334"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent border-2 border-[var(--accent-gold)] text-[var(--accent-gold)] font-bold rounded-xl hover:bg-[var(--accent-gold)] hover:text-black transition-all transform hover:scale-105"
              >
                Apple Music
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
