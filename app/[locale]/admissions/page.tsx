// "use client";

// import { useEffect, useState } from "react";
// import { ArrowRight, Calendar, DollarSign, HelpCircle, FileText, CheckCircle2 } from "lucide-react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// const GlassPanel = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
//   <div className={`relative overflow-hidden bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-xl transition-all duration-500 hover:bg-white/[0.06] hover:border-white/20 ${className}`}>
//     <div className="relative z-10 h-full">{children}</div>
//   </div>
// );

// // Minimal Accordion for FAQs
// const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="border-b border-white/10 pb-4">
//       <button 
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full flex justify-between items-center text-left text-base font-bold uppercase text-white hover:text-secondary py-2"
//       >
//         <span>{question}</span>
//         <span className="text-xl font-bold">{isOpen ? "−" : "+"}</span>
//       </button>
//       <div className={`mt-2 text-sm text-white/70 leading-relaxed overflow-hidden transition-all duration-500 ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
//         {answer}
//       </div>
//     </div>
//   );
// };

// export default function Admissions() {
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
//           className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
//           style={{ transform: `scale(${1 + scrollY * 0.0002})` }}
//         />
//         <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
//         <div 
//           className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]"
//           style={{ transform: `translateY(${scrollY * -0.15}px)` }}
//         />
//         <div 
//           className="absolute bottom-[30%] left-[5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"
//           style={{ transform: `translateY(${scrollY * -0.2}px)` }}
//         />
//       </div>

//       <main className="relative z-10 w-full max-w-[1300px] mx-auto px-6 lg:px-12 flex flex-col gap-24 pt-16">
        
//         {/* Page Hero */}
//         <section>
//           <GlassPanel className="p-10 md:p-16 text-center max-w-4xl mx-auto flex flex-col items-center">
//             <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
//               Join the <span className="text-secondary font-light italic">Sankofa Community.</span>
//             </h1>
//             <p className="text-white/80 text-base leading-relaxed max-w-2xl">
//               We welcome families who value academic excellence, character integrity, and traditional heritage. Applications for the upcoming academic year are reviewed on a rolling basis.
//             </p>
//           </GlassPanel>
//         </section>

//         {/* Step-by-Step Admissions Process */}
//         <section className="flex flex-col gap-8">
//           <div className="border-b border-white/10 pb-6 mb-4">
//              <h2 className="text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-2">Procedure</h2>
//              <h3 className="text-3xl font-black text-white uppercase tracking-tight">Admissions Timeline</h3>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             {[
//               { step: "01", title: "Online Inquiry", desc: "Complete our quick digital inquiry form and download our comprehensive digital admissions pack." },
//               { step: "02", title: "School Tour", desc: "Book an appointment to tour our modern Hawassa campus and discuss requirements with counselors." },
//               { step: "03", title: "Assessments", desc: "Prospective students participate in age-appropriate academic, social, and behavioral assessments." },
//               { step: "04", title: "Registration", desc: "A formal parent interview with the Head of School, followed by final seat registration." }
//             ].map((item, i) => (
//               <GlassPanel key={i} className="p-8 h-full flex flex-col">
//                 <div className="w-10 h-10 rounded-full bg-primary border border-secondary flex items-center justify-center font-black text-secondary mb-6 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
//                   {item.step}
//                 </div>
//                 <h4 className="text-lg font-black text-white uppercase mb-2">{item.title}</h4>
//                 <p className="text-white/70 text-xs leading-relaxed">{item.desc}</p>
//               </GlassPanel>
//             ))}
//           </div>
//         </section>

//         {/* Fees & Tuition Structure Section */}
//         <section className="flex flex-col gap-8">
//           <div className="border-b border-white/10 pb-6 mb-4">
//              <h2 className="text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-2">Fees & Structure</h2>
//              <h3 className="text-3xl font-black text-white uppercase tracking-tight">Tuition & Financial Schedule</h3>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
//             <div className="lg:col-span-8">
//               <GlassPanel className="p-8">
//                 <h4 className="text-xl font-black text-white uppercase mb-6">Tuition Overview</h4>
//                 <div className="overflow-x-auto">
//                   <table className="w-full text-left border-collapse">
//                     <thead>
//                       <tr className="border-b border-white/20 text-xs font-bold text-white/60 uppercase tracking-widest">
//                         <th className="pb-4">Educational Tier</th>
//                         <th className="pb-4">Application Fee</th>
//                         <th className="pb-4 text-right">Tuition (Per Term)</th>
//                       </tr>
//                     </thead>
//                     <tbody className="text-sm font-semibold text-white/80 divide-y divide-white/10">
//                       <tr>
//                         <td className="py-4">Early Years (Pre-K to K)</td>
//                         <td className="py-4">5,000 ETB</td>
//                         <td className="py-4 text-right">Contact Admissions</td>
//                       </tr>
//                       <tr>
//                         <td className="py-4">Primary School (G1 to G6)</td>
//                         <td className="py-4">5,000 ETB</td>
//                         <td className="py-4 text-right">Contact Admissions</td>
//                       </tr>
//                       <tr>
//                         <td className="py-4">Secondary Prep (G7 to G12)</td>
//                         <td className="py-4">5,000 ETB</td>
//                         <td className="py-4 text-right">Contact Admissions</td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//                 <p className="text-xs text-white/50 mt-6 leading-relaxed">
//                   * Note: Tuition does not include uniforms, textbooks, daily bus transportation within Hawassa, or external exam registration fees (Pearson/IGCSE).
//                 </p>
//               </GlassPanel>
//             </div>

