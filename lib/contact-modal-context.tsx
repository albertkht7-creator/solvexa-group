"use client";
import { createContext, useContext, useState } from "react";

interface ContactModalContextValue {
  isOpen: boolean;
  initialTopic: string;
  openModal: (topic?: string) => void;
  closeModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextValue>({
  isOpen: false,
  initialTopic: "",
  openModal: () => {},
  closeModal: () => {},
});

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialTopic, setInitialTopic] = useState("");
  return (
    <ContactModalContext.Provider
      value={{
        isOpen,
        initialTopic,
        openModal: (topic = "") => { setInitialTopic(topic); setIsOpen(true); },
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
