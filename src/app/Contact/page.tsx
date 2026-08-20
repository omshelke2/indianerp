"use client";

import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "919921163448";
    const { name, email, phone, message } = formData;

    let messageBody = `Hello Indian Computer Technology! \n\nI would like to inquire about your software solutions.\n\n Name: ${name}\n Email: ${email}`;
    if (phone.trim()) {
      messageBody += `\n Phone: ${phone.trim()}`;
    }
    messageBody += `\n Message: ${message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      messageBody
    )}`;

    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <>
      <div className="">
        {/* CONTACT US */}
        <div className="container m-auto flex flex-col md:flex-col max-w-7xl my-10">
          <h2 className="text-5xl font-bold flex justify-center m-10">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex border rounded-lg p-4 text-3xl items-center gap-4">
              📞
              <div className="ml-2">
                <h4 className="font-semibold text-base tracking-normal">
                  Contact Number :
                </h4>
                <p className="text-sm font-normal text-gray-600 tracking-normal">
                  +91 9921163448 , +91 9922163448
                </p>
              </div>
            </div>
            <div className="flex border rounded-lg p-4 text-3xl items-center gap-4">
              ✉️
              <div className="ml-2">
                <h4 className="font-semibold text-base tracking-normal">
                  Mail Id :
                </h4>
                <p className="text-sm font-normal text-gray-600 tracking-normal">
                  indiancomptech@gmail.com
                </p>
              </div>
            </div>
            <div className="flex border rounded-lg p-4 text-3xl items-center gap-4">
              📍
              <div className="ml-2">
                <h4 className="font-semibold text-base tracking-normal">
                  Address :
                </h4>
                <p className="text-sm font-normal text-gray-600 tracking-normal">
                  Office No.1, Sr.No.99/12B/2, Vijay Nagar Alfanso Residency,
                  Near Mother Teresa Fly Over, Kalewadi, Pimpri,
                  Pimpri-Chinchwad, Pune-411017
                </p>
              </div>
            </div>
            <div className="flex border rounded-lg p-4 text-3xl items-center gap-4">
              🕒
              <div className="ml-2">
                <h4 className="font-semibold text-base tracking-normal">
                  Business Hours :
                </h4>
                <p className="text-sm font-normal text-gray-600 tracking-normal">
                  Mon-Sat : 9am - 8pm , Sun : Closed
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container m-auto flex flex-col-reverse md:flex-row p-8 md:p-16 border rounded-lg shadow-lg max-w-7xl my-10">
          {/* Map Information */}
          <div className="flex-1 mb-8 md:mb-0 md:mr-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472.6117095672309!2d73.79199718802717!3d18.6238514422496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9cdc19611ef%3A0x3b4e25791140511!2sINDIAN%20COMPUTER%20TECHNOLOGY!5e0!3m2!1sen!2sin!4v1724249577403!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="flex-1">
            <div>
              <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
              <p className="text-gray-600 mb-4">
                📝 Fill up this form to connect directly with our team on WhatsApp!
              </p>
            </div>

            {submitted && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-md text-sm flex items-center justify-between">
                <span>Opening WhatsApp with your message...</span>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-semibold text-green-800 underline ml-2 cursor-pointer"
                >
                  Send another
                </button>
              </div>
            )}

            <form onSubmit={handleWhatsAppSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your Name"
                  required
                  className="w-full p-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your Email address"
                  required
                  className="w-full p-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone / Mobile Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210 (Optional)"
                  className="w-full p-2.5 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you? (e.g., Request a demo, pricing inquiry, custom ERP needs)"
                  required
                  className="w-full p-2.5 bg-white border border-gray-300 rounded-md h-28 resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold px-4 py-3 rounded-md w-full flex items-center justify-center gap-2 shadow-sm transition-all duration-200 cursor-pointer"
              >
                <FaWhatsapp className="text-xl" />
                <span>Send Inquiry via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
