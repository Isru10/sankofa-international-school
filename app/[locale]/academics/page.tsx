// "use client";

// import { useEffect, useState } from "react";
// import { ArrowRight, BookOpen, Microscope, Music, Code, GraduationCap, FileText } from "lucide-react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// const GlassPanel = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
//   <div className={`relative overflow-hidden bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-xl transition-all duration-500 hover:bg-white/[0.06] hover:border-white/20 ${className}`}>
//     <div className="relative z-10 h-full">{children}</div>
//   </div>
// );

// export default function Academics() {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       requestAnimationFrame(() => setScrollY(window.scrollY));
//     };
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="relative w-full min-h-screen bg-[#00152e] text-white selection:bg-secondary selection:text-primary pb-32 pt-24">
      
//       {/* Universal Parallax Background */}
//       <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
//         <div 
//           className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
//           style={{ transform: `scale(${1 + scrollY * 0.0002})` }}
//         />
//         <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
//         <div 
//           className="absolute top-[30%] left-[10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[110px]"
//           style={{ transform: `translateY(${scrollY * -0.1}px)` }}
//         />
//         <div 
//           className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"
//           style={{ transform: `translateY(${scrollY * -0.2}px)` }}
//         />
//       </div>

//       <main className="relative z-10 w-full max-w-[1300px] mx-auto px-6 lg:px-12 flex flex-col gap-24 pt-16">
        
//         {/* Page Hero */}
//         <section>
//           <GlassPanel className="p-10 md:p-16 text-center max-w-4xl mx-auto flex flex-col items-center">
//             <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
//               Academic <span className="text-secondary font-light italic">Excellence.</span>
//             </h1>
//             <p className="text-white/80 text-base leading-relaxed max-w-2xl">
//               Our academic framework is built on two pillars: rigorous global standards and an understanding of our cultural inheritance. We operate as an English-medium institution utilizing world-class frameworks.
//             </p>
//           </GlassPanel>
//         </section>

//         {/* Detailed Curriculum Breakdown */}
//         <section className="flex flex-col gap-8">
//           <div className="border-b border-white/10 pb-6 mb-4">
//              <h2 className="text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-2">Structure</h2>
//              <h3 className="text-3xl font-black text-white uppercase tracking-tight">The Academic Stages</h3>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//             <div className="lg:col-span-4">
//               <GlassPanel className="p-8 h-full flex flex-col">
//                 <BookOpen className="w-10 h-10 text-secondary mb-6" />
//                 <h4 className="text-2xl font-black text-white uppercase mb-4">Early Years Foundation</h4>
//                 <p className="text-white/75 text-sm leading-relaxed mb-6">
//                   Serving children aged 3 to 5. We use play-based and inquiry-driven models to help toddlers learn motor skills, early phonics, spatial awareness, and creative expression.
//                 </p>
//                 <div className="mt-auto border-t border-white/10 pt-4 text-xs font-bold text-white/50 uppercase tracking-widest">
//                   Ages 3 - 5 • Cambridge Early Years
//                 </div>
//               </GlassPanel>
//             </div>

//             <div className="lg:col-span-4">
//               <GlassPanel className="p-8 h-full flex flex-col">
//                 <Microscope className="w-10 h-10 text-secondary mb-6" />
//                 <h4 className="text-2xl font-black text-white uppercase mb-4">Primary Phase (G1-6)</h4>
//                 <p className="text-white/75 text-sm leading-relaxed mb-6">
//                   Integrating mathematics, sciences, English, and Amharic. Our primary school curriculum balances core intellectual training with ethical modeling, physical fitness, and heritage arts.
//                 </p>
//                 <div className="mt-auto border-t border-white/10 pt-4 text-xs font-bold text-white/50 uppercase tracking-widest">
//                   Grades 1 - 6 • Edexcel Primary
//                 </div>
//               </GlassPanel>
//             </div>

