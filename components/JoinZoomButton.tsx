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
      if (e.key === "Escape") closeModal();
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

  function closeModal() {
    setOpen(false);
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/80 p-4 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="join-zoom-modal-title"
            className="relative w-full max-w-md rounded-3xl bg-cream p-8 text-navy-900 shadow-2xl"
          >
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close"
              className="absolute right-5 top-5 text-navy-900/50 transition-colors hover:text-navy-900"
            >
              <X size={22} />
            </button>

            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <h3 id="join-zoom-modal-title" className="text-2xl font-extrabold tracking-tight">
                  {modalTitle}
                </h3>
                <p className="mt-2 text-sm text-navy-900/60">{schedule}</p>
                <p className="mt-4 text-sm leading-relaxed text-navy-900/70">
                  Enter your name and we&rsquo;ll give you the meeting link.
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <label
                      htmlFor="join-zoom-first-name"
                      className="text-xs font-bold uppercase tracking-widest text-navy-900/60"
                    >
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
                      className="mt-2 w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-brown-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="join-zoom-last-name"
                      className="text-xs font-bold uppercase tracking-widest text-navy-900/60"
                    >
                      Last name
                    </label>
                    <input
                      id="join-zoom-last-name"
                      name="lastName"
                      type="text"
                      required
                      autoComplete="family-name"
                      placeholder="Doe"
                      className="mt-2 w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-brown-500"
                    />
                  </div>
                </div>

                <Button type="submit" size="lg" className="mt-6 w-full justify-center">
                  Get meeting link
                </Button>
              </form>
            ) : (
              <div className="text-center">
                <CheckCircle2 className="mx-auto text-brown-500" size={40} />
                <h3 className="mt-4 text-2xl font-extrabold tracking-tight">
                  You&rsquo;re in, {firstName}!
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-900/60">{schedule}</p>

                <div className="mt-6 rounded-2xl border border-navy-900/10 bg-white p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-navy-900/50">
                    Join meeting using this link
                  </p>
                  <a
                    href={zoomLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block break-all text-sm font-semibold text-brown-500 underline underline-offset-2"
                  >
                    {zoomLink}
                  </a>
                  <a
                    href={zoomLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-8 py-4 text-base font-semibold tracking-tight text-cream transition-colors duration-300 hover:bg-navy-800"
                  >
                    Join meeting now
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
