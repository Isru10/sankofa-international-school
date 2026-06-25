"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import { 
  Phone, Send, MessageSquareCode, 
  X, SendHorizontal, Bot, User, Loader2, Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export default function FloatingWidgets() {
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: "Welcome to Sankofa! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [interactionId, setInteractionId] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input;
    const updatedMessages = [...messages, { role: "user" as const, content: userMessage }];
    setMessages(updatedMessages);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map(m => ({ role: m.role, content: m.content })),
          previousInteractionId: interactionId
        })
      });

      if (!response.ok) throw new Error("API Error");

      const data = await response.json();
      
      setMessages((prev) => [
        ...prev, 
        { role: "assistant", content: data.reply || "I encountered an empty response." }
      ]);
      setInteractionId(data.interactionId || null);
    } catch (error) {
      setMessages((prev) => [
        ...prev, 
        { role: "assistant", content: "My gateway is down. Please email admissions@sankofahawassa.edu." }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* ======================================================== */}
      {/* FAR BOTTOM-LEFT: ACTIVE SOCIAL DOCK */}
      {/* ======================================================== */}
      <div className="fixed bottom-6 left-6 z-[60]">
        
        {/* Popping Social Icons (Absolute so they don't block the DOM) */}
        <div className={`absolute bottom-16 left-0 flex flex-col gap-3 mb-2 transition-all duration-500 origin-bottom ${isSocialOpen ? "scale-100 opacity-100 translate-y-0" : "scale-0 opacity-0 translate-y-10 pointer-events-none"}`}>
          <a href="https://wa.me/251462200000" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-all duration-300 shadow-lg hover:scale-110">
            <MessageSquareCode size={18} />
          </a>
          <a href="https://t.me/SankofaHawassa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-all duration-300 shadow-lg hover:scale-110">
            <Send size={16} className="rotate-[-35deg] translate-x-[-1px]" />
          </a>
         
        </div>

        {/* Floating Social Button */}
        <div className="relative group cursor-pointer">
          <div className={`absolute -inset-2 rounded-full border border-dashed border-secondary/40 transition-opacity duration-300 pointer-events-none ${isSocialOpen ? 'opacity-0' : 'opacity-100 animate-[spin_6s_linear_infinite]'}`} />
          <Button 
            onClick={() => setIsSocialOpen(!isSocialOpen)}
            className={`relative w-12 h-12 rounded-full bg-primary border border-secondary text-secondary hover:bg-secondary hover:text-primary transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center justify-center z-10 ${isSocialOpen ? "rotate-[135deg]" : "hover:scale-110"}`}
          >
            <Phone size={20} className={`transition-all duration-300 ${isSocialOpen ? "" : "animate-pulse"}`} />
          </Button>
        </div>
      </div>


      {/* ======================================================== */}
      {/* FAR BOTTOM-RIGHT: SMALL ACTIVE AI CHATBOT PANEL */}
      {/* ======================================================== */}
      <div className="fixed bottom-6 right-6 z-[60]">
        
        {/* Chat Window Panel (Absolute positioned to stop blocking the hamburger menu) */}
        <div className={`absolute bottom-16 right-0 w-[300px] sm:w-[320px] h-[380px] max-h-[70vh] bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex flex-col mb-2 overflow-hidden origin-bottom-right transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isChatOpen ? "scale-100 opacity-100 translate-y-0" : "scale-0 opacity-0 translate-y-10 pointer-events-none"}`}>
          
          {/* Header */}
          <div className="bg-primary/90 backdrop-blur-md border-b border-white/10 p-3 flex justify-between items-center text-primary-foreground relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/20 blur-xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="flex items-center gap-2 relative z-10">
              <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center text-primary shadow-[0_0_10px_rgba(212,175,55,0.5)]">
                <Bot size={16} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-black uppercase tracking-wide flex items-center gap-1">Sankofa AI <Sparkles size={10} className="text-secondary" /></span>
                <span className="text-[0.55rem] font-bold uppercase tracking-widest text-secondary flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_5px_#4ade80]" /> Online
                </span>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsChatOpen(false)} className="text-white hover:bg-white/10 rounded-full cursor-pointer h-7 w-7 relative z-10">
              <X size={16} />
            </Button>
          </div>

          {/* Message Log */}
          <div className="flex-grow p-3 overflow-y-auto space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 max-w-[85%] ${msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"}`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-primary shrink-0 shadow-md ${msg.role === "user" ? "bg-secondary" : "bg-white/20 border border-white/10 text-white"}`}>
                  {msg.role === "user" ? <User size={12} /> : <Bot size={12} />}
                </div>
                <div className={`p-2.5 text-[0.7rem] font-medium leading-relaxed rounded-xl shadow-md ${msg.role === "user" ? "bg-secondary text-primary rounded-tr-none" : "bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-tl-none"}`}>
                  {msg.content}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 max-w-[85%] mr-auto animate-in fade-in duration-300">
                <div className="w-6 h-6 rounded-full bg-white/20 border border-white/10 flex items-center justify-center text-white shrink-0 shadow-md">
                  <Loader2 size={12} className="animate-spin text-secondary" />
                </div>
                <div className="p-2.5 text-[0.7rem] font-medium leading-relaxed rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-tl-none flex items-center gap-1">
                  <span className="animate-pulse">Thinking</span>
                  <span className="animate-[bounce_1s_infinite_100ms]">.</span>
                  <span className="animate-[bounce_1s_infinite_200ms]">.</span>
                  <span className="animate-[bounce_1s_infinite_300ms]">.</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <form onSubmit={handleSendMessage} className="p-2 bg-primary/40 backdrop-blur-lg border-t border-white/10 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..." 
              className="flex-grow px-3 py-1.5 bg-white/5 border border-white/10 text-white placeholder-white/40 text-[0.7rem] font-medium rounded-lg outline-none focus:border-secondary focus:bg-white/10 transition-all shadow-inner"
            />
            <Button type="submit" size="icon" variant="secondary" className="rounded-lg h-8 w-8 shrink-0 cursor-pointer hover:scale-105 transition-transform shadow-md">
              <SendHorizontal size={14} />
            </Button>
          </form>
        </div>

        {/* Floating Chat Trigger Button with Animations */}
        <div className="relative group cursor-pointer">
          {/* Floating 'Need Help?' Speech Bubble */}
          <div className={`absolute -top-10 right-0 whitespace-nowrap bg-white/10 backdrop-blur-md border border-white/20 text-white text-[0.6rem] font-bold uppercase tracking-widest px-2.5 py-1.5 rounded-lg shadow-xl flex items-center gap-1.5 pointer-events-none transition-all duration-300 animate-bounce ${isChatOpen ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}>
            <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" />
            Need help?
            <div className="absolute -bottom-1 right-4 w-2 h-2 bg-white/10 border-b border-r border-white/20 rotate-45" />
          </div>

          {/* Continuous Sonar Ripple Effect */}
          <div className={`absolute inset-0 rounded-full bg-secondary/40 transition-opacity duration-300 pointer-events-none ${isChatOpen ? 'opacity-0' : 'opacity-100 animate-ping'}`} />
          
          <Button 
            onClick={() => setIsChatOpen(!isChatOpen)}
            className={`relative w-12 h-12 rounded-full bg-primary border border-secondary text-secondary hover:bg-secondary hover:text-primary transition-all duration-500 shadow-[0_0_25px_rgba(212,175,55,0.4)] flex items-center justify-center z-10 ${isChatOpen ? "rotate-90 scale-90" : "hover:scale-110"}`}
          >
            {isChatOpen ? <X size={20} /> : <Bot size={20} className="animate-[wiggle_3s_ease-in-out_infinite]" />}
          </Button>
        </div>

      </div>
    </>
  );
}