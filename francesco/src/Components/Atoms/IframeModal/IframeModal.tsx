import React from "react";

// Framer Motion
import { motion, AnimatePresence } from "framer-motion";

// Scss
import "./IframeModal.scss";

interface IframeModalProps {
  url: string;
  isOpen: boolean;
  onClose: () => void;
}

const IframeModal: React.FC<IframeModalProps> = ({ url, isOpen, onClose }) => {
  const handleOverlayClick = () => {
    onClose();
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="iframe-modal"
          onClick={handleOverlayClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button className="modal-close-button" onClick={onClose}>
            ×
          </button>

          <motion.div
            className="iframe-wrapper"
            onClick={handleContentClick}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <iframe src={url} title="External Site" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IframeModal;
