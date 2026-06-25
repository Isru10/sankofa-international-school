"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full bg-white/[0.02] backdrop-blur-2xl border-t border-white/10 shadow-[0_-8px_32px_0_rgba(0,0,0,0.2)] py-16 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Column 1: School Identity */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-primary text-secondary font-serif text-xl h-10 w-10 flex items-center justify-center rounded-lg border border-white/10">
              S
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black uppercase text-white leading-none tracking-tight">Sankofa</span>
              <span className="text-[0.55rem] font-bold tracking-[0.3em] uppercase text-secondary mt-1">Intl. School</span>
            </div>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            Committed to providing an uncompromising international academic standard, deeply rooted in the moral core of our Ethiopian heritage.
          </p>
        </div>

        {/* Column 2: Academic Divisions */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold tracking-[0.2em] text-secondary uppercase">Academics</h4>
          <ul className="space-y-3 text-sm font-semibold text-white/70">
            <li><Link href="/academics" className="hover:text-secondary transition-colors">Early Years Foundation</Link></li>
            <li><Link href="/academics" className="hover:text-secondary transition-colors">Primary Education (G1-6)</Link></li>
            <li><Link href="/academics" className="hover:text-secondary transition-colors">Secondary & Prep (G7-12)</Link></li>
          </ul>
        </div>

        {/* Column 3: Quick Navigation */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold tracking-[0.2em] text-secondary uppercase">Quick Links</h4>
          <ul className="space-y-3 text-sm font-semibold text-white/70">
            <li><Link href="/about" className="hover:text-secondary transition-colors">Our Philosophy</Link></li>
            <li><Link href="/admissions" className="hover:text-secondary transition-colors">Admissions Process</Link></li>
            <li><Link href="/calendar" className="hover:text-secondary transition-colors">Academic Calendar</Link></li>
            <li><Link href="/portal" className="hover:text-secondary transition-colors flex items-center gap-1">Student Portal <ArrowUpRight size={12} /></Link></li>
          </ul>
        </div>

        {/* Column 4: Location & Contact */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold tracking-[0.2em] text-secondary uppercase">Contact Us</h4>
          <ul className="space-y-3 text-sm font-semibold text-white/70">
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-secondary shrink-0" />
              <span>Hawassa, Sidama Region, Ethiopia</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-secondary shrink-0" />
              <span>+251 (0) 46 220 XXXX</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-secondary shrink-0" />
              <span>admissions@sankofahawassa.edu</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Underbar Copyright */}
      <div className="max-w-[1200px] mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-semibold tracking-wider">
        <span>© 2026 Yanol Tech Service PLC. All Rights Reserved.</span>
        <div className="flex gap-6">
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}