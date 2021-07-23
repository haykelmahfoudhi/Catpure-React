import { motion } from "framer-motion";
import { useState } from "react";

const Toggle = ({ children, title }) => {
  const [faqToggle, setFaqToggle] = useState(true);
  return (
    <motion.div layout onClick={() => setFaqToggle(!faqToggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {faqToggle ? children : ""}
      <div className="faq-Line"></div>
    </motion.div>
  );
};
export default Toggle;