//             <div className="lg:col-span-4">
//               <GlassPanel className="p-8 flex flex-col gap-6 bg-primary text-white border-secondary">
//                 <DollarSign className="w-10 h-10 text-secondary" />
//                 <h4 className="text-xl font-black uppercase tracking-wide">Scholarships & Financial Aid</h4>
//                 <p className="text-white/80 text-sm leading-relaxed">
//                   We offer a merit-based scholarship program for exceptionally talented students in the Sidama Region who demonstrate financial need.
//                 </p>
//                 <div className="flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-widest border-t border-white/10 pt-4 cursor-pointer">
//                   <FileText size={16} /> Scholarship Guidelines (PDF)
//                 </div>
//               </GlassPanel>
//             </div>
//           </div>
//         </section>

//         {/* Dynamic Accordion FAQs & Important Dates */}
//         <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
//           <GlassPanel className="p-8 flex flex-col justify-between">
//             <div>
//               <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-6 flex items-center gap-2">
//                 <Calendar className="text-secondary" /> Important Dates
//               </h3>
//               <div className="space-y-4 text-sm font-semibold">
//                 <div className="flex justify-between items-center border-b border-white/10 pb-3">
//                   <span className="text-white/60">Early Action Admissions Deadline</span>
//                   <span className="text-secondary">October 15, 2026</span>
//                 </div>
//                 <div className="flex justify-between items-center border-b border-white/10 pb-3">
//                   <span className="text-white/60">Entrance Examinations (Session 1)</span>
//                   <span className="text-secondary">November 1, 2026</span>
//                 </div>
//                 <div className="flex justify-between items-center border-b border-white/10 pb-3">
//                   <span className="text-white/60">Family Interviews Complete</span>
//                   <span className="text-secondary">November 20, 2026</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-white/60">Enrollment Offers Mailed</span>
//                   <span className="text-secondary">December 5, 2026</span>
//                 </div>
//               </div>
//             </div>

//             <Button asChild className="rounded-xl bg-secondary text-primary hover:bg-white hover:text-primary font-bold uppercase tracking-widest text-xs w-full mt-8">
//               <Link href="/portal">Initiate Application Portal</Link>
//             </Button>
//           </GlassPanel>

//           <GlassPanel className="p-8">
//             <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-6 flex items-center gap-2">
//               <HelpCircle className="text-secondary" /> Frequently Asked Questions
//             </h3>
//             <div className="space-y-4">
//               <FAQItem 
//                 question="What is the primary language of instruction?" 
//                 answer="English is the primary language of instruction across all grades. Amharic is taught as a mandatory second language to preserve local cultural fluency." 
//               />
//               <FAQItem 
//                 question="Are there admissions assessments for Pre-K?" 
//                 answer="Early Years assessments are play-based and informal, focusing on motor skills development and general behavioral metrics." 
//               />
//               <FAQItem 
//                 question="What accreditations does Sankofa hold?" 
//                 answer="We are approved by the Ethiopian Ministry of Education and offer international Pearson Edexcel IGCSE and GCE A-Level pathways." 
//               />
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
import { ArrowRight, Calendar, DollarSign, HelpCircle, FileText, CheckCircle2 } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";

const GlassPanel = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative overflow-hidden bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-xl transition-all duration-500 hover:bg-white/[0.06] hover:border-white/20 ${className}`}>
    <div className="relative z-10 h-full">{children}</div>
  </div>
);

// Minimal Accordion for FAQs (fully localized)
const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 pb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-base font-bold uppercase text-white hover:text-secondary py-2 cursor-pointer"
      >
        <span>{question}</span>
        <span className="text-xl font-bold">{isOpen ? "−" : "+"}</span>
      </button>
      <div className={`mt-2 text-sm text-white/70 leading-relaxed overflow-hidden transition-all duration-500 ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
        {answer}
      </div>
    </div>
  );
};

