"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Sparkles, 
  Calendar, 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  Check,
  ArrowRight,
  Menu,
  X
} from "lucide-react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ========================================
// NAVBAR — "The Floating Island"
// ========================================
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <nav
      className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 max-w-[95vw] ${
        scrolled
          ? "bg-[#FAF8F5]/80 backdrop-blur-xl border border-[#0D0D12]/10 shadow-lg shadow-[#0D0D12]/5"
          : "bg-transparent"
      } rounded-full px-3 py-2 md:px-2`}
    >
      <div className="flex items-center gap-2 md:gap-6">
        <a href="#" className="flex items-center gap-2 px-2 md:px-4">
          <span className={`font-serif text-xl md:text-2xl tracking-tight transition-colors duration-300 ${
            scrolled ? "text-[#0D0D12]" : "text-[#FAF8F5]"
          }`}>
            LUMEN
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {["Услуги", "О нас", "Цены", "Контакты"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className={`text-sm font-medium transition-colors hover:text-[#C9A84C] ${
                scrolled ? "text-[#2A2A35]" : "text-[#FAF8F5]/80"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#цены"
          className="hidden md:flex items-center gap-2 bg-[#C9A84C] text-[#0D0D12] px-5 py-2.5 rounded-full font-medium text-sm transition-transform hover:scale-[1.03] duration-300"
        >
          Рассчитать стоимость
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 rounded-full transition-colors ${
            scrolled ? "text-[#0D0D12]" : "text-[#FAF8F5]"
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-[#FAF8F5] rounded-3xl shadow-xl p-6 border border-[#0D0D12]/10">
          <div className="flex flex-col gap-4">
            {["Услуги", "О нас", "Цены", "Контакты"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-[#0D0D12] font-medium py-2 hover:text-[#C9A84C] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#цены"
              className="bg-[#C9A84C] text-[#0D0D12] px-6 py-3 rounded-full font-medium text-center mt-2 transition-transform hover:scale-[1.02]"
              onClick={() => setMobileOpen(false)}
            >
              Рассчитать стоимость
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

// ========================================
// HERO SECTION — "The Opening Shot"
// ========================================
function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.3,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-[100dvh] min-h-[500px] md:min-h-[600px] flex items-end overflow-hidden"
    >
      {/* Background Image - local file for Telegram browser compatibility */}
      <img
        src="/images/hero-main.jpg"
        alt="Luxury interior"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
        fetchPriority="high"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-[#0D0D12]/70 to-transparent" />
      
      {/* Marble Texture Overlay - Desktop only, local file */}
      <img
        src="/images/hero-overlay.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay hidden md:block"
        loading="lazy"
      />

      {/* Content */}
      <div className="relative z-10 w-full px-5 md:px-16 pb-20 md:pb-24">
        <div className="max-w-4xl">
          <p className="hero-text text-[#C9A84C] font-mono text-xs md:text-sm tracking-wider mb-3 md:mb-4">
            ПРЕМИАЛЬНЫЙ ЭКО-КЛИНИНГ
          </p>
          
          <h1 className="hero-text font-sans text-3xl md:text-6xl lg:text-7xl font-bold text-[#FAF8F5] leading-[1.1] mb-3 md:mb-4 tracking-tight">
            Чистота встречает
          </h1>
          
          <h2 className="hero-text font-serif text-4xl md:text-7xl lg:text-8xl text-[#C9A84C] italic leading-[1.1] mb-6 md:mb-8">
            совершенство.
          </h2>
          
          <p className="hero-text text-[#FAF8F5]/70 text-base md:text-xl max-w-xl mb-8 md:mb-10 leading-relaxed">
            Научный подход к чистоте. Этичный к природе. 
            Мы создаём пространство, где каждая деталь продумана.
          </p>
          
          <div className="hero-text flex flex-col sm:flex-row gap-3 md:gap-4">
            <a
              href="#цены"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-[#0D0D12] px-6 md:px-8 py-3 md:py-4 rounded-full font-medium text-base md:text-lg transition-transform hover:scale-[1.03] duration-300"
            >
              Рассчитать стоимость
              <ArrowRight size={18} className="md:w-5 md:h-5" />
            </a>
            <a
              href="#услуги"
              className="inline-flex items-center justify-center gap-2 border border-[#FAF8F5]/30 text-[#FAF8F5] px-6 md:px-8 py-3 md:py-4 rounded-full font-medium text-base md:text-lg hover:bg-[#FAF8F5]/10 transition-colors"
            >
              Наши услуги
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-[#FAF8F5]/30 rounded-full flex items-start justify-center p-1.5 md:p-2">
          <div className="w-1 h-1.5 md:h-2 bg-[#C9A84C] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}

// ========================================
// FEATURES — "Interactive Functional Artifacts"
// ========================================
function ShufflerCard() {
  const [items, setItems] = useState([
    { id: 1, label: "Гипоаллергенные формулы" },
    { id: 2, label: "Биоразлагаемые составы" },
    { id: 3, label: "pH-нейтральные растворы" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => {
        const newArr = [...prev];
        const last = newArr.pop();
        if (last) newArr.unshift(last);
        return newArr;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#FAF8F5] rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border border-[#0D0D12]/5 shadow-xl shadow-[#0D0D12]/5 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4 md:mb-6">
        <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0">
          <Sparkles className="text-[#C9A84C] w-4 h-4 md:w-5 md:h-5" />
        </div>
        <h3 className="font-sans text-lg md:text-xl font-bold text-[#0D0D12]">Научный подбор</h3>
      </div>
      
      <p className="text-[#2A2A35] text-sm mb-4 md:mb-6 leading-relaxed">
        Индивидуальный подбор эко-средств на основе анализа вашего пространства
      </p>
      
      <div className="relative h-36 md:h-40 flex-1">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="absolute left-0 right-0 bg-white rounded-xl md:rounded-2xl p-3 md:p-4 border border-[#0D0D12]/5 shadow-lg transition-all duration-700"
            style={{
              transform: `translateY(${index * 10}px) scale(${1 - index * 0.05})`,
              zIndex: 3 - index,
              opacity: 1 - index * 0.2,
            }}
          >
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
                <Check className="text-[#C9A84C] w-3.5 h-3.5 md:w-4 md:h-4" />
              </div>
              <span className="font-medium text-[#0D0D12] text-sm md:text-base">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TypewriterCard() {
  const messages = [
    "Обнаружено 0 аллергенов в зоне обработки",
    "Уровень pH: 7.0 (нейтральный)",
    "Биоразлагаемость: 99.7%",
    "Время высыхания: 12 минут",
  ];
  const [currentMessage, setCurrentMessage] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let charIndex = 0;
    const message = messages[currentMessage];
    
    const typeInterval = setInterval(() => {
      if (charIndex <= message.length) {
        setDisplayText(message.slice(0, charIndex));
        charIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
        
        setTimeout(() => {
          setCurrentMessage((prev) => (prev + 1) % messages.length);
          setIsTyping(true);
        }, 2000);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentMessage]);

  return (
    <div className="bg-[#FAF8F5] rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border border-[#0D0D12]/5 shadow-xl shadow-[#0D0D12]/5 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4 md:mb-6">
        <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0">
          <Shield className="text-[#C9A84C] w-4 h-4 md:w-5 md:h-5" />
        </div>
        <h3 className="font-sans text-lg md:text-xl font-bold text-[#0D0D12]">Умное планирование</h3>
      </div>
      
      <p className="text-[#2A2A35] text-sm mb-4 md:mb-6 leading-relaxed">
        Цифровой календарь с напоминаниями и персональный менеджер
      </p>
      
      <div className="bg-[#0D0D12] rounded-xl md:rounded-2xl p-3 md:p-4 flex-1 min-h-[120px]">
        <div className="flex items-center gap-2 mb-3 md:mb-4">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="font-mono text-[10px] md:text-xs text-[#FAF8F5]/50 uppercase tracking-wider">
            Live Feed
          </span>
        </div>
        <p className="font-mono text-xs md:text-sm text-[#C9A84C] leading-relaxed">
          {displayText}
          {isTyping && <span className="inline-block w-0.5 h-4 md:h-5 bg-[#C9A84C] ml-0.5 animate-pulse" />}
        </p>
      </div>
    </div>
  );
}

function SchedulerCard() {
  const [activeDay, setActiveDay] = useState<number | null>(null);

  useEffect(() => {
    const days = [0, 1, 2, 3, 4, 5, 6];
    let dayIndex = 0;
    
    const interval = setInterval(() => {
      setActiveDay(days[dayIndex]);
      dayIndex = (dayIndex + 1) % days.length;
    }, 1500);
    
    return () => clearInterval(interval);
  }, []);

  const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  return (
    <div className="bg-[#FAF8F5] rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border border-[#0D0D12]/5 shadow-xl shadow-[#0D0D12]/5 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4 md:mb-6">
        <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0">
          <Calendar className="text-[#C9A84C] w-4 h-4 md:w-5 md:h-5" />
        </div>
        <h3 className="font-sans text-lg md:text-xl font-bold text-[#0D0D12]">Гарантия результата</h3>
      </div>
      
      <p className="text-[#2A2A35] text-sm mb-4 md:mb-6 leading-relaxed">
        Страховка имущества и бесплатный доклинг при необходимости
      </p>
      
      <div className="bg-white rounded-xl md:rounded-2xl p-3 md:p-4 flex-1">
        <div className="grid grid-cols-7 gap-1.5 md:gap-2 mb-3 md:mb-4">
          {weekDays.map((day, index) => (
            <div
              key={index}
              className={`aspect-square rounded-lg md:rounded-xl flex items-center justify-center font-mono text-[10px] md:text-sm transition-all duration-300 ${
                activeDay === index
                  ? "bg-[#C9A84C] text-[#0D0D12] scale-95"
                  : "bg-[#0D0D12]/5 text-[#2A2A35]"
              }`}
            >
              {day}
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-[10px] md:text-xs text-[#2A2A35] truncate">Ближайший слот: завтра, 10:00</span>
          <button className="bg-[#0D0D12] text-[#FAF8F5] px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[10px] md:text-xs font-medium whitespace-nowrap transition-transform hover:scale-[1.03]">
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
}

function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".feature-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="услуги" className="py-16 md:py-32 px-5 md:px-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-mono text-[#C9A84C] text-xs md:text-sm tracking-wider mb-3 md:mb-4">
            ТРИ ПРИНЦИПА
          </p>
          <h2 className="font-sans text-3xl md:text-5xl font-bold text-[#0D0D12] tracking-tight">
            Почему выбирают нас
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="feature-card">
            <ShufflerCard />
          </div>
          <div className="feature-card">
            <TypewriterCard />
          </div>
          <div className="feature-card">
            <SchedulerCard />
          </div>
        </div>
      </div>
    </section>
  );
}

// ========================================
// PHILOSOPHY — "The Manifesto"
// ========================================
function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".philosophy-text",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-[#0D0D12]" />
      
      {/* Texture Image - Desktop only, local file */}
      <img
        src="/images/philosophy.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-10 hidden md:block"
        loading="lazy"
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-16 text-center">
        <p className="philosophy-text text-[#FAF8F5]/60 text-base md:text-xl mb-6 md:mb-8 leading-relaxed">
          Большинство клининговых компаний фокусируется на скорости и низкой цене.
        </p>
        
        <h2 className="philosophy-text font-serif text-2xl md:text-5xl lg:text-6xl text-[#FAF8F5] leading-tight italic">
          Мы фокусируемся на{" "}
          <span className="text-[#C9A84C] not-italic font-sans font-bold">
            качестве и заботе
          </span>{" "}
          о вашем пространстве.
        </h2>
        
        <div className="philosophy-text mt-8 md:mt-12 flex flex-wrap justify-center gap-4 md:gap-6">
          <div className="flex items-center gap-2 text-[#FAF8F5]/50">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
            <span className="font-mono text-xs md:text-sm">100% эко-средства</span>
          </div>
          <div className="flex items-center gap-2 text-[#FAF8F5]/50">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
            <span className="font-mono text-xs md:text-sm">Страховка до 500 000 ₽</span>
          </div>
          <div className="flex items-center gap-2 text-[#FAF8F5]/50">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
            <span className="font-mono text-xs md:text-sm">5000+ довольных клиентов</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ========================================
// PROTOCOL — "Sticky Stacking Archive"
// ========================================
function Protocol() {
  const sectionRef = useRef<HTMLElement>(null);

  const steps = [
    {
      number: "01",
      title: "Консультация",
      description: "Бесплатный выезд специалиста для оценки объёма работ и подбора оптимального решения",
      animation: "helix",
    },
    {
      number: "02",
      title: "Планирование",
      description: "Составление индивидуального графика и подбор эко-средств под ваши потребности",
      animation: "scan",
    },
    {
      number: "03",
      title: "Исполнение",
      description: "Профессиональная уборка с использованием премиального оборудования и средств",
      animation: "wave",
    },
  ];

  return (
    <section ref={sectionRef} id="о-нас" className="bg-[#2A2A35] py-16 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-16">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-mono text-[#C9A84C] text-xs md:text-sm tracking-wider mb-3 md:mb-4">
            ПРОТОКОЛ
          </p>
          <h2 className="font-sans text-3xl md:text-5xl font-bold text-[#FAF8F5] tracking-tight">
            Как мы работаем
          </h2>
        </div>
        
        <div className="space-y-6 md:space-y-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#0D0D12] rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 border border-[#FAF8F5]/5 relative overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                <div>
                  <span className="font-mono text-[#C9A84C] text-xs md:text-sm">{step.number}</span>
                  <h3 className="font-sans text-2xl md:text-4xl font-bold text-[#FAF8F5] mt-2 mb-3 md:mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[#FAF8F5]/60 text-base md:text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                <div className="relative h-40 md:h-64">
                  {step.animation === "helix" && <HelixAnimation />}
                  {step.animation === "scan" && <ScanAnimation />}
                  {step.animation === "wave" && <WaveAnimation />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// SVG Animations
function HelixAnimation() {
  const pathRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!pathRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.to(".helix-path", {
        rotation: 360,
        transformOrigin: "center center",
        duration: 20,
        repeat: -1,
        ease: "none",
      });
    }, pathRef);

    return () => ctx.revert();
  }, []);

  return (
    <svg ref={pathRef} viewBox="0 0 200 200" className="w-full h-full">
      <path className="helix-path" d="M100,10 Q150,50 100,100 Q50,150 100,190" fill="none" stroke="#C9A84C" strokeWidth="2" opacity="0.8" />
      <path className="helix-path" d="M100,10 Q50,50 100,100 Q150,150 100,190" fill="none" stroke="#C9A84C" strokeWidth="2" opacity="0.4" />
      {[0, 1, 2, 3, 4].map((i) => (
        <circle key={i} className="helix-path" cx={100} cy={30 + i * 35} r="6" fill="#C9A84C" opacity={0.3 + i * 0.15} />
      ))}
    </svg>
  );
}

function ScanAnimation() {
  const lineRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    if (!lineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(lineRef.current, {
        attr: { y1: 180, y2: 180 },
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }, lineRef);

    return () => ctx.revert();
  }, []);

  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {Array.from({ length: 5 }).map((_, i) => (
        <g key={i}>
          {Array.from({ length: 5 }).map((_, j) => (
            <circle key={`${i}-${j}`} cx={30 + j * 35} cy={30 + i * 35} r="4" fill="#C9A84C" opacity="0.3" />
          ))}
        </g>
      ))}
      <line ref={lineRef} x1="10" y1="20" x2="190" y2="20" stroke="#C9A84C" strokeWidth="2" opacity="0.8" />
    </svg>
  );
}

function WaveAnimation() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!pathRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(pathRef.current, {
        strokeDashoffset: -100,
        duration: 2,
        repeat: -1,
        ease: "none",
      });
    }, pathRef);

    return () => ctx.revert();
  }, []);

  return (
    <svg viewBox="0 0 200 80" className="w-full h-full">
      <path ref={pathRef} d="M0,40 Q25,10 50,40 T100,40 T150,40 T200,40" fill="none" stroke="#C9A84C" strokeWidth="3" strokeLinecap="round" strokeDasharray="10 5" opacity="0.8" />
      <path d="M0,40 Q25,70 50,40 T100,40 T150,40 T200,40" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}

// ========================================
// PRICING — "Membership"
// ========================================
function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pricing-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const plans = [
    {
      name: "Базовый",
      price: "от 3 500",
      description: "Разовая уборка квартиры",
      features: ["Уборка всех комнат", "Влажная уборка полов", "Уборка санузла", "Вынос мусора"],
      highlighted: false,
    },
    {
      name: "Премиум",
      price: "от 7 900",
      description: "Генеральная уборка с эко-средствами",
      features: ["Всё из Базового", "Уборка кухни (внутри шкафов)", "Мытьё окон и зеркал", "Химчистка мягкой мебели", "Эко-средства включены"],
      highlighted: true,
    },
    {
      name: "Корпоративный",
      price: "Договорная",
      description: "Регулярная уборка офисов и бизнес-центров",
      features: ["Индивидуальный график", "Персональный менеджер", "Страховка имущества", "Ежемесячный отчёт", "Приоритетное обслуживание"],
      highlighted: false,
    },
  ];

  return (
    <section ref={sectionRef} id="цены" className="py-16 md:py-32 px-5 md:px-16 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-mono text-[#C9A84C] text-xs md:text-sm tracking-wider mb-3 md:mb-4">
            ТАРИФЫ
          </p>
          <h2 className="font-sans text-3xl md:text-5xl font-bold text-[#0D0D12] tracking-tight">
            Прозрачные цены
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 ${
                plan.highlighted
                  ? "bg-[#0D0D12] text-[#FAF8F5] md:scale-105 ring-2 ring-[#C9A84C] shadow-2xl shadow-[#C9A84C]/20"
                  : "bg-white border border-[#0D0D12]/5 shadow-xl shadow-[#0D0D12]/5"
              }`}
            >
              {plan.highlighted && (
                <div className="bg-[#C9A84C] text-[#0D0D12] text-[10px] md:text-xs font-bold px-3 py-1 rounded-full inline-block mb-3 md:mb-4">
                  ПОПУЛЯРНЫЙ
                </div>
              )}
              
              <h3 className={`font-sans text-xl md:text-2xl font-bold ${plan.highlighted ? "text-[#FAF8F5]" : "text-[#0D0D12]"}`}>
                {plan.name}
              </h3>
              
              <p className={`text-xs md:text-sm mt-2 mb-4 md:mb-6 ${plan.highlighted ? "text-[#FAF8F5]/60" : "text-[#2A2A35]"}`}>
                {plan.description}
              </p>
              
              <div className="mb-4 md:mb-6">
                <span className={`font-serif text-3xl md:text-4xl italic ${plan.highlighted ? "text-[#C9A84C]" : "text-[#0D0D12]"}`}>
                  {plan.price}
                </span>
                <span className={`text-xs md:text-sm ${plan.highlighted ? "text-[#FAF8F5]/50" : "text-[#2A2A35]"}`}> ₽</span>
              </div>
              
              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 md:gap-3">
                    <Check size={14} className="text-[#C9A84C] flex-shrink-0 md:w-4 md:h-4" />
                    <span className={`text-xs md:text-sm ${plan.highlighted ? "text-[#FAF8F5]/80" : "text-[#2A2A35]"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <a
                href="#контакты"
                className={`block text-center py-2.5 md:py-3 rounded-full font-medium text-sm md:text-base transition-transform hover:scale-[1.03] duration-300 ${
                  plan.highlighted ? "bg-[#C9A84C] text-[#0D0D12]" : "bg-[#0D0D12] text-[#FAF8F5]"
                }`}
              >
                Заказать
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ========================================
// FOOTER
// ========================================
function Footer() {
  return (
    <footer id="контакты" className="bg-[#0D0D12] rounded-t-[2rem] md:rounded-t-[4rem] pt-12 md:pt-16 pb-6 md:pb-8 px-5 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-12">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-serif text-2xl md:text-3xl text-[#FAF8F5] italic mb-3 md:mb-4">LUMEN</h3>
            <p className="text-[#FAF8F5]/50 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
              Премиальный эко-клининг нового поколения. Научный подход к чистоте, этичный к природе.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-[10px] md:text-xs text-[#FAF8F5]/50">Система активна</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-sans text-xs md:text-sm font-bold text-[#FAF8F5] mb-3 md:mb-4 uppercase tracking-wider">Навигация</h4>
            <ul className="space-y-1.5 md:space-y-2">
              {["Услуги", "О нас", "Цены", "Контакты"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-[#FAF8F5]/50 text-xs md:text-sm hover:text-[#C9A84C] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-sans text-xs md:text-sm font-bold text-[#FAF8F5] mb-3 md:mb-4 uppercase tracking-wider">Услуги</h4>
            <ul className="space-y-1.5 md:space-y-2">
              {["Уборка квартир", "Генеральная уборка", "Уборка офисов", "Химчистка мебели"].map((item) => (
                <li key={item}>
                  <span className="text-[#FAF8F5]/50 text-xs md:text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-sans text-xs md:text-sm font-bold text-[#FAF8F5] mb-3 md:mb-4 uppercase tracking-wider">Контакты</h4>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-center gap-2 md:gap-3">
                <Phone size={14} className="text-[#C9A84C] flex-shrink-0" />
                <a href="tel:+74951234567" className="text-[#FAF8F5]/50 text-xs md:text-sm hover:text-[#C9A84C] transition-colors">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2 md:gap-3">
                <Mail size={14} className="text-[#C9A84C] flex-shrink-0" />
                <a href="mailto:info@lumen.clean" className="text-[#FAF8F5]/50 text-xs md:text-sm hover:text-[#C9A84C] transition-colors">
                  info@lumen.clean
                </a>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <MapPin size={14} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
                <span className="text-[#FAF8F5]/50 text-xs md:text-sm">Москва, ул. Тверская, 1</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#FAF8F5]/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-[#FAF8F5]/30 text-[10px] md:text-xs text-center md:text-left">
            © 2024 LUMEN. Все права защищены.
          </p>
          <div className="flex gap-4 md:gap-6">
            <a href="#" className="text-[#FAF8F5]/30 text-[10px] md:text-xs hover:text-[#FAF8F5]/50 transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-[#FAF8F5]/30 text-[10px] md:text-xs hover:text-[#FAF8F5]/50 transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ========================================
// MAIN APP
// ========================================
export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
      <Pricing />
      <Footer />
    </main>
  );
}
