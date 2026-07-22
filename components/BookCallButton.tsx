"use client";
import { useContactModal } from "@/lib/contact-modal-context";

// Opens the global contact modal instead of navigating to /#kontakt.
// Server pages (course subpages, blog posts) can't call the modal hook
// directly, so they render this client button in place of a <Link>.
export default function BookCallButton({
  children,
  topic,
  className,
  waitlist = false,
}: {
  children: React.ReactNode;
  topic?: string;
  className?: string;
  waitlist?: boolean;
}) {
  const { openModal } = useContactModal();
  return (
    <button type="button" onClick={() => openModal(topic, { waitlist })} className={className}>
      {children}
    </button>
  );
}
