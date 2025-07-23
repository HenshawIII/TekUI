'use client'

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'react-phone-input-2/lib/style.css'  
import PhoneInput from 'react-phone-input-2'

export default function ComplaintForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    description: '',
    file: null as File | null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setForm((prev) => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const handlePhoneChange = (value: string) => {
    setForm((prev) => ({ ...prev, phone: value }));
  };

  const validate = () => {
    if (!form.name || !form.email || !form.subject || !form.description) {
      setError('Please fill in all required fields.');
      return false;
    }
    // Simple email validation
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    if (!formRef.current) return;
    setLoading(true);
    const formData = new FormData(formRef.current);
    formData.set('phone', form.phone);
    emailjs
      .sendForm(
        'service_4krdzzr',
        'template_wy18gkg',
        formRef.current,
        '5z_1s3P0IPe-gdG7m'
      )
      .then(
        (result) => {
          setSubmitted(true);
          setLoading(false);
        },
        (error) => {
          setError('Failed to send complaint, please try again. ' + error.text);
          setLoading(false);
        }
      );
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto p-8 bg-green-50 rounded-xl shadow text-center">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Thank you for your complaint!</h2>
        <p className="text-green-800">We have received your submission and will get back to you soon.</p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="max-w-xl mx-auto p-8 bg-white rounded-xl shadow-md space-y-6">
      <h2 className="text-3xl font-bold mb-2 text-blue-700">File a Complaint</h2>
      <p className="text-gray-600 mb-4">Please fill out the form below to inform us of your issue. We take all complaints seriously and will respond as soon as possible.</p>
      {error && <div className="bg-red-100 text-red-700 p-2 rounded mb-2">{error}</div>}
      <div>
        <label className="block font-semibold mb-1" htmlFor="name">Full Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
          required
        />
      </div>
      <div>
        <label className="block font-semibold mb-1" htmlFor="email">Email Address *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
          required
        />
      </div>
      <PhoneInput
        country={'us'}
        value={form.phone}
        enableSearch={true}
        onChange={handlePhoneChange}
        inputClass="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
      />
      <div>
        <label className="block font-semibold mb-1" htmlFor="subject">Subject *</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
          required
        />
      </div>
      <div>
        <label className="block font-semibold mb-1" htmlFor="description">Issue Description *</label>
        <textarea
          id="description"
          name="description"
          value={form.description}
          onChange={handleChange}
          rows={5}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
          required
        />
      </div>
      {/* <div>
        <label className="block font-semibold mb-1" htmlFor="file">Attach File (optional)</label>
        <input
          type="file"
          id="file"
          name="file"
          onChange={handleFileChange}
          className="w-full"
        />
      </div> */}
      <button
        type="submit"
        className={`w-full bg-blue-700 text-white font-semibold py-3 rounded hover:bg-blue-800 transition-colors flex items-center justify-center ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
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
          'Submit Complaint'
        )}
      </button>
    </form>
  );
} 