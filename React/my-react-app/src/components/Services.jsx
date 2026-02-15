import React from 'react';
import { motion } from 'framer-motion';

const services = [
    { title: "Web Development", desc: "Custom websites tailored to your needs." },
    { title: "UI/UX Design", desc: "Intuitive and beautiful user interfaces." },
    { title: "SEO Optimization", desc: "Get found on Google with our SEO strategies." },
    { title: "Mobile Apps", desc: "Native and cross-platform mobile applications." }
];

const Services = () => {
    return (
        <section id="services" className="section services-section">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Our Services
            </motion.h2>

            <div className="services-grid">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="service-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.08)" }}
                    >
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
