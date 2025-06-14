import React, { useEffect } from "react";

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!url) return null;

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
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            <iframe
              src={url}
              title="External Site"
              sandbox="allow-scripts allow-same-origin allow-forms"
              allow="fullscreen; encrypted-media"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IframeModal;
