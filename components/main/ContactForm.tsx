import React from "react";
import { motion } from "framer-motion";

function ContactForm() {
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        formData.append("access_key", "cc84c48c-340d-4bee-88f3-9a4f71ac06ab");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
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
                <div className="flex gap-6 my-3">
                    <div className="w-1/2">
                        <motion.input
                            type="text"
                            placeholder="First Name"
                            className="w-full text-lg px-4 py-2 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                            name="name"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            required
                        />
                    </div>
                    <div className="w-1/2">
                        <motion.input
                            type="email"
                            placeholder="E-mail"
                            name="email"
                            className="w-full text-lg px-4 py-2 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            required
                        />
                    </div>
                </div>

                <div className="my-3">
                    <motion.textarea
                        className="w-full text-lg px-4 py-2 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-indigo-500 transition-all min-h-32"
                        placeholder="Message"
                        name="message"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        required
                    />
                </div>

                <div className="flex items-center justify-center mt-6">
                    <motion.button
                        type="submit"
                        className="bg-indigo-600 text-white hover:bg-indigo-700 py-2 px-4 rounded-lg shadow-md uppercase tracking-wider transition-all ease-linear"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Send Message
                    </motion.button>
                </div>
            </form>
        </motion.div>
    );
}

export default ContactForm;
