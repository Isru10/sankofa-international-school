"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {  ExternalLink, Tv, Loader2, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FaYoutube } from "react-icons/fa";

const GlassPanel = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <div id={id} className={`relative scroll-mt-32 overflow-hidden bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-xl transition-all duration-500 hover:bg-white/[0.06] hover:border-white/20 ${className}`}>
    <div className="relative z-10 h-full">{children}</div>
  </div>
);

// Define the Video Object Structure
interface YouTubeVideo {
  id: string;
  title: string;
  desc: string;
  date: string;
}

export default function StreamPage() {
  const t = useTranslations("Stream");
  const [scrollY, setScrollY] = useState(0);
  
  // Real-time State
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Parallax Engine
  useEffect(() => {
    const handleScroll = () => requestAnimationFrame(() => setScrollY(window.scrollY));
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch YouTube Videos securely from our Next.js API
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch("/api/youtube");
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        
        if (data.videos && data.videos.length > 0) {
          setVideos(data.videos);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Failed to fetch YouTube videos:", err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const latestVideo = videos.length > 0 ? videos[0] : null;
  const recentVideos = videos.length > 1 ? videos.slice(1) : [];

  return (
    <div className="relative w-full min-h-screen bg-[#00152e] text-white selection:bg-secondary selection:text-primary pb-32 pt-24 scroll-smooth">
      
      {/* Universal Parallax Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
          style={{ transform: `scale(${1 + scrollY * 0.0002})` }}
        />
        <div className="absolute inset-0 bg-primary/95 mix-blend-multiply" />
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px]" style={{ transform: `translateY(${scrollY * -0.1}px)` }} />
        <div className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px]" style={{ transform: `translateY(${scrollY * -0.2}px)` }} />
      </div>

      <main className="relative z-10 w-full max-w-[1300px] mx-auto px-6 lg:px-12 flex flex-col gap-16 pt-16">
        
        {/* Page Hero */}
        <section>
          <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
            <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-red-500 mb-6 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
               <FaYoutube size={32} />
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight mb-4">
              {t("pageTitle")}
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
              {t("pageDesc")}
            </p>
          </div>
        </section>

        {/* Dynamic State Handlers */}
        {isLoading ? (
          <section className="animate-pulse space-y-16">
            <GlassPanel className="p-6 md:p-10 h-[500px] flex items-center justify-center">
              <Loader2 size={48} className="animate-spin text-white/20" />
            </GlassPanel>
          </section>
        ) : error || !latestVideo ? (
          <section>
            <GlassPanel className="p-16 text-center border-red-500/30">
               <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Broadcast Offline</h3>
               <p className="text-white/60 mb-8">We are currently unable to retrieve the video feed. Please visit our official channel directly.</p>
               <Button asChild className="rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest text-xs h-12 px-8">
                  <a href="https://youtube.com/c/CambridgeAcademyEthiopia" target="_blank" rel="noopener noreferrer">
                    {t("ctaBtn")} <ExternalLink size={14} className="ml-2" />
                  </a>
               </Button>
            </GlassPanel>
          </section>
        ) : (
          <>
            {/* 1. LATEST / FEATURED UPLOAD (Fetched from API) */}
            <section>
              <GlassPanel className="p-6 md:p-10">
                <div className="flex items-center gap-3 mb-6 px-4">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                  <h2 className="text-sm font-bold tracking-[0.2em] text-white uppercase">{t("latestBadge")}</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8 w-full aspect-video rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-black">
                    <iframe 
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${latestVideo.id}?autoplay=0&rel=0`}
                      title={latestVideo.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    />
                  </div>
                  
                  <div className="lg:col-span-4 flex flex-col space-y-4 px-2">
                    <p className="text-secondary font-bold text-xs uppercase tracking-widest">{latestVideo.date}</p>
                    <h3 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight leading-tight line-clamp-3" title={latestVideo.title}>
                      {latestVideo.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed font-light mb-6 line-clamp-6">
                      {latestVideo.desc || "Watch the latest update from our campus."}
                    </p>
                    <Button asChild className="rounded-lg mt-auto bg-white/10 border border-white/20 hover:bg-red-600 hover:border-red-600 text-white font-bold uppercase tracking-widest text-xs h-12 w-fit transition-all duration-300">
                      <a href={`https://www.youtube.com/watch?v=${latestVideo.id}`} target="_blank" rel="noopener noreferrer">
                        {t("watchOnYt")} <ExternalLink size={14} className="ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </GlassPanel>
            </section>

            {/* 2. RECENT UPLOADS GRID (Fetched from API) */}
            {recentVideos.length > 0 && (
              <section>
                 <div className="flex items-center gap-3 mb-8 px-2">
                   <Tv className="text-secondary" size={24} />
                   <h2 className="text-2xl font-black tracking-tight text-white uppercase">{t("recentBadge")}</h2>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   {recentVideos.map((video, i) => (
                      <GlassPanel key={i} className="p-4 flex flex-col h-full group">
                        <div className="w-full aspect-video rounded-lg overflow-hidden border border-white/10 mb-6 bg-black relative">
                          <div className="absolute inset-0 z-10 pointer-events-none group-hover:bg-black/10 transition-colors duration-300" />
                          <iframe 
                            className="w-full h-full relative z-0"
                            src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                            title={video.title}
                            allowFullScreen
                          />
                        </div>
                        <div className="flex-grow flex flex-col px-2">
                          <p className="text-secondary font-bold text-[0.65rem] uppercase tracking-widest mb-2">{video.date}</p>
                          <h4 className="text-base font-black text-white uppercase leading-tight mb-3 line-clamp-2" title={video.title}>
                            {video.title}
                          </h4>
                          <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-white hover:text-red-400 uppercase tracking-widest flex items-center gap-1 transition-colors mt-auto pt-4">
                            {t("watchOnYt")} <ExternalLink size={12} />
                          </a>
                        </div>
                      </GlassPanel>
                   ))}
                 </div>
              </section>
            )}
          </>
        )}

        {/* 3. CHANNEL CTA */}
        <section>
          <div className="relative overflow-hidden bg-gradient-to-r from-red-600 to-red-900 rounded-xl p-12 md:p-16 text-center shadow-2xl border border-red-500/30">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80')] bg-cover bg-center opacity-10 mix-blend-multiply" />
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <FaYoutube size={48} className="text-white mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">{t("ctaHeading")}</h2>
              <p className="text-white/90 font-medium text-sm md:text-base leading-relaxed">{t("ctaDesc")}</p>
              <div className="pt-6">
                <Button asChild size="lg" className="rounded-xl bg-white text-red-700 hover:bg-gray-100 font-black tracking-widest uppercase text-xs h-14 px-10 transition-all duration-300 shadow-xl">
                  <a href="https://www.youtube.com/@Sankofaschoolsystem" target="_blank" rel="noopener noreferrer">
                    {t("ctaBtn")} <ArrowRight size={14} className="ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}