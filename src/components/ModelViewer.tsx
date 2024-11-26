import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const cars = [
  {
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80',
    name: 'Model S',
    description: 'Luxury Sedan',
  },
  {
    image: 'https://images.unsplash.com/photo-1615406720603-faa63301bf66?auto=format&fit=crop&q=80',
    name: 'Model X',
    description: 'Performance SUV',
  },
  {
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80',
    name: 'GT Coupe',
    description: 'Sports Car',
  },
];

const ModelViewer = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cars.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cars.length) % cars.length);
  };

  return (
    <section id="models" className="min-h-screen bg-gradient-to-b from-primary to-secondary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Our Models
          </h2>
          <p className="text-xl text-gray-300">
            Discover our range of exceptional vehicles
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl aspect-[16/9] bg-black">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              key={currentIndex}
              className="relative h-full"
            >
              <img
                src={cars[currentIndex].image}
                alt={cars[currentIndex].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-display font-bold mb-2"
                  >
                    {cars[currentIndex].name}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl"
                  >
                    {cars[currentIndex].description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {cars.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-accent' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#configurator"
            className="inline-block bg-accent hover:bg-accent-light text-black font-semibold px-8 py-3 rounded-full transition-colors duration-200"
          >
            Configure Your Own
          </a>
        </div>
      </div>
    </section>
  );
};

export default ModelViewer;