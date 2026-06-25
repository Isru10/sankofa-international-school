// "use client";

// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
// import { Menu, ArrowRight, MapPin, Mail } from "lucide-react";
// import { useState, useEffect } from "react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 w-full flex flex-col shadow-sm">
//       {/* Top Bar */}
//       <div className="bg-primary text-primary-foreground/80 text-[0.7rem] uppercase tracking-[0.15em] py-2 px-6 flex justify-between items-center border-b border-secondary/30">
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
//       <nav className="bg-background/95 backdrop-blur-md py-4 px-6 md:px-12 w-full flex justify-between items-center transition-all duration-300">
        
//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-4 group">
//           <div className="bg-primary text-secondary font-serif text-2xl h-10 w-10 flex items-center justify-center rounded-sm shadow-sm group-hover:scale-105 transition-transform duration-500">
//             S
//           </div>
//           <div className="flex flex-col">
//             <span className="text-xl font-black uppercase text-primary leading-none tracking-tight">Sankofa</span>
//             <span className="text-[0.6rem] font-bold tracking-[0.3em] uppercase text-primary/60 mt-1">Intl. School</span>
//           </div>
//         </Link>

//         {/* Links + Permanent Hamburger */}
//         <div className="flex items-center gap-8">
//           <div className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-[0.1em] text-primary/90">
//             <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
//             <Link href="/about" className="hover:text-secondary transition-colors">About Us</Link>
//             <Link href="/academics" className="hover:text-secondary transition-colors">Academics</Link>
//             <Link href="/admissions" className="hover:text-secondary transition-colors">Admissions</Link>
//             <Button asChild variant="default" className="rounded-sm bg-primary text-primary-foreground hover:bg-secondary hover:text-primary font-bold tracking-widest text-xs px-6 transition-all duration-300">
//               <Link href="/apply">Apply Now <ArrowRight size={14} className="ml-2" /></Link>
//             </Button>
//           </div>

//           {/* Animated Hamburger Menu */}
//           <Sheet open={isOpen} onOpenChange={setIsOpen}>
//             <SheetTrigger asChild>
//               <Button variant="ghost" size="icon" className="hover:bg-primary/5 text-primary rounded-full transition-colors group">
//                 <Menu strokeWidth={1.5} className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="bg-background border-l-4 border-secondary p-10 flex flex-col">
//               <SheetHeader>
//                 <SheetTitle className="text-left font-black uppercase tracking-widest text-primary text-xl border-b border-primary/10 pb-6">
//                   Navigation
//                 </SheetTitle>
//               </SheetHeader>
//               <div className="flex flex-col gap-6 text-xl font-black uppercase tracking-wide text-primary mt-8">
//                 {/* Notice the staggered animation delays on these links */}
//                 <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-secondary transition-colors animate-in slide-in-from-right-8 fade-in duration-500 delay-100">Home</Link>
//                 <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-secondary transition-colors animate-in slide-in-from-right-8 fade-in duration-500 delay-150">About Us</Link>
//                 <Link href="/academics" onClick={() => setIsOpen(false)} className="hover:text-secondary transition-colors animate-in slide-in-from-right-8 fade-in duration-500 delay-200">Academics</Link>
//                 <Link href="/admissions" onClick={() => setIsOpen(false)} className="hover:text-secondary transition-colors animate-in slide-in-from-right-8 fade-in duration-500 delay-300">Admissions</Link>
//                 <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-secondary transition-colors animate-in slide-in-from-right-8 fade-in duration-500 delay-500">Contact</Link>
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </nav>
//     </header>
//   );
// }