export default function Admissions() {
  const t = useTranslations("Admissions");
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
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
          style={{ transform: `scale(${1 + scrollY * 0.0002})` }}
        />
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
        <div 
          className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]"
          style={{ transform: `translateY(${scrollY * -0.15}px)` }}
        />
        <div 
          className="absolute bottom-[30%] left-[5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"
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

        {/* Step-by-Step Admissions Process */}
        <section className="flex flex-col gap-8">
          <div className="border-b border-white/10 pb-6 mb-4">
             <h2 className="text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-2">{t("procedureBadge")}</h2>
             <h3 className="text-3xl font-black text-white uppercase tracking-tight">{t("procedureHeading")}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: t("step1Title"), desc: t("step1Desc") },
              { step: "02", title: t("step2Title"), desc: t("step2Desc") },
              { step: "03", title: t("step3Title"), desc: t("step3Desc") },
              { step: "04", title: t("step4Title"), desc: t("step4Desc") }
            ].map((item, i) => (
              <GlassPanel key={i} className="p-8 h-full flex flex-col">
                <div className="w-10 h-10 rounded-full bg-primary border border-secondary flex items-center justify-center font-black text-secondary mb-6 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                  {item.step}
                </div>
                <h4 className="text-lg font-black text-white uppercase mb-2">{item.title}</h4>
                <p className="text-white/70 text-xs leading-relaxed">{item.desc}</p>
              </GlassPanel>
            ))}
          </div>
        </section>

        {/* Fees & Tuition Structure Section */}
        <section className="flex flex-col gap-8">
          <div className="border-b border-white/10 pb-6 mb-4">
             <h2 className="text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-2">{t("feesBadge")}</h2>
             <h3 className="text-3xl font-black text-white uppercase tracking-tight">{t("feesHeading")}</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <GlassPanel className="p-8">
                <h4 className="text-xl font-black text-white uppercase mb-6">{t("tuitionTitle")}</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/20 text-xs font-bold text-white/60 uppercase tracking-widest">
                        <th className="pb-4">{t("thTier")}</th>
                        <th className="pb-4">{t("thFee")}</th>
                        <th className="pb-4 text-right">{t("thTerm")}</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm font-semibold text-white/80 divide-y divide-white/10">
                      <tr>
                        <td className="py-4">{t("tier1")}</td>
                        <td className="py-4">{t("appFeeVal")}</td>
                        <td className="py-4 text-right">{t("tuitionContact")}</td>
                      </tr>
                      <tr>
                        <td className="py-4">{t("tier2")}</td>
                        <td className="py-4">{t("appFeeVal")}</td>
                        <td className="py-4 text-right">{t("tuitionContact")}</td>
                      </tr>
                      <tr>
                        <td className="py-4">{t("tier3")}</td>
                        <td className="py-4">{t("appFeeVal")}</td>
                        <td className="py-4 text-right">{t("tuitionContact")}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-white/50 mt-6 leading-relaxed">
                  {t("tuitionNote")}
                </p>
              </GlassPanel>
            </div>

            <div className="lg:col-span-4">
              <GlassPanel className="p-8 flex flex-col gap-6 bg-primary text-white border-secondary">
                <DollarSign className="w-10 h-10 text-secondary" />
                <h4 className="text-xl font-black uppercase tracking-wide">{t("scholarshipTitle")}</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  {t("scholarshipDesc")}
                </p>
                <div className="flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-widest border-t border-white/10 pt-4 cursor-pointer hover:text-white transition-colors duration-300">
                  <FileText size={16} /> {t("scholarshipCTA")}
                </div>
              </GlassPanel>
            </div>
          </div>
        </section>

        {/* Dynamic Accordion FAQs & Important Dates */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <GlassPanel className="p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-6 flex items-center gap-2">
                <Calendar className="text-secondary" /> {t("datesHeading")}
              </h3>
              <div className="space-y-4 text-sm font-semibold">
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-white/60">{t("date1Label")}</span>
                  <span className="text-secondary">{t("date1Val")}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-white/60">{t("date2Label")}</span>
                  <span className="text-secondary">{t("date2Val")}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-white/60">{t("date3Label")}</span>
                  <span className="text-secondary">{t("date3Val")}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60">{t("date4Label")}</span>
                  <span className="text-secondary">{t("date4Val")}</span>
                </div>
              </div>
            </div>

            <Button asChild className="rounded-xl bg-secondary text-primary hover:bg-white hover:text-primary font-bold uppercase tracking-widest text-xs w-full mt-8">
              <Link href="/portal">{t("datesCTA")}</Link>
            </Button>
          </GlassPanel>

          <GlassPanel className="p-8">
            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-6 flex items-center gap-2">
              <HelpCircle className="text-secondary" /> {t("faqHeading")}
            </h3>
            <div className="space-y-4">
              <FAQItem 
                question={t("faq1Q")} 
                answer={t("faq1A")} 
              />
              <FAQItem 
                question={t("faq2Q")} 
                answer={t("faq2A")} 
              />
              <FAQItem 
                question={t("faq3Q")} 
                answer={t("faq3A")} 
              />
            </div>
          </GlassPanel>

        </section>

      </main>
    </div>
  );
}