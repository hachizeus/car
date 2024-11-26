import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80',
    caption: 'Exterior Design',
  },
  {
    url: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
    caption: 'Interior Luxury',
  },
  {
    url: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80',
    caption: 'Performance Details',
  },
  {
    url: 'https://images.unsplash.com/photo-1562911791-c7a97b729ec5?auto=format&fit=crop&q=80',
    caption: 'Wheel Design',
  },
  {
    url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80',
    caption: 'Night Mode',
  },
  {
    url: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80',
    caption: 'Racing Spirit',
  },
];

const Gallery = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="gallery" className="py-20 bg-gray-100 dark:bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Discover the beauty in every detail
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]"
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold">
                    {image.caption}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;