"use client";

import { useState } from "react";
import type { ComponentProps } from "react";
import { motion, useReducedMotion } from "motion/react";

import Sparkle from "../ui/Sparkle";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const reduceMotion = useReducedMotion();

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

  const inputClasses = `
    w-full
    rounded-2xl
    border
    border-pink-200
    bg-white/70
    px-4
    py-3
    text-[#493640]
    outline-none
    transition

    placeholder:text-[#806b7d]

    focus:border-pink-500
    focus:ring-2
    focus:ring-pink-200/60

    dark:border-purple-700/50
    dark:bg-purple-950/40
    dark:text-purple-50
    dark:placeholder:text-purple-300/70

    dark:focus:border-fuchsia-300/70
    dark:focus:ring-fuchsia-300/10
  `;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.11,
        delayChildren: reduceMotion ? 0 : 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: reduceMotion
      ? {
          opacity: 1,
          y: 0,
        }
      : {
          opacity: 0,
          y: 14,
        },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.55,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className="mx-auto mt-12 max-w-2xl text-left"
    >
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <motion.div
        variants={itemVariants}
        className="grid gap-6 sm:grid-cols-2"
      >
        <div>
          <label
            htmlFor="name"
            className="
              mb-2
              block
              text-sm
              font-medium
              text-[#684f62]
              dark:text-purple-100
            "
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
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="
              mb-2
              block
              text-sm
              font-medium
              text-[#684f62]
              dark:text-purple-100
            "
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
            className={inputClasses}
          />
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-6">
        <label
          htmlFor="subject"
          className="
            mb-2
            block
            text-sm
            font-medium
            text-[#684f62]
            dark:text-purple-100
          "
        >
          Subject
        </label>

        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="What would you like to talk about?"
          className={inputClasses}
        />
      </motion.div>

      <motion.div variants={itemVariants} className="mt-6">
        <label
          htmlFor="message"
          className="
            mb-2
            block
            text-sm
            font-medium
            text-[#684f62]
            dark:text-purple-100
          "
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Write your message here..."
          className={`${inputClasses} resize-none`}
        />
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-7 flex flex-col items-center"
      >
        <button
          type="submit"
          disabled={status === "sending"}
          className="
            group
            relative
            inline-flex
            cursor-pointer
            items-center
            justify-center
            rounded-full

            border
            border-[#dda2c373]
            bg-[#ffcae3]
            px-8
            py-3
            font-medium
            text-[#4d2f45]

            shadow-[0_5px_18px_rgba(217,107,158,0.14)]

            transition-all
            duration-300
            ease-out

            hover:-translate-y-1
            hover:border-[#d58eaf69]
            hover:bg-[#febada]
            hover:text-[#43283c]
            hover:shadow-[0_8px_24px_rgba(217,107,158,0.22)]

            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#b12f73]
            focus-visible:ring-offset-2

            disabled:cursor-not-allowed
            disabled:opacity-60

            dark:border-transparent
            dark:bg-purple-200
            dark:text-purple-950
            dark:shadow-[0_5px_18px_rgba(216,180,254,0.12)]

            dark:hover:bg-fuchsia-200
            dark:hover:text-purple-950
            dark:hover:shadow-[0_8px_24px_rgba(216,180,254,0.2)]

            dark:focus-visible:ring-fuchsia-300
            dark:focus-visible:ring-offset-[#0b0310]
          "
        >
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
          <motion.p
            role="status"
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 5,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="mt-4 text-sm text-[#a95179] dark:text-fuchsia-200"
          >
            Your message has been sent successfully ✦
          </motion.p>
        )}

        {status === "error" && (
          <motion.p
            role="alert"
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 5,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="mt-4 text-sm text-red-600 dark:text-red-300"
          >
            Something went wrong. Please try again.
          </motion.p>
        )}
      </motion.div>
    </motion.form>
  );
}