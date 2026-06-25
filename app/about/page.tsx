"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Award, Target, Shield, Users, Milestone, BookOpen } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const GlassPanel = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative overflow-hidden bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-xl transition-all duration-500 hover:bg-white/[0.06] hover:border-white/20 ${className}`}>
    <div className="relative z-10 h-full">{children}</div>
  </div>
);

export default function About() {
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
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
          style={{ transform: `scale(${1 + scrollY * 0.0002})` }}
        />
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
        <div 
          className="absolute top-[20%] right-[5%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]"
          style={{ transform: `translateY(${scrollY * -0.15}px)` }}
        />
        <div 
          className="absolute bottom-[10%] left-[10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[130px]"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        />
      </div>

      <main className="relative z-10 w-full max-w-[1300px] mx-auto px-6 lg:px-12 flex flex-col gap-24 pt-16">
        
        {/* Page Hero */}
        <section>
          <GlassPanel className="p-10 md:p-16 text-center max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
              Honoring Heritage. <br />
              <span className="text-secondary font-light italic">Inspiring Futures.</span>
            </h1>
            <p className="text-white/80 text-base leading-relaxed max-w-2xl">
              Sankofa International School was established to provide an uncompromising educational environment in Hawassa. We believe that to build a vision for tomorrow, we must reach back and embrace our cultural roots.
            </p>
          </GlassPanel>
        </section>

        {/* The Sankofa Philosophy Section */}
        <section>
          <GlassPanel className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 flex flex-col space-y-6">
                <h2 className="text-xs font-bold tracking-[0.2em] text-secondary uppercase flex items-center gap-2">
                  <div className="w-6 h-[1px] bg-secondary" /> Our Philosophy
                </h2>
                <h3 className="text-3xl font-black text-white uppercase tracking-tight">The Meaning of Sankofa</h3>
                <p className="text-white/70 text-base leading-relaxed">
                  Derived from the Akan people of West Africa, "Sankofa" is symbolized by a bird reaching back to retrieve a valuable egg from its back. It teaches us that the past is a rich repository of wisdom. 
                </p>
                <p className="text-white/70 text-base leading-relaxed">
                  In Hawassa, we apply this philosophy by grounding our students in traditional Ethiopian values of community, respect, and deep integrity, while equipping them with modern, globally competitive academic tools.
                </p>
              </div>
              <div className="lg:col-span-5 relative h-[350px] rounded-xl overflow-hidden border border-white/10 flex items-center justify-center bg-white/[0.02]">
                {/* Symbolic Representation */}
                <div className="text-center p-8">
                  <Milestone strokeWidth={1} className="w-32 h-32 text-secondary/30 mx-auto mb-4" />
                  <span className="block text-xs uppercase tracking-[0.35em] text-secondary font-black">SANKOFA BIRD</span>
                </div>
              </div>
            </div>
          </GlassPanel>
        </section>

        {/* Mission, Vision & Values Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassPanel className="p-8">
            <Target className="w-8 h-8 text-secondary mb-6" />
            <h4 className="text-xl font-black text-white uppercase mb-4">Our Mission</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              To cultivate a community of critical thinkers and ethical leaders who excel academically, operate with unyielding integrity, and proudly honor their heritage.
            </p>
          </GlassPanel>

          <GlassPanel className="p-8">
            <Award className="w-8 h-8 text-secondary mb-6" />
            <h4 className="text-xl font-black text-white uppercase mb-4">Our Vision</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              To be recognized as East Africa’s premier educational institution, bridging the gap between historical African wisdom and futuristic technological readiness.
            </p>
          </GlassPanel>

          <GlassPanel className="p-8">
            <Shield className="w-8 h-8 text-secondary mb-6" />
            <h4 className="text-xl font-black text-white uppercase mb-4">Our Core Values</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              Our culture is governed by four central pillars: Integrity (Haqqa), Community (Sidaama), Innovation (Oromiyaa), and Academic Rigor (Excellence).
            </p>
          </GlassPanel>
        </section>

        {/* Leadership & Faculty Board */}
        <section className="flex flex-col gap-8">
          <div className="text-center max-w-2xl mx-auto mb-4">
             <h2 className="text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-3">Sankofa Leadership</h2>
             <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">Our Faculty & Board</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: "Dr. Elias Tessema", role: "Head of School", bio: "Ph.D. in Educational Leadership from Harvard University.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" },
              { name: "Wzr. Aster Menelik", role: "Academic Director", bio: "M.Ed. with 15+ years managing top-tier international institutions.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" },
              { name: "Ato Kassa Belay", role: "Director of Admissions", bio: "Dedicated advisor assisting families in Hawassa for a decade.", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" },
              { name: "Dr. Selamawit Hailu", role: "STEM Lead Practitioner", bio: "Specialist in robotics curricula and modern physical sciences.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" }
            ].map((member, i) => (
              <GlassPanel key={i} className="p-6 flex flex-col items-center text-center h-full">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-secondary/40 mb-6 relative">
                  <img src={member.img} alt={member.name} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <h4 className="text-lg font-black text-white uppercase leading-none mb-1">{member.name}</h4>
                <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-4">{member.role}</span>
                <p className="text-white/60 text-xs leading-relaxed mt-2">{member.bio}</p>
              </GlassPanel>
            ))}
          </div>
        </section>

        {/* Global Accreditations Banner */}
        <section>
          <GlassPanel className="p-8 text-center flex flex-col items-center">
            <h4 className="text-xs font-bold tracking-[0.25em] text-secondary uppercase mb-4">Accreditation & Standards</h4>
            <div className="flex flex-wrap justify-center gap-12 text-sm font-semibold tracking-widest uppercase text-white/50">
              <span>Pearson Edexcel</span>
              <span>•</span>
              <span>Ethiopian Ministry of Education Approved</span>
              <span>•</span>
              <span>CIS Candidate Status</span>
            </div>
          </GlassPanel>
        </section>

      </main>
    </div>
  );
}