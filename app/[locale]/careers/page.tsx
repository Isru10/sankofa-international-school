"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Briefcase, Heart, GraduationCap, Globe2, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";

const GlassPanel = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <div id={id} className={`relative scroll-mt-32 overflow-hidden bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-xl transition-all duration-500 hover:bg-white/[0.06] hover:border-white/20 ${className}`}>
    <div className="relative z-10 h-full">{children}</div>
  </div>
);

export default function Careers() {
  const t = useTranslations("Careers");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => requestAnimationFrame(() => setScrollY(window.scrollY));
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#00152e] text-white selection:bg-secondary selection:text-primary pb-32 pt-24 scroll-smooth">
      
      {/* Universal Parallax Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
          style={{ transform: `scale(${1 + scrollY * 0.0002})` }}
        />
        <div className="absolute inset-0 bg-primary/95 mix-blend-multiply" />
        <div className="absolute top-[30%] left-[5%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]" style={{ transform: `translateY(${scrollY * -0.1}px)` }} />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" style={{ transform: `translateY(${scrollY * -0.2}px)` }} />
      </div>

      <main className="relative z-10 w-full max-w-[1300px] mx-auto px-6 lg:px-12 flex flex-col gap-24 pt-16">
        
        {/* Page Hero */}
        <section>
          <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-secondary mb-6 shadow-lg">
               <Briefcase size={32} />
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight mb-4">{t("pageTitle")}</h1>
            <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-3xl">{t("pageDesc")}</p>
          </div>
        </section>

        {/* Why Join Us */}
        <section>
          <GlassPanel className="p-10 md:p-16">
            <div className="text-center mb-12">
               <h2 className="text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-2">{t("whyBadge")}</h2>
               <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">{t("whyHeading")}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col h-full">
                <Heart className="w-10 h-10 text-secondary mb-6" />
                <h4 className="text-xl font-black text-white uppercase mb-4">{t("val1Title")}</h4>
                <p className="text-white/70 text-sm leading-relaxed">{t("val1Desc")}</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col h-full">
                <GraduationCap className="w-10 h-10 text-secondary mb-6" />
                <h4 className="text-xl font-black text-white uppercase mb-4">{t("val2Title")}</h4>
                <p className="text-white/70 text-sm leading-relaxed">{t("val2Desc")}</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col h-full">
                <Globe2 className="w-10 h-10 text-secondary mb-6" />
                <h4 className="text-xl font-black text-white uppercase mb-4">{t("val3Title")}</h4>
                <p className="text-white/70 text-sm leading-relaxed">{t("val3Desc")}</p>
              </div>
            </div>
          </GlassPanel>
        </section>

        {/* Open Positions List */}
        <section>
          <GlassPanel className="p-10 md:p-16">
            <div className="flex justify-between items-end border-b border-white/10 pb-6 mb-8">
               <div>
                 <h2 className="text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-2">{t("openingsBadge")}</h2>
                 <h3 className="text-3xl font-black text-white uppercase tracking-tight">{t("openingsHeading")}</h3>
               </div>
            </div>
            
            <div className="space-y-4">
              {t.raw("jobs").map((job: { title: string, type: string, dept: string }, i: number) => (
                <div key={i} className="group bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col md:flex-row justify-between md:items-center gap-6 hover:bg-white/10 hover:border-secondary transition-all cursor-pointer">
                  <div>
                    <h4 className="text-xl font-black text-white uppercase mb-2">{job.title}</h4>
                    <div className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase text-white/50">
                      <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-md">{job.dept}</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="rounded-lg border-white/20 text-primary group-hover:bg-secondary group-hover:border-secondary group-hover:text-primary font-bold uppercase tracking-widest text-xs h-10 px-6 transition-all duration-300 w-fit">
                    {t("applyBtn")}
                  </Button>
                </div>
              ))}
            </div>
          </GlassPanel>
        </section>

      </main>
    </div>
  );
}