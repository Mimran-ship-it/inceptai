import { motion } from 'framer-motion';

const ellipsePath = (t, a, b) => {
  // Parametric equation of an ellipse
  const x = a * Math.cos(t);
  const y = b * Math.sin(t);
  return { x, y };
};

const Circle = (rotate) => {
  // Your ellipse size
  const a = 150; // Major axis
  const b = 200; // Minor axis

  // Generate keyframes for one full orbit around the ellipse
  const pathLength = 2 * Math.PI;
  const keyframes = Array.from({ length: 100 }, (_, i) => ellipsePath((i / 99) * pathLength, a, b));
  console.log( keyframes.map(frame => frame.x))
  return (
    <div className='absolute'>
    <div className={`relative w-[300px] h-[400px] transform rotate-100 border-[#15C3A7] font-extrabold border-2 rounded-full`} style={{
      width: '300px', // 2a
      height: '400px', // 2b
      borderRadius: '50%',
      transform: `rotate(${rotate.rotate}deg)`,
    }}>
      <motion.div
        className="absolute shadow-2xl -z-0 border w-7 h-7 bg-[#15C3A7] rounded-full border-[#15C3A7]" // Your Tailwind CSS class
        animate={{
          // Animate along the keyframes
          translateX: keyframes.map(frame => frame.x),
          translateY: keyframes.map(frame => frame.y),
        }}
        transition={{
          // Loop the animation
          repeat: Infinity,
          repeatType: 'loop',
          duration: 8, // Time in seconds for one rotation
          ease: 'linear'
        }}
        style={{
          // Center the dot in the path
          top: '50%',
          left: '50%',
          x: '-50%',
          y: '-50%',
        }}
      />
    </div>
    </div>
  );
};

export default Circle;