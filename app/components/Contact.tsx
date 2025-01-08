"use client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { MdEmail, MdCall, MdLocationPin } from "react-icons/md";
import Button from "./Button";
import { GoArrowUpRight } from "react-icons/go";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  useEffect(() =>{
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, [])
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
        toast.success("Message Sent Successfully");
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
      <div className="flex flex-col lg:flex-row lg:justify-between items-center bg-zinc-950 lg:space-x-8 mt-8 px-4 md:px-8 py-8 space-y-8 lg:space-y-0">
        <div className="w-full lg:w-1/2 space-y-2 lg:space-y-4">
          <h1 className="text-white text-5xl md:text-7xl font-black mb-8 text-start" style={{ fontFamily: "var(--font-unbounded)" }} data-aos="fade-down-right">
            Contact
          </h1>
          <p className="text-white text-2xl font-bold" data-aos="fade-up">Let's Connect and Collaborate</p>
          <p className="text-white text-xl" data-aos="fade-up">Whether you have a project in mind, a question to ask, feel free to reach out. I'm excited to collaborate and bring your ideas to life.</p>
          <div className="flex flex-row items-center space-x-4" data-aos="fade-up">
            <div className="text-2xl p-3 bg-yellow-500 rounded-full">
              <MdEmail className="shake" />
            </div>
            <span className="text-xl text-white">abi.rahmawan01@gmail.com</span>
          </div>
          <hr data-aos="fade-up" />
          <div className="flex flex-row items-center space-x-4" data-aos="fade-up">
            <div className="text-2xl p-3 bg-yellow-500 rounded-full">
              <MdCall className="shake" />
            </div>
            <span className="text-xl text-white">(+62) 81 3358 5246 5</span>
          </div>
          <hr data-aos="fade-up" />
          <div className="flex flex-row items-center space-x-4" data-aos="fade-up">
            <div className="text-2xl p-3 bg-yellow-500 rounded-full">
              <MdLocationPin className="shake" />
            </div>
            <span className="text-xl text-white">Madiun, East Java, Indonesia. 63157</span>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-full h-8 p-8 focus:border-yellow-500 lg:focus:border-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-300"
              required
              data-aos="fade-up"
            />

            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              className="w-full rounded-full h-8 p-8 focus:border-yellow-500 lg:focus:border-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-300"
              required
              data-aos="fade-up"
            />

            <textarea
              name="message"
              id="message"
              rows={6}
              placeholder="Write your message"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-3xl p-8 focus:border-yellow-500 lg:focus:border-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-300"
              required
              data-aos="fade-up"
            />

            {/* Add Hidden Fields for Extra Functionality */}
            <input type="hidden" name="_subject" value="New Submission!" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />

            <div className="space-y-4">
              <div className="justify-self-end lg:justify-self-start" data-aos="fade-up">
                <Button title="Send Message" icon={<GoArrowUpRight className="shake" />} color="bg-yellow-500 text-zinc-950" colorIcon="bg-zinc-950"></Button>
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
