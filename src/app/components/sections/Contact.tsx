"use client";

import { useState } from "react";
import type { ComponentProps } from "react";
import FairyButton from "../ui/FairyButton";
import { GithubLogoIcon } from "@phosphor-icons/react/dist/icons/GithubLogo";
import { LinkedinLogoIcon } from "@phosphor-icons/react/dist/icons/LinkedinLogo";

import Sparkle from "../ui/Sparkle";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit: NonNullable<ComponentProps<"form">["onSubmit"]> = async (
    event,
  ) => {
    event.preventDefault();

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", accessKey);
    formData.append("subject", "New message from portfolio");
    formData.append("from_name", "Portfolio Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pb-28 pt-32">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-pink-300 bg-linear-to-br from-white/80 to-pink-100/70 px-7 py-16 sm:px-14 sm:py-20 dark:border-purple-700/70 dark:from-purple-950/60 dark:to-fuchsia-950/20">
        <Sparkle className="absolute left-[8%] top-[12%] h-5 w-5 text-pink-400/60 dark:text-fuchsia-300/70" />

        <Sparkle className="absolute bottom-[12%] right-[8%] h-3 w-3 text-purple-300/70 dark:text-purple-300/70" />

        <div className="relative z-10">
          <div className="text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-pink-500 dark:text-fuchsia-300">
              A little ✦ magic ✦ begins with hello
            </p>

            <h2 className="font-serif text-4xl font-medium sm:text-5xl">
              Let&apos;s create something together.
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-7 text-[#7c6678] dark:text-purple-200/70">
              I&apos;m always interested in new opportunities, interesting
              projects, and conversations about software development.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-12 max-w-2xl text-left"
          >
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-[#684f62] dark:text-purple-100"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-pink-200 bg-white/70 px-4 py-3 text-[#493640] outline-none transition placeholder:text-[#9f8798] focus:border-pink-400 focus:ring-2 focus:ring-pink-200/60 dark:border-purple-700/50 dark:bg-purple-950/40 dark:text-purple-50 dark:placeholder:text-purple-300/40 dark:focus:border-fuchsia-300/70 dark:focus:ring-fuchsia-300/10"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#684f62] dark:text-purple-100"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-pink-200 bg-white/70 px-4 py-3 text-[#493640] outline-none transition placeholder:text-[#9f8798] focus:border-pink-400 focus:ring-2 focus:ring-pink-200/60 dark:border-purple-700/50 dark:bg-purple-950/40 dark:text-purple-50 dark:placeholder:text-purple-300/40 dark:focus:border-fuchsia-300/70 dark:focus:ring-fuchsia-300/10"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-[#684f62] dark:text-purple-100"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="What would you like to talk about?"
                className="w-full rounded-2xl border border-pink-200 bg-white/70 px-4 py-3 text-[#493640] outline-none transition placeholder:text-[#9f8798] focus:border-pink-400 focus:ring-2 focus:ring-pink-200/60 dark:border-purple-700/50 dark:bg-purple-950/40 dark:text-purple-50 dark:placeholder:text-purple-300/40 dark:focus:border-fuchsia-300/70 dark:focus:ring-fuchsia-300/10"
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-[#684f62] dark:text-purple-100"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Write your message here..."
                className="w-full resize-none rounded-2xl border border-pink-200 bg-white/70 px-4 py-3 text-[#493640] outline-none transition placeholder:text-[#9f8798] focus:border-pink-400 focus:ring-2 focus:ring-pink-200/60 dark:border-purple-700/50 dark:bg-purple-950/40 dark:text-purple-50 dark:placeholder:text-purple-300/40 dark:focus:border-fuchsia-300/70 dark:focus:ring-fuchsia-300/10"
              />
            </div>

            <div className="mt-7 flex flex-col items-center">
              <button
                type="submit"
                disabled={status === "sending"}
                className="
    group relative
    inline-flex cursor-pointer
    items-center justify-center
    rounded-full

    bg-[#e991b6]
    px-8 py-3
    font-medium text-white

    shadow-[0_5px_18px_rgba(217,107,158,0.14)]

    transition-all
    duration-300
    ease-out

    hover:-translate-y-1
    hover:bg-[#dd7eaa]
    hover:shadow-[0_8px_24px_rgba(217,107,158,0.24)]

    disabled:cursor-not-allowed
    disabled:opacity-60

    dark:bg-purple-200
    dark:text-purple-950
    dark:shadow-[0_5px_18px_rgba(216,180,254,0.12)]

    dark:hover:bg-fuchsia-200
    dark:hover:shadow-[0_8px_24px_rgba(216,180,254,0.2)]
  "
              >
                {/* Top-left sparkle */}
                <span
                  aria-hidden="true"
                  className="
      pointer-events-none
      absolute
      -left-1
      -top-1

      scale-75
      text-pink-500
      opacity-70

      transition-all
      duration-300

      group-hover:-left-2
      group-hover:-top-2
      group-hover:scale-100
      group-hover:opacity-100

      dark:text-fuchsia-300
    "
                >
                  <Sparkle className="h-3 w-3" />
                </span>

                {/* Bottom-right sparkle */}
                <span
                  aria-hidden="true"
                  className="
      pointer-events-none
      absolute
      -bottom-1
      right-2

      scale-0
      text-pink-400
      opacity-0

      transition-all
      delay-75
      duration-300

      group-hover:-bottom-2
      group-hover:right-0
      group-hover:scale-100
      group-hover:opacity-90

      dark:text-purple-300
    "
                >
                  <Sparkle className="h-2 w-2" />
                </span>

                {/* Pixie trail */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 90 18"
                  fill="none"
                  className="
      pointer-events-none
      absolute
      -bottom-2.5
      left-1/2

      h-4.5
      w-20
      -translate-x-1/2

      overflow-visible

      text-pink-400/70

      transition-all
      duration-500
      ease-out

      group-hover:w-23
      group-hover:text-pink-500

      dark:text-purple-300/60
      dark:group-hover:text-fuchsia-300
    "
                >
                  <path
                    d="M5 6 C24 15 34 12 45 8 C57 4 68 5 85 10"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />

                  <circle cx="22" cy="11" r="1.2" fill="currentColor" />
                  <circle cx="65" cy="6" r="0.9" fill="currentColor" />
                  <circle cx="76" cy="9" r="0.6" fill="currentColor" />
                </svg>

                <span className="relative z-10">
                  {status === "sending" ? "Sending..." : "Send message"}
                </span>
              </button>

              {status === "success" && (
                <p
                  role="status"
                  className="mt-4 text-sm text-[#a95179] dark:text-fuchsia-200"
                >
                  Your message has been sent successfully ✦
                </p>
              )}

              {status === "error" && (
                <p
                  role="alert"
                  className="mt-4 text-sm text-red-600 dark:text-red-300"
                >
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </form>

          <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center">
            <div className="mb-5 flex w-full items-center gap-4">
              <span className="h-px flex-1 bg-pink-200 dark:bg-purple-700/50" />
              <span className="text-xs uppercase tracking-[0.22em] text-[#6e5d69] dark:text-purple-300/60">
                Find me online
              </span>
              <span className="h-px flex-1 bg-pink-200 dark:bg-purple-700/50" />
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/akakj"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="group inline-flex items-center gap-2 rounded-full border border-pink-300 bg-white/60 px-4 py-2.5 text-sm font-medium text-[#684f62] transition-all hover:-translate-y-1 hover:border-pink-300 hover:bg-white hover:text-[#a95179] dark:border-purple-700/50 dark:bg-purple-950/30 dark:text-purple-100 dark:hover:border-fuchsia-300/50 dark:hover:bg-purple-950/50 dark:hover:text-fuchsia-200"
              >
                <GithubLogoIcon
                  aria-hidden="true"
                  className="h-5 w-5 transition-transform group-hover:-rotate-6"
                />
                GitHub
              </a>

              <a
                href="https://uk.linkedin.com/in/anna-kandyba"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="group inline-flex items-center gap-2 rounded-full border border-pink-300 bg-white/60 px-4 py-2.5 text-sm font-medium text-[#684f62] transition-all hover:-translate-y-1 hover:border-pink-300 hover:bg-white hover:text-[#a95179] dark:border-purple-700/50 dark:bg-purple-950/30 dark:text-purple-100 dark:hover:border-fuchsia-300/50 dark:hover:bg-purple-950/50 dark:hover:text-fuchsia-200"
              >
                <LinkedinLogoIcon
                  aria-hidden="true"
                  className="h-5 w-5 transition-transform group-hover:rotate-6"
                />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
