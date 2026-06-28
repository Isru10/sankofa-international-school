// "use client";

// import { useEffect, useState } from "react";
// import { ArrowRight, Award, Target, Shield, Users, Milestone, BookOpen } from "lucide-react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// const GlassPanel = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
//   <div className={`relative overflow-hidden bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-xl transition-all duration-500 hover:bg-white/[0.06] hover:border-white/20 ${className}`}>
//     <div className="relative z-10 h-full">{children}</div>
//   </div>
// );

// export default function About() {
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
//           className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
//           style={{ transform: `scale(${1 + scrollY * 0.0002})` }}
//         />
//         <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
//         <div 
//           className="absolute top-[20%] right-[5%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]"
//           style={{ transform: `translateY(${scrollY * -0.15}px)` }}
//         />
//         <div 
//           className="absolute bottom-[10%] left-[10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[130px]"
//           style={{ transform: `translateY(${scrollY * -0.2}px)` }}
//         />
//       </div>

//       <main className="relative z-10 w-full max-w-[1300px] mx-auto px-6 lg:px-12 flex flex-col gap-24 pt-16">
        
//         {/* Page Hero */}
//         <section>
//           <GlassPanel className="p-10 md:p-16 text-center max-w-4xl mx-auto flex flex-col items-center">
//             <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
//               Honoring Heritage. <br />
//               <span className="text-secondary font-light italic">Inspiring Futures.</span>
//             </h1>
//             <p className="text-white/80 text-base leading-relaxed max-w-2xl">
//               Sankofa International School was established to provide an uncompromising educational environment in Hawassa. We believe that to build a vision for tomorrow, we must reach back and embrace our cultural roots.
//             </p>
//           </GlassPanel>
//         </section>

//         {/* The Sankofa Philosophy Section */}
//         <section>
//           <GlassPanel className="p-8 md:p-12">
//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
//               <div className="lg:col-span-7 flex flex-col space-y-6">
//                 <h2 className="text-xs font-bold tracking-[0.2em] text-secondary uppercase flex items-center gap-2">
//                   <div className="w-6 h-[1px] bg-secondary" /> Our Philosophy
//                 </h2>
//                 <h3 className="text-3xl font-black text-white uppercase tracking-tight">The Meaning of Sankofa</h3>
//                 <p className="text-white/70 text-base leading-relaxed">
//                   Derived from the Akan people of West Africa, "Sankofa" is symbolized by a bird reaching back to retrieve a valuable egg from its back. It teaches us that the past is a rich repository of wisdom. 
//                 </p>
//                 <p className="text-white/70 text-base leading-relaxed">
//                   In Hawassa, we apply this philosophy by grounding our students in traditional Ethiopian values of community, respect, and deep integrity, while equipping them with modern, globally competitive academic tools.
//                 </p>
//               </div>
//               <div className="lg:col-span-5 relative h-[350px] rounded-xl overflow-hidden border border-white/10 flex items-center justify-center bg-white/[0.02]">
//                 {/* Symbolic Representation */}
//                 <div className="text-center p-8">
//                   <Milestone strokeWidth={1} className="w-32 h-32 text-secondary/30 mx-auto mb-4" />
//                   <span className="block text-xs uppercase tracking-[0.35em] text-secondary font-black">SANKOFA BIRD</span>
//                 </div>
//               </div>
//             </div>
//           </GlassPanel>
//         </section>

//         {/* Mission, Vision & Values Grid */}
//         <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <GlassPanel className="p-8">
//             <Target className="w-8 h-8 text-secondary mb-6" />
//             <h4 className="text-xl font-black text-white uppercase mb-4">Our Mission</h4>
//             <p className="text-white/70 text-sm leading-relaxed">
//               To cultivate a community of critical thinkers and ethical leaders who excel academically, operate with unyielding integrity, and proudly honor their heritage.
//             </p>
//           </GlassPanel>

//           <GlassPanel className="p-8">
//             <Award className="w-8 h-8 text-secondary mb-6" />
//             <h4 className="text-xl font-black text-white uppercase mb-4">Our Vision</h4>
//             <p className="text-white/70 text-sm leading-relaxed">
//               To be recognized as East Africa’s premier educational institution, bridging the gap between historical African wisdom and futuristic technological readiness.
//             </p>
//           </GlassPanel>

