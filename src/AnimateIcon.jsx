import { motion } from "framer-motion";
import React from "react";

const scale = 1;

const AnimatedIcon = ({
  paths = [],
  color = "#4CAF50",
  outline = false,
  iconDelay = 0,
}) => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      //transition: { duration: 0.5 * scale, delay: 0.5 * scale },
    },
  };

  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 * scale, delay: iconDelay * scale },
    },
  };
  const circleProps = {
    cx: "50",
    cy: "50",
    r: "45",
    strokeWidth: "5",
    animate: "visible",
  };
  const pathProps = {
    strokeWidth: "5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
  };
  return (
    <motion.svg viewBox="0 0 100 100" height={"50%"} width={"50%"}>
      {/* Circle */}
      <motion.circle
        fill={outline ? "none" : color}
        stroke={color}
        variants={circleVariants}
        initial="hidden"
        animate="visible"
        {...circleProps}
      />
      {/* Paths */}
      {paths.map((path, index) => (
        <motion.path
          d={path.d}
          stroke={outline ? color : "white"}
          variants={pathVariants}
          transition={{
            delay: iconDelay * scale + index * scale * 0.25 + scale * 0.5,
            duration: scale * 0.5,
          }}
          {...pathProps}
          initial="hidden"
          animate="visible"
          key={index}
        />
      ))}
    </motion.svg>
  );
};

export default AnimatedIcon;
