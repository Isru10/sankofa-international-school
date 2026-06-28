// "use client";

// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
// import { Menu, ArrowRight, MapPin, Mail } from "lucide-react";
// import { useState, useEffect } from "react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Dynamic glassmorphism on scroll
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className={`fixed top-0 z-50 w-full flex flex-col transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-2xl shadow-sm' : 'bg-white/95 backdrop-blur-md'}`}>
      
//       {/* Top Bar - Ultra thin, muted navy */}
//       <div className={`bg-primary text-primary-foreground/80 text-[0.65rem] uppercase tracking-[0.15em] py-2 px-6 flex justify-between items-center transition-all duration-500 ${scrolled ? 'h-0 opacity-0 overflow-hidden py-0' : 'h-auto opacity-100'}`}>
//         <div className="hidden md:flex gap-6 items-center">
//           <span className="flex items-center gap-1.5"><MapPin size={12} className="text-secondary" /> Hawassa, Ethiopia</span>
//           <span className="flex items-center gap-1.5"><Mail size={12} className="text-secondary" /> admissions@sankofahawassa.edu</span>
//         </div>
//         <div className="flex gap-6 items-center w-full md:w-auto justify-end font-semibold">
//           <Link href="/portal" className="hover:text-secondary transition-colors duration-300">Student Portal</Link>
//           <span className="opacity-30">|</span>
//           <Link href="/calendar" className="hover:text-secondary transition-colors duration-300">Academic Calendar</Link>
//         </div>
//       </div>

//       {/* Main Nav */}
//       <nav className="py-3 px-6 md:px-12 w-full flex justify-between items-center border-b border-primary/5">
        
//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-4 group">
//           <div className="bg-primary text-secondary font-serif text-xl h-10 w-10 flex items-center justify-center rounded-lg shadow-sm group-hover:bg-secondary group-hover:text-primary transition-colors duration-500">
//             S
//           </div>
//           <div className="flex flex-col">
//             <span className="text-lg font-black uppercase text-primary leading-none tracking-tight">Sankofa</span>
//             <span className="text-[0.55rem] font-bold tracking-[0.3em] uppercase text-primary/60 mt-1">Intl. School</span>
//           </div>
//         </Link>

//         {/* Links + Menu */}
//         <div className="flex items-center gap-8">
//           <div className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-[0.1em] text-primary/80">
//             <Link href="/" className="hover:text-primary transition-colors">Home</Link>
//             <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
//             <Link href="/academics" className="hover:text-primary transition-colors">Academics</Link>
//             <Link href="/admissions" className="hover:text-primary transition-colors">Admissions</Link>
            
//             {/* Somewhat rounded button (rounded-lg) */}
//             <Button asChild variant="default" className="rounded-lg bg-primary text-primary-foreground hover:bg-secondary hover:text-primary font-bold tracking-widest text-xs px-6 transition-all duration-300">
//               <Link href="/portal">Apply Now <ArrowRight size={14} className="ml-2" /></Link>
//             </Button>
//           </div>

//           {/* Advanced Hamburger Menu */}
//           <Sheet open={isOpen} onOpenChange={setIsOpen}>
//             <SheetTrigger asChild>
//               <Button variant="ghost" size="icon" className="hover:bg-primary/5 text-primary rounded-lg transition-colors group">
//                 <Menu strokeWidth={1.5} className="h-6 w-6 group-hover:scale-105 transition-transform duration-300" />
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="bg-white/95 backdrop-blur-2xl border-l border-primary/10 p-10 flex flex-col sm:max-w-md shadow-2xl transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
//               <SheetHeader>
//                 <SheetTitle className="text-left font-serif text-primary text-xl font-light mb-8 border-b border-primary/10 pb-4">
//                   Navigation
//                 </SheetTitle>
//               </SheetHeader>
              
