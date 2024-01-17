import * as React from "react";
import { motion } from "framer-motion";

const SVGComponent = (props) => (
  <motion.svg
  initial={{ x: 0, y: 20}}
  animate={{ x: -90, y: 0, transition: { repeat: Infinity, duration: 2, repeatType: "reverse" } }}
  transition={{ duration: 2,type:'spring' ,stiffness: 100 }}
width={1363}
    height={351}
    viewBox="0 0 1363 351"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >

<motion.path
      id="wave1"
      d="M0,100 Q50,200 100,100 T200,100"
      stroke="black"
      fill="transparent"
      initial={{y:100}}
      animate={{y:0}}
      transition={{
        default: { duration: 2, ease: "easeInOut" },
        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
      }}
    />
    <motion.path
      id="wave2"
      d="M0,150 Q50,250 100,150 T200,150"
      stroke="black"
      fill="transparent"
      initial={{y:100}}
      animate={{y:0}}
      transition={{
        default: { duration: 2, ease: "easeInOut" },
        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
      }}
    />

    <rect width={1365} height={351} fill="url(#pattern0)" />
    <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
        <use xlinkHref="#image0_42_3307" transform="matrix(0.00025 0 0 0.000972222 0 -0.958333)" />
      </pattern>
      <image
        id="image0_42_3307"
        width={4000}
        height={3000}
        // className="w-screen h-auto"
      />
    </defs>
  </motion.svg>
);
export default SVGComponent;


