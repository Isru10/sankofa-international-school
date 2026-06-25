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

import { useEffect, useState } from "react";
import { ArrowRight, BookOpen, Globe2, Lightbulb, ShieldCheck, Play, Calendar, Users, Microscope, Palette, Trophy, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// --------------------------------------------------------
// THE ULTIMATE GLASSMORPHISM COMPONENT
// Every piece of content uses this to ensure the entire
// page remains transparent, blurred, and sophisticated.
// --------------------------------------------------------
const GlassPanel = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative overflow-hidden bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-xl transition-all duration-500 hover:bg-white/[0.06] hover:border-white/20 ${className}`}>
    <div className="relative z-10 h-full">{children}</div>
  </div>
);

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  // Universal Parallax Engine
  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#00152e] text-white selection:bg-secondary selection:text-primary pb-32">
      
      {/* ======================================================== */}
      {/* 1. UNIVERSAL PARALLAX BACKGROUND (Covers the entire page) */}
      {/* ======================================================== */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Base Image Background */}
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
          style={{ transform: `scale(${1 + scrollY * 0.0002})` }} // Extremely slow zoom parallax
        />
        {/* Deep Navy Overlay to maintain brand identity and readability */}
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
        
        {/* Floating Parallax Orbs (Gold and Light Blue) */}
        <div 
          className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[120px]"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }} // Moves up fast
        />
        <div 
          className="absolute top-[40%] right-[10%] w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[150px]"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }} // Moves up medium
        />
        <div 
          className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]"
          style={{ transform: `translateY(${scrollY * -0.3}px)` }} // Moves up fastest
        />
      </div>

      {/* ======================================================== */}
      {/* MAIN CONTENT WRAPPER (Floating over the parallax background) */}
      {/* ======================================================== */}
      <main className="relative z-10 w-full max-w-[1300px] mx-auto px-6 lg:px-12 flex flex-col gap-24 pt-32">

        {/* 1. HERO SECTION */}
        <section className="flex items-center justify-center min-h-[75vh] pt-12">
          <GlassPanel className="p-10 md:p-16 text-center max-w-5xl w-full flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.1] mb-6">
              Heritage <span className="font-light italic text-secondary">meets</span> Innovation.
            </h1>
            <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed max-w-3xl mb-10">
              Sankofa International School delivers a deeply enriching, world-class curriculum in Hawassa, Sidama Region. We bridge the gap between profound cultural wisdom and cutting-edge global readiness, preparing students to lead with unyielding integrity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button asChild size="lg" className="rounded-xl bg-secondary text-primary hover:bg-white hover:text-primary font-bold tracking-widest uppercase text-xs h-12 px-8 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                <Link href="/admissions">Begin Journey <ArrowRight size={14} className="ml-2" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-white/20 text-black hover:bg-white/10 hover:border-white/40 font-bold tracking-widest uppercase text-xs h-12 px-8 backdrop-blur-md transition-all duration-300">
                <Link href="/about"><Play size={14} className="mr-2" /> Explore Campus</Link>
              </Button>
            </div>
          </GlassPanel>
        </section>

        {/* 2. FLOATING STATS */}
             <section className="relative z-20 px-6 lg:px-12 -mt-20 max-w-[1200px] mx-auto w-full mb-24">
        {/* Changed background to white/[0.04] for a true glass contrast over the image */}
        <div className="w-full bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl p-8 md:p-12">
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4 items-center justify-center w-full">
            
            <div className="flex flex-col items-center justify-center text-center w-full lg:border-r border-white/10 last:border-0">
              <span className="text-4xl md:text-5xl font-black text-secondary tracking-tight">100%</span>
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white/70 mt-2">
                University Placement
              </span>
            </div>

            <div className="flex flex-col items-center justify-center text-center w-full lg:border-r border-white/10 last:border-0">
              <span className="text-4xl md:text-5xl font-black text-secondary tracking-tight">15+</span>
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white/70 mt-2">
                Global Partnerships
              </span>
            </div>

            <div className="flex flex-col items-center justify-center text-center w-full lg:border-r border-white/10 last:border-0">
              <span className="text-4xl md:text-5xl font-black text-secondary tracking-tight">12:1</span>
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white/70 mt-2">
                Student-Staff Ratio
              </span>
            </div>

            <div className="flex flex-col items-center justify-center text-center w-full last:border-0">
              <span className="text-4xl md:text-5xl font-black text-secondary tracking-tight">Top 1%</span>
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white/70 mt-2">
                Regional Excellence
              </span>
            </div>

          </div>

        </div>
      </section>


        {/* 3. HEAD OF SCHOOL WELCOME (Data Rich) */}
        <section>
          <GlassPanel className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* <div className="lg:col-span-5 relative h-[500px] rounded-xl overflow-hidden border border-white/10">
                <img src="/tekola-cheru.png" alt="Head of School" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
              </div> */}
              
              {/* OPTION 2 */}
              
              {/* <div className="lg:col-span-5 relative h-[500px] rounded-xl overflow-hidden border border-white/10 bg-white/[0.02] flex items-center justify-center">
  
  <img 
    src="/tekola-cheru.png" 
    alt="" 
    className="absolute inset-0 w-full h-full object-cover blur-lg opacity-30 scale-110 pointer-events-none" 
  />
  
  
  <img 
    src="/tekola-cheru.png" 
    alt="Head of School" 
    className="relative z-10 max-h-full max-w-full object-contain" 
  />
  
  
  <div className="absolute inset-0 bg-gradient-to-t from-[#00152e]/80 via-transparent to-transparent z-20" />
  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-20" />
</div> */}

{/* OPTION 3 */}

<div className="lg:col-span-5 rounded-xl overflow-hidden border border-white/10 bg-white/[0.02] flex items-center justify-center">
  <img 
    src="/tekola-cheru.png" 
    alt="Head of School" 
    className="w-full h-auto max-h-[500px] object-contain block mx-auto" 
  />
</div>
              <div className="lg:col-span-7 flex flex-col space-y-6">
                <h2 className="text-xs font-bold tracking-[0.2em] text-secondary uppercase flex items-center gap-2">
                  <div className="w-6 h-[1px] bg-secondary" /> Welcome Address
                </h2>
                <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                  A Foundation Built on <br className="hidden md:block" /> Absolute Integrity.
                </h3>
                <div className="space-y-4 text-white/70 text-base leading-relaxed">
                  <p>
                    "Education must serve a dual purpose: expanding the intellect while grounding the moral compass. At Sankofa, located in the vibrant heart of Hawassa, we do not simply teach students how to pass examinations. We teach them how to navigate an increasingly complex world."
                  </p>
                  <p>
                    "By drawing upon the 'Sankofa' philosophy—fetching what is valuable from our past to build the future—our students leave these halls not just as scholars, but as leaders with a profound understanding of their Ethiopian heritage and the skills required for the global stage."
                  </p>
                </div>
                <div className="pt-6 border-t border-white/10 mt-6">
                  <span className="block font-serif text-2xl font-black text-white">Mr.Tekola  Cheru</span>
                  <span className="block text-xs font-medium text-secondary uppercase tracking-widest mt-1">Founder and Head of School</span>
                </div>
              </div>
            </div>
          </GlassPanel>
        </section>

        {/* 4. ACADEMIC STAGES (Rich Data) */}
        <section className="flex flex-col gap-8">
          <div className="text-center max-w-2xl mx-auto mb-4">
             <h2 className="text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-3">Academic Structure</h2>
             <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">Curriculum Pathways</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassPanel className="p-8 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <BookOpen className="text-secondary w-6 h-6" />
              </div>
              <h4 className="text-2xl font-black text-white uppercase mb-4">Early Years</h4>
              <p className="text-white/70 text-sm leading-relaxed mb-6 flex-grow">
                Ages 3-5. We foster boundless curiosity in a play-based, nurturing environment designed to spark lifelong learning. Focus is placed on cognitive development, early literacy, and social-emotional growth.
              </p>
              <ul className="space-y-2 text-xs font-bold text-white/50 uppercase tracking-widest mb-6 border-t border-white/10 pt-4">
                <li>• Phonics & Literacy</li>
                <li>• Creative Arts</li>
                <li>• Motor Skill Development</li>
              </ul>
              <Button variant="link" className="text-secondary p-0 h-auto justify-start uppercase tracking-widest text-xs">Learn More <ArrowRight size={12} className="ml-1" /></Button>
            </GlassPanel>

            <GlassPanel className="p-8 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <Microscope className="text-secondary w-6 h-6" />
              </div>
              <h4 className="text-2xl font-black text-white uppercase mb-4">Primary Phase</h4>
              <p className="text-white/70 text-sm leading-relaxed mb-6 flex-grow">
                Grades 1-6. Building impenetrable academic core competencies alongside unbreakable character foundations. Introduction to scientific methods and global histories.
              </p>
              <ul className="space-y-2 text-xs font-bold text-white/50 uppercase tracking-widest mb-6 border-t border-white/10 pt-4">
                <li>• Core Mathematics</li>
                <li>• Integrated Science</li>
                <li>• Ethiopian History</li>
              </ul>
              <Button variant="link" className="text-secondary p-0 h-auto justify-start uppercase tracking-widest text-xs">Learn More <ArrowRight size={12} className="ml-1" /></Button>
            </GlassPanel>

            <GlassPanel className="p-8 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <Globe2 className="text-secondary w-6 h-6" />
              </div>
              <h4 className="text-2xl font-black text-white uppercase mb-4">Secondary Prep</h4>
              <p className="text-white/70 text-sm leading-relaxed mb-6 flex-grow">
                Grades 7-12. Rigorous university preparation featuring advanced STEM tracks, humanities, and elite global leadership programs designed for top-tier university placement.
              </p>
              <ul className="space-y-2 text-xs font-bold text-white/50 uppercase tracking-widest mb-6 border-t border-white/10 pt-4">
                <li>• Advanced Chemistry & Physics</li>
                <li>• Computer Science & Coding</li>
                <li>• International Relations</li>
              </ul>
              <Button variant="link" className="text-secondary p-0 h-auto justify-start uppercase tracking-widest text-xs">Learn More <ArrowRight size={12} className="ml-1" /></Button>
            </GlassPanel>
          </div>
        </section>

        {/* 5. BENTO GRID: CAMPUS LIFE & EXTRACURRICULARS */}
        <section className="flex flex-col gap-8">
           <div className="flex flex-col md:flex-row justify-between items-end mb-4 border-b border-white/10 pb-6">
              <div>
                <h2 className="text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-2">Holistic Development</h2>
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">Beyond The Classroom</h3>
              </div>
              <p className="text-white/60 max-w-sm text-sm">
                A fully realized student requires physical vitality and creative expression.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <GlassPanel className="p-8 md:col-span-2 flex flex-col justify-end min-h-[300px] relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 transition-opacity hover:opacity-30"></div>
                <div className="relative z-10">
                  <Trophy className="w-8 h-8 text-secondary mb-4" />
                  <h4 className="text-2xl font-black text-white uppercase mb-2">Elite Athletics</h4>
                  <p className="text-white/80 text-sm max-w-lg">Our Hawassa campus features Olympic-standard tracks, aquatic centers, and team sport facilities designed to build discipline and teamwork.</p>
                </div>
             </GlassPanel>

             <GlassPanel className="p-8 flex flex-col justify-end min-h-[300px] relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2080&auto=format&fit=crop')] bg-cover bg-center opacity-20 transition-opacity hover:opacity-30"></div>
                <div className="relative z-10">
                  <Palette className="w-8 h-8 text-secondary mb-4" />
                  <h4 className="text-2xl font-black text-white uppercase mb-2">Fine Arts</h4>
                  <p className="text-white/80 text-sm">Dedicated studios for visual arts, traditional Ethiopian crafts, and modern digital design.</p>
                </div>
             </GlassPanel>

             <GlassPanel className="p-8 flex flex-col justify-end min-h-[300px] relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 transition-opacity hover:opacity-30"></div>
                <div className="relative z-10">
                  <Lightbulb className="w-8 h-8 text-secondary mb-4" />
                  <h4 className="text-2xl font-black text-white uppercase mb-2">Innovation Hub</h4>
                  <p className="text-white/80 text-sm">Makerspaces equipped with 3D printers, robotics kits, and software engineering tools.</p>
                </div>
             </GlassPanel>

             <GlassPanel className="p-8 md:col-span-2 flex flex-col justify-center items-center text-center min-h-[300px]">
                <ShieldCheck className="w-12 h-12 text-secondary mb-6" />
                <h4 className="text-2xl font-black text-white uppercase mb-4">The Sankofa Standard</h4>
                <p className="text-white/70 text-sm max-w-xl leading-relaxed">
                  Every extracurricular activity is carefully mapped to our core values. We ensure that whether a student is on the field or in the lab, they are operating with integrity, respect, and a drive for excellence.
                </p>
             </GlassPanel>
           </div>
        </section>

        {/* 6. ADMISSIONS TIMELINE (Elongated Data) */}
        <section>
          <GlassPanel className="p-10 md:p-16">
            <div className="text-center mb-12">
               <h2 className="text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-2">Join Our Community</h2>
               <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">Admissions Process</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Decorative Line connecting steps */}
              <div className="hidden md:block absolute top-6 left-10 right-10 h-[1px] bg-white/20"></div>
              
              {[
                { step: "01", title: "Inquiry", desc: "Submit an online inquiry form and download our comprehensive 2026 academic prospectus." },
                { step: "02", title: "Campus Tour", desc: "Schedule a guided tour of our Hawassa campus to experience our facilities firsthand." },
                { step: "03", title: "Assessment", desc: "Students complete age-appropriate academic and behavioral assessments." },
                { step: "04", title: "Enrollment", desc: "Family interview with the Head of School, followed by final registration." }
              ].map((item, i) => (
                 <div key={i} className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                    <div className="w-12 h-12 rounded-full bg-primary border-2 border-secondary flex items-center justify-center text-secondary font-black shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                      {item.step}
                    </div>
                    <h4 className="text-xl font-black text-white uppercase">{item.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                 </div>
              ))}
            </div>

            <div className="mt-16 flex justify-center border-t border-white/10 pt-10">
               <Button asChild size="lg" className="rounded-xl bg-secondary text-primary hover:bg-white hover:text-primary font-bold tracking-widest uppercase text-xs h-14 px-12 transition-all duration-300">
                  <Link href="/portal">Start Online Application</Link>
               </Button>
            </div>
          </GlassPanel>
        </section>

      </main>
    </div>
  );
}