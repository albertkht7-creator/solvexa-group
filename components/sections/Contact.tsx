"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="kontakt" ref={ref} className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold tracking-widest text-white/40 uppercase">Kontakt</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Zacznijmy<br />rozmowę.
          </h2>
          <p className="text-white/50 leading-relaxed mb-10">
            Napisz do mnie jeśli chcesz porozmawiać o szkoleniu dla Twojego zespołu, mentoringу
            lub kursach online. Odpiszę w ciągu 24 godzin.
          </p>
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/images/albert-headshot.jpg"
                alt="Albert Kohut"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="text-white font-medium">Albert Kohut</p>
              <p className="text-sm text-white/40">Sales Manager @Revolut Business</p>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {status === "sent" ? (
            <div className="text-center py-16">
              <p className="text-2xl font-bold text-white mb-3">Dziękuję!</p>
              <p className="text-white/50">Odezwę się do Ciebie w ciągu 24 godzin.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-white/40 mb-1.5 block">Imię</label>
                  <input
                    name="firstName"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors text-sm"
                    placeholder="Jan"
                  />
                </div>
                <div>
                  <label className="text-xs text-white/40 mb-1.5 block">Nazwisko</label>
                  <input
                    name="lastName"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors text-sm"
                    placeholder="Kowalski"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-white/40 mb-1.5 block">Nazwa firmy</label>
                <input
                  name="company"
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors text-sm"
                  placeholder="Twoja firma"
                />
              </div>
              <div>
                <label className="text-xs text-white/40 mb-1.5 block">Numer telefonu</label>
                <input
                  name="phone"
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors text-sm"
                  placeholder="+48 600 000 000"
                />
              </div>
              <div>
                <label className="text-xs text-white/40 mb-1.5 block">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors text-sm"
                  placeholder="jan@firma.pl"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-2"
              >
                {status === "sending" ? "Wysyłanie..." : "Wyślij wiadomość"}
              </button>
              {status === "error" && (
                <p className="text-red-400 text-sm text-center">Coś poszło nie tak. Napisz bezpośrednio na email.</p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
