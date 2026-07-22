"use client";
import { createContext, useContext, useState } from "react";

interface ContactModalContextValue {
  isOpen: boolean;
  initialTopic: string;
  waitlist: boolean;
  openModal: (topic?: string, opts?: { waitlist?: boolean }) => void;
  closeModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextValue>({
  isOpen: false,
  initialTopic: "",
  waitlist: false,
  openModal: () => {},
  closeModal: () => {},
});

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialTopic, setInitialTopic] = useState("");
  // waitlist mode: the thing they're asking about isn't available yet (e.g. a
  // course still in the works). The form still submits so Albert sees demand,
  // but the modal makes clear it's a waitlist sign-up, not a live purchase.
  const [waitlist, setWaitlist] = useState(false);
  return (
    <ContactModalContext.Provider
      value={{
        isOpen,
        initialTopic,
        waitlist,
        openModal: (topic = "", opts) => {
          setInitialTopic(topic);
          setWaitlist(opts?.waitlist ?? false);
          setIsOpen(true);
        },
        closeModal: () => setIsOpen(false),
      }}
    >
      {children}
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  return useContext(ContactModalContext);
}
