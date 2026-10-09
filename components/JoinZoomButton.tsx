"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { CheckCircle2, Video, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

type JoinZoomButtonProps = {
  buttonLabel: string;
  modalTitle: string;
  schedule: string;
  zoomLink: string;
  size?: "md" | "lg";
};

const field =
  "mt-2 w-full rounded-2xl border border-ink/15 bg-white px-4 py-3.5 text-sm text-ink outline-none transition-colors focus:border-gold";
const label = "text-eyebrow uppercase text-gold-deep";

export function JoinZoomButton({
  buttonLabel,
  modalTitle,
  schedule,
  zoomLink,
  size = "lg",
}: JoinZoomButtonProps) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const firstNameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKeydown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeydown);
    document.body.style.overflow = "hidden";
    firstNameRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKeydown);
      document.body.style.overflow = "";
    };
  }, [open]);

  function openModal() {
    setSubmitted(false);
    setFirstName("");
    setOpen(true);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const first = (form.elements.namedItem("firstName") as HTMLInputElement).value.trim();
    setFirstName(first);
    setSubmitted(true);
  }

  return (
    <>
      <Button onClick={openModal} size={size}>
        <Video size={18} />
        {buttonLabel}
      </Button>

      {open && (
        <div
          className="fixed inset-0 z-[150] flex items-center justify-center bg-night/80 p-4 text-ink backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="join-zoom-modal-title"
            className="relative w-full max-w-md rounded-3xl bg-ivory p-8 shadow-2xl ring-1 ring-gold/40"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-5 top-5 text-ink/50 transition-colors hover:text-ink"
            >
              <X size={22} />
            </button>

            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <h3 id="join-zoom-modal-title" className="text-h3">
                  {modalTitle}
                </h3>
                <p className="mt-2 text-caption text-gold-deep">{schedule}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  Enter your name and we&rsquo;ll give you the meeting link.
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="join-zoom-first-name" className={label}>
                      First name
                    </label>
                    <input
                      ref={firstNameRef}
                      id="join-zoom-first-name"
                      name="firstName"
                      type="text"
                      required
                      autoComplete="given-name"
                      placeholder="Jane"
                      className={field}
                    />
                  </div>
                  <div>
                    <label htmlFor="join-zoom-last-name" className={label}>
                      Last name
                    </label>
                    <input
                      id="join-zoom-last-name"
                      name="lastName"
                      type="text"
                      required
                      autoComplete="family-name"
                      placeholder="Doe"
                      className={field}
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <Button type="submit" size="lg" arrow>
                    Get meeting link
                  </Button>
                </div>
              </form>
            ) : (
              <div className="text-center">
                <CheckCircle2 className="mx-auto text-gold" size={44} />
                <h3 className="mt-4 text-h3">You&rsquo;re in, {firstName}!</h3>
                <p className="mt-2 text-caption text-gold-deep">{schedule}</p>

                <div className="mt-6 rounded-2xl bg-white p-5 ring-1 ring-gold/30">
                  <p className="text-eyebrow uppercase text-gold-deep">
                    Join meeting using this link
                  </p>
                  <a
                    href={zoomLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 block break-all text-sm font-semibold text-ink underline decoration-gold underline-offset-2"
                  >
                    {zoomLink}
                  </a>
                  <div className="mt-5">
                    <Button href={zoomLink} external variant="dark" size="lg" arrow>
                      Join meeting now
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
