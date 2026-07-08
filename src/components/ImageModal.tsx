import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Props {
  src: string;
  caption: string;
  open: boolean;
  onClose: () => void;
}

export function ImageModal({ src, caption, open, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-deep/95 p-4"
          onClick={onClose}
        >
          <button onClick={onClose} className="absolute top-6 right-8 z-10 text-muted hover:text-primary transition-colors">
            <X size={32} />
          </button>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={src} alt={caption} className="w-full max-h-[80vh] object-contain rounded-lg border border-border" />
            <p className="text-muted text-center mt-4 font-mono text-xs">{caption}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