//           <GlassPanel className="p-8">
//             <Shield className="w-8 h-8 text-secondary mb-6" />
//             <h4 className="text-xl font-black text-white uppercase mb-4">Our Core Values</h4>
//             <p className="text-white/70 text-sm leading-relaxed">
//               Our culture is governed by four central pillars: Integrity (Haqqa), Community (Sidaama), Innovation (Oromiyaa), and Academic Rigor (Excellence).
//             </p>
//           </GlassPanel>
//         </section>

//         {/* Leadership & Faculty Board */}
//         <section className="flex flex-col gap-8">
//           <div className="text-center max-w-2xl mx-auto mb-4">
//              <h2 className="text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-3">Sankofa Leadership</h2>
//              <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">Our Faculty & Board</h3>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             {[
//               { name: "Mr. Tekola Cheru", role: "Head of School", bio: "Ph.D. in Educational Leadership from Harvard University.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" },
//               { name: "Wzr. Aster Menelik", role: "Academic Director", bio: "M.Ed. with 15+ years managing top-tier international institutions.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" },
//               { name: "Ato Kassa Belay", role: "Director of Admissions", bio: "Dedicated advisor assisting families in Hawassa for a decade.", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" },
//               { name: "Dr. Selamawit Hailu", role: "STEM Lead Practitioner", bio: "Specialist in robotics curricula and modern physical sciences.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" }
//             ].map((member, i) => (
//               <GlassPanel key={i} className="p-6 flex flex-col items-center text-center h-full">
//                 <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-secondary/40 mb-6 relative">
//                   <img src={member.img} alt={member.name} className="absolute inset-0 w-full h-full object-cover" />
//                 </div>
//                 <h4 className="text-lg font-black text-white uppercase leading-none mb-1">{member.name}</h4>
//                 <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-4">{member.role}</span>
//                 <p className="text-white/60 text-xs leading-relaxed mt-2">{member.bio}</p>
//               </GlassPanel>
//             ))}
//           </div>
//         </section>

//         {/* Global Accreditations Banner */}
//         <section>
//           <GlassPanel className="p-8 text-center flex flex-col items-center">
//             <h4 className="text-xs font-bold tracking-[0.25em] text-secondary uppercase mb-4">Accreditation & Standards</h4>
//             <div className="flex flex-wrap justify-center gap-12 text-sm font-semibold tracking-widest uppercase text-white/50">
//               <span>Pearson Edexcel</span>
//               <span>•</span>
//               <span>Ethiopian Ministry of Education Approved</span>
//               <span>•</span>
//               <span>CIS Candidate Status</span>
//             </div>
//           </GlassPanel>
//         </section>

//       </main>
//     </div>
//   );
// }

<<<<<<< HEAD
=======

>>>>>>> ced3080c9562531d750cfa698a505c61674c5de7
"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
<<<<<<< HEAD
import { CheckCircle2, ChevronRight } from "lucide-react";

// The Universal Glass Panel Component
const GlassPanel = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <div id={id} className={`relative scroll-mt-32 overflow-hidden bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-xl transition-all duration-500 hover:bg-white/[0.06] hover:border-white/20 ${className}`}>
    <div className="relative z-10 h-full">{children}</div>
  </div>
);
=======
import { Link } from "@/i18n/routing";
import { Award, Target, Shield, Milestone } from "lucide-react";

>>>>>>> ced3080c9562531d750cfa698a505c61674c5de7

