import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface ConfigOption {
  id: string;
  name: string;
  price: number;
}

const colors: ConfigOption[] = [
  { id: 'obsidian-black', name: 'Obsidian Black', price: 0 },
  { id: 'arctic-silver', name: 'Arctic Silver', price: 1000 },
  { id: 'midnight-blue', name: 'Midnight Blue', price: 1500 },
  { id: 'racing-red', name: 'Racing Red', price: 2000 },
];

const wheels: ConfigOption[] = [
  { id: 'sport-19', name: '19" Sport Wheels', price: 0 },
  { id: 'luxury-20', name: '20" Luxury Wheels', price: 2500 },
  { id: 'performance-21', name: '21" Performance Wheels', price: 4000 },
];

const interiors: ConfigOption[] = [
  { id: 'leather-black', name: 'Black Leather', price: 0 },
  { id: 'leather-brown', name: 'Brown Leather', price: 1500 },
  { id: 'leather-red', name: 'Red Leather', price: 2000 },
  { id: 'alcantara', name: 'Black Alcantara', price: 3000 },
];

const Configurator = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedWheels, setSelectedWheels] = useState(wheels[0]);
  const [selectedInterior, setSelectedInterior] = useState(interiors[0]);
  const basePrice = 89900;

  const totalPrice = basePrice + selectedColor.price + selectedWheels.price + selectedInterior.price;

  const ConfigSection = ({ title, options, selected, onSelect }: {
    title: string;
    options: ConfigOption[];
    selected: ConfigOption;
    onSelect: (option: ConfigOption) => void;
  }) => (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelect(option)}
            className={`p-4 rounded-lg border-2 transition-all ${
              selected.id === option.id
                ? 'border-accent bg-accent/10'
                : 'border-gray-200 dark:border-gray-700 hover:border-accent/50'
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">{option.name}</span>
              {selected.id === option.id && (
                <Check className="w-5 h-5 text-accent" />
              )}
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {option.price === 0 ? 'Included' : `+$${option.price.toLocaleString()}`}
            </span>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <section id="configurator" className="py-20 bg-white dark:bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Build Your Dream Car
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Customize every detail to create your perfect vehicle
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <ConfigSection
              title="Exterior Color"
              options={colors}
              selected={selectedColor}
              onSelect={setSelectedColor}
            />
            <ConfigSection
              title="Wheels"
              options={wheels}
              selected={selectedWheels}
              onSelect={setSelectedWheels}
            />
            <ConfigSection
              title="Interior"
              options={interiors}
              selected={selectedInterior}
              onSelect={setSelectedInterior}
            />
          </div>

          <div className="md:pl-8">
            <div className="sticky top-24">
              <div className="bg-gray-50 dark:bg-secondary rounded-lg p-6">
                <h3 className="text-2xl font-display font-bold mb-6">Summary</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Base Price</span>
                    <span>${basePrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Color</span>
                    <span>+${selectedColor.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wheels</span>
                    <span>+${selectedWheels.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Interior</span>
                    <span>+${selectedInterior.price.toLocaleString()}</span>
                  </div>
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span>${totalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-8 bg-accent hover:bg-accent-light text-black font-semibold px-8 py-3 rounded-full transition-colors duration-200">
                  Reserve Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Configurator;