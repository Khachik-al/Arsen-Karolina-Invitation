import { useEffect } from 'react';

import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type AnimatedTextProps = {
  text: string;
  index?: number;
};

export default function AnimatedText({ text, index }: AnimatedTextProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) void controls.start('visible');
  }, [controls, inView]);

  return (
    <motion.span ref={ref} initial="hidden" animate={controls} aria-hidden>
      <motion.span
        className="inline-block"
        variants={{
          hidden: {
            opacity: 0,
            x: index ? -100 : 100,
          },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              ease: [0.2, 0.65, 0.3, 0.9],
            },
          },
        }}
      >
        {text}
      </motion.span>
    </motion.span>
  );
}
