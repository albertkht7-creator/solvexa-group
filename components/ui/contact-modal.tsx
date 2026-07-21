"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { useContactModal } from "@/lib/contact-modal-context";
import { useLang } from "@/lib/language-context";
import { t } from "@/lib/translations";

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors text-sm";
const labelClass = "text-xs text-gray-700 mb-1.5 block font-medium";

export function ContactModal() {
  const { isOpen, initialTopic, closeModal } = useContactModal();
  const [state, handleSubmit, reset] = useForm("xbdelbzl");
  const { lang } = useLang();
  const tr = t[lang].modal;

  useEffect(() => {
    if (!isOpen) reset();
  }, [isOpen, reset]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeModal]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={closeModal}
        >
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-900 transition-colors"
              aria-label="Zamknij"
            >
              <X size={20} />
            </button>

            {state.succeeded ? (
              <div className="py-10 text-center">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tr.successTitle}</h3>
                <p className="text-gray-700">{tr.successBody}</p>
                <button onClick={closeModal} className="mt-8 px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors">
                  {tr.successClose}
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{tr.heading}</h3>
                <p className="text-sm text-gray-700 mb-6">{tr.sub}</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className={labelClass}>{tr.name}</label>
                    <input name="name" type="text" required placeholder={tr.namePlaceholder} className={inputClass} />
                    <ValidationError field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>
                  <div>
                    <label className={labelClass}>{tr.phone}</label>
                    <input name="phone" type="tel" required placeholder={tr.phonePlaceholder} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>{tr.company}</label>
                    <input name="company" type="text" required placeholder={tr.companyPlaceholder} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>{tr.email}</label>
                    <input name="email" type="email" required placeholder={tr.emailPlaceholder} className={inputClass} />
                    <ValidationError field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>
                  <div>
                    <label className={labelClass}>{tr.language}</label>
                    <select
                      name="language"
                      required
                      defaultValue={lang === "EN" ? "English" : "Polski"}
                      className={inputClass}
                    >
                      <option value="Polski">{tr.languagePolish}</option>
                      <option value="English">{tr.languageEnglish}</option>
                      <option value="Inny">{tr.languageOther}</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>{tr.message}</label>
                    <textarea
                      key={initialTopic}
                      name="message"
                      required
                      rows={4}
                      defaultValue={initialTopic}
                      placeholder={tr.messagePlaceholder}
                      className={`${inputClass} resize-none`}
                    />
                    <ValidationError field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>

                  {state.errors && Object.keys(state.errors).length > 0 && (
                    <p className="text-red-500 text-xs text-center">{tr.error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full py-4 rounded-full bg-gray-900 text-white font-semibold text-sm hover:bg-gray-700 hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 ease-out disabled:opacity-60 disabled:cursor-not-allowed mt-1"
                  >
                    {state.submitting ? tr.submitting : tr.submit}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