export default function About() {
  const t = useTranslations("About");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<<<<<<< HEAD
    <div className="relative w-full min-h-screen bg-[#00152e] text-white selection:bg-secondary selection:text-primary pb-32 pt-24 scroll-smooth">
=======
    <div className="relative w-full min-h-screen bg-[#00152e] text-white selection:bg-secondary selection:text-primary pb-32 pt-24">
>>>>>>> ced3080c9562531d750cfa698a505c61674c5de7
      
      {/* Universal Parallax Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
<<<<<<< HEAD
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
          style={{ transform: `scale(${1 + scrollY * 0.0002})` }}
        />
        <div className="absolute inset-0 bg-primary/95 mix-blend-multiply" />
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" style={{ transform: `translateY(${scrollY * -0.1}px)` }} />
        <div className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]" style={{ transform: `translateY(${scrollY * -0.2}px)` }} />
=======
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
          style={{ transform: `scale(${1 + scrollY * 0.0002})` }}
        />
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
>>>>>>> ced3080c9562531d750cfa698a505c61674c5de7
      </div>

      <main className="relative z-10 w-full max-w-[1300px] mx-auto px-6 lg:px-12 flex flex-col gap-24 pt-16">
        
        {/* Page Hero */}
        <section>
<<<<<<< HEAD
          <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight mb-4">
              {t("pageTitle")}
=======
          <div className="relative overflow-hidden bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-xl p-10 md:p-16 text-center max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
              {t("title")}
>>>>>>> ced3080c9562531d750cfa698a505c61674c5de7
            </h1>
          </div>
        </section>

<<<<<<< HEAD
        {/* 1. Chairman’s Welcome */}
        <section>
          <GlassPanel id="welcome" className="p-10 md:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-secondary/40 shadow-2xl mb-6 relative">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" alt="Mr. Tekola Cheru" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-2xl font-black text-white">{t("chairName")}</h4>
                <p className="text-secondary font-bold text-xs uppercase tracking-widest mt-1">{t("chairTitle")}</p>
                <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mt-1">{t("schoolName")}</p>
              </div>
              <div className="lg:col-span-8 flex flex-col space-y-6">
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
                  {t("welcomeHeading")}
                </h2>
                <div className="space-y-4 text-white/80 text-sm md:text-base leading-relaxed font-medium">
                  {t.raw("welcomeParagraphs").map((p: string, i: number) => (
                    <p key={i}>{p}</p>
                  ))}
                  <p className="pt-6">{t("welcomeSignoff")}</p>
                </div>
              </div>
            </div>
          </GlassPanel>
        </section>

        {/* 2. WHAT MAKES US DIFFERENT? */}
        <section>
          <GlassPanel id="difference" className="p-10 md:p-16">
            <div className="text-center max-w-4xl mx-auto mb-12">
               <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">{t("diffHeading")}</h2>
               <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed">{t("diffIntro")}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/80 text-sm md:text-base leading-relaxed font-medium">
              <div className="space-y-6">
                <div>
                  <strong className="text-secondary text-lg block mb-1">{t("diff1Title")}</strong>
                  <p>{t("diff1Desc")}</p>
                </div>
                <div>
                  <strong className="text-secondary text-lg block mb-1">{t("diff2Title")}</strong>
                  <p>{t("diff2Desc")}</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <strong className="text-secondary text-lg block mb-1">{t("diff3Title")}</strong>
                  <p>{t("diff3Desc")}</p>
                </div>
                <div>
                  <strong className="text-secondary text-lg block mb-1">{t("diff4Title")}</strong>
                  <p>{t("diff4Desc")}</p>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center max-w-4xl mx-auto text-white/80 text-base md:text-lg font-medium leading-relaxed">
              <p>{t("diffOutro")}</p>
            </div>
          </GlassPanel>
        </section>

        {/* 3. MISSION & VISION */}
        <section>
          <GlassPanel id="mission" className="p-10 md:p-16">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-12 text-center">{t("missionVisionHeading")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-black text-secondary uppercase mb-4">{t("visionTitle")}</h3>
                <p className="text-white/80 text-base leading-relaxed font-medium">{t("visionDesc")}</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-black text-secondary uppercase mb-4">{t("missionTitle")}</h3>
                {t.raw("missionParagraphs").map((p: string, i: number) => (
                  <p key={i} className="text-white/80 text-base leading-relaxed font-medium mb-4 last:mb-0">{p}</p>
                ))}
              </div>
            </div>
          </GlassPanel>
        </section>

        {/* 4. OUR VALUES */}
        <section>
          <GlassPanel id="values" className="p-10 md:p-16">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-8 text-center">{t("valuesHeading")}</h2>
            
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h3 className="text-xl font-black text-secondary uppercase mb-4">{t("communityTitle")}</h3>
              <p className="text-white/80 text-base leading-relaxed font-medium">{t("communityDesc")}</p>
            </div>

            <div className="space-y-12">
              <div className="border-t border-white/10 pt-12">
                <h3 className="text-2xl font-black text-secondary uppercase mb-4">{t("valStudentsTitle")}</h3>
                <p className="text-white/80 text-base leading-relaxed font-medium mb-6">{t("valStudentsIntro")}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80 text-sm font-medium">
                  {t.raw("valStudentsList").map((item: string, i: number) => {
                    const [bold, rest] = item.split("–");
                    return (
                      <div key={i} className="flex items-start gap-2">
                        <ChevronRight className="text-secondary shrink-0 mt-1" size={16} /> 
                        <p><strong className="text-white">{bold} – </strong>{rest}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-white/10 pt-12">
                <h3 className="text-2xl font-black text-secondary uppercase mb-4">{t("valParentsTitle")}</h3>
                <p className="text-white/80 text-base leading-relaxed font-medium mb-6">{t("valParentsIntro")}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80 text-sm font-medium">
                  {t.raw("valParentsList").map((item: string, i: number) => {
                    const [bold, rest] = item.split("–");
                    return (
                      <div key={i} className="flex items-start gap-2">
                        <ChevronRight className="text-secondary shrink-0 mt-1" size={16} /> 
                        <p><strong className="text-white">{bold} – </strong>{rest}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-white/10 pt-12">
                <h3 className="text-2xl font-black text-secondary uppercase mb-4">{t("valTeachersTitle")}</h3>
                <p className="text-white/80 text-base leading-relaxed font-medium mb-6">{t("valTeachersIntro")}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80 text-sm font-medium">
                  {t.raw("valTeachersList").map((item: string, i: number) => {
                    const [bold, rest] = item.split("–");
                    return (
                      <div key={i} className="flex items-start gap-2">
                        <ChevronRight className="text-secondary shrink-0 mt-1" size={16} /> 
                        <p><strong className="text-white">{bold} – </strong>{rest}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-white/10 pt-12 text-center max-w-4xl mx-auto">
                <p className="text-white/80 text-base md:text-lg leading-relaxed font-medium">{t("valuesOutro")}</p>
              </div>
            </div>
          </GlassPanel>
        </section>

        {/* 5. OUR PROMISE TO PARENTS */}
        <section>
          <GlassPanel id="promise" className="p-10 md:p-16">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-8 text-center">{t("promiseHeading")}</h2>
            <div className="space-y-6 text-white/80 text-base leading-relaxed font-medium max-w-5xl mx-auto">
              {t.raw("promiseParagraphs").map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </GlassPanel>
        </section>

        {/* 6. OUR TEAM */}
        <section>
          <GlassPanel id="team" className="p-10 md:p-16">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-12 text-center">{t("teamHeading")}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {t.raw("teamMembers").map((member: { name: string, role: string, role2?: string }, i: number) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="w-24 h-24 rounded-full bg-white/5 border border-white/20 mb-4 flex items-center justify-center text-white/20 transition-transform duration-500 group-hover:scale-110 group-hover:border-secondary shadow-lg">
                    <span className="text-2xl font-serif">CAE</span>
                  </div>
                  <h4 className="text-sm font-black text-white uppercase leading-tight mb-1">{member.name}</h4>
                  <span className="text-[0.65rem] font-bold text-secondary uppercase tracking-widest">{member.role}</span>
                  {member.role2 && <span className="text-[0.65rem] font-bold text-secondary/70 uppercase tracking-widest mt-0.5">{member.role2}</span>}
                </div>
              ))}
            </div>
          </GlassPanel>
        </section>

        {/* 7. Governance */}
        <section>
          <GlassPanel id="governance" className="p-10 md:p-16">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-12 text-center">{t("govHeading")}</h2>
             
            <div className="space-y-12 max-w-5xl mx-auto">
              <div>
                <h3 className="text-2xl font-black text-secondary uppercase mb-4">{t("govRoleTitle")}</h3>
                {t.raw("govRoleDesc").map((p: string, i: number) => (
                  <p key={i} className="text-white/80 text-base leading-relaxed font-medium mb-4">{p}</p>
                ))}
              </div>
              
              <div>
                <h3 className="text-2xl font-black text-secondary uppercase mb-4">{t("govRespTitle")}</h3>
                <ul className="space-y-4 text-sm text-white/80 font-medium">
                  {t.raw("govRespList").map((item: string, i: number) => {
                    const [bold, rest] = item.split(":");
                    return (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={18} /> 
                        <p><strong className="text-white text-base">{bold}:</strong>{rest}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-black text-secondary uppercase mb-4">{t("govVisTitle")}</h3>
                <p className="text-white/80 text-base leading-relaxed font-medium">{t("govVisDesc")}</p>
              </div>

              <div className="bg-white/5 rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-black text-white uppercase mb-8">{t("govExpectTitle")}</h3>
                
                <div className="space-y-8 text-white/80 text-sm font-medium">
                  <div>
                    <h4 className="text-lg font-bold text-secondary uppercase mb-3">{t("govExpect1")}</h4>
                    <ul className="list-disc list-inside space-y-2 pl-2">
                      {t.raw("govExpect1List").map((item: string, i: number) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-secondary uppercase mb-3">{t("govExpect2")}</h4>
                    <ul className="list-disc list-inside space-y-2 pl-2">
                      {t.raw("govExpect2List").map((item: string, i: number) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-secondary uppercase mb-3">{t("govExpect3")}</h4>
                    <ul className="list-disc list-inside space-y-2 pl-2">
                      {t.raw("govExpect3List").map((item: string, i: number) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center pt-8 border-t border-white/10">
                <h3 className="text-2xl font-black text-secondary uppercase mb-4">{t("govSharedTitle")}</h3>
                <p className="text-white/80 text-base leading-relaxed font-medium">{t("govSharedDesc")}</p>
              </div>
            </div>
          </GlassPanel>
        </section>

        {/* 8. Accreditation */}
        <section>
          <GlassPanel id="accreditation" className="p-10 md:p-16">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-12 text-center">{t("accHeading")}</h2>
            
            <div className="max-w-4xl mx-auto space-y-12">
              <div>
                <h3 className="text-2xl font-black text-secondary uppercase mb-4">{t("accExcellenceTitle")}</h3>
                <p className="text-white/80 text-base leading-relaxed font-medium">{t("accExcellenceDesc")}</p>
              </div>

              <div>
                <h3 className="text-2xl font-black text-secondary uppercase mb-4">{t("accLicensedTitle")}</h3>
                <p className="text-white/80 text-base leading-relaxed font-medium mb-4">{t("accLicensedDesc")}</p>
                <p className="text-white/80 text-base leading-relaxed font-medium mb-4">{t("accLicensedDesc2")}</p>
                <p className="text-white/80 text-base leading-relaxed font-medium">{t("accLicensedDesc3")}</p>
              </div>

              <div>
                <h3 className="text-2xl font-black text-secondary uppercase mb-4">{t("accPearsonTitle")}</h3>
                <p className="text-white/80 text-base leading-relaxed font-medium mb-4">{t("accPearsonDesc1")}</p>
                <p className="text-white/80 text-base leading-relaxed font-medium">{t("accPearsonDesc2")}</p>
              </div>

              <div>
                <h3 className="text-2xl font-black text-secondary uppercase mb-4">{t("accWhyTitle")}</h3>
                <p className="text-white/80 text-base leading-relaxed font-medium mb-4">{t("accWhyDesc1")}</p>
                <p className="text-white/80 text-base leading-relaxed font-medium">{t("accWhyDesc2")}</p>
              </div>

              <div>
                <h3 className="text-2xl font-black text-secondary uppercase mb-4">{t("accPathwayTitle")}</h3>
                <p className="text-white/80 text-base leading-relaxed font-medium mb-4">{t("accPathwayDesc1")}</p>
                <p className="text-white/80 text-base leading-relaxed font-medium">{t("accPathwayDesc2")}</p>
              </div>
            </div>
          </GlassPanel>
=======
        {/* The Sankofa Philosophy */}
        <section>
          <div className="relative overflow-hidden bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 flex flex-col space-y-6">
                <h2 className="text-xs font-bold tracking-[0.2em] text-secondary uppercase flex items-center gap-2">
                  <div className="w-6 h-[1px] bg-secondary" /> {t("philosophy")}
                </h2>
                <h3 className="text-3xl font-black text-white uppercase tracking-tight">{t("philosophyHeading")}</h3>
                <p className="text-white/70 text-base leading-relaxed">{t("philosophyText")}</p>
              </div>
              <div className="lg:col-span-5 relative h-[350px] rounded-xl overflow-hidden border border-white/10 flex items-center justify-center bg-white/[0.02]">
                <div className="text-center p-8">
                  <Milestone strokeWidth={1} className="w-32 h-32 text-secondary/30 mx-auto mb-4" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision & Values Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative overflow-hidden bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-xl p-8">
            <Target className="w-8 h-8 text-secondary mb-6" />
            <h4 className="text-xl font-black text-white uppercase mb-4">{t("mission")}</h4>
            <p className="text-white/70 text-sm leading-relaxed">{t("missionText")}</p>
          </div>

          <div className="relative overflow-hidden bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-xl p-8">
            <Award className="w-8 h-8 text-secondary mb-6" />
            <h4 className="text-xl font-black text-white uppercase mb-4">{t("vision")}</h4>
            <p className="text-white/70 text-sm leading-relaxed">{t("visionText")}</p>
          </div>

          <div className="relative overflow-hidden bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-xl p-8">
            <Shield className="w-8 h-8 text-secondary mb-6" />
            <h4 className="text-xl font-black text-white uppercase mb-4">{t("values")}</h4>
            <p className="text-white/70 text-sm leading-relaxed">{t("valuesText")}</p>
          </div>
>>>>>>> ced3080c9562531d750cfa698a505c61674c5de7
        </section>

      </main>
    </div>
  );
}