import React from 'react';
import { Hexagon } from 'lucide-react';
import { motion } from 'framer-motion';

const Logo = () => {
    return (
        <motion.div
            className="logo-container"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
        >
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <Hexagon size={32} color="#646cff" fill="rgba(100, 108, 255, 0.2)" />
            </motion.div>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', background: 'linear-gradient(to right, #646cff, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Nexus
            </span>
        </motion.div>
    );
};

export default Logo;
