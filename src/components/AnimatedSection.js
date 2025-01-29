import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const firstLeft = [
  {
    id: "firstLeft_1",
    label:
      "Fine-tuned LLM with high-quality data covering a wide range of coaching qualities",
    width: "285px",
    height: "248px",
  },
  {
    id: "firstLeft_2",
    label: "Built with long-term and short-term memory ​for precision",
    width: "285px",
    height: "190px",
  },
];
const firstRight = [
  {
    id: "firstRight_1",
    label: "Powered by coaching frameworks to acts as an ICF PCC+ coach.​",
    width: "285px",
    height: "248px",
  },
  {
    id: "firstRight_2",
    label: "Built with long-term and short-term memory ​for precision",
    width: "285px",
    height: "190px",
  },
];
const firstBottom = [
  {
    id: "firstBottom_1",
    label:
      "Retrieval-augmented generation (RAG) that maps organisational contexts​",
    width: "590px",
    height: "100px",
  },
  {
    id: "firstBottom_2",
    label:
      "Designed for privacy and safety, with algorithmic encryption and anonymisation​",
    width: "590px",
    height: "100px",
  },
];

const SecondLeft = [
  {
    id: "SecondLeft_1",
    label:
      "How can I improve communication within my team to enhance collaboration and productivity?​",
    width: "250px",
    height: "144px",
  },
  {
    id: "SecondLeft_2",
    label:
      "I have a busy week ahead. What time management strategies can help me prioritize and meet deadlines?​",
    width: "250px",
    height: "144px",
  },
];
const secondRight = [
  {
    id: "secondRight_1",
    label:
      "How can I improve communication within my team to enhance collaboration and productivity?​",
    width: "250px",
    height: "144px",
  },
  {
    id: "secondRight_2",
    label:
      "I have a busy week ahead. What time management strategies can help me prioritize and meet deadlines?​",
    width: "250px",
    height: "144px",
  },
  {
    id: "secondRight_3",
    label:
      "I have a busy week ahead. What time management strategies can help me prioritize and meet deadlines?​",
    width: "250px",
    height: "144px",
  },
];

const AnimatedSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  // Animation controls
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [1, 1.2, 1.2, 1]
  );
  const imageY = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, -1000]);

  // Staggered opacity controls for each card set
  const leftCardsOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.25, 0.4],
    [0, 1, 0]
  );
  const rightCardsOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.3, 0.45],
    [0, 1, 0]
  );
  const bottomCardsOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.35, 0.5],
    [0, 1, 0]
  );
  const overlayCardsOpacity = useTransform(
    scrollYProgress,
    [0.5, 0.7, 0.9],
    [0, 1, 0]
  );

    const overlayCards = [...SecondLeft, ...secondRight];


    return (

    <div ref={sectionRef} style={{ height: "200vh", position: "relative" }}>
      {/* Main Image Container */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          y: imageY,
        }}
      >
        {/* Centered Image */}
        <motion.div style={{ scale: imageScale, position: "relative" }}>
          <img
            src="/PHOTO-2025-01-28-19-57-41.jpg"
            alt="Main"
            style={{
              width: "590px",
              height: "458px",
              objectFit: "cover",
              borderRadius: 16,
              boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
            }}
          />

          {/* Card Containers */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: "none",
            }}
          >
            {/* Left Cards (Taller) */}
            <motion.div
              style={{
                position: "absolute",
                right: "100%",
                top: "50%",
                transform: "translateY(-50%)",
                opacity: leftCardsOpacity,
                display: "flex",
                flexDirection: "column",
                gap: 30,
                marginRight: 40,
              }}
            >
              {firstLeft.map((i) => (
                <div
                  key={`left-${i.id}`}
                  style={cardStyle("#FFD700", i.width, i.height)}
                />
              ))}
            </motion.div>

            {/* Right Cards (Wider) */}
            <motion.div
              style={{
                position: "absolute",
                left: "100%",
                top: "50%",
                transform: "translateY(-50%)",
                opacity: rightCardsOpacity,
                display: "flex",
                flexDirection: "column",
                gap: 30,
                marginLeft: 40,
              }}
            >
              {firstRight.map((i) => (
                <div
                  key={`right-${i.id}`}
                  style={cardStyle("#FF6B6B", i.width, i.height)} // Wider and shorter
                />
              ))}
            </motion.div>

            {/* Bottom Cards (Smallest) */}
            <motion.div
              style={{
                position: "absolute",
                top: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                opacity: bottomCardsOpacity,
                display: "flex",
                gap: 30,
                marginTop: 40,
              }}
            >
              {firstBottom.map((i) => (
                <div
                  key={`bottom-${i.id}`}
                  style={cardStyle("#4ECDC4", i.width, i.height)} // Square and small
                />
              ))}
            </motion.div>

            {/* Overlay Cards */}
              {/* Oval-shaped Overlay Cards */}
              <motion.div
                  style={{
                      position: "absolute",
                      left: "2%",
                      top: "6%",
                      width: "100%",
                      height: "100%",
                      opacity: overlayCardsOpacity,
                  }}
              >
                  {overlayCards.map((card, index) => {
                      const totalCards = overlayCards.length;
                      const angle = (index * 360) / totalCards;
                      const rad = (angle * Math.PI) / 180;
                      const ovalWidth = 750; // Horizontal diameter
                      const ovalHeight = 500; // Vertical diameter

                      // Calculate position on oval
                      const x = Math.cos(rad) * (ovalWidth / 2);
                      const y = Math.sin(rad) * (ovalHeight / 2);

                      // Calculate color based on original group
                      const color = index < SecondLeft.length ? "#FF9F9F" : "#A0D8EF";

                      return (
                          <motion.div
                              key={`oval-${card.id}`}
                              style={{
                                  ...cardStyle(color, card.width, card.height),
                                  position: "absolute",
                                  left: "50%",
                                  top: "50%",
                                  transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                              }}
                          />
                      );
                  })}
              </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const cardStyle = (bg, width = 100, height = 100) => ({
  width,
  height,
  background: bg,
  borderRadius: 12,
  boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
  transition: "transform 0.3s ease",
  cursor: "pointer",
  ":hover": {
    transform: "translateY(-5px)",
  },
});

export default AnimatedSection;