//             <div className="lg:col-span-4">
//               <GlassPanel className="p-8 h-full flex flex-col">
//                 <GraduationCap className="w-10 h-10 text-secondary mb-6" />
//                 <h4 className="text-2xl font-black text-white uppercase mb-4">Secondary Prep (G7-12)</h4>
//                 <p className="text-white/75 text-sm leading-relaxed mb-6">
//                   Intensive university preparation. Students select specialized paths in either Advanced STEM (Sciences & Math) or Liberal Arts & Humanities, ensuring top-tier placement.
//                 </p>
//                 <div className="mt-auto border-t border-white/10 pt-4 text-xs font-bold text-white/50 uppercase tracking-widest">
//                   Grades 7 - 12 • IGCSE & A-Levels
//                 </div>
//               </GlassPanel>
//             </div>
//           </div>
//         </section>

//         {/* Specialized Focus Areas */}
//         <section className="flex flex-col gap-8">
//            <div className="border-b border-white/10 pb-6 mb-4">
//               <h2 className="text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-2">Specializations</h2>
//               <h3 className="text-3xl font-black text-white uppercase tracking-tight">Focus & Departmental Strengths</h3>
//            </div>

//            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <GlassPanel className="p-8">
//                 <div className="flex gap-6">
//                   <Code className="w-12 h-12 text-secondary shrink-0" />
//                   <div>
//                     <h4 className="text-xl font-black text-white uppercase mb-3">STEM & Coding Initiative</h4>
//                     <p className="text-white/75 text-sm leading-relaxed">
//                       All secondary prep students undergo rigorous training in computational thinking. Our computer science laboratories teach coding (Python & JavaScript), robotics, and data science principles from Grade 7 onward.
//                     </p>
//                   </div>
//                 </div>
//               </GlassPanel>

//               <GlassPanel className="p-8">
//                 <div className="flex gap-6">
//                   <Music className="w-12 h-12 text-secondary shrink-0" />
//                   <div>
//                     <h4 className="text-xl font-black text-white uppercase mb-3">Heritage & Fine Arts</h4>
//                     <p className="text-white/75 text-sm leading-relaxed">
//                       Sankofa's arts program is deeply rooted. Students study traditional Ethiopian musical instruments, classical paintings, pottery, and cultural literature alongside global Western masterworks.
//                     </p>
//                   </div>
//                 </div>
//               </GlassPanel>
//            </div>
//         </section>

//         {/* Assessment & Grading Standards */}
//         <section>
//           <GlassPanel className="p-10 md:p-16">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//               <div>
//                 <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Assessing Potential, Not Just Memory.</h3>
//                 <p className="text-white/75 text-sm leading-relaxed mb-6">
//                   Our grading matrix complies with Cambridge Assessment standards. We measure progress through holistic projects, written analysis, presentations, and rigorous term-end formal exams. 
//                 </p>
//                 <div className="flex items-center gap-4 text-sm font-bold text-secondary uppercase tracking-widest">
//                   <FileText size={18} /> Review Academic Policy Document
//                 </div>
//               </div>
//               <div className="bg-white/[0.02] border border-white/10 rounded-xl p-8 space-y-4">
//                 <div className="flex justify-between items-center border-b border-white/10 pb-3">
//                   <span className="text-xs font-bold text-white/60 uppercase tracking-widest">Grade 10 Examinations</span>
//                   <span className="text-sm font-black text-secondary">IGCSE Standard</span>
//                 </div>
//                 <div className="flex justify-between items-center border-b border-white/10 pb-3">
//                   <span className="text-xs font-bold text-white/60 uppercase tracking-widest">Grade 12 Examinations</span>
//                   <span className="text-sm font-black text-secondary">GCE Advanced Levels (A-Levels)</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-xs font-bold text-white/60 uppercase tracking-widest">Graduation Benchmark</span>
//                   <span className="text-sm font-black text-secondary">International Standard Diploma</span>
//                 </div>
//               </div>
//             </div>
//           </GlassPanel>
//         </section>

//       </main>
//     </div>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { BookOpen, GraduationCap, Library, Users, Trophy, Palette, Map, CheckCircle2, ChevronRight } from "lucide-react";

const GlassPanel = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <div id={id} className={`relative scroll-mt-32 overflow-hidden bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-xl transition-all duration-500 hover:bg-white/[0.06] hover:border-white/20 ${className}`}>
    <div className="relative z-10 h-full">{children}</div>
  </div>
);

