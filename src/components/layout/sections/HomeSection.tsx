import { HiOutlineMail } from 'react-icons/hi';
import React from 'react';
import { motion } from 'motion/react';

// Triangle layout: top (Go), bottom-left (Rust), bottom-right (Kubernetes)
const LOGOS = [
  { src: '/Go.png', alt: 'Go', size: 'w-20 h-20 md:w-24 md:h-24', delay: 0, duration: 4, left: '50%', top: '28%' },
  { src: '/Rust.png', alt: 'Rust', size: 'w-16 h-16 md:w-20 md:h-20', delay: 0.5, duration: 5, left: '28%', top: '72%' },
  { src: '/Kubernetes.png', alt: 'Kubernetes', size: 'w-20 h-20 md:w-24 md:h-24', delay: 1, duration: 6, left: '72%', top: '80%' },
] as const;

export const HomeSection: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-3 md:gap-11 items-center">
        <div className="flex justify-center md:justify-end">
          <div className="w-full h-64 md:h-96 relative flex items-center justify-center">
            {/* Floating tech logos with smooth orbital movement */}
            {LOGOS.map(({ src, alt, size, delay, duration, left, top }) => (
              <motion.div
                key={src}
                className={`absolute ${size} flex items-center justify-center`}
                style={{
                  left,
                  top,
                  x: '-50%',
                  y: '-50%',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  opacity: { duration: 0.5, delay },
                  scale: { duration: 0.5, delay },
                }}
              >
                <motion.img
                  src={src}
                  alt={alt}
                  className={`${size} object-contain drop-shadow-lg pointer-events-auto`}
                  animate={{
                    x: [0, 10, -6, 0],
                    y: [0, -8, 12, 0],
                  }}
                  transition={{
                    duration,
                    delay,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  }}
                  whileHover={{ scale: 1.15 }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Text Content - Staggered animation */}
        <div className="space-y-6 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary"
          >
            Hi, I'm{' '}
            <span className="text-accent-primary">Kevin</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-secondary leading-relaxed"
          >
            I am a software developer based in Colombia. Fascinated by exploring
            new things.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="pt-4"
          >
            <a
              href="mailto:kevinrestrepoh@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-2.5 hover-bg-hover text-accent-primary border border-accent-primary font-medium rounded transition-colors text-sm"
            >
              <HiOutlineMail className="w-4 h-4" />
              Say hi!
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};