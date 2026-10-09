"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const field =
  "mt-2 w-full rounded-2xl border border-ink/15 bg-white px-4 py-3.5 text-sm text-ink outline-none transition-colors focus:border-gold";
const label = "text-eyebrow uppercase text-gold-deep";

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
        className="flex flex-col items-center justify-center rounded-3xl bg-white px-8 py-16 text-center"
      >
        <CheckCircle2 className="text-gold" size={44} />
        <h3 className="mt-5 text-h3">Message received.</h3>
        <p className="mt-3 max-w-sm text-ink-muted">
          Thank you for reaching out to The Prayer Temple. Our team will get back to you shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={label}>
            Name
          </label>
          <input id="cf-name" required type="text" name="name" className={field} />
        </div>
        <div>
          <label htmlFor="cf-email" className={label}>
            Email
          </label>
          <input id="cf-email" required type="email" name="email" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="cf-subject" className={label}>
          Subject
        </label>
        <input id="cf-subject" type="text" name="subject" className={field} />
      </div>
      <div>
        <label htmlFor="cf-message" className={label}>
          Message
        </label>
        <textarea
          id="cf-message"
          required
          name="message"
          rows={5}
          className={`${field} resize-none`}
        />
      </div>
      <Button type="submit" size="lg" arrow>
        Send message
      </Button>
    </form>
  );
}
