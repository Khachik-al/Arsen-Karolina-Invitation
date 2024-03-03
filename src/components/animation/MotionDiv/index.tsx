'use client';

import { useEffect } from 'react';
import type { PropsWithChildren } from 'react';

import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type MotionDivProps = {
  index?: number;
};

export default function MotionDiv({ children, index }: PropsWithChildren & MotionDivProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) void controls.start('visible');
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x: index !== undefined ? (index % 2 === 0 ? 50 : -50) : 0,
        y: index === undefined ? -50 : 0,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 1, // Animation duration
        },
      }}
      viewport={{ once: true }}
      // transition={{ duration: 0.5 }}
      // variants={{
      //   visible: { opacity: 1, scale: 1 },
      //   hidden: { opacity: 0, scale: 0 },
      // }}
    >
      {children}
    </motion.div>
  );
}
