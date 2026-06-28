// "use client";

// import { useEffect, useRef, useState, MouseEvent } from "react";
// import { ArrowRight, BookOpen, Globe2, Lightbulb, ShieldCheck, ChevronRight, Play } from "lucide-react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// // Elite Mouse-Tracking Glow Card Component
// const GlowCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
//   const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
//     const target = e.currentTarget;
//     const rect = target.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     target.style.setProperty("--mouse-x", `${x}px`);
//     target.style.setProperty("--mouse-y", `${y}px`);
//   };

//   return (
//     <div 
//       onMouseMove={handleMouseMove}
//       className={`relative group overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl transition-all duration-500 hover:border-secondary/50 ${className}`}
//     >
//       {/* Dynamic Glow Effect following the cursor */}
//       <div 
//         className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
//         style={{
//           background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(212, 175, 55, 0.15), transparent 40%)`
//         }}
//       />
//       <div className="relative z-10 h-full">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default function Home() {
//   const [scrolled, setScrolled] = useState(false);
//   const heroRef = useRef<HTMLDivElement>(null);

//   // Track scroll for dynamic parallax fading
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//       if (heroRef.current) {
//         const scrollY = window.scrollY;
//         heroRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
//         heroRef.current.style.opacity = `${1 - scrollY / 700}`;
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="relative w-full bg-background selection:bg-secondary selection:text-primary">
      
//       {/* 1. IMMERSIVE PARALLAX HERO WITH GLASSMORPHISM */}
//       <section className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden">
//         {/* Parallax Background */}
//         <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-fixed">
//           {/* Advanced Gradient Overlay */}
//           <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
//           <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-background" />
//         </div>

//         {/* Hero Content - Moves slower on scroll */}
//         <div ref={heroRef} className="relative z-10 w-full max-w-[1400px] px-6 lg:px-12 flex flex-col items-center justify-center pt-20">
          
//           {/* Ultimate Glassmorphic Panel */}
//           <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 md:p-16 rounded-2xl shadow-[0_8px_32px_0_rgba(0,40,85,0.5)] text-center flex flex-col items-center max-w-4xl animate-in zoom-in-95 duration-1000 slide-in-from-bottom-12">
//             <div className="px-4 py-1.5 mb-8 rounded-full border border-secondary/40 bg-secondary/10 backdrop-blur-md text-secondary text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2">
//               <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
//               Empowering The Next Generation
//             </div>

//             <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[1.1] mb-6">
//               Heritage <span className="font-light italic text-secondary">meets</span> <br /> 
//               Innovation.
//             </h1>

//             <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mb-10">
//               Sankofa International School delivers a deeply enriching, world-class curriculum in Hawassa, Ethiopia. We bridge the gap between profound cultural wisdom and cutting-edge global readiness.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
//               <Button asChild size="lg" className="rounded-full bg-secondary text-primary hover:bg-white hover:text-primary hover:scale-105 font-bold tracking-widest uppercase text-sm h-14 px-10 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
//                 <Link href="/admissions">Begin Journey <ArrowRight size={16} className="ml-2" /></Link>
//               </Button>
//               <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10 hover:border-white font-bold tracking-widest uppercase text-sm h-14 px-10 backdrop-blur-md transition-all duration-300">
//                 <Link href="/about"><Play size={16} className="mr-2" /> Campus Tour</Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 2. OVERLAPPING FLOATING STATS (Glassmorphism) */}
//       <section className="relative z-20 px-6 lg:px-12 -mt-24 max-w-[1400px] mx-auto w-full">
//         <div className="bg-white/80 backdrop-blur-xl border border-white rounded-3xl shadow-2xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
//           {[
//             { value: "100%", label: "University Placement" },
//             { value: "15+", label: "Global Partnerships" },
//             { value: "12:1", label: "Student-Staff Ratio" },
//             { value: "Top", label: "International Standard" },
//           ].map((stat, i) => (
//             <div key={i} className="flex flex-col items-center justify-center text-center group border-r border-primary/10 last:border-0">
//               <span className="text-4xl md:text-5xl font-black text-primary group-hover:-translate-y-2 group-hover:text-secondary transition-all duration-500">
//                 {stat.value}
//               </span>
//               <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary/50 mt-2">
//                 {stat.label}
//               </span>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 3. STICKY SCROLL NARRATIVE (Highly Advanced Layout Technique) */}
//       <section className="py-32 px-6 lg:px-12 max-w-[1400px] mx-auto w-full">
//         <div className="flex flex-col lg:flex-row gap-16 relative items-start">
          
