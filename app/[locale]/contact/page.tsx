"use client";

import { useEffect, useState, FormEvent } from "react";
import { useTranslations } from "next-intl";
import { MapPin, Phone, Mail, Send, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const GlassPanel = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative overflow-hidden bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-xl transition-all duration-500 hover:bg-white/[0.06] hover:border-white/20 ${className}`}>
    <div className="relative z-10 h-full">{children}</div>
  </div>
);

export default function Contact() {
  const t = useTranslations("Contact");
  const [scrollY, setScrollY] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => requestAnimationFrame(() => setScrollY(window.scrollY));
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000); // Resets after 5 seconds
  };

  return (
    <div className="relative w-full min-h-screen bg-[#00152e] text-white selection:bg-secondary selection:text-primary pb-32 pt-24 scroll-smooth">
      
      {/* Universal Parallax Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
          style={{ transform: `scale(${1 + scrollY * 0.0002})` }}
        />
        <div className="absolute inset-0 bg-primary/95 mix-blend-multiply" />
        <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[130px]" style={{ transform: `translateY(${scrollY * -0.15}px)` }} />
        <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" style={{ transform: `translateY(${scrollY * -0.2}px)` }} />
      </div>

      <main className="relative z-10 w-full max-w-[1300px] mx-auto px-6 lg:px-12 flex flex-col gap-16 pt-16">
        
        <section>
          <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight mb-4">{t("pageTitle")}</h1>
            <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-3xl">{t("pageDesc")}</p>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <GlassPanel className="p-10 md:p-12">
            <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-8">{t("formTitle")}</h3>
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/60 uppercase tracking-widest">{t("lblName")}</label>
                    <input required type="text" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm outline-none focus:border-secondary transition-colors text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/60 uppercase tracking-widest">{t("lblEmail")}</label>
                    <input required type="email" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm outline-none focus:border-secondary transition-colors text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/60 uppercase tracking-widest">{t("lblSubject")}</label>
                  <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm outline-none focus:border-secondary transition-colors text-white appearance-none">
                    {t.raw("subjects").map((opt: string, i: number) => <option key={i} className="bg-[#00152e]">{opt}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/60 uppercase tracking-widest">{t("lblMessage")}</label>
                  <textarea required rows={5} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm outline-none focus:border-secondary transition-colors text-white resize-none"></textarea>
                </div>
                <Button type="submit" className="w-full rounded-lg bg-secondary text-primary hover:bg-white hover:text-primary font-bold uppercase tracking-widest text-xs h-14 transition-all">
                  {t("btnSubmit")} <Send size={14} className="ml-2" />
                </Button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center animate-in zoom-in-95 duration-500">
                <CheckCircle2 size={64} className="text-secondary mb-6 animate-bounce" />
                <h4 className="text-2xl font-black text-white uppercase tracking-tight mb-2">{t("successTitle")}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{t("successDesc")}</p>
              </div>
            )}
          </GlassPanel>

          {/* Contact Information & Map Placeholder */}
          <div className="flex flex-col gap-8">
            <GlassPanel className="p-10 flex flex-col gap-8 h-fit">
              <div>
                <h4 className="text-xs font-bold text-secondary uppercase tracking-widest mb-4 flex items-center gap-2"><MapPin size={16}/> {t("infoAddressTitle")}</h4>
                <p className="text-white/80 text-sm leading-relaxed">{t("infoAddress")}</p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <h4 className="text-xs font-bold text-secondary uppercase tracking-widest mb-4 flex items-center gap-2"><Phone size={16}/> {t("infoContactTitle")}</h4>
                <p className="text-white/80 text-sm font-semibold mb-1">+251 (0) 46 220 XXXX</p>
                <p className="text-white/80 text-sm font-semibold">admissions@sankofahawassa.edu</p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <h4 className="text-xs font-bold text-secondary uppercase tracking-widest mb-4 flex items-center gap-2"><Clock size={16}/> {t("infoHoursTitle")}</h4>
                <p className="text-white/80 text-sm mb-1">{t("infoHours1")}</p>
                <p className="text-white/80 text-sm">{t("infoHours2")}</p>
              </div>
            </GlassPanel>

            <GlassPanel className="p-2 h-64 relative flex items-center justify-center text-center">
              <div className="absolute inset-0 bg-white/5 opacity-50" />
              <div className="relative z-10 p-6">
                <MapPin size={32} className="text-secondary mx-auto mb-4" />
                <h4 className="text-lg font-black text-white uppercase tracking-widest mb-2">{t("mapTitle")}</h4>
                <p className="text-white/60 text-xs">{t("mapDesc")}</p>
              </div>
            </GlassPanel>
          </div>

        </section>

      </main>
    </div>
  );
}