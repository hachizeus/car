import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Gauge, Clock, Battery, Wind, Shield } from 'lucide-react';

const specs = [
  {
    icon: Zap,
    title: 'Power Output',
    value: '670 HP',
    description: 'Twin-turbocharged V8 engine',
  },
  {
    icon: Gauge,
    title: 'Top Speed',
    value: '205 mph',
    description: 'Electronically limited',
  },
  {
    icon: Clock,
    title: '0-60 mph',
    value: '3.2 sec',
    description: 'With launch control',
  },
  {
    icon: Battery,
    title: 'Electric Range',
    value: '40 miles',
    description: 'In hybrid mode',
  },
  {
    icon: Wind,
    title: 'Drag Coefficient',
    value: '0.28 Cd',
    description: 'Aerodynamic efficiency',
  },
  {
    icon: Shield,
    title: 'Safety Rating',
    value: '5 Stars',
    description: 'Euro NCAP rating',
  },
];

const Specifications = () => {
  return (
    <section id="specifications" className="py-20 bg-white dark:bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Technical Specifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Engineering excellence meets performance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gray-50 dark:bg-secondary hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-accent/10 text-accent mr-4">
                  <spec.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{spec.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {spec.description}
                  </p>
                </div>
              </div>
              <p className="text-3xl font-display font-bold text-accent">
                {spec.value}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="#book"
            className="inline-block bg-accent hover:bg-accent-light text-black font-semibold px-8 py-3 rounded-full transition-colors duration-200"
          >
            Schedule a Test Drive
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Specifications;