//           {/* Left Side: Sticky Text Area */}
//           <div className="lg:w-1/2 lg:sticky lg:top-40 flex flex-col space-y-8">
//             <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase flex items-center gap-2">
//               <div className="w-8 h-[1px] bg-secondary" /> The Sankofa Ethos
//             </h2>
//             <h3 className="text-5xl md:text-6xl font-black text-primary uppercase tracking-tight leading-[1.1]">
//               Redefining <br className="hidden md:block"/> Academic <br className="hidden md:block"/> Excellence.
//             </h3>
//             <p className="text-primary/70 text-xl font-medium leading-relaxed max-w-md">
//               We do not just prepare students for exams; we prepare them for the real world. By integrating elite STEM facilities with a profound respect for the arts and humanities, we craft well-rounded visionaries.
//             </p>
//             <div className="pt-8">
//               <Button variant="link" className="text-primary font-bold tracking-widest uppercase text-sm p-0 hover:text-secondary hover:translate-x-2 transition-all duration-300">
//                 Explore Our Philosophy <ArrowRight size={16} className="ml-2" />
//               </Button>
//             </div>
//           </div>

//           {/* Right Side: Scrolling Image Cards with internal Parallax */}
//           <div className="lg:w-1/2 flex flex-col gap-12">
//             {[
//               {
//                 title: "Early Years",
//                 desc: "Fostering boundless curiosity in a play-based, nurturing environment designed to spark lifelong learning.",
//                 img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
//               },
//               {
//                 title: "Primary Education",
//                 desc: "Building impenetrable academic core competencies alongside unbreakable character and ethical foundations.",
//                 img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop"
//               },
//               {
//                 title: "Secondary & Prep",
//                 desc: "Rigorous university preparation featuring advanced STEM tracks, humanities, and elite global leadership programs.",
//                 img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
//               }
//             ].map((program, i) => (
//               <div key={i} className="group relative w-full h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-2xl">
//                 {/* Internal CSS Parallax Image */}
//                 <div 
//                   className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-110"
//                   style={{ backgroundImage: `url(${program.img})` }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                
//                 {/* Card Content */}
//                 <div className="absolute bottom-0 left-0 w-full p-10 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
//                   <div className="w-12 h-1 bg-secondary mb-6 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
//                   <h4 className="text-3xl font-black text-white uppercase mb-4">{program.title}</h4>
//                   <p className="text-white/80 text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
//                     {program.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 4. THE INTERACTIVE GLOW GRID (Rich Features) */}
//       <section className="py-32 w-full bg-primary relative overflow-hidden">
//         {/* Abstract Background Elements */}
//         <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
//         <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

//         <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
//           <div className="text-center mb-20">
//             <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-4">The Sankofa Difference</h2>
//             <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">An Ecosystem of Excellence</h3>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
//             <GlowCard className="p-10 lg:col-span-2 min-h-[300px] flex flex-col justify-end">
//               <ShieldCheck className="w-12 h-12 text-secondary mb-6" />
//               <h4 className="text-2xl font-black text-white uppercase mb-4 tracking-wide">Absolute Integrity</h4>
//               <p className="text-white/60 text-lg leading-relaxed font-medium max-w-2xl">
//                 Developing global citizens requires more than textbooks. We integrate an unyielding code of ethics, inspired by our Ethiopian roots, into every facet of our daily curriculum.
//               </p>
//             </GlowCard>

//             <GlowCard className="p-10 min-h-[300px] flex flex-col justify-end">
//               <Lightbulb className="w-12 h-12 text-white/50 mb-6" />
//               <h4 className="text-2xl font-black text-white uppercase mb-4 tracking-wide">STEM Labs</h4>
//               <p className="text-white/60 text-lg leading-relaxed font-medium">
//                 State-of-the-art facilities equipped with advanced robotics, coding, and physical science resources.
//               </p>
//             </GlowCard>

