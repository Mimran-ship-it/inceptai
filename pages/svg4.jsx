import * as React from "react"
import { motion } from "framer-motion"
const SvgComponent4 = ({coordinates},props) => (
  <motion.svg     animate={{
    // Animate along the keyframes
    translateX: coordinates?.coordinates?.map(frame => frame.x),
    translateY: coordinates?.coordinates?.map(frame => frame.y),
  }}
  transition={{
    // Loop the animation
    repeat: Infinity,
    // repeatDelay:.5,
    repeatType: 'loop',
    duration: 15, // Time in seconds for one rotation
    ease: 'linear'
  }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={23}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M0 5.038h20v13H0z"
      transform="rotate(-14.591 0 5.038)"
    />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="matrix(.00278 0 0 .00427 0 -.27)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAFoCAYAAAB65WHVAAAAAXNSR0IArs4c6QAAIABJREFUeF7sfQl4W9WV/716T7tkSbYkW97keI2zOisJa0pC2AsUKFBoyzK002lL92n/bWemtDNM2ykd6AKlUKC07C1QtlAgJRASsjgkthM73mPHtrxqsbXrPd1/jnjq56EhcWItT/Z53+cvi5/uPfd3jn7vvnPPQgleiAAigAggArJEgMpSKhQKEUAEEAFEgCBBoxEgAogAIiBTBJCgZaoYFAsRQAQQASRotAFEABFABGSKABK0TBWDYiECiAAigASNNoAIIAKIgEwRQIKWqWJQLEQAEUAEkKDRBhABRAARkCkCSNAyVQyKhQggAogAEjTaACKACCACMkUACVqmikGxEAFEABFAgkYbQAQQAURApgggQctUMSgWIoAIIAJI0GgDiAAigAjIFAEkaJkqBsVCBBABRAAJGm0AEUAEEAGZIoAELVPFoFiIACKACCBBow0gAogAIiBTBJCgZaoYFAsRQAQQASRotAFEABFABGSKABK0TBWDYiECiAAigASNNoAIIAKIgEwRQIKWqWJQLEQAEUAEkKDRBhABRAARkCkCSNAyVQyKhQggAogAEjTaACKACCACMkUACVqmikGxEAFEABFAgkYbQAQQAURApgggQctUMSgWIoAIIAJI0GgDiAAigAjIFAEkaJkqBsVCBBABRAAJGm0AEUAEEAGZIoAELVPFoFiIACKACCBBow0gAogAIiBTBJCgZaoYFAsRQAQQASRotAFEABFABGSKABK0TBWDYiECiAAigASNNoAIIAKIgEwRQIKWqWJQLEQAEUAEkKDRBhABRAARkCkCSNAyVQyKhQggAogAEjTaACKACCACMkUACVqmikGxEAFEABFAgkYbQAQQAURApgggQctUMSgWIoAIIAJI0GgDiAAigAjIFAEkaJkqBsVCBBABRAAJGm0AEUAEEAGZIoAELVPFoFiIACKACCBBow0gAogAIiBTBJCgZaoYFAsRQAQQASRotAFEABFABGSKABK0TBWDYiECiAAigASNNoAIIAKIgEwRQIKWqWJQLEQAEUAEkKDRBhABRAARkCkCSNAyVQyKhQggAogAEjTaACKACCACMkUACVqmikGxEAFEABFAgkYbQAQQAURApgggQctUMSgWIoAI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"
        id="b"
        width={360}
        height={360}
      />
    </defs>
  </motion.svg>
)
export default SvgComponent4
