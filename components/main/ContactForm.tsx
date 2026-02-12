"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setSent(false);

    const formData = new FormData(event.currentTarget);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY as string;

    formData.append("access_key", accessKey);
    formData.append("subject", "New message from your website");
    formData.append("from_name", formData.get("name") as string);
    formData.append("reply_to", formData.get("email") as string);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      // Treat all valid responses as success.
      const message = data.message?.toLowerCase() || "";
      if (
        data.success === true ||
        message.includes("sent") ||
        message.includes("success") ||
        message.includes("submitted")
      ) {
        setSent(true);
        event.currentTarget.reset();
      }
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="z-[1] mx-auto mt-10 w-full max-w-3xl rounded-2xl bg-transparent p-[clamp(1.5rem,2vw,2rem)] shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <form className="mt-5" onSubmit={onSubmit}>
        <div className="my-3 flex flex-col gap-6 sm:flex-row">
          <motion.input
            type="text"
            name="name"
            placeholder="First Name"
            className="w-full flex-1 rounded-xl px-5 py-3 text-[clamp(1rem,1.1vw,1.125rem)] shadow-sm outline-none transition-all focus:ring-2 focus:ring-indigo-500"
            required
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="E-mail"
            className="w-full flex-1 rounded-xl px-5 py-3 text-[clamp(1rem,1.1vw,1.125rem)] shadow-sm outline-none transition-all focus:ring-2 focus:ring-indigo-500"
            required
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <motion.textarea
          name="message"
          placeholder="Message"
          className="my-3 min-h-40 w-full rounded-xl px-5 py-3 text-[clamp(1rem,1.1vw,1.125rem)] shadow-sm outline-none transition-all focus:ring-2 focus:ring-indigo-500"
          required
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        <div className="mt-6 flex items-center justify-center">
          <motion.button
            type="submit"
            disabled={loading}
            className={`rounded-xl bg-indigo-600 px-6 py-3 text-[clamp(1rem,1.1vw,1.125rem)] font-semibold uppercase tracking-wider text-white shadow-md transition-all ease-linear hover:bg-indigo-700 ${
              loading ? "cursor-not-allowed opacity-70" : ""
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </div>

        {sent && (
          <motion.p
            className="mt-4 text-center text-green-400"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Message sent successfully.
          </motion.p>
        )}
      </form>
    </motion.div>
  );
}

export default ContactForm;
