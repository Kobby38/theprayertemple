"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-navy-900/10 bg-white px-8 py-16 text-center"
      >
        <CheckCircle2 className="text-brown-500" size={40} />
        <h3 className="mt-4 text-xl font-bold tracking-tight text-navy-900">
          Message received.
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-navy-900/60">
          Thank you for reaching out to The Prayer Temple. Our team will get
          back to you shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="text-xs font-bold uppercase tracking-widest text-navy-900/60">
            Name
          </label>
          <input
            required
            type="text"
            name="name"
            className="mt-2 w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-brown-500"
          />
        </div>
        <div>
          <label className="text-xs font-bold uppercase tracking-widest text-navy-900/60">
            Email
          </label>
          <input
            required
            type="email"
            name="email"
            className="mt-2 w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-brown-500"
          />
        </div>
      </div>
      <div>
        <label className="text-xs font-bold uppercase tracking-widest text-navy-900/60">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          className="mt-2 w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-brown-500"
        />
      </div>
      <div>
        <label className="text-xs font-bold uppercase tracking-widest text-navy-900/60">
          Message
        </label>
        <textarea
          required
          name="message"
          rows={5}
          className="mt-2 w-full resize-none rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-brown-500"
        />
      </div>
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Send message
      </Button>
    </form>
  );
}
