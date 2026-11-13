"use client";
import { useEffect, type RefObject } from "react";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Basic dialog focus management: moves focus into the dialog when it opens,
 * keeps Tab/Shift+Tab inside it, and returns focus to the previously focused
 * element when it closes.
 */
export function useModalFocus(isOpen: boolean, ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.activeElement as HTMLElement | null;

    // Wait one frame so the dialog (rendered inside AnimatePresence) is mounted.
    const raf = requestAnimationFrame(() => {
      const el = ref.current;
      if (!el) return;
      const first = el.querySelector<HTMLElement>(FOCUSABLE);
      (first ?? el).focus();
    });

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const el = ref.current;
      if (!el) return;
      const items = Array.from(el.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (items.length === 0) { e.preventDefault(); el.focus(); return; }
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || !el.contains(active))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (active === last || !el.contains(active))) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", onKey);
      previous?.focus?.();
    };
  }, [isOpen, ref]);
}
