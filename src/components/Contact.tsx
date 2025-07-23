'use client'

import Image from 'next/image';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailElement = form.current?.elements.namedItem('email') as HTMLInputElement | null;
    const email = emailElement?.value;
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setLoading(true);
    if (!form.current) return;
    // Set the phone value in the form before sending
    const phoneInput = form.current.elements.namedItem('user_phone') as HTMLInputElement | null;
    if (phoneInput) phoneInput.value = phone;
    emailjs
      .sendForm(
        'service_4krdzzr',      // Replace with your EmailJS service ID
        'template_0bp585q',     // Replace with your EmailJS template ID
        form.current,
        '5z_1s3P0IPe-gdG7m'       // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert('Message sent!');
          form.current?.reset();
          setPhone('');
          setLoading(false);
        },
        (error) => {
          console.log(error);
          alert(`Failed to send message, please try again, ${error}`);
          setLoading(false);
        }
      );
  };

  return (
    <>
      <div className="relative max-w-[100vw]  xl:h-[150vh]">
        {/* Background Image */}
        <div className="absolute w-[100vw] inset-0 z-0 bg-left bg-cover">
          <Image
            src="/sve3.svg"
            alt="Contact Background"
            fill
            className="object-cover  bg-left"
            priority
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-start justify-end px-4 py-20 pt-44">
          {/* Header Section */}
          <div className=" mb-16 grid grid-cols-1 text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-400 mb-6">
              Schedule a Consultation
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl text-left">
              Take the first step towards transforming your business. Our expert team is ready to guide you through our comprehensive consultation process for automation, development, and AI solutions.
            </p>
          </div>

          {/* Process Map */}
          <div className="max-w-3xl space-y-8 t">
            {/* Step 1 */}
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-white">1</span>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white mb-2">Initial Contact</h3>
                <p className="text-gray-500">
                  Reach out to us through our contact form or direct phone line to begin your journey.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-white">2</span>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white mb-2">Assessment</h3>
                <p className="text-gray-500">
                  Our experts will evaluate your situation and determine the best approach for your needs.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-white">3</span>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white mb-2">Strategy Session</h3>
                <p className="text-gray-500">
                  We'll develop a customized plan and discuss the next steps in detail.
                </p>
              </div>
            </div>
          </div>    

          {/* CTA Button */}
          {/* <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Schedule Now
            </button>
          </div> */}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form ref={form} onSubmit={sendEmail} className="bg-white rounded-xl shadow-lg p-8">
              {error && <div className="bg-red-100 text-red-700 p-2 rounded mb-2">{error}</div>}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <PhoneInput
                  country={'us'}
                  value={phone}
                  onChange={setPhone}
                  inputProps={{
                    name: 'user_phone',
                    id: 'phone',
                    required: false,
                  }}
                  inputClass="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  enableSearch={true}
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us about your needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
} 