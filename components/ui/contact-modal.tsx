"use client";
import { useEffect, useId, useRef } from "react";
import { useModalFocus } from "@/lib/use-modal-focus";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { useContactModal } from "@/lib/contact-modal-context";
import { useLang } from "@/lib/language-context";
import { t } from "@/lib/translations";

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-500 focus-visible:outline-none focus-visible:border-gray-900 focus-visible:ring-2 focus-visible:ring-gray-900/20 transition-colors text-sm";
const labelClass = "text-xs text-gray-700 mb-1.5 block font-medium";

export function ContactModal() {
  const { isOpen, initialTopic, waitlist, closeModal } = useContactModal();
  const [state, handleSubmit, reset] = useForm("xbdelbzl");
  const { lang } = useLang();
  const tr = t[lang].modal;
  const uid = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  useModalFocus(isOpen, dialogRef);

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
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${uid}-title`}
            tabIndex={-1}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto overscroll-contain bg-white rounded-2xl shadow-2xl p-8 focus:outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 text-gray-500 hover:text-gray-900 transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
              aria-label={tr.closeLabel}
            >
              <X size={20} />
            </button>

            {state.succeeded ? (
              <div className="py-10 text-center" role="status">
                <div className="text-4xl mb-4" aria-hidden="true">✓</div>
                <h3 id={`${uid}-title`} className="text-2xl font-bold text-gray-900 mb-2">{tr.successTitle}</h3>
                <p className="text-gray-700">{tr.successBody}</p>
                <button onClick={closeModal} className="mt-8 px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors">
                  {tr.successClose}
                </button>
              </div>
            ) : (
              <>
                {waitlist && (
                  <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#7A5C00] bg-[#7A5C00]/10 rounded-full px-3 py-1 mb-3">
                    {tr.waitlistBadge}
                  </span>
                )}
                <h3 id={`${uid}-title`} className="text-2xl font-bold text-gray-900 mb-1">{waitlist ? tr.waitlistHeading : tr.heading}</h3>
                <p className="text-sm text-gray-700 mb-6">{waitlist ? tr.waitlistSub : tr.sub}</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor={`${uid}-name`} className={labelClass}>{tr.name}</label>
                    <input id={`${uid}-name`} name="name" type="text" autoComplete="name" required placeholder={tr.namePlaceholder} className={inputClass} />
                    <ValidationError field="name" errors={state.errors} role="alert" className="text-red-700 text-xs mt-1" />
                  </div>
                  <div>
                    <label htmlFor={`${uid}-phone`} className={labelClass}>{tr.phone}</label>
                    <input id={`${uid}-phone`} name="phone" type="tel" inputMode="tel" autoComplete="tel" required placeholder={tr.phonePlaceholder} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor={`${uid}-company`} className={labelClass}>{tr.company}</label>
                    <input id={`${uid}-company`} name="company" type="text" autoComplete="organization" required placeholder={tr.companyPlaceholder} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor={`${uid}-email`} className={labelClass}>{tr.email}</label>
                    <input id={`${uid}-email`} name="email" type="email" inputMode="email" autoComplete="email" spellCheck={false} required placeholder={tr.emailPlaceholder} className={inputClass} />
                    <ValidationError field="email" errors={state.errors} role="alert" className="text-red-700 text-xs mt-1" />
                  </div>
                  <div>
                    <label htmlFor={`${uid}-language`} className={labelClass}>{tr.language}</label>
                    <select
                      id={`${uid}-language`}
                      name="language"
                      required
                      defaultValue={lang === "EN" ? "English" : "Polski"}
                      className={inputClass}
                    >
                      <option value="Polski">{tr.languagePolish}</option>
                      <option value="English">{tr.languageEnglish}</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor={`${uid}-message`} className={labelClass}>{tr.message}</label>
                    <textarea
                      id={`${uid}-message`}
                      key={initialTopic}
                      name="message"
                      required
                      rows={4}
                      defaultValue={initialTopic}
                      placeholder={tr.messagePlaceholder}
                      className={`${inputClass} resize-none`}
                    />
                    <ValidationError field="message" errors={state.errors} role="alert" className="text-red-700 text-xs mt-1" />
                  </div>

                  {state.errors && Object.keys(state.errors).length > 0 && (
                    <p role="alert" className="text-red-700 text-xs text-center">{tr.error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full py-4 rounded-full bg-gray-900 text-white font-semibold text-sm hover:bg-gray-700 hover:scale-[1.02] active:scale-[0.99] transition-[background-color,transform] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed mt-1"
                  >
                    {state.submitting ? tr.submitting : waitlist ? tr.waitlistSubmit : tr.submit}
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
