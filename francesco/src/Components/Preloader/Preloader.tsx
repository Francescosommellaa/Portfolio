import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./Preloader.scss";

// Hooks
import { useSize } from "../../Hooks/useSize";

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const Size = useSize();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 45); // 45 * 100 = 4.5s
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="preloader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className={`title-h5-${Size} preloader__text`}>
          Benvenuto nel <br />
          mio Portfolio
        </div>
        <motion.div
          className="title-h5-L preloader__percent"
          animate={{ y: ["0vh", "-78vh"] }}
          transition={{ duration: 4.5, ease: "easeOut" }}
        >
          {progress}%
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;
