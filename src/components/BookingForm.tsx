import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="book" className="py-20 bg-gray-100 dark:bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Book a Test Drive
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Experience the extraordinary firsthand
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white dark:bg-primary rounded-2xl shadow-xl p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  <User className="w-4 h-4 inline-block mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-accent focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  <Mail className="w-4 h-4 inline-block mr-2" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-accent focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  <Phone className="w-4 h-4 inline-block mr-2" />
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-accent focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  <Calendar className="w-4 h-4 inline-block mr-2" />
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-accent focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  <Clock className="w-4 h-4 inline-block mr-2" />
                  Preferred Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-accent focus:border-transparent"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  <MessageSquare className="w-4 h-4 inline-block mr-2" />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-accent focus:border-transparent"
                ></textarea>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                type="submit"
                className="inline-block bg-accent hover:bg-accent-light text-black font-semibold px-8 py-3 rounded-full transition-colors duration-200"
              >
                Schedule Test Drive
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;