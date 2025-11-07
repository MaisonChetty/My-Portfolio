"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

function ContactForm() {
  const [result, setResult] = useState<"" | "success" | "error">("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setResult("");

    const formData = new FormData(event.currentTarget);
    // Use environment variable for access key
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY as string
    );
    formData.append("subject", "New message from your website");
    formData.append("from_name", formData.get("name") as string);
    formData.append("reply_to", formData.get("email") as string);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult("success");
        event.currentTarget.reset();
      } else {
        console.error("Web3Forms error:", data);
        setResult("error");
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setResult("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="max-w-2xl mx-auto p-6 bg-transparent shadow-lg rounded-lg mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <form className="mt-5" onSubmit={onSubmit}>
        <div className="flex flex-col sm:flex-row gap-6 my-3">
          <motion.input
            type="text"
            name="name"
            placeholder="First Name"
            className="flex-1 w-full text-lg px-4 py-2 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            required
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="E-mail"
            className="flex-1 w-full text-lg px-4 py-2 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            required
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <motion.textarea
          name="message"
          placeholder="Message"
          className="w-full text-lg px-4 py-2 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-indigo-500 transition-all min-h-32 my-3"
          required
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        <div className="flex items-center justify-center mt-6">
          <motion.button
            type="submit"
            disabled={loading}
            className={`bg-indigo-600 text-white hover:bg-indigo-700 py-2 px-4 rounded-lg shadow-md uppercase tracking-wider transition-all ease-linear ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </div>

        {/* Feedback messages */}
        {result === "success" && (
          <motion.p
            className="text-green-400 text-center mt-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Message sent successfully! Check your email.
          </motion.p>
        )}
        {result === "error" && (
          <motion.p
            className="text-red-500 text-center mt-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Something went wrong. Please try again.
          </motion.p>
        )}
      </form>
    </motion.div>
  );
}

export default ContactForm;
