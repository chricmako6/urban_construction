"use client";

import { Toaster, ToastBar } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

function ToastProvider({ children }) {
  return (
    <>
      {children}

      <Toaster position="bottom-right">
        {(t) => (
          <AnimatePresence>
            {t.visible && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 1, y: 20, scale: 0.95 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <ToastBar
                  toast={t}
                  style={{
                    background: "#0f0f11",
                    color: "#fff",
                    border: "1px solid #b5a45e",
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </Toaster>
    </>
  );
}

export default ToastProvider;
