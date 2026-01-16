
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    vision: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Your WhatsApp number from CV
    const myNumber = "380951594897";
    
    // Construct the professional message
    const message = `*New Project Inquiry*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*WhatsApp:* ${formData.whatsapp}%0A` +
      `*Email:* ${formData.email}%0A%0A` +
      `*Project Vision:*%0A${formData.vision}`;

    // Redirect to WhatsApp
    window.open(`https://wa.me/${myNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="py-24 md:py-40 px-4 bg-main relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-8xl font-space font-extrabold tracking-tighter mb-8 text-sec uppercase">
              Let's create something <span className="text-thr italic">iconic</span>.
            </h2>
            <p className="text-xl opacity-60 mb-12 leading-relaxed text-sec font-medium">
              Whether you're looking for a lead architect or a specialist to elevate your next production, I'm ready to ship excellence.
            </p>
            
            <div className="flex flex-col gap-6">
              <ContactItem icon="email" label="Direct Email" value="tsolution418@gmail.com" link="mailto:tsolution418@gmail.com" />
              <ContactItem icon="phone" label="Quick Call" value="+380 95 159 4897" link="tel:+380951594897" />
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-card-bg p-8 md:p-12 rounded-[2.5rem] border-2 border-muted/20 shadow-2xl">
            <h3 className="text-2xl font-black mb-8 text-thr uppercase tracking-widest">Send a message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  label="Name" 
                  name="name"
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input 
                  label="Your WhatsApp" 
                  name="whatsapp"
                  placeholder="+1 234..." 
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                />
              </div>
              <Input 
                label="Your Email" 
                name="email"
                type="email"
                placeholder="your@email.com" 
                value={formData.email}
                onChange={handleChange}
                required
              />
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 text-sec">Your Vision (What do you want to create?)</label>
                <textarea 
                  name="vision"
                  value={formData.vision}
                  onChange={handleChange}
                  required
                  className="bg-main/50 border-2 border-muted/20 rounded-2xl p-4 h-40 outline-none focus:border-thr/50 transition-all text-sec font-medium placeholder:text-sec/20"
                  placeholder="Tell me about your project requirements..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="interactive bg-thr text-black py-5 rounded-2xl font-black text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-2xl shadow-thr/20 uppercase tracking-widest"
              >
                Initiate Project via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

interface InputProps {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  type?: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, name, placeholder, value, type = "text", required, onChange }) => (
  <div className="flex flex-col gap-3">
    <label className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 text-sec">{label}</label>
    <input 
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="bg-main/50 border-2 border-muted/20 rounded-2xl p-4 outline-none focus:border-thr/50 transition-all text-sec font-medium placeholder:text-sec/20"
    />
  </div>
);

const ContactItem: React.FC<{ icon: string; label: string; value: string; link?: string }> = ({ label, value, link }) => (
  <a href={link} className="flex items-center gap-6 group interactive">
    <div className="w-16 h-16 bg-thr text-black rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-all duration-500 shadow-xl shadow-thr/10">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </div>
    <div>
      <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30 mb-1 text-sec">{label}</p>
      <p className="text-xl md:text-2xl font-black text-sec group-hover:text-thr transition-colors">{value}</p>
    </div>
  </a>
);

export default Contact;