//               {/* Standardized, smaller font sizes for internal menu */}
//               <div className="flex flex-col gap-5 text-sm font-bold tracking-[0.15em] uppercase text-primary/80">
//                 <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-secondary hover:translate-x-2 transition-all duration-300">Home</Link>
//                 <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-secondary hover:translate-x-2 transition-all duration-300">About Us</Link>
//                 <Link href="/academics" onClick={() => setIsOpen(false)} className="hover:text-secondary hover:translate-x-2 transition-all duration-300">Academics</Link>
//                 <Link href="/admissions" onClick={() => setIsOpen(false)} className="hover:text-secondary hover:translate-x-2 transition-all duration-300">Admissions</Link>
//                 <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-secondary hover:translate-x-2 transition-all duration-300">Contact Us</Link>
//               </div>

//               <div className="mt-auto pt-8 border-t border-primary/10 flex flex-col gap-4">
//                 <p className="text-xs text-primary/50 tracking-wider">Admissions are open for 2026.</p>
//                 <Button asChild className="rounded-lg bg-secondary text-primary hover:bg-primary hover:text-white font-bold tracking-widest uppercase text-xs w-full transition-all duration-300">
//                   <Link href="/portal" onClick={() => setIsOpen(false)}>Start Application</Link>
//                 </Button>
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </nav>
//     </header>
//   );
// }






