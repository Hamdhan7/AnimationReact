import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedSection = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end center"]
    });

    // Animation controls
    const imageScale = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [1, 1.2, 1.2, 1]);
    const imageY = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, -1000]);

    // Staggered opacity controls for each card set
    const leftCardsOpacity = useTransform(scrollYProgress, [0.1, 0.25, 0.4], [0, 1, 0]);
    const rightCardsOpacity = useTransform(scrollYProgress, [0.15, 0.3, 0.45], [0, 1, 0]);
    const bottomCardsOpacity = useTransform(scrollYProgress, [0.2, 0.35, 0.5], [0, 1, 0]);
    const overlayCardsOpacity = useTransform(scrollYProgress, [0.5, 0.7, 0.9], [0, 1, 0]);

    return (
        <div ref={sectionRef} style={{ height: '200vh', position: 'relative' }}>
            {/* Main Image Container */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    y: imageY,
                }}
            >
                {/* Centered Image */}
                <motion.div style={{ scale: imageScale, position: 'relative' }}>
                    <img
                        src="/PHOTO-2025-01-28-19-57-41.jpg"
                        alt="Main"
                        style={{
                            width: 400,
                            height: 500,
                            objectFit: 'cover',
                            borderRadius: 16,
                            boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
                        }}
                    />

                    {/* Card Containers */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        pointerEvents: 'none'
                    }}>
                        {/* Left Cards (Taller) */}
                        <motion.div
                            style={{
                                position: 'absolute',
                                right: '100%',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                opacity: leftCardsOpacity,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 30,
                                marginRight: 40
                            }}
                        >
                            {[1, 2].map((i) => (
                                <div
                                    key={`left-${i}`}
                                    style={cardStyle('#FFD700', 120, 180)} // Wider and taller
                                />
                            ))}
                        </motion.div>

                        {/* Right Cards (Wider) */}
                        <motion.div
                            style={{
                                position: 'absolute',
                                left: '100%',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                opacity: rightCardsOpacity,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 30,
                                marginLeft: 40
                            }}
                        >
                            {[1, 2].map((i) => (
                                <div
                                    key={`right-${i}`}
                                    style={cardStyle('#FF6B6B', 180, 120)} // Wider and shorter
                                />
                            ))}
                        </motion.div>

                        {/* Bottom Cards (Smallest) */}
                        <motion.div
                            style={{
                                position: 'absolute',
                                top: '100%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                opacity: bottomCardsOpacity,
                                display: 'flex',
                                gap: 30,
                                marginTop: 40
                            }}
                        >
                            {[1, 2].map((i) => (
                                <div
                                    key={`bottom-${i}`}
                                    style={cardStyle('#4ECDC4', 100, 100)} // Square and small
                                />
                            ))}
                        </motion.div>

                        {/* Overlay Cards */}
                        <motion.div
                            style={{
                                position: 'absolute',
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)',
                                opacity: overlayCardsOpacity,
                                display: 'flex',
                                gap: 20,
                                width: '120%',
                                justifyContent: 'space-between'
                            }}
                        >
                            {/* Left Overlay Cards */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                                {[1, 2, 3].map((i) => (
                                    <div
                                        key={`overlay-left-${i}`}
                                        style={cardStyle('#FF9F9F', 80, 80)}
                                    />
                                ))}
                            </div>

                            {/* Right Overlay Cards */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                                {[1, 2, 3].map((i) => (
                                    <div
                                        key={`overlay-right-${i}`}
                                        style={cardStyle('#A0D8EF', 80, 80)}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

// Enhanced card style generator
const cardStyle = (bg, width = 100, height = 100) => ({
    width,
    height,
    background: bg,
    borderRadius: 12,
    boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
    ':hover': {
        transform: 'translateY(-5px)'
    }
});

export default AnimatedSection;