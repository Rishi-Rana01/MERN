import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Settings, Mail, Menu, X } from 'lucide-react';
import Logo from './Logo';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
    };

    const linkVariants = {
        hover: { scale: 1.1, color: "#646cff" },
        tap: { scale: 0.95 }
    };

    const navLinks = [
        { title: "Home", icon: <Home size={20} /> },
        { title: "About", icon: <User size={20} /> },
        { title: "Services", icon: <Settings size={20} /> },
        { title: "Contact", icon: <Mail size={20} /> }
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Logo />
                </motion.div>

                <div className="desktop-menu">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={index}
                            href={`#${link.title.toLowerCase()}`}
                            className="nav-link"
                            variants={linkVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <span className="icon">{link.icon}</span>
                            {link.title}
                        </motion.a>
                    ))}
                </div>

                <div className="mobile-menu-icon" onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-menu"
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={`#${link.title.toLowerCase()}`}
                                className="mobile-nav-link"
                                onClick={() => setIsOpen(false)}
                                whileHover={{ x: 10 }}
                            >
                                <span className="icon">{link.icon}</span>
                                {link.title}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
