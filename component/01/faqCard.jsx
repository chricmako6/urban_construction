import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { motion } from 'framer-motion';

function FaqCard() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: 'How long does a construction project usually take?',
      answer: 'The duration of a construction project depends on the scope, size, and complexity. Residential projects typically take 6-12 months, while commercial projects can range from 12-24 months or more. Our team will provide a detailed timeline during the planning phase.'
    },
    {
      question: 'Do I need permits for my project?',
      answer: 'Yes, most construction projects require permits. We handle the entire permit application process for you, including approvals from local authorities. This ensures your project complies with all building codes and regulations.'
    },
    {
      question: 'What materials do you use?',
      answer: 'We use high-quality, durable materials sourced from trusted suppliers. Our material selection depends on your project requirements, budget, and design preferences. We offer various options and will recommend the best materials for your specific needs.'
    },
    {
      question: 'Can I make changes after construction starts?',
      answer: 'Yes, changes can be made during construction. However, modifications may affect the project timeline and budget. We recommend discussing any changes with our team early to minimize disruptions and costs.'
    },
    {
      question: 'How much will my construction project cost?',
      answer: 'Project costs vary based on size, materials, labor, and complexity. We provide detailed quotes after assessing your project requirements. Our transparent pricing ensures no hidden fees, and we work within your budget constraints.'
    },
    {
      question: 'How do you ensure quality and safety on-site?',
      answer: 'Quality and safety are our top priorities. We follow strict safety protocols, conduct regular inspections, use certified professionals, and maintain comprehensive insurance coverage. Our quality assurance team monitors every stage of construction.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      {faqData.map((faq, index) => (
        <motion.div 
          key={index} 
          className="mb-4 shadow-md rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          {/* Question Header */}
          <button
            onClick={() => toggleFaq(index)}
            className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition"
          >
            <span className="text-left text-lg font-bold text-[#5e5f61]">
              {faq.question}
            </span>
            <motion.div 
              className="bg-[#ffd061] hover:bg-[#f5c84a] cursor-pointer p-3 rounded flex items-center justify-center shrink-0 ml-4"
              animate={{ rotate: openIndex === index ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {openIndex === index ? (
                <FaMinus className="w-5 h-5 text-[#5e5f61]" />
              ) : (
                <FaPlus className="w-5 h-5 text-[#5e5f61]" />
              )}
            </motion.div>
          </button>

          {/* Answer Content */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: openIndex === index ? 'auto' : 0,
              opacity: openIndex === index ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 bg-gray-50 border-t border-gray-200">
              <motion.p 
                className="text-gray-700 leading-relaxed p-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: openIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {faq.answer}
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export default FaqCard;