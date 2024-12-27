"use client";
import React, { useState } from "react";
import { MdEmail, MdCall, MdLocationPin } from "react-icons/md";
import Button from "./ButtonSecondary";

const Contact = () => {
  // const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // const [status, setStatus] = useState('');

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setStatus('Mengirim...');
  
  //   try {
  //     const response = await fetch('/api/send-message', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(formData),
  //     });
  
  //     const result = await response.json(); // Mendapatkan hasil dari response.json()
  
  //     if (response.status === 200) { // Pastikan status HTTP 200 OK
  //       setStatus('Email berhasil dikirim!');
  //     } else {
  //       setStatus(`Gagal: ${result.message}`);
  //     }
  //   } catch (error) {
  //     setStatus('Terjadi kesalahan saat mengirim email.');
  //   }
  // };

  // const handleButtonClick = async () => {
  //   setStatus('Mengirim...');
  //   try {
  //     const response = await fetch('/api/send-message', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(formData),
  //     });

  //     const result = await response.json();
  //     if (response.ok) {
  //       setStatus('Email berhasil dikirim!');
  //     } else {
  //       setStatus(`Gagal: ${result.message}`);
  //     }
  //   } catch (error) {
  //     setStatus('Terjadi kesalahan saat mengirim email.');
  //   }
  // };
  const [result, setResult] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<boolean>(false);

  const sendEmail = () =>{
    fetch('api/emails', {
      method: 'POST', 
    })
      .then(response => response.json())
      .then(data => setResult(data))
      .catch(error => setResult(error))
      .finally(() => setLoading(false))
  
  }

  return (
    <>
      {/* <div className="relat">
        <div className="bg-text text-12xl text-yellow-500 font-black absolute flex justify-center items-center text-center inset-x-0 bottom z-0 pointer-events-none" style={{ fontFamily: "var(--font-unbounded)" }}>
          Contact
        </div> */}
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
          {/* <form onSubmit={handleSubmit} className="space-y-6">
            <input type="name" name="name"  value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full rounded-full h-8 p-8 focus:border-yellow-500 md:focus:border-yellow-500" />
            <input type="email" name="email"  value={formData.email} onChange={handleChange} placeholder="Your Email Address" className="w-full rounded-full h-8 p-8 focus:border-yellow-500 md:focus:border-yellow-500" />
            <textarea name="message"  value={formData.message} onChange={handleChange} rows={6} placeholder="Write your message" className="w-full rounded-3xl p-8 focus:border-yellow-500 md:focus:border-yellow-500" />
            <div className="justify-self-end md:justify-self-start">
              <Button onClick={handleButtonClick}>Send Message</Button>
            </div>
          </form> */}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Contact;
