import React from 'react';
import { motion } from 'framer-motion';

const Curtain = () => {
    return (
        <>
            <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0, transition: { duration: 1.5, ease: "circOut" } }}
                exit={{ scaleX: 1 }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'var(--color-primary)',
                    transformOrigin: 'left',
                    zIndex: 9999,
                }}
            />
            <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0, transition: { duration: 1.5, ease: "circOut", delay: 0.2 } }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'var(--color-accent)',
                    transformOrigin: 'left',
                    zIndex: 9998,
                }}
            />
            <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0, transition: { duration: 1.5, ease: "circOut", delay: 0.4 } }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'var(--color-bg)',
                    transformOrigin: 'left',
                    zIndex: 9997,
                }}
            />
        </>
    );
};

export default Curtain;
