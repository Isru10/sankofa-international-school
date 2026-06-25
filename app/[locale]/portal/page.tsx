"use client";

import { useEffect, useState, FormEvent } from "react";
import { ArrowRight, Lock, User, CheckCircle2, LogOut, FileText, Calendar, Award, BookOpen, UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";

const GlassPanel = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative overflow-hidden bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-xl transition-all duration-500 hover:bg-white/[0.06] hover:border-white/20 ${className}`}>
    <div className="relative z-10 h-full">{children}</div>
  </div>
);

export default function StudentPortal() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [submittedFile, setSubmittedFile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (studentId.trim() && password.trim()) {
      setIsLoggedIn(true);
    }
  };

  const handleAssignmentSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmittedFile(true);
    setTimeout(() => setSubmittedFile(false), 4000);
  };

  return (
    <div className="relative w-full min-h-screen bg-[#00152e] text-white selection:bg-secondary selection:text-primary pb-32 pt-24">
      
      {/* Universal Parallax Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
          style={{ transform: `scale(${1 + scrollY * 0.0002})` }}
        />
        <div className="absolute inset-0 bg-primary/95 mix-blend-multiply" />
        <div 
          className="absolute top-[25%] left-[5%] w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[110px]"
          style={{ transform: `translateY(${scrollY * -0.15}px)` }}
        />
        <div 
          className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[130px]"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        />
      </div>

      <main className="relative z-10 w-full max-w-[1300px] mx-auto px-6 lg:px-12 flex flex-col gap-12 pt-16">
        
        {!isLoggedIn ? (
          /* ================= LOGIN INTERFACE ================= */
          <section className="flex items-center justify-center min-h-[60vh]">
            <GlassPanel className="p-8 md:p-12 max-w-md w-full text-center">
              <div className="bg-primary text-secondary font-serif text-xl h-12 w-12 flex items-center justify-center rounded-lg shadow-sm mx-auto mb-6 border border-white/10">
                S
              </div>
              <h1 className="text-2xl font-black text-white uppercase tracking-tight mb-2">Student Portal</h1>
              <p className="text-white/60 text-xs uppercase tracking-widest mb-8">Access Academics & Records</p>
              
              <form onSubmit={handleLogin} className="space-y-4 text-left">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/60 uppercase tracking-widest">Student ID</label>
                  <div className="relative flex items-center">
                    <User size={16} className="absolute left-4 text-white/40" />
                    <input 
                      type="text" 
                      required
                      placeholder="e.g., SIS-2026-042"
                      value={studentId}
                      onChange={(e) => setStudentId(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/60 uppercase tracking-widest">Access Password</label>
                  <div className="relative flex items-center">
                    <Lock size={16} className="absolute left-4 text-white/40" />
                    <input 
                      type="password" 
                      required
                      placeholder="••••••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full rounded-lg bg-secondary text-primary hover:bg-white hover:text-primary font-bold uppercase tracking-widest text-xs h-12 mt-6">
                  Sign In to Dashboard
                </Button>
              </form>
              <p className="text-xs text-white/40 mt-6 leading-relaxed">
                Contact the IT Helpdesk if you have misplaced or forgotten your access key.
              </p>
            </GlassPanel>
          </section>
        ) : (
          /* ================= DYNAMIC STUDENT DASHBOARD ================= */
          <section className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
            {/* Header / Welcomer */}
            <GlassPanel className="p-8 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-6 text-center md:text-left">
                <div className="w-16 h-16 rounded-full bg-secondary text-primary font-black text-2xl flex items-center justify-center">
                  YB
                </div>
                <div>
                  <h1 className="text-2xl font-black text-white uppercase tracking-tight">Yohannes Belay</h1>
                  <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mt-1">Grade 11 • Science Stream • ID: {studentId}</p>
                </div>
              </div>
              <Button onClick={() => setIsLoggedIn(false)} variant="outline" className="rounded-lg border-white/15 hover:bg-white/10 text-white font-bold tracking-widest uppercase text-xs h-10 px-6">
                <LogOut size={14} className="mr-2" /> Sign Out
              </Button>
            </GlassPanel>

            {/* Dashboard Quick Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassPanel className="p-6 flex items-center gap-6">
                <Award className="w-10 h-10 text-secondary" />
                <div>
                  <span className="block text-2xl font-black text-white">3.84 GPA</span>
                  <span className="block text-xs font-bold text-white/50 uppercase tracking-widest">Cumulative Standing</span>
                </div>
              </GlassPanel>
              <GlassPanel className="p-6 flex items-center gap-6">
                <BookOpen className="w-10 h-10 text-secondary" />
                <div>
                  <span className="block text-2xl font-black text-white">6 Classes</span>
                  <span className="block text-xs font-bold text-white/50 uppercase tracking-widest">Current Enrollment</span>
                </div>
              </GlassPanel>
              <GlassPanel className="p-6 flex items-center gap-6">
                <Calendar className="w-10 h-10 text-secondary" />
                <div>
                  <span className="block text-2xl font-black text-white">96%</span>
                  <span className="block text-xs font-bold text-white/50 uppercase tracking-widest">Term Attendance</span>
                </div>
              </GlassPanel>
            </div>

            {/* Main Dashboard Workspace */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Daily Schedule - Left Column */}
              <div className="lg:col-span-7 space-y-6">
                <GlassPanel className="p-8">
                  <h3 className="text-lg font-black text-white uppercase tracking-wider mb-6 flex items-center gap-2">
                    <Calendar size={18} className="text-secondary" /> Daily Academic Schedule
                  </h3>
                  <div className="space-y-4">
                    {[
                      { time: "08:30 - 09:45", subject: "Advanced Physics", room: "Lab 3A" },
                      { time: "10:00 - 11:15", subject: "Calculus & Algebra", room: "Hall B" },
                      { time: "11:30 - 12:45", subject: "Computational Thinking", room: "Comp. Room 1" },
                      { time: "13:45 - 15:00", subject: "Amharic & Heritage Arts", room: "Seminar Room" }
                    ].map((slot, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 last:pb-0">
                        <div>
                          <p className="text-xs font-bold text-white/40 tracking-widest uppercase">{slot.time}</p>
                          <h4 className="text-base font-black text-white mt-1">{slot.subject}</h4>
                        </div>
                        <span className="text-xs font-bold text-secondary uppercase bg-white/5 border border-white/10 px-3 py-1 rounded-md">
                          {slot.room}
                        </span>
                      </div>
                    ))}
                  </div>
                </GlassPanel>
              </div>

              {/* Assignment Uplink - Right Column */}
              <div className="lg:col-span-5 space-y-6">
                <GlassPanel className="p-8">
                  <h3 className="text-lg font-black text-white uppercase tracking-wider mb-6 flex items-center gap-2">
                    <FileText size={18} className="text-secondary" /> Digital Assignment Uplink
                  </h3>
                  
                  {!submittedFile ? (
                    <form onSubmit={handleAssignmentSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-white/60 uppercase tracking-widest">Select Assignment Course</label>
                        <select className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm text-white outline-none focus:border-secondary">
                          <option className="bg-[#00152e]">Advanced Physics - Lab Report 4</option>
                          <option className="bg-[#00152e]">Calculus - Problem Set 8</option>
                          <option className="bg-[#00152e]">Computer Science - Python Task</option>
                        </select>
                      </div>

                      <div className="border-2 border-dashed border-white/10 rounded-lg p-6 text-center hover:border-secondary transition-colors cursor-pointer flex flex-col items-center justify-center space-y-3">
                        <UploadCloud size={32} className="text-white/40" />
                        <span className="text-xs font-bold text-white/60 uppercase tracking-widest">Drag and drop file here</span>
                        <span className="text-[10px] text-white/30 uppercase tracking-wider">PDF, DOCX up to 10MB</span>
                      </div>

                      <Button type="submit" className="w-full rounded-lg bg-secondary text-primary hover:bg-white hover:text-primary font-bold uppercase tracking-widest text-xs h-12">
                        Upload to Registrar
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-12 flex flex-col items-center space-y-4 animate-in zoom-in-95 duration-500">
                      <CheckCircle2 size={48} className="text-secondary animate-bounce" />
                      <h4 className="text-lg font-black text-white uppercase">Submission Complete</h4>
                      <p className="text-sm text-white/60 max-w-xs mx-auto">Your physical file has been cataloged and routed to the department supervisor.</p>
                    </div>
                  )}
                </GlassPanel>
              </div>
            </div>
          </section>
        )}

      </main>
    </div>
  );
}