import React, { useState } from 'react';
import CurvedInput from '../components/ContactMe/CurvedInput';
import CircularText from '../components/ContactMe/CircularText';


export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ state: 'idle', message: '' }); // 'idle' | 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ state: 'error', message: 'Please fill out all fields.' });
      setTimeout(() => setStatus({ state: 'idle', message: '' }), 4000);
      return;
    }

    setStatus({ state: 'sending', message: 'Sending message...' });

    try {
      const response = await fetch('https://formsubmit.co/ajax/raiyanchandle07edu@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: 'box'
        })
      });

      const data = await response.json();

      if (response.ok || data.success === 'true' || data.success === true) {
        setStatus({ state: 'success', message: 'Message sent successfully! Check your inbox soon.' });
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setStatus({ state: 'idle', message: '' });
        }, 5000);
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Contact form error:', err);
      setStatus({
        state: 'error',
        message: 'Could not send message automatically. Please write to raiyanchandle07edu@gmail.com'
      });
      setTimeout(() => setStatus({ state: 'idle', message: '' }), 6000);
    }
  };

  return (
    <section 
      id="contact" 
      className="h-screen w-full bg-black relative flex flex-col justify-center items-center text-white overflow-hidden font-sans select-none px-6"
      style={{
        backgroundImage: `
          radial-gradient(circle at center, rgba(18, 18, 18, 0) 0%, rgba(0, 0, 0, 0.85) 100%),
          repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.01) 0px, rgba(255, 255, 255, 0.01) 1px, transparent 1px, transparent 12px)
        `
      }}
    >
      {/* Centered Form Area */}
      <div className="max-w-lg w-full text-center z-10 space-y-8 px-4">
        
        {/* Header Titles */}
        <div className="space-y-2">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase">
            Drop clues!!
          </h2>
          <p className="text-sm md:text-base text-zinc-400 font-medium">
            Every case deserves a detective.....
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-0 w-full text-left">
          <CurvedInput
            showButton={false}
            showIcon={false}
            placeholder="Name"
            type="text"
            name="name"
            width="100%"
            height={56}
            bend={24}
            cornerRadius={14}
            backgroundColor="#0c0c0e"
            textColor="#ffffff"
            borderColor="#27272a"
            buttonColor="#6bee18"
            value={formData.name}
            onChange={(val) => setFormData({ ...formData, name: val })}
          />
          <CurvedInput
            showButton={false}
            showIcon={false}
            placeholder="Email"
            type="email"
            name="email"
            width="100%"
            height={56}
            bend={24}
            cornerRadius={14}
            backgroundColor="#0c0c0e"
            textColor="#ffffff"
            borderColor="#27272a"
            buttonColor="#6bee18"
            value={formData.email}
            onChange={(val) => setFormData({ ...formData, email: val })}
          />
          <CurvedInput
            showButton={false}
            showIcon={false}
            placeholder="Message"
            type="text"
            name="message"
            width="100%"
            height={110}
            bend={28}
            cornerRadius={14}
            backgroundColor="#0c0c0e"
            textColor="#ffffff"
            borderColor="#27272a"
            buttonColor="#6bee18"
            value={formData.message}
            onChange={(val) => setFormData({ ...formData, message: val })}
          />

          <button
            type="submit"
            disabled={status.state === 'sending'}
            className="mx-auto mt-4 px-10 py-3.5 rounded-full border border-zinc-800 text-white font-bold bg-black hover:bg-zinc-950 transition-all duration-200 text-sm cursor-pointer hover:scale-105 hover:border-[#6bee18] active:scale-95 flex items-center justify-center gap-2 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status.state === 'sending' ? (
              <>
                <svg className="animate-spin h-4 w-4 text-[#6bee18]" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
                <span>Sending...</span>
              </>
            ) : status.state === 'success' ? (
              <span className="text-[#6bee18]">Message Sent!</span>
            ) : (
              'Submit'
            )}
          </button>

          {/* Real-time status feedback */}
          {status.message && (
            <p className={`text-xs sm:text-sm mt-3 font-medium text-center transition-all ${
              status.state === 'success'
                ? 'text-[#6bee18]'
                : status.state === 'error'
                ? 'text-red-400'
                : 'text-zinc-400'
            }`}>
              {status.message}
            </p>
          )}
        </form>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-6 mt-6 pt-4">
          <a 
            href="https://linkedin.com/in/raiyan-chandle" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a 
            href="https://github.com/RaiyanChandle" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a 
            href="https://www.instagram.com/raiyanc07/?hl=en" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors duration-200"
            aria-label="Instagram"
          >
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Rotating Circular Developer Badge in Bottom Right using CircularText component */}
      <div className="absolute bottom-6 right-6 z-10 scale-50 md:scale-[0.6] origin-bottom-right hidden md:block select-none pointer-events-auto">
        <CircularText
          text="RAIYAN*RIYAZ*CHANDLE*"
          onHover="speedUp"
          spinDuration={20}
        />
      </div>
    </section>
  );
}