//             <GlowCard className="p-10 min-h-[300px] flex flex-col justify-end">
//               <Globe2 className="w-12 h-12 text-white/50 mb-6" />
//               <h4 className="text-2xl font-black text-white uppercase mb-4 tracking-wide">Global Outreach</h4>
//               <p className="text-white/60 text-lg leading-relaxed font-medium">
//                 Our 15+ international partnerships ensure students receive a borderless education.
//               </p>
//             </GlowCard>

//             <GlowCard className="p-10 lg:col-span-2 min-h-[300px] flex flex-col justify-end">
//                <div className="flex flex-col md:flex-row justify-between md:items-end gap-8">
//                  <div>
//                     <BookOpen className="w-12 h-12 text-secondary mb-6" />
//                     <h4 className="text-2xl font-black text-white uppercase mb-4 tracking-wide">Holistic Arts & Sports</h4>
//                     <p className="text-white/60 text-lg leading-relaxed font-medium max-w-xl">
//                       A fully realized human requires physical vitality and creative expression. Our expansive sports complexes and fine arts programs nurture the soul and body alike.
//                     </p>
//                  </div>
//                  <Button asChild variant="secondary" className="rounded-full bg-secondary text-primary hover:bg-white hover:text-primary font-bold uppercase tracking-widest px-8">
//                     <Link href="/academics">View Curriculum</Link>
//                  </Button>
//                </div>
//             </GlowCard>

//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }
"use client";

