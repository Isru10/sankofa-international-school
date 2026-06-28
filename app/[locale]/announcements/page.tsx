"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Megaphone, Calendar, ArrowRight, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";

const GlassPanel = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <div id={id} className={`relative scroll-mt-32 overflow-hidden bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-xl transition-all duration-500 hover:bg-white/[0.06] hover:border-white/20 ${className}`}>
    <div className="relative z-10 h-full">{children}</div>
  </div>
);

export default function Announcements() {
  const t = useTranslations("Announcements");
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
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
          style={{ transform: `scale(${1 + scrollY * 0.0002})` }}
        />
        <div className="absolute inset-0 bg-primary/95 mix-blend-multiply" />
        <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[130px]" style={{ transform: `translateY(${scrollY * -0.15}px)` }} />
        <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" style={{ transform: `translateY(${scrollY * -0.2}px)` }} />
      </div>

      <main className="relative z-10 w-full max-w-[1300px] mx-auto px-6 lg:px-12 flex flex-col gap-16 pt-16">
        
        <section>
          <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-secondary mb-6 shadow-lg">
               <Megaphone size={32} />
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight mb-4">{t("pageTitle")}</h1>
            <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-3xl">{t("pageDesc")}</p>
          </div>
        </section>

        {/* Featured Announcement */}
        <section>
          <GlassPanel className="p-8 md:p-12 border-secondary/50">
            <div className="flex items-center gap-3 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
              </span>
              <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase">{t("featuredBadge")}</h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight mb-4">{t("featuredTitle")}</h3>
            <p className="text-white/70 text-base md:text-lg leading-relaxed font-light mb-8 max-w-4xl">{t("featuredDesc")}</p>
            <Button className="rounded-lg bg-secondary text-primary hover:bg-white font-bold uppercase tracking-widest text-xs h-12 px-8 transition-all">
              {t("readMore")} <ArrowRight size={14} className="ml-2" />
            </Button>
          </GlassPanel>
        </section>

        {/* Recent News Grid */}
        <section>
          <div className="flex items-center gap-3 mb-8 px-2">
            <Bell className="text-secondary" size={24} />
            <h2 className="text-2xl font-black tracking-tight text-white uppercase">{t("recentBadge")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.raw("newsList").map((news: { date: string, title: string, desc: string }, i: number) => (
              <GlassPanel key={i} className="p-8 flex flex-col h-full group cursor-pointer">
                <div className="flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-widest mb-4">
                  <Calendar size={14} /> {news.date}
                </div>
                <h4 className="text-xl font-black text-white uppercase leading-tight mb-3 group-hover:text-secondary transition-colors">{news.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed font-light flex-grow">{news.desc}</p>
                <div className="mt-6 border-t border-white/10 pt-4 flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest group-hover:text-secondary transition-colors">
                  {t("readMore")} <ArrowRight size={12} />
                </div>
              </GlassPanel>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}