"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowRight, MapPin, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Dynamic glassmorphism on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full flex flex-col transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-2xl shadow-sm' : 'bg-white/95 backdrop-blur-md'}`}>
      
      {/* Top Bar - Ultra thin, muted navy */}
      <div className={`bg-primary text-primary-foreground/80 text-[0.65rem] uppercase tracking-[0.15em] py-2 px-6 flex justify-between items-center transition-all duration-500 ${scrolled ? 'h-0 opacity-0 overflow-hidden py-0' : 'h-auto opacity-100'}`}>
        <div className="hidden md:flex gap-6 items-center">
          <span className="flex items-center gap-1.5"><MapPin size={12} className="text-secondary" /> Hawassa, Ethiopia</span>
          <span className="flex items-center gap-1.5"><Mail size={12} className="text-secondary" /> admissions@sankofahawassa.edu</span>
        </div>
        <div className="flex gap-6 items-center w-full md:w-auto justify-end font-semibold">
          <Link href="/portal" className="hover:text-secondary transition-colors duration-300">Student Portal</Link>
          <span className="opacity-30">|</span>
          <Link href="/calendar" className="hover:text-secondary transition-colors duration-300">Academic Calendar</Link>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="py-3 px-6 md:px-12 w-full flex justify-between items-center border-b border-primary/5">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="bg-primary text-secondary font-serif text-xl h-10 w-10 flex items-center justify-center rounded-lg shadow-sm group-hover:bg-secondary group-hover:text-primary transition-colors duration-500">
            S
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black uppercase text-primary leading-none tracking-tight">Sankofa</span>
            <span className="text-[0.55rem] font-bold tracking-[0.3em] uppercase text-primary/60 mt-1">Intl. School</span>
          </div>
        </Link>

        {/* Links + Menu */}
        <div className="flex items-center gap-8">
          <div className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-[0.1em] text-primary/80">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
            <Link href="/academics" className="hover:text-primary transition-colors">Academics</Link>
            <Link href="/admissions" className="hover:text-primary transition-colors">Admissions</Link>
            
            {/* Somewhat rounded button (rounded-lg) */}
            <Button asChild variant="default" className="rounded-lg bg-primary text-primary-foreground hover:bg-secondary hover:text-primary font-bold tracking-widest text-xs px-6 transition-all duration-300">
              <Link href="/portal">Apply Now <ArrowRight size={14} className="ml-2" /></Link>
            </Button>
          </div>

          {/* Advanced Hamburger Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-primary/5 text-primary rounded-lg transition-colors group">
                <Menu strokeWidth={1.5} className="h-6 w-6 group-hover:scale-105 transition-transform duration-300" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white/95 backdrop-blur-2xl border-l border-primary/10 p-10 flex flex-col sm:max-w-md shadow-2xl transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
              <SheetHeader>
                <SheetTitle className="text-left font-serif text-primary text-xl font-light mb-8 border-b border-primary/10 pb-4">
                  Navigation
                </SheetTitle>
              </SheetHeader>
              
              {/* Standardized, smaller font sizes for internal menu */}
              <div className="flex flex-col gap-5 text-sm font-bold tracking-[0.15em] uppercase text-primary/80">
                <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-secondary hover:translate-x-2 transition-all duration-300">Home</Link>
                <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-secondary hover:translate-x-2 transition-all duration-300">About Us</Link>
                <Link href="/academics" onClick={() => setIsOpen(false)} className="hover:text-secondary hover:translate-x-2 transition-all duration-300">Academics</Link>
                <Link href="/admissions" onClick={() => setIsOpen(false)} className="hover:text-secondary hover:translate-x-2 transition-all duration-300">Admissions</Link>
                <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-secondary hover:translate-x-2 transition-all duration-300">Contact Us</Link>
              </div>

              <div className="mt-auto pt-8 border-t border-primary/10 flex flex-col gap-4">
                <p className="text-xs text-primary/50 tracking-wider">Admissions are open for 2026.</p>
                <Button asChild className="rounded-lg bg-secondary text-primary hover:bg-primary hover:text-white font-bold tracking-widest uppercase text-xs w-full transition-all duration-300">
                  <Link href="/portal" onClick={() => setIsOpen(false)}>Start Application</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}