export default function Academics() {
  const t = useTranslations("Academics");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#00152e] text-white selection:bg-secondary selection:text-primary pb-32 pt-24 scroll-smooth">
      
      {/* Universal Parallax Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
          style={{ transform: `scale(${1 + scrollY * 0.0002})` }}
        />
        <div className="absolute inset-0 bg-primary/95 mix-blend-multiply" />
        <div className="absolute top-[30%] left-[10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[110px]" style={{ transform: `translateY(${scrollY * -0.1}px)` }} />
        <div className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" style={{ transform: `translateY(${scrollY * -0.2}px)` }} />
      </div>

      <main className="relative z-10 w-full max-w-[1300px] mx-auto px-6 lg:px-12 flex flex-col gap-24 pt-16">
        
        {/* Page Hero */}
        <section>
          <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight mb-4">
              {t("pageTitle")}
            </h1>
          </div>
        </section>

        {/* 1. School Overview */}
        <section id="overview">
          <GlassPanel className="p-10 md:p-16">
            <h2 className="text-xs font-bold tracking-[0.2em] text-secondary uppercase flex items-center gap-2 mb-6">
              <div className="w-6 h-[1px] bg-secondary" /> {t("overviewBadge")}
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase mb-8">
              {t("overviewTitle")}
            </h3>
            <div className="space-y-6 text-white/80 text-base md:text-lg leading-relaxed font-light">
              {t.raw("overviewText").map((p: string, i: number) => <p key={i}>{p}</p>)}
            </div>
          </GlassPanel>
        </section>

        {/* 2. Our Curriculum */}
        <section id="curriculum">
          <GlassPanel className="p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase mb-8">{t("currTitle")}</h2>
            <div className="space-y-6 text-white/80 text-base md:text-lg leading-relaxed font-light max-w-4xl mx-auto mb-12">
              <p>{t("currIntro")}</p>
              <p className="text-left font-bold text-white">{t("currStagesIntro")}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                {t.raw("currStages").map((stage: string, i: number) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-4 font-semibold text-sm">{stage}</div>
                ))}
              </div>
              <p className="text-left">{t("currCore")}</p>
              <p className="text-left">{t("currAssess")}</p>
              <p className="text-left">{t("currPearson")}</p>
              <p className="font-bold text-secondary text-lg mt-8">{t("currOutro")}</p>
            </div>
          </GlassPanel>
        </section>

        {/* 3. Foundation Stage & 4. Primary School */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <GlassPanel id="foundation" className="p-10 md:p-12">
            <BookOpen className="w-10 h-10 text-secondary mb-6" />
            <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-6">{t("foundTitle")}</h3>
            <div className="space-y-4 text-white/80 text-sm leading-relaxed font-light mb-6">
              <p>{t("foundIntro1")}</p>
              <p>{t("foundIntro2")}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 font-semibold">
                {t.raw("foundList").map((item: string, i: number) => (
                  <li key={i} className="flex items-center gap-2"><ChevronRight size={14} className="text-secondary" /> {item}</li>
                ))}
              </ul>
              <p className="mt-4">{t("foundAssess")}</p>
              <p>{t("foundOutro")}</p>
            </div>
          </GlassPanel>

          <GlassPanel id="primary" className="p-10 md:p-12">
            <GraduationCap className="w-10 h-10 text-secondary mb-6" />
            <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-6">{t("primTitle")}</h3>
            <div className="space-y-4 text-white/80 text-sm leading-relaxed font-light">
              <p>{t("primIntro1")}</p>
              <p>{t("primIntro2")}</p>
              <p>{t("primIntro3")}</p>
              <p>{t("primIntro4")}</p>
            </div>
          </GlassPanel>
        </section>

        {/* 5. Secondary School */}
        <section id="secondary">
          <GlassPanel className="p-10 md:p-16">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">{t("secTitle")}</h2>
              <p className="text-white/80 text-base md:text-lg leading-relaxed font-light">{t("secIntro1")}</p>
              <p className="text-white/80 text-base md:text-lg leading-relaxed font-light mt-4">{t("secIntro2")}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h4 className="text-xl font-black text-secondary uppercase mb-4">{t("ks3Title")}</h4>
                <div className="space-y-4 text-white/80 text-sm leading-relaxed font-light">
                  <p>{t("ks3Intro")}</p>
                  <ul className="space-y-2">
                    {t.raw("ks3List").map((item: string, i: number) => {
                      const [bold, rest] = item.split(":");
                      return <li key={i}><strong className="text-white">{bold}:</strong>{rest}</li>
                    })}
                  </ul>
                  <p>{t("ks3Teaching")}</p>
                  <p>{t("ks3Assess")}</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h4 className="text-xl font-black text-secondary uppercase mb-4">{t("ks4Title")}</h4>
                <div className="space-y-4 text-white/80 text-sm leading-relaxed font-light">
                  <p>{t("ks4Intro")}</p>
                  <p>{t("ks4CoreIntro")}</p>
                  <ul className="space-y-1 list-disc list-inside pl-2 font-semibold">
                    {t.raw("ks4List").map((item: string, i: number) => <li key={i}>{item}</li>)}
                  </ul>
                  <p>{t("ks4Options")}</p>
                  <p>{t("ks4Outro")}</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h4 className="text-xl font-black text-secondary uppercase mb-4">{t("ks5Title")}</h4>
                <div className="space-y-4 text-white/80 text-sm leading-relaxed font-light">
                  <p>{t("ks5Intro")}</p>
                  <p>{t("ks5Choose")}</p>
                  <ul className="space-y-1 list-disc list-inside pl-2 font-semibold">
                    {t.raw("ks5List").map((item: string, i: number) => <li key={i}>{item}</li>)}
                  </ul>
                  <p>{t("ks5Lessons")}</p>
                  <p>{t("ks5Assess")}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-12 max-w-4xl mx-auto text-center">
              <h4 className="text-2xl font-black text-white uppercase mb-6">{t("secApproachTitle")}</h4>
              <p className="text-white/80 text-base leading-relaxed font-light mb-6">{t("secApproachIntro")}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-sm font-medium text-white/80 mb-8">
                {t.raw("secApproachList").map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 bg-white/5 border border-white/10 rounded-lg p-4">
                    <CheckCircle2 className="text-secondary shrink-0" size={16} /> <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white/80 text-base leading-relaxed font-light">{t("secApproachOutro")}</p>
            </div>
          </GlassPanel>
        </section>

        {/* 6. Learning Resources */}
        <section id="resources">
          <GlassPanel className="p-10 md:p-16 flex flex-col md:flex-row items-center gap-12">
            <Library className="w-24 h-24 text-secondary shrink-0 hidden md:block" />
            <div>
              <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-6">{t("resTitle")}</h3>
              <div className="space-y-4 text-white/80 text-base leading-relaxed font-light">
                {t.raw("resText").map((p: string, i: number) => <p key={i}>{p}</p>)}
              </div>
            </div>
          </GlassPanel>
        </section>

        {/* 7. Our Community */}
        <section id="community">
          <GlassPanel className="p-10 md:p-16">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <Users className="w-16 h-16 text-secondary mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">{t("commTitle")}</h2>
              <div className="space-y-4 text-white/80 text-base md:text-lg leading-relaxed font-light">
                {t.raw("commIntro").map((p: string, i: number) => <p key={i}>{p}</p>)}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h4 className="text-xl font-black text-secondary uppercase mb-4">{t("commCultureTitle")}</h4>
                <p className="text-white/80 text-sm leading-relaxed font-light">{t("commCultureDesc")}</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h4 className="text-xl font-black text-secondary uppercase mb-4">{t("commCitizenTitle")}</h4>
                <p className="text-white/80 text-sm leading-relaxed font-light mb-4">{t("commCitizenDesc1")}</p>
                <p className="text-white/80 text-sm leading-relaxed font-light">{t("commCitizenDesc2")}</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h4 className="text-xl font-black text-secondary uppercase mb-4">{t("commPartnerTitle")}</h4>
                <p className="text-white/80 text-sm leading-relaxed font-light">{t("commPartnerDesc")}</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h4 className="text-xl font-black text-secondary uppercase mb-4">{t("commLegacyTitle")}</h4>
                <p className="text-white/80 text-sm leading-relaxed font-light mb-4">{t("commLegacyDesc1")}</p>
                <p className="text-white/80 text-sm leading-relaxed font-light">{t("commLegacyDesc2")}</p>
              </div>
            </div>
          </GlassPanel>
        </section>

        {/* 8. Sport */}
        <section id="sport">
          <GlassPanel className="p-10 md:p-16">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <Trophy className="w-16 h-16 text-secondary mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">{t("sportTitle")}</h2>
              <div className="space-y-4 text-white/80 text-base md:text-lg leading-relaxed font-light">
                {t.raw("sportIntro").map((p: string, i: number) => <p key={i}>{p}</p>)}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="border-t-2 border-secondary pt-6">
                <h4 className="text-lg font-black text-white uppercase mb-4">{t("sportWellTitle")}</h4>
                <p className="text-white/80 text-sm leading-relaxed font-light">{t("sportWellDesc")}</p>
              </div>
              <div className="border-t-2 border-secondary pt-6">
                <h4 className="text-lg font-black text-white uppercase mb-4">{t("sportSkillsTitle")}</h4>
                <p className="text-white/80 text-sm leading-relaxed font-light">{t("sportSkillsDesc")}</p>
              </div>
              <div className="border-t-2 border-secondary pt-6">
                <h4 className="text-lg font-black text-white uppercase mb-4">{t("sportAcadTitle")}</h4>
                <p className="text-white/80 text-sm leading-relaxed font-light">{t("sportAcadDesc")}</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center max-w-4xl mx-auto">
              <h4 className="text-xl font-black text-secondary uppercase mb-4">{t("sportCommitTitle")}</h4>
              <div className="space-y-4 text-white/80 text-sm md:text-base leading-relaxed font-light">
                {t.raw("sportCommitDesc").map((p: string, i: number) => <p key={i}>{p}</p>)}
              </div>
            </div>
          </GlassPanel>
        </section>

        {/* 9. Extra-Curriculars & 10. School Trips */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <GlassPanel id="extracurricular" className="p-10 md:p-12">
            <Palette className="w-12 h-12 text-secondary mb-6" />
            <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-8">{t("extraTitle")}</h3>
            <div className="space-y-6 text-white/80 text-sm leading-relaxed font-light">
              <p>{t("extraIntro1")}</p>
              <p>{t("extraIntro2")}</p>
              <div>
                <h4 className="text-lg font-bold text-white uppercase mb-2">{t("extraSkillsTitle")}</h4>
                <p>{t("extraSkillsDesc")}</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white uppercase mb-2">{t("extraBelongTitle")}</h4>
                <p>{t("extraBelongDesc")}</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white uppercase mb-2">{t("extraGrowthTitle")}</h4>
                <p>{t("extraGrowthDesc1")}</p>
                <p className="mt-2">{t("extraGrowthDesc2")}</p>
              </div>
            </div>
          </GlassPanel>

          <GlassPanel id="trips" className="p-10 md:p-12 bg-white/[0.05] border-secondary/30">
            <Map className="w-12 h-12 text-secondary mb-6" />
            <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-8">{t("tripsTitle")}</h3>
            <div className="space-y-6 text-white/80 text-sm leading-relaxed font-light">
              <p>{t("tripsIntro1")}</p>
              <p>{t("tripsIntro2")}</p>
              <div>
                <h4 className="text-lg font-bold text-white uppercase mb-2">{t("tripsBringTitle")}</h4>
                <p>{t("tripsBringDesc")}</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white uppercase mb-2">{t("tripsGrowthTitle")}</h4>
                <p>{t("tripsGrowthDesc")}</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white uppercase mb-2">{t("tripsMemoryTitle")}</h4>
                <p>{t("tripsMemoryDesc1")}</p>
                <p className="mt-2 font-medium text-white">{t("tripsMemoryDesc2")}</p>
              </div>
            </div>
          </GlassPanel>
        </section>

      </main>
    </div>
  );
}