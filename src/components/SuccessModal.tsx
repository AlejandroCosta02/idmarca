import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SuccessModalProps {
  open: boolean;
  message: string;
  onClose: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ open, message, onClose }) => (
  <AnimatePresence>
    {open && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-8 max-w-sm w-full text-center border border-border"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.7, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-foreground">¡Felicitaciones!</h2>
          <p className="text-muted-foreground mb-4">{message}</p>
          <Button onClick={onClose} className="w-full mt-2">Cerrar</Button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default SuccessModal; 