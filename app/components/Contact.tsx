"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { MdEmail, MdCall, MdLocationPin } from "react-icons/md";
import Button from "./ButtonSecondary";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault(); // Mencegah redirect bawaan form

    const formBody = new URLSearchParams({
      ...formData,
      _subject: "New Contact Form Submission",
      _captcha: "false",
      _template: "box",
    });

    try {
      const response = await fetch("https://formsubmit.co/abi.rahmawan01@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      });

      if (response.ok) {
        toast.success("Message Sent Successfully")
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between items-center bg-zinc-950 md:space-x-8 mt-8 px-4 md:px-8 py-8 space-y-8 md:space-y-0">
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-white text-5xl md:text-7xl font-black mb-8 text-start" style={{ fontFamily: "var(--font-unbounded)" }}>
            Contact
          </h1>
          <p className="text-white text-2xl font-bold">Let's Connect and Collaborate</p>
          <p className="text-white text-xl">Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
          <div className="flex flex-row items-center space-x-4">
            <div className="p-3 text-4xl bg-yellow-500 rounded-full">
              <MdEmail className="shake" />
            </div>
            <span className="text-xl text-white">abi.rahmawan01@gmail.com</span>
          </div>
          <hr />
          <div className="flex flex-row items-center space-x-4">
            <div className="p-3 text-4xl bg-yellow-500 rounded-full">
              <MdCall className="shake" />
            </div>
            <span className="text-xl text-white">(+62) 81 3358 5246 5</span>
          </div>
          <hr />
          <div className="flex flex-row items-center space-x-4">
            <div className="p-3 text-4xl bg-yellow-500 rounded-full">
              <MdLocationPin className="shake" />
            </div>
            <span className="text-xl text-white">Madiun, East Java, Indonesia. 63157</span>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-full h-8 p-8 focus:border-yellow-500 md:focus:border-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-300"
              required
            />

            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              className="w-full rounded-full h-8 p-8 focus:border-yellow-500 md:focus:border-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-300"
              required
            />

            <textarea
              name="message"
              id="message"
              rows={6}
              placeholder="Write your message"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-3xl p-8 focus:border-yellow-500 md:focus:border-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-300"
              required
            />

            {/* Add Hidden Fields for Extra Functionality */}
            <input type="hidden" name="_subject" value="New Submission!" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />

            <div className="space-y-4">
              <div className="justify-self-end md:justify-self-start">
                <Button type="submit" disabled={isLoading} className="min-w-[120px]">
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Contact;
