"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { useLang } from "@/lib/language-context";
import { t } from "@/lib/translations";

const SESSION_KEY = "quote-popup-dismissed";

export function QuotePopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(
    () => typeof window !== "undefined" && sessionStorage.getItem(SESSION_KEY) !== null
  );
  const { lang } = useLang();
  const tr = t[lang].quotePopup;

  useEffect(() => {
    if (dismissed) return;
    const manifest = document.getElementById("manifest");
    if (!manifest) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
      },
      { threshold: 0.3 }
    );
    observer.observe(manifest);
    return () => observer.disconnect();
  }, [dismissed]);

  const dismiss = () => {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem(SESSION_KEY, "1");
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="quote-popup-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40 backdrop-blur-sm cursor-pointer"
          onClick={dismiss}
        >
          <motion.div
            key="quote-popup"
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative w-[720px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden cursor-pointer max-md:w-[88vw] max-md:max-w-[88vw] max-md:max-h-[92vh] max-md:overflow-y-auto"
            onClick={dismiss}
          >
            <button
              onClick={dismiss}
              className="absolute top-3 right-3 z-10 w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors"
              aria-label="Close"
            >
              <X size={14} />
            </button>

            <div className="flex max-md:flex-col">
              <div className="relative w-56 flex-shrink-0 max-md:w-full max-md:h-[340px]">
                <Image
                  src="/images/albert-quote-bg.jpg"
                  alt="Albert Kohut"
                  fill
                  sizes="(max-width: 768px) 88vw, 224px"
                  className="object-cover object-top max-md:object-[center_10%] max-md:rounded-t-2xl"
                  priority
                />
              </div>
              <div className="p-10 flex flex-col justify-center max-md:w-full max-md:py-[0.875rem] max-md:px-[1.125rem]">
                <div className="w-10 h-1 bg-orange-500 mb-6" />
                <p className="text-xl font-bold text-gray-900 leading-snug mb-4 max-md:text-[15px] max-md:leading-[1.45]">
                  {tr.line1}{" "}
                  <span className="text-[#7A5C00]">{tr.highlight}</span>
                  {tr.line1end}
                </p>
                <p className="text-xl font-bold text-gray-900 leading-snug mb-6 max-md:text-[15px] max-md:leading-[1.45]">
                  {tr.line2}
                </p>
                <p className="text-base font-semibold text-gray-900">{tr.name}</p>
                <p className="text-sm text-gray-500 max-md:text-[13px] max-md:mt-3">{tr.role}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
