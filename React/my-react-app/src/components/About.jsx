import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap } from 'lucide-react';

const features = [
    { icon: <Code size={32} />, title: "Clean Code", desc: "Built with modern standards and best practices." },
    { icon: <Palette size={32} />, title: "Modern Design", desc: "Visually stunning interfaces that users love." },
    { icon: <Zap size={32} />, title: "Fast Performance", desc: "Optimized for speed and efficiency." }
];

const About = () => {
    return (
        <section id="about" className="section about-section">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                About Us
            </motion.h2>

            <div className="features-grid">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        className="feature-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                    >
                        <div className="icon-wrapper">{feature.icon}</div>
                        <h3>{feature.title}</h3>
                        <p>{feature.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default About;
