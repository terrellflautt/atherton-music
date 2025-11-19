'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { staggerContainer, staggerItem } from '@/lib/animations';

interface GalleryImage {
  src: string;
  alt: string;
  category: 'live' | 'studio' | 'promo';
}

const galleryImages: GalleryImage[] = [
  {
    src: '/images/atherton-duo-1.jpeg',
    alt: 'Atherton Music Duo Performance',
    category: 'live',
  },
  {
    src: '/images/atherton-duo-2.jpeg',
    alt: 'Atherton Music Portrait',
    category: 'promo',
  },
  {
    src: '/images/leeann-atherton-swsx-2022.jpg',
    alt: 'Leeann Atherton at SXSW 2022',
    category: 'live',
  },
  {
    src: '/images/leeann-atherton-22032015-01-barn-dance-2015.jpg',
    alt: 'Leeann Atherton Barn Dance 2015',
    category: 'live',
  },
  {
    src: '/images/leann_and_albert_spain.jpg',
    alt: 'Leeann and Albert in Spain',
    category: 'live',
  },
  {
    src: '/images/leann-headshot1-te2ShCZ0_400x400.jpg',
    alt: 'Leeann Atherton Headshot',
    category: 'promo',
  },
  {
    src: '/images/leann-bw.jfif',
    alt: 'Leeann Atherton Black and White Portrait',
    category: 'promo',
  },
  {
    src: '/images/she-rises-2025.jpg',
    alt: 'She Rises 2025 Event',
    category: 'promo',
  },
  {
    src: '/images/spain-gospel-tour.jpeg',
    alt: 'Spain Gospel Tour Poster',
    category: 'promo',
  },
  {
    src: '/images/spain-tour-leeann.jpeg',
    alt: 'Leeann Atherton Spain Tour',
    category: 'live',
  },
];

export default function GalleryPage() {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<'all' | 'live' | 'studio' | 'promo'>('all');

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const filteredImages = filter === 'all' ? galleryImages : galleryImages.filter((img) => img.category === filter);

  const filterLabels = {
    all: language === 'en' ? 'All' : 'Todas',
    live: language === 'en' ? 'Live' : 'En Vivo',
    studio: language === 'en' ? 'Studio' : 'Estudio',
    promo: language === 'en' ? 'Promo' : 'Promo',
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-black to-[var(--accent-burgundy)]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text text-center"
          >
            {language === 'en' ? 'Gallery' : 'Galería'}
          </motion.h1>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {(['all', 'live', 'studio', 'promo'] as const).map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-6 py-3 rounded-xl font-bold transition-all ${
                  filter === filterType
                    ? 'bg-[var(--accent-gold)] text-black shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {filterLabels[filterType]}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-w-7xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-[var(--accent-gold)] transition-colors"
                aria-label="Close lightbox"
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1920}
                height={1080}
                className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg"
              />
              <p className="text-white text-center mt-4 text-lg">{selectedImage.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