"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowRight, MapPin, Mail, ChevronDown, Play, Calendar, Megaphone, Briefcase, PhoneCall } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLanguage = () => {
    const nextLocale = locale === "en" ? "am" : "en";
    router.replace({ pathname }, { locale: nextLocale });
  };

  return (
    <header className={`fixed top-0 z-50 w-full flex flex-col transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-2xl shadow-sm' : 'bg-white/95 backdrop-blur-md'}`}>
      
      {/* Top Utility Bar */}
      <div className={`bg-primary text-primary-foreground/80 text-[0.65rem] uppercase tracking-[0.15em] py-2 px-6 flex justify-between items-center transition-all duration-500 ${scrolled ? 'h-0 opacity-0 overflow-hidden py-0' : 'h-auto opacity-100'}`}>
        <div className="hidden md:flex gap-6 items-center">
          <span className="flex items-center gap-1.5"><MapPin size={12} className="text-secondary" /> {t("location")}</span>
          <span className="flex items-center gap-1.5"><Mail size={12} className="text-secondary" /> admissions@sankofahawassa.edu</span>
        </div>
        <div className="flex gap-6 items-center w-full md:w-auto justify-end font-semibold">
          <Link href="/portal" className="hover:text-secondary transition-colors duration-300">{t("portal")}</Link>
          <span className="opacity-30">|</span>
          <Link href="/calendar" className="hover:text-secondary transition-colors duration-300">{t("calendar")}</Link>
          <Button variant="secondary" size="sm" onClick={switchLanguage} className="h-6 text-xs font-bold px-3 ml-2 rounded-lg cursor-pointer">
            {locale === "en" ? "አማርኛ" : "English"}
          </Button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="py-3 px-6 md:px-12 w-full flex justify-between items-center border-b border-primary/5">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="bg-primary text-secondary font-serif text-xl h-10 w-10 flex items-center justify-center rounded-lg shadow-sm group-hover:bg-secondary group-hover:text-primary transition-colors duration-500">
            <img src="/Sankofa-int-school.png" alt="S" className=""/>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black uppercase text-primary leading-none tracking-tight">{t("schoolName")}</span>
            <span className="text-[0.55rem] font-bold tracking-[0.3em] uppercase text-primary/60 mt-1">{t("schoolSub")}</span>
          </div>
        </Link>

        {/* Links + Permanent Menu */}
        <div className="flex items-center gap-6">
          
          {/* Main Desktop Links */}
          <div className="hidden lg:flex items-center gap-6 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-primary/80">
            
            <Link href="/" className="hover:text-primary transition-colors py-4">{t("home")}</Link>
            
            <div className="relative group cursor-pointer">
              <Link href="/about" className="flex items-center gap-1 hover:text-primary transition-colors py-4">
                {t("about")} <ChevronDown size={12} className="group-hover:rotate-180 transition-transform duration-300" />
              </Link>
              <div className="absolute top-full left-0 w-64 bg-white/90 backdrop-blur-3xl border border-primary/10 rounded-xl shadow-2xl opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 flex flex-col p-2 z-50">
                <Link href="/about#welcome" className="px-4 py-2 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors">{t("subWelcome")}</Link>
                <Link href="/about#difference" className="px-4 py-2 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors">{t("subDifference")}</Link>
                <Link href="/about#mission" className="px-4 py-2 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors">{t("subMission")}</Link>
                <Link href="/about#values" className="px-4 py-2 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors">{t("subValues")}</Link>
                <Link href="/about#promise" className="px-4 py-2 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors">{t("subPromise")}</Link>
                <Link href="/about#team" className="px-4 py-2 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors">{t("subTeam")}</Link>
                <Link href="/about#governance" className="px-4 py-2 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors">{t("subGovernance")}</Link>
                <Link href="/about#accreditation" className="px-4 py-2 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors">{t("subAccreditation")}</Link>
              </div>
            </div>

            <div className="relative group cursor-pointer">
              <Link href="/academics" className="flex items-center gap-1 hover:text-primary transition-colors py-4">
                {t("academics")} <ChevronDown size={12} className="group-hover:rotate-180 transition-transform duration-300" />
              </Link>
              <div className="absolute top-full left-0 w-64 bg-white/90 backdrop-blur-3xl border border-primary/10 rounded-xl shadow-2xl opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 flex flex-col p-2 z-50">
                <Link href="/academics#overview" className="px-4 py-2 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors">{t("subAcadOverview")}</Link>
                <Link href="/academics#curriculum" className="px-4 py-2 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors">{t("subAcadCurriculum")}</Link>
                <Link href="/academics#foundation" className="px-4 py-2 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors">{t("subAcadFoundation")}</Link>
                <Link href="/academics#primary" className="px-4 py-2 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors">{t("subAcadPrimary")}</Link>
                <Link href="/academics#secondary" className="px-4 py-2 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors">{t("subAcadSecondary")}</Link>
                <Link href="/academics#resources" className="px-4 py-2 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors">{t("subAcadResources")}</Link>
                <Link href="/academics#community" className="px-4 py-2 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors">{t("subAcadCommunity")}</Link>
                <Link href="/academics#sport" className="px-4 py-2 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors">{t("subAcadSport")}</Link>
                <Link href="/academics#extracurricular" className="px-4 py-2 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors">{t("subAcadExtra")}</Link>
                <Link href="/academics#trips" className="px-4 py-2 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors">{t("subAcadTrips")}</Link>
              </div>
            </div>

            <div className="relative group cursor-pointer">
              <Link href="/admissions" className="flex items-center gap-1 hover:text-primary transition-colors py-4">
                {t("admissions")} <ChevronDown size={12} className="group-hover:rotate-180 transition-transform duration-300" />
              </Link>
              <div className="absolute top-full left-0 w-64 bg-white/90 backdrop-blur-3xl border border-primary/10 rounded-xl shadow-2xl opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 flex flex-col p-2 z-50">
                <Link href="/admissions#policy" className="px-4 py-2 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors">{t("subAdmPolicy")}</Link>
                <Link href="/admissions#fees" className="px-4 py-2 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors">{t("subAdmFees")}</Link>
                <Link href="/admissions#readiness" className="px-4 py-2 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors">{t("subAdmReadiness")}</Link>
                <Link href="/admissions#tour" className="px-4 py-2 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors">{t("subAdmTour")}</Link>
                <Link href="/admissions#apply" className="px-4 py-2 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors">{t("subAdmApply")}</Link>
                <Link href="/admissions#scholarships" className="px-4 py-2 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors">{t("subAdmScholarships")}</Link>
              </div>
            </div>

            <Link href="/stream" className="flex items-center gap-1.5 hover:text-primary transition-colors py-4">
              <Play size={12} className="text-secondary" /> {t("stream")}
            </Link>
            
            <Button asChild variant="default" className="rounded-lg bg-primary text-primary-foreground hover:bg-secondary hover:text-primary font-bold tracking-widest text-[0.7rem] px-5 transition-all duration-300 ml-2">
              <Link href="/portal">{t("apply")} <ArrowRight size={14} className="ml-2" /></Link>
            </Button>
          </div>

          {/* PERMANENT Hamburger Menu (Desktop & Mobile) */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-primary/5 text-primary rounded-lg transition-colors group">
                <Menu strokeWidth={1.5} className="h-6 w-6 group-hover:scale-105 transition-transform duration-300" />
              </Button>
            </SheetTrigger>
            
            <SheetContent side="right" className="bg-white/95 backdrop-blur-2xl border-l border-primary/10 p-10 flex flex-col sm:max-w-md shadow-2xl">
              <SheetHeader>
                <SheetTitle className="text-left font-serif text-primary text-2xl font-light mb-6 border-b border-primary/10 pb-4">
                  Navigation
                </SheetTitle>
              </SheetHeader>
              
              {/* Mobile Main Links (Hidden on Desktop Drawer) */}
              <div className="flex lg:hidden flex-col gap-5 text-sm font-bold tracking-[0.15em] uppercase text-primary/80 mb-8 border-b border-primary/10 pb-8">
                <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-secondary transition-all">{t("home")}</Link>
                <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-secondary transition-all">{t("about")}</Link>
                <Link href="/academics" onClick={() => setIsOpen(false)} className="hover:text-secondary transition-all">{t("academics")}</Link>
                <Link href="/admissions" onClick={() => setIsOpen(false)} className="hover:text-secondary transition-all">{t("admissions")}</Link>
                <Link href="/stream" onClick={() => setIsOpen(false)} className="hover:text-secondary transition-all flex items-center gap-2"><Play size={14} className="text-secondary" /> {t("stream")}</Link>
              </div>

              {/* Permanent Utility Links (Visible on both Desktop & Mobile Drawer) */}
              <div className="flex flex-col gap-6 text-sm font-bold tracking-widest uppercase text-primary">
                <Link href="/contact" onClick={() => setIsOpen(false)} className="flex items-center gap-4 hover:text-secondary transition-colors group">
                   <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-secondary/20 transition-colors"><PhoneCall size={16} /></div>
                   {t("contact")}
                </Link>
                
                <Link href="/careers" onClick={() => setIsOpen(false)} className="flex items-center gap-4 hover:text-secondary transition-colors group">
                   <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-secondary/20 transition-colors"><Briefcase size={16} /></div>
                   {t("careers")}
                </Link>

                <Link href="/announcements" onClick={() => setIsOpen(false)} className="flex items-center gap-4 hover:text-secondary transition-colors group">
                   <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-secondary/20 transition-colors"><Megaphone size={16} /></div>
                   {t("announcements")}
                </Link>

                <Link href="/calendar" onClick={() => setIsOpen(false)} className="flex items-center gap-4 hover:text-secondary transition-colors group">
                   <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-secondary/20 transition-colors"><Calendar size={16} /></div>
                   {t("calendar")}
                </Link>
              </div>

              <div className="mt-auto pt-8 border-t border-primary/10 flex flex-col gap-4">
                <Button asChild className="rounded-xl bg-secondary text-primary hover:bg-primary hover:text-white font-bold tracking-widest uppercase text-xs w-full h-12 transition-all duration-300 shadow-xl">
                  <Link href="/portal" onClick={() => setIsOpen(false)}>Access Portal</Link>
                </Button>
              </div>

            </SheetContent>
          </Sheet>

        </div>
      </nav>
    </header>
  );
}