import { useEffect, useState, MouseEvent } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight, BookOpen, Globe2, Lightbulb, ShieldCheck, Play, Users, Trophy, Microscope, Clock, MapPin, Star, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const GlassPanel = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative overflow-hidden bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-xl transition-all duration-500 hover:bg-white/[0.06] hover:border-white/20 ${className}`}>
    <div className="relative z-10 h-full">{children}</div>
  </div>
);

const GlowCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className={`relative group overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 rounded-lg transition-all duration-500 hover:border-secondary/50 ${className}`}
    >
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{ background: `radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(212, 175, 55, 0.12), transparent 40%)` }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

export default function Home() {
  const t = useTranslations("Home");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#00152e] text-white selection:bg-secondary selection:text-primary pb-32">
      
      {/* Universal Parallax Background (Affects sections below the Hero) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
          style={{ transform: `scale(${1 + scrollY * 0.0002})` }}
        />
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
        <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[120px]" style={{ transform: `translateY(${scrollY * -0.2}px)` }} />
        <div className="absolute top-[40%] right-[10%] w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[150px]" style={{ transform: `translateY(${scrollY * -0.1}px)` }} />
      </div>

      {/* 1. EDGE-TO-EDGE HERO SECTION WITH GIF BACKGROUND */}
      <section className="relative z-10 w-full min-h-[95vh] flex items-center justify-center pt-32 pb-20 px-6 lg:px-12 overflow-hidden border-b border-white/5">
        
        {/* GIF BACKGROUND IMPLEMENTATION */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{ backgroundImage: `url('/sankofa-compound.gif')` }}
        />
        
        {/* Lightened overlay so the GIF is clearly visible, with a bottom fade to blend smoothly into the page below */}
        <div className="absolute inset-0 z-0 bg-[#00152e]/40 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#00152e] via-[#00152e]/30 to-transparent pointer-events-none" />

        {/* Hero Content (Removed GlassPanel so it sits directly on the page, added drop shadows for readability) */}
        <div className="relative z-10 text-center max-w-5xl w-full flex flex-col items-center mt-10 md:mt-0">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[1.1] mb-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
            {t("title")}
          </h1>
          <p className="text-white/95 text-base md:text-xl font-medium leading-relaxed max-w-3xl mb-10 drop-shadow-[0_3px_8px_rgba(0,0,0,0.6)]">
            {t("desc")}
          </p>
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <Button asChild size="lg" className="rounded-xl bg-secondary text-primary hover:bg-white hover:text-primary font-bold tracking-widest uppercase text-sm h-14 px-10 transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.4)]">
              <Link href="/admissions">{t("ctaBegin")} <ArrowRight size={16} className="ml-2" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl border-white/40 text-white bg-black/20 hover:bg-white/20 hover:border-white/60 font-bold tracking-widest uppercase text-sm h-14 px-10 backdrop-blur-md transition-all duration-300">
              <Link href="/about"><Play size={16} className="mr-2" /> {t("ctaTour")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* EXPANDED MAIN CONTAINER (Wider Layout for rest of content) */}
      <main className="relative z-10 w-full max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-16 flex flex-col gap-28 pt-24">

        {/* 2. BALANCED STATS */}
        <section>
          <GlassPanel className="p-8 lg:p-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4 items-center justify-center w-full">
              <div className="flex flex-col items-center justify-center text-center w-full lg:border-r border-white/10 last:border-0">
                <span className="text-5xl md:text-6xl font-black text-secondary tracking-tight">{t("stat1Val")}</span>
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/70 mt-3">{t("stat1Label")}</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center w-full lg:border-r border-white/10 last:border-0">
                <span className="text-5xl md:text-6xl font-black text-secondary tracking-tight">{t("stat2Val")}</span>
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/70 mt-3">{t("stat2Label")}</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center w-full lg:border-r border-white/10 last:border-0">
                <span className="text-5xl md:text-6xl font-black text-secondary tracking-tight">{t("stat3Val")}</span>
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/70 mt-3">{t("stat3Label")}</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center w-full last:border-0">
                <span className="text-5xl md:text-6xl font-black text-secondary tracking-tight">{t("stat4Val")}</span>
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/70 mt-3">{t("stat4Label")}</span>
              </div>
            </div>
          </GlassPanel>
        </section>

        {/* 3. ETHOS & WELCOME */}
        <section>
          <GlassPanel className="p-8 md:p-14 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
              <div className="lg:col-span-6 xl:col-span-5 relative h-[500px] lg:h-[650px] rounded-xl overflow-hidden border border-white/10 group">
                <img src="/students2.png" alt="Ethos" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-primary/30 mix-blend-overlay"></div>
              </div>
              <div className="lg:col-span-6 xl:col-span-7 flex flex-col space-y-8">
                <h2 className="text-xs lg:text-sm font-bold tracking-[0.2em] text-secondary uppercase flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-secondary" /> {t("ethosBadge")}
                </h2>
                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                  {t("ethosHeading")}
                </h3>
                <div className="space-y-5 text-white/80 text-lg font-light leading-relaxed">
                  {t.raw("ethosParagraphs").map((p: string, i: number) => <p key={i}>{p}</p>)}
                </div>
                <div className="pt-6">
                  <Button asChild variant="link" className="text-secondary p-0 hover:text-white uppercase tracking-widest text-sm font-bold transition-colors">
                    <Link href="/about">{t("ethosLink")} <ArrowRight size={14} className="ml-2" /></Link>
                  </Button>
                </div>
              </div>
            </div>
          </GlassPanel>
        </section>

        {/* 4. QUICK FACTS TABLE */}
        <section>
          <GlassPanel className="p-10 md:p-16 lg:p-20">
            <div className="text-center mb-12">
               <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-3">{t("qfBadge")}</h2>
               <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">{t("qfHeading")}</h3>
               <p className="text-white/70 text-base mt-4 max-w-3xl mx-auto">{t("qfDesc")}</p>
            </div>
            <div className="overflow-x-auto bg-white/5 border border-white/10 rounded-xl">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-white/20 text-sm font-bold text-white/50 uppercase tracking-widest bg-white/5">
                    <th className="p-8 w-1/3">{t("qfCol1")}</th>
                    <th className="p-8 w-2/3">{t("qfCol2")}</th>
                  </tr>
                </thead>
                <tbody className="text-base font-semibold text-white/80 divide-y divide-white/10">
                  {t.raw("qfRows").map((row: { category: string, detail: string }, i: number) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="p-8 font-black text-white">{row.category}</td>
                      <td className="p-8 text-secondary tracking-wide">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassPanel>
        </section>

        {/* 5. DYNAMIC PATHWAYS */}
        <section className="flex flex-col gap-10">
          <div className="text-center max-w-3xl mx-auto mb-6">
             <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-4">{t("curriculumBadge")}</h2>
             <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">{t("curriculumHeading")}</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassPanel className="p-10 flex flex-col h-full">
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                <BookOpen className="text-secondary w-7 h-7" />
              </div>
              <h4 className="text-3xl font-black text-white uppercase mb-4">{t("program1")}</h4>
              <p className="text-white/70 text-base leading-relaxed mb-8 flex-grow">{t("program1Desc")}</p>
              <Button asChild variant="link" className="text-secondary p-0 h-auto justify-start uppercase tracking-widest text-sm">
                <Link href="/academics">{t("curriculumLink")} <ArrowRight size={14} className="ml-1" /></Link>
              </Button>
            </GlassPanel>

            <GlassPanel className="p-10 flex flex-col h-full">
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                <Microscope className="text-secondary w-7 h-7" />
              </div>
              <h4 className="text-3xl font-black text-white uppercase mb-4">{t("program2")}</h4>
              <p className="text-white/70 text-base leading-relaxed mb-8 flex-grow">{t("program2Desc")}</p>
              <Button asChild variant="link" className="text-secondary p-0 h-auto justify-start uppercase tracking-widest text-sm">
                <Link href="/academics">{t("curriculumLink")} <ArrowRight size={14} className="ml-1" /></Link>
              </Button>
            </GlassPanel>

            <GlassPanel className="p-10 flex flex-col h-full">
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                <Globe2 className="text-secondary w-7 h-7" />
              </div>
              <h4 className="text-3xl font-black text-white uppercase mb-4">{t("program3")}</h4>
              <p className="text-white/70 text-base leading-relaxed mb-8 flex-grow">{t("program3Desc")}</p>
              <Button asChild variant="link" className="text-secondary p-0 h-auto justify-start uppercase tracking-widest text-sm">
                <Link href="/academics">{t("curriculumLink")} <ArrowRight size={14} className="ml-1" /></Link>
              </Button>
            </GlassPanel>
          </div>
        </section>

        {/* 6. CAMPUS FACILITIES */}
        <section>
          <GlassPanel className="p-10 md:p-16 lg:p-20">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
              <div>
                <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-3">{t("facBadge")}</h2>
                <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">{t("facHeading")}</h3>
              </div>
              <p className="text-white/70 text-base max-w-md">{t("facDesc")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-auto min-h-[600px] lg:h-[750px]">
              <div className="relative rounded-xl overflow-hidden group lg:col-span-2 lg:row-span-2 min-h-[300px]">
                <img src="/micro.png" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Library" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00152e] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-8 left-8">
                  <h4 className="text-3xl font-black text-white uppercase">{t("facImg1")}</h4>
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden group min-h-[250px]">
                <img src="library1.png" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Labs" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00152e] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                  <h4 className="text-xl font-black text-white uppercase">{t("facImg2")}</h4>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden group min-h-[250px]">
                <img src="/students1.png" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Sports" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00152e] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                  <h4 className="text-xl font-black text-white uppercase">{t("facImg3")}</h4>
                </div>
              </div>
            </div>
          </GlassPanel>
        </section>

        {/* 7. ECOSYSTEM OF EXCELLENCE (Bento Grid) */}
        <section className="flex flex-col gap-10">
           <div className="flex flex-col md:flex-row justify-between items-end mb-6 border-b border-white/10 pb-8">
              <div>
                <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-3">{t("bentoBadge")}</h2>
                <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">{t("bentoHeading")}</h3>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <GlowCard className="p-10">
               <ShieldCheck className="w-10 h-10 text-secondary mb-8" />
               <h4 className="text-xl font-black text-white uppercase mb-4 tracking-wide">{t("bentoFeature1")}</h4>
               <p className="text-white/70 text-base leading-relaxed font-light">{t("bentoFeature1Desc")}</p>
             </GlowCard>
             <GlowCard className="p-10">
               <Star className="w-10 h-10 text-white/50 mb-8" />
               <h4 className="text-xl font-black text-white uppercase mb-4 tracking-wide">{t("bentoFeature2")}</h4>
               <p className="text-white/70 text-base leading-relaxed font-light">{t("bentoFeature2Desc")}</p>
             </GlowCard>
             <GlowCard className="p-10">
               <Globe2 className="w-10 h-10 text-white/50 mb-8" />
               <h4 className="text-xl font-black text-white uppercase mb-4 tracking-wide">{t("bentoFeature3")}</h4>
               <p className="text-white/70 text-base leading-relaxed font-light">{t("bentoFeature3Desc")}</p>
             </GlowCard>
           </div>
        </section>

        {/* 8. STUDENT LIFE */}
        <section>
          <GlassPanel className="p-10 md:p-16 lg:p-20 bg-white/[0.05]">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-3">{t("lifeBadge")}</h2>
                  <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-8">{t("lifeHeading")}</h3>
                  <p className="text-white/80 text-lg leading-relaxed font-light mb-10">{t("lifeDesc")}</p>
                  
                  <div className="space-y-8">
                    {t.raw("lifeFeatures").map((feat: { title: string, text: string }, i: number) => (
                      <div key={i} className="flex gap-5">
                        <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 border border-secondary/30">
                          <Users size={20} className="text-secondary" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold uppercase text-base mb-2">{feat.title}</h4>
                          <p className="text-white/60 text-sm leading-relaxed">{feat.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative h-[600px] lg:h-[700px] rounded-xl overflow-hidden">
                   <img src="/sankofa-compound.gif" className="absolute inset-0 w-full h-full object-cover" alt="Student Life" />
                   <div className="absolute inset-0 bg-primary/30 mix-blend-overlay"></div>
                </div>
             </div>
          </GlassPanel>
        </section>

        {/* 9. ADMISSIONS PROCESS */}
        <section>
          <GlassPanel className="p-10 md:p-16 lg:p-20">
            <div className="text-center mb-16">
               <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-3">{t("timelineBadge")}</h2>
               <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">{t("timelineHeading")}</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
              <div className="hidden md:block absolute top-7 left-12 right-12 h-[1px] bg-white/20"></div>
              
              {[
                { step: "01", title: t("step1"), desc: t("step1Desc") },
                { step: "02", title: t("step2"), desc: t("step2Desc") },
                { step: "03", title: t("step3"), desc: t("step3Desc") },
                { step: "04", title: t("step4"), desc: t("step4Desc") }
              ].map((item, i) => (
                 <div key={i} className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left space-y-5">
                    <div className="w-14 h-14 rounded-full bg-primary border-2 border-secondary flex items-center justify-center text-secondary font-black text-lg shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                      {item.step}
                    </div>
                    <h4 className="text-2xl font-black text-white uppercase">{item.title}</h4>
                    <p className="text-white/60 text-base leading-relaxed">{item.desc}</p>
                 </div>
              ))}
            </div>
          </GlassPanel>
        </section>

        {/* 10. FINAL CTA BANNER */}
        <section>
          <div className="relative overflow-hidden bg-secondary text-primary rounded-xl p-14 md:p-24 text-center shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80')] bg-cover bg-center opacity-10 mix-blend-multiply" />
            <div className="relative z-10 max-w-4xl mx-auto space-y-10">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight">{t("ctaFinalHeading")}</h2>
              <p className="text-primary/80 font-medium text-xl md:text-2xl leading-relaxed">{t("ctaFinalDesc")}</p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
                <Button asChild size="lg" className="rounded-xl bg-primary text-white hover:bg-[#00152e] font-bold tracking-widest uppercase text-sm h-16 px-12 transition-all duration-300 shadow-xl">
                  <Link href="/portal">{t("ctaFinalBtn1")}</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-xl border-primary text-primary hover:bg-primary hover:text-white font-bold tracking-widest uppercase text-sm h-16 px-12 transition-all duration-300">
                  <Link href="/contact">{t("ctaFinalBtn2")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}