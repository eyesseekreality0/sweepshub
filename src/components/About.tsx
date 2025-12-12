import React from 'react';
import { motion } from 'framer-motion';
import { Coins, Award, Heart, Shield } from 'lucide-react';

const features = [
  {
    icon: <Coins className="text-accent-500" size={30} />,
    title: 'Wholesale Pricing',
    description: 'Get competitive bulk rates on game credits with volume-based discounts and loyalty rewards for regular buyers.'
  },
  {
    icon: <Award className="text-accent-500\" size={30} />,
    title: 'Premium Games',
    description: 'Access credits for the most popular games from top providers, ensuring high player engagement and retention.'
  },
  {
    icon: <Heart className="text-accent-500" size={30} />,
    title: 'Instant Delivery',
    description: 'Automated credit distribution system ensures your purchased credits are available immediately after payment.'
  },
  {
    icon: <Shield className="text-accent-500\" size={30} />,
    title: 'Secure Platform',
    description: 'Enterprise-grade security for all transactions with 24/7 monitoring and dedicated support for business owners.'
  }
];

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-dark-900/50" id="points-system">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-neon-500 neon-title">
            How Our <span className="text-white">Credit System</span> Works
          </h2>
          <p className="text-white/70">
            Pimp Gamez provides a streamlined system for gameroom owners to purchase and manage game credits.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-dark-800 p-6 md:p-8 rounded-xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-heading font-semibold mb-4">Business Features</h3>
            <p className="text-white/70 mb-6">
              Our platform is designed to support gameroom owners with comprehensive tools and features for managing game credits.
            </p>
            
            <div className="space-y-4">
              <div className="bg-dark-700 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Management Tools</h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex justify-between">
                    <span>Credit Dashboard</span>
                    <span className="font-medium">Real-time tracking</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Auto-Replenishment</span>
                    <span className="font-medium">Set custom thresholds</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Usage Analytics</span>
                    <span className="font-medium">Detailed reports</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Multi-Location Support</span>
                    <span className="font-medium">Centralized management</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-dark-700 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Additional Services</h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex justify-between">
                    <span>Technical Support</span>
                    <span className="font-medium">Dedicated team</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Training Resources</span>
                    <span className="font-medium">Comprehensive guides</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Marketing Materials</span>
                    <span className="font-medium">Promotional assets</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-dark-800 p-6 rounded-xl flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 rounded-full bg-dark-700 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/70 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;