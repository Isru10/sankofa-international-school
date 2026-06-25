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
import { ArrowRight, BookOpen, Microscope, Music, Code, GraduationCap, FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const GlassPanel = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative overflow-hidden bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-xl transition-all duration-500 hover:bg-white/[0.06] hover:border-white/20 ${className}`}>
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
    <div className="relative w-full min-h-screen bg-[#00152e] text-white selection:bg-secondary selection:text-primary pb-32 pt-24">
      
      {/* Universal Parallax Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
          style={{ transform: `scale(${1 + scrollY * 0.0002})` }}
        />
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
        <div 
          className="absolute top-[30%] left-[10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[110px]"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        />
        <div 
          className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        />
      </div>

      <main className="relative z-10 w-full max-w-[1300px] mx-auto px-6 lg:px-12 flex flex-col gap-24 pt-16">
        
        {/* Page Hero */}
        <section>
          <GlassPanel className="p-10 md:p-16 text-center max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
              {t("heroTitle")} <span className="text-secondary font-light italic">{t("heroTitleItalic")}</span>
            </h1>
            <p className="text-white/80 text-base leading-relaxed max-w-2xl">
              {t("heroDesc")}
            </p>
          </GlassPanel>
        </section>

        {/* Detailed Curriculum Breakdown */}
        <section className="flex flex-col gap-8">
          <div className="border-b border-white/10 pb-6 mb-4">
             <h2 className="text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-2">{t("structureBadge")}</h2>
             <h3 className="text-3xl font-black text-white uppercase tracking-tight">{t("structureHeading")}</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <GlassPanel className="p-8 h-full flex flex-col">
                <BookOpen className="w-10 h-10 text-secondary mb-6" />
                <h4 className="text-2xl font-black text-white uppercase mb-4">{t("stage1Title")}</h4>
                <p className="text-white/75 text-sm leading-relaxed mb-6">
                  {t("stage1Desc")}
                </p>
                <div className="mt-auto border-t border-white/10 pt-4 text-xs font-bold text-white/50 uppercase tracking-widest">
                  {t("stage1Footer")}
                </div>
              </GlassPanel>
            </div>

            <div className="lg:col-span-4">
              <GlassPanel className="p-8 h-full flex flex-col">
                <Microscope className="w-10 h-10 text-secondary mb-6" />
                <h4 className="text-2xl font-black text-white uppercase mb-4">{t("stage2Title")}</h4>
                <p className="text-white/75 text-sm leading-relaxed mb-6">
                  {t("stage2Desc")}
                </p>
                <div className="mt-auto border-t border-white/10 pt-4 text-xs font-bold text-white/50 uppercase tracking-widest">
                  {t("stage2Footer")}
                </div>
              </GlassPanel>
            </div>

            <div className="lg:col-span-4">
              <GlassPanel className="p-8 h-full flex flex-col">
                <GraduationCap className="w-10 h-10 text-secondary mb-6" />
                <h4 className="text-2xl font-black text-white uppercase mb-4">{t("stage3Title")}</h4>
                <p className="text-white/75 text-sm leading-relaxed mb-6">
                  {t("stage3Desc")}
                </p>
                <div className="mt-auto border-t border-white/10 pt-4 text-xs font-bold text-white/50 uppercase tracking-widest">
                  {t("stage3Footer")}
                </div>
              </GlassPanel>
            </div>
          </div>
        </section>

        {/* Specialized Focus Areas */}
        <section className="flex flex-col gap-8">
           <div className="border-b border-white/10 pb-6 mb-4">
              <h2 className="text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-2">{t("specializationsBadge")}</h2>
              <h3 className="text-3xl font-black text-white uppercase tracking-tight">{t("specializationsHeading")}</h3>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <GlassPanel className="p-8">
                <div className="flex gap-6">
                  <Code className="w-12 h-12 text-secondary shrink-0" />
                  <div>
                    <h4 className="text-xl font-black text-white uppercase mb-3">{t("stemTitle")}</h4>
                    <p className="text-white/75 text-sm leading-relaxed">
                      {t("stemDesc")}
                    </p>
                  </div>
                </div>
              </GlassPanel>

              <GlassPanel className="p-8">
                <div className="flex gap-6">
                  <Music className="w-12 h-12 text-secondary shrink-0" />
                  <div>
                    <h4 className="text-xl font-black text-white uppercase mb-3">{t("artsTitle")}</h4>
                    <p className="text-white/75 text-sm leading-relaxed">
                      {t("artsDesc")}
                    </p>
                  </div>
                </div>
              </GlassPanel>
           </div>
        </section>

        {/* Assessment & Grading Standards */}
        <section>
          <GlassPanel className="p-10 md:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">{t("assessmentHeading")}</h3>
                <p className="text-white/75 text-sm leading-relaxed mb-6">
                  {t("assessmentDesc")}
                </p>
                <div className="flex items-center gap-4 text-sm font-bold text-secondary uppercase tracking-widest cursor-pointer hover:text-white transition-colors duration-300">
                  <FileText size={18} /> {t("assessmentCTA")}
                </div>
              </div>
              <div className="bg-white/[0.02] border border-white/10 rounded-xl p-8 space-y-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-xs font-bold text-white/60 uppercase tracking-widest">{t("exam1Label")}</span>
                  <span className="text-sm font-black text-secondary">{t("exam1Value")}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-xs font-bold text-white/60 uppercase tracking-widest">{t("exam2Label")}</span>
                  <span className="text-sm font-black text-secondary">{t("exam2Value")}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-white/60 uppercase tracking-widest">{t("gradLabel")}</span>
                  <span className="text-sm font-black text-secondary">{t("gradValue")}</span>
                </div>
              </div>
            </div>
          </GlassPanel>
        </section>

      </main>
    </div>
  );
}