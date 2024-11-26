import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import ModelViewer from './components/ModelViewer';
import Gallery from './components/Gallery';
import Configurator from './components/Configurator';
import Specifications from './components/Specifications';
import BookingForm from './components/BookingForm';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen bg-white dark:bg-primary text-primary dark:text-white transition-colors duration-300`}>
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 dark:bg-primary/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-display text-2xl font-bold"
            >
              LUXE
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#models">Models</NavLink>
              <NavLink href="#configurator">Configurator</NavLink>
              <NavLink href="#gallery">Gallery</NavLink>
              <NavLink href="#book">Book Test Drive</NavLink>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-secondary transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-secondary transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-primary"
            >
              <div className="px-4 pt-2 pb-3 space-y-1">
                <MobileNavLink href="#models" onClick={() => setIsMenuOpen(false)}>Models</MobileNavLink>
                <MobileNavLink href="#configurator" onClick={() => setIsMenuOpen(false)}>Configurator</MobileNavLink>
                <MobileNavLink href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</MobileNavLink>
                <MobileNavLink href="#book" onClick={() => setIsMenuOpen(false)}>Book Test Drive</MobileNavLink>
                <button
                  onClick={toggleDarkMode}
                  className="flex items-center w-full px-3 py-2 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-secondary transition-colors"
                >
                  {darkMode ? (
                    <>
                      <Sun className="w-5 h-5 mr-2" /> Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="w-5 h-5 mr-2" /> Dark Mode
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <ModelViewer />
        <Configurator />
        <Gallery />
        <Specifications />
        <BookingForm />
      </main>

      {/* Footer */}
      <footer className="bg-secondary py-8 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display text-2xl mb-4">LUXE</h3>
              <p className="text-gray-400">Experience automotive excellence</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#models" className="hover:text-accent transition-colors">Models</a></li>
                <li><a href="#configurator" className="hover:text-accent transition-colors">Configurator</a></li>
                <li><a href="#gallery" className="hover:text-accent transition-colors">Gallery</a></li>
                <li><a href="#book" className="hover:text-accent transition-colors">Book Test Drive</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>1234 Luxury Lane</li>
                <li>Beverly Hills, CA 90210</li>
                <li>contact@luxe.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} LUXE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors duration-200"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-secondary transition-colors rounded-md"
    >
      {children}
    </a>
  );
}

export default App;