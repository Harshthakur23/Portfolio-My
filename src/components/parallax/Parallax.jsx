import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {

  const ref = useRef()

  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["start start", "end start"]
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const yPlanets = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const yStars = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  return (
    <div
      ref={ref}
      className="parallax"
      style={{
        background: type === "services" 
          ? "linear-gradient(180deg, #111132, #0c0c1d)" 
          : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText}}>{type === "services" ? "What We Do?" : "What We Did?"}</motion.h1>
      <motion.div  className="mountains"></motion.div>
      <motion.div  className="planets" style={{ y: yPlanets,
        backgroundImage: `URL(${type==="services" ? "/planets.png" : "/sun.png"})`
      }}></motion.div>
      <motion.div style={{ x: yStars}} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
