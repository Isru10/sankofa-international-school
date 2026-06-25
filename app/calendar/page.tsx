"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Calendar as CalendarIcon, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const GlassPanel = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative overflow-hidden bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] rounded-xl transition-all duration-500 hover:bg-white/[0.06] hover:border-white/20 ${className}`}>
    <div className="relative z-10 h-full">{children}</div>
  </div>
);

// High-fidelity Mock Events Data
const ACADEMIC_EVENTS = [
  { day: 1, month: 8, year: 2026, title: "Academic Year Begins", type: "Academic", time: "08:30 AM", loc: "Sankofa Quad" },
  { day: 15, month: 8, year: 2026, title: "Registration Deadline", type: "Admissions", time: "04:00 PM", loc: "Registrar's Office" },
  { day: 15, month: 9, year: 2026, title: "Early Action Deadline", type: "Admissions", time: "11:59 PM", loc: "Online Portal" },
  { day: 22, month: 9, year: 2026, title: "Meskel Festival (Holiday)", type: "Holiday", time: "All Day", loc: "School Closed" },
  { day: 1, month: 10, year: 2026, title: "Midterm Exams Begin", type: "Exam", time: "08:30 AM", loc: "Exam Halls" },
  { day: 12, month: 10, year: 2026, title: "Parent-Teacher Colloquium", type: "Community", time: "02:00 PM", loc: "Audit Hall" },
  { day: 18, month: 11, year: 2026, title: "Winter Break Commences", type: "Academic", time: "01:00 PM", loc: "School Closed" }
];

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function AcademicCalendar() {
  const [scrollY, setScrollY] = useState(0);
  
  // Start calendar view on September 2026 (Month index 8)
  const [currentDate, setCurrentDate] = useState(new Date(2026, 8, 1));
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const nextMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    setCurrentDate(new Date(month === 11 ? year + 1 : year, month === 11 ? 0 : month + 1, 1));
    setSelectedDay(null);
  };

  const prevMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    setCurrentDate(new Date(month === 0 ? year - 1 : year, month === 0 ? 11 : month - 1, 1));
    setSelectedDay(null);
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const totalDays = getDaysInMonth(year, month);
  const startDayIndex = getFirstDayOfMonth(year, month);

  // Generate blank buffers for calendar alignment
  const blankDays = Array.from({ length: startDayIndex }, (_, i) => i);
  const actualDays = Array.from({ length: totalDays }, (_, i) => i + 1);

  // Filter events matched specifically to this month
  const currentMonthEvents = ACADEMIC_EVENTS.filter(
    (e) => e.month === month && e.year === year
  );

  return (
    <div className="relative w-full min-h-screen bg-[#00152e] text-white selection:bg-secondary selection:text-primary pb-32 pt-24">
      
      {/* Universal Parallax Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
          style={{ transform: `scale(${1 + scrollY * 0.0002})` }}
        />
        <div className="absolute inset-0 bg-primary/95 mix-blend-multiply" />
        <div 
          className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[110px]"
          style={{ transform: `translateY(${scrollY * -0.15}px)` }}
        />
        <div 
          className="absolute bottom-[20%] left-[5%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[130px]"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        />
      </div>

      <main className="relative z-10 w-full max-w-[1300px] mx-auto px-6 lg:px-12 flex flex-col gap-12 pt-16">
        
        {/* Header Block */}
        <section>
          <GlassPanel className="p-10 text-center max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
              Academic <span className="text-secondary font-light italic">Calendar.</span>
            </h1>
            <p className="text-white/80 text-base leading-relaxed max-w-2xl">
              Track session dates, examinations, administrative milestones, and community holidays for the 2026/2027 academic year.
            </p>
          </GlassPanel>
        </section>

        {/* Dynamic Scheduler Grid Workspace */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Calendar Block - Left 8 Columns */}
          <div className="lg:col-span-8">
            <GlassPanel className="p-6 md:p-8">
              {/* Header Navigator */}
              <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                  {MONTH_NAMES[month]} <span className="font-light italic text-secondary">{year}</span>
                </h3>
                <div className="flex gap-2">
                  <Button onClick={prevMonth} variant="ghost" size="icon" className="hover:bg-white/5 rounded-full text-white cursor-pointer">
                    <ArrowLeft size={18} />
                  </Button>
                  <Button onClick={nextMonth} variant="ghost" size="icon" className="hover:bg-white/5 rounded-full text-white cursor-pointer">
                    <ArrowRight size={18} />
                  </Button>
                </div>
              </div>

              {/* Days Grid Heading */}
              <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold text-white/40 uppercase tracking-widest mb-4">
                <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
              </div>

              {/* Dynamic Calendar Blocks */}
              <div className="grid grid-cols-7 gap-2">
                {blankDays.map((i) => <div key={`b-${i}`} className="aspect-square opacity-0" />)}
                {actualDays.map((day) => {
                  const dayEvents = currentMonthEvents.filter((e) => e.day === day);
                  const isEventDay = dayEvents.length > 0;
                  const isSelected = selectedDay === day;

                  return (
                    <div 
                      key={day} 
                      onClick={() => isEventDay && setSelectedDay(day)}
                      className={`aspect-square relative flex items-center justify-center rounded-lg border text-sm font-semibold transition-all duration-300 ${isEventDay ? 'border-secondary cursor-pointer' : 'border-white/5 opacity-40'} ${isSelected ? 'bg-secondary text-primary' : 'bg-white/[0.01] text-white hover:bg-white/10'}`}
                    >
                      <span>{day}</span>
                      {isEventDay && !isSelected && (
                        <span className="absolute bottom-2 w-1.5 h-1.5 rounded-full bg-secondary" />
                      )}
                    </div>
                  );
                })}
              </div>
            </GlassPanel>
          </div>

          {/* Details Sidebar Panel - Right 4 Columns */}
          <div className="lg:col-span-4">
            <GlassPanel className="p-6 md:p-8 h-full min-h-[450px] flex flex-col">
              <h3 className="text-lg font-black text-white uppercase tracking-wider mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
                <CalendarIcon size={18} className="text-secondary" /> Month Focus
              </h3>

              {/* Dynamic Lists of Scheduled Events */}
              <div className="space-y-6 flex-grow overflow-y-auto">
                {currentMonthEvents.length === 0 ? (
                  <div className="text-center py-12 text-white/40 flex flex-col items-center space-y-4">
                    <CalendarIcon size={32} className="opacity-30" />
                    <p className="text-xs uppercase tracking-widest font-bold">No Public Events Scheduled</p>
                  </div>
                ) : (
                  currentMonthEvents.map((item, i) => {
                    const isSelected = selectedDay === item.day;
                    return (
                      <div 
                        key={i} 
                        className={`p-4 border rounded-lg transition-all duration-300 ${isSelected ? 'bg-secondary text-primary border-secondary shadow-lg shadow-secondary/10' : 'bg-white/5 border-white/10 text-white hover:bg-white/10'}`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <span className={`text-[0.6rem] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md ${isSelected ? 'bg-primary text-white' : 'bg-white/10 text-white'}`}>
                            {item.type}
                          </span>
                          <span className="text-xs font-black">
                            {MONTH_NAMES[item.month].substring(0,3)} {item.day}
                          </span>
                        </div>
                        <h4 className="text-sm font-black uppercase mb-3 leading-tight">{item.title}</h4>
                        <div className="flex flex-col gap-1 text-[0.7rem] font-semibold opacity-70">
                          <span className="flex items-center gap-1"><Clock size={10} /> {item.time}</span>
                          <span className="flex items-center gap-1"><MapPin size={10} /> {item.loc}</span>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </GlassPanel>
          </div>

        </section>

      </main>
    </div>
  );
}