import * as React from "react";
import {motion, spring} from 'framer-motion'
const SVGComponent2 = (props) => (
  <motion.svg
  initial={{ x: 0, y: 20}}
  animate={{ x: -90, y: 0, transition: { repeat: Infinity, duration: 2, repeatType: "reverse" } }}
  transition={{ duration: 2,type:'spring' ,stiffness: 100 }}
    width={1364}
    height={351}
    viewBox="0 0 1364 351"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect
      width={1365}
      height={351}
      transform="matrix(1 0 0 -1 0 351)"
      fill="url(#pattern0)"
    />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use
          xlinkHref="#image0_42_3308"
          transform="matrix(0.00025 0 0 0.000972222 0 -0.958333)"
        />
      </pattern>
      <image
        id="image0_42_3308"
        width={4000}
        height={3000}
      />
    </defs>
  </motion.svg>
);
export default SVGComponent2;