import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./Preloader.scss";
import Home from "../../Home/Home";

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setCompleted(true), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 45);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!completed ? (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="title-h5-L preloader__text">
            Benvenuto nel <br /> mio Portfolio
          </span>
          <motion.div
            className="title-h5-L preloader__percent"
            animate={{
              y: ["0vh", "-78vh"],
            }}
            transition={{ duration: 4.5, ease: "easeOut" }}
          >
            {progress}%
          </motion.div>
        </motion.div>
      ) : (
        <Home />
      )}
    </AnimatePresence>
  );
};

export default Preloader;
