import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-xl bg-neutral-900 text-white dark:bg-neutral-800 dark:text-white shadow-2xl border border-neutral-700/80"
        >
          <span className="material-symbols-outlined text-slate-300 dark:text-neutral-300 text-xl">
            check_circle
          </span>
          <span className="text-sm font-medium">{message}</span>
          <button
            onClick={onClose}
            className="ml-2 text-white/70 hover:text-white transition-colors duration-150 cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">close</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
