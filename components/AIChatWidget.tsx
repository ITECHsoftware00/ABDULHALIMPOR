
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; text: string }[]>([
    { role: 'assistant', text: "How can I assist you with Abdulhalim's expertise today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const apiKey = import.meta.env.API_KEY || import.meta.env.GEMINI_API_KEY || '';
      if (!apiKey) {
        setMessages(prev => [...prev, { role: 'assistant', text: "API key not configured. Please contact via WhatsApp." }]);
        setIsTyping(false);
        return;
      }
      const ai = new GoogleGenAI({ apiKey });
      const responseStream = await ai.models.generateContentStream({
        model: 'gemini-3-flash-preview',
        contents: [...messages, { role: 'user', text: userMessage }].map(m => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: `You are the Professional AI Concierge for Abdulhalim Muhammad. 
          Abdulhalim is a world-class Senior Software Architect.
          Your tone: Minimalist, professional, expert-level. 
          Keep responses extremely brief (max 2 sentences).
          Primary objective: Assist users with technical queries about his work or schedule a talk via WhatsApp +380951594897.`,
          temperature: 0.5,
        },
      });

      let fullResponse = '';
      setMessages(prev => [...prev, { role: 'assistant', text: '' }]);

      for await (const chunk of responseStream) {
        const text = chunk.text;
        if (text) {
          fullResponse += text;
          setMessages(prev => {
            const last = prev[prev.length - 1];
            const updated = [...prev];
            updated[prev.length - 1] = { ...last, text: fullResponse };
            return updated;
          });
        }
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', text: "Error connecting to AI. Please try WhatsApp." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[1000] font-sans pointer-events-none">
      <div className="flex flex-col items-end pointer-events-auto">
        {/* Chat Interface */}
        <div 
          className={`w-[320px] mb-4 bg-card-bg/95 backdrop-blur-2xl border-2 border-thr/10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-500 origin-bottom-right overflow-hidden ${
            isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-50 opacity-0 translate-y-10 pointer-events-none'
          }`}
        >
          {/* Header */}
          <div className="p-5 border-b border-muted/10 flex items-center justify-between bg-main/20">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-thr rounded-full animate-pulse shadow-[0_0_8px_#D4F534]"></div>
              <span className="text-[10px] font-black tracking-[0.3em] text-sec uppercase opacity-60">AI Concierge</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-sec/30 hover:text-thr transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="h-64 overflow-y-auto p-5 flex flex-col gap-4 scrollbar-hide">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] p-4 rounded-2xl text-[13px] font-bold leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-thr text-black rounded-tr-none' 
                    : 'bg-main/50 text-sec border border-muted/10 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && messages[messages.length-1].role === 'user' && (
              <div className="flex justify-start">
                <div className="bg-main/50 p-4 rounded-2xl rounded-tl-none border border-muted/10">
                  <div className="flex gap-1.5">
                    <div className="w-1 h-1 bg-thr rounded-full animate-bounce"></div>
                    <div className="w-1 h-1 bg-thr rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1 h-1 bg-thr rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Simple Form Input */}
          <div className="p-4 pt-0">
            <form onSubmit={handleSend} className="relative group">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="How can I help?" 
                className="w-full bg-main/50 border-2 border-muted/10 rounded-xl py-3.5 px-4 pr-12 text-xs font-black outline-none focus:border-thr/50 transition-all text-sec placeholder:text-sec/20"
              />
              <button 
                type="submit"
                disabled={!input.trim() || isTyping}
                className="absolute right-1.5 top-1.5 w-9 h-9 bg-thr text-black rounded-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all disabled:opacity-30 disabled:grayscale shadow-lg shadow-thr/20"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </form>
          </div>
        </div>

        {/* Small Professional Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`h-14 px-6 rounded-full flex items-center gap-3 transition-all duration-500 shadow-2xl hover:scale-105 active:scale-95 ${
            isOpen ? 'bg-sec text-main' : 'bg-thr text-black shadow-thr/30'
          }`}
        >
          <div className="relative">
            <svg className={`w-6 h-6 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              )}
            </svg>
            {!isOpen && <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-black"></span>}
          </div>
          <span className="text-[10px] font-black tracking-[0.3em] uppercase">{isOpen ? 'Minimize' : 'Ask Expert'}</span>
        </button>
      </div>
    </div>
  );
};

export default AIChatWidget;
