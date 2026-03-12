"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Sparkles, 
  Calendar, 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight,
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
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/60 glass border border-obsidian/10 shadow-lg shadow-obsidian/5"
          : "bg-transparent"
      } rounded-full px-2 py-2`}
    >
      <div className="flex items-center gap-2 md:gap-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 px-4">
          <span className={`font-serif text-2xl tracking-tight ${scrolled ? "text-obsidian" : "text-ivory"}`}>
            LUMEN
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {["Услуги", "О нас", "Цены", "Контакты"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className={`text-sm font-medium transition-colors hover:text-champagne lift-hover ${
                scrolled ? "text-slate" : "text-ivory/80"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#цены"
          className="hidden md:flex magnetic-hover overflow-hidden relative bg-champagne text-obsidian px-6 py-2.5 rounded-full font-medium text-sm"
        >
          <span className="relative z-10">Рассчитать стоимость</span>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 rounded-full transition-colors ${
            scrolled ? "text-obsidian" : "text-ivory"
          }`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-ivory rounded-3xl shadow-xl p-6 border border-obsidian/10">
          <div className="flex flex-col gap-4">
            {["Услуги", "О нас", "Цены", "Контакты"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-obsidian font-medium py-2 hover:text-champagne transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#цены"
              className="bg-champagne text-obsidian px-6 py-3 rounded-full font-medium text-center mt-2"
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
  const contentRef = useRef<HTMLDivElement>(null);

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
      className="relative h-[100dvh] min-h-[600px] flex items-end overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')`,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-overlay" />
      
      {/* Marble Texture Overlay */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')`,
          backgroundSize: "cover",
        }}
      />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 w-full px-6 md:px-16 pb-16 md:pb-24">
        <div className="max-w-4xl">
          {/* Hero Line Pattern: "[Aspirational noun] meets [Precision word]" */}
          <p className="hero-text text-champagne font-mono text-sm md:text-base tracking-wider mb-4">
            ПРЕМИАЛЬНЫЙ ЭКО-КЛИНИНГ
          </p>
          
          <h1 className="hero-text font-sans text-4xl md:text-6xl lg:text-7xl font-bold text-ivory leading-[1.1] mb-4 tracking-tight">
            Чистота встречает
          </h1>
          
          <h2 className="hero-text font-serif text-5xl md:text-7xl lg:text-8xl text-champagne italic leading-[1.1] mb-8">
            совершенство.
          </h2>
          
          <p className="hero-text text-ivory/70 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Научный подход к чистоте. Этичный к природе. 
            Мы создаём пространство, где каждая деталь продумана.
          </p>
          
          <div className="hero-text flex flex-col sm:flex-row gap-4">
            <a
              href="#цены"
              className="magnetic-hover inline-flex items-center justify-center gap-2 bg-champagne text-obsidian px-8 py-4 rounded-full font-medium text-lg"
            >
              Рассчитать стоимость
              <ArrowRight size={20} />
            </a>
            <a
              href="#услуги"
              className="magnetic-hover inline-flex items-center justify-center gap-2 border border-ivory/30 text-ivory px-8 py-4 rounded-full font-medium text-lg hover:bg-ivory/10 transition-colors"
            >
              Наши услуги
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-ivory/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-champagne rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}

// ========================================
// FEATURES — "Interactive Functional Artifacts"
// ========================================

// Card 1 — "Diagnostic Shuffler"
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
    <div className="bg-ivory rounded-[2rem] p-8 border border-obsidian/5 shadow-xl shadow-obsidian/5 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-champagne/10 flex items-center justify-center">
          <Sparkles className="text-champagne" size={20} />
        </div>
        <h3 className="font-sans text-xl font-bold text-obsidian">Научный подбор</h3>
      </div>
      
      <p className="text-slate text-sm mb-6 leading-relaxed">
        Индивидуальный подбор эко-средств на основе анализа вашего пространства
      </p>
      
      {/* Shuffler Cards */}
      <div className="relative h-40 flex-1">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="absolute left-0 right-0 bg-white rounded-2xl p-4 border border-obsidian/5 shadow-lg transition-all duration-700"
            style={{
              transform: `translateY(${index * 12}px) scale(${1 - index * 0.05})`,
              zIndex: 3 - index,
              opacity: 1 - index * 0.2,
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-champagne/20 flex items-center justify-center">
                <Check className="text-champagne" size={16} />
              </div>
              <span className="font-medium text-obsidian">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Card 2 — "Telemetry Typewriter"
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
    <div className="bg-ivory rounded-[2rem] p-8 border border-obsidian/5 shadow-xl shadow-obsidian/5 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-champagne/10 flex items-center justify-center">
          <Shield className="text-champagne" size={20} />
        </div>
        <h3 className="font-sans text-xl font-bold text-obsidian">Умное планирование</h3>
      </div>
      
      <p className="text-slate text-sm mb-6 leading-relaxed">
        Цифровой календарь с напоминаниями и персональный менеджер
      </p>
      
      {/* Live Feed */}
      <div className="bg-obsidian rounded-2xl p-4 flex-1">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-green-500 pulse-dot" />
          <span className="font-mono text-xs text-ivory/50 uppercase tracking-wider">
            Live Feed
          </span>
        </div>
        <p className="font-mono text-sm text-champagne">
          {displayText}
          {isTyping && <span className="typing-cursor" />}
        </p>
      </div>
    </div>
  );
}

// Card 3 — "Cursor Protocol Scheduler"
function SchedulerCard() {
  const canvasRef = useRef<HTMLDivElement>(null);
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

  const weekDays = ["С", "П", "В", "С", "Ч", "П", "Ш", "В"];

  return (
    <div className="bg-ivory rounded-[2rem] p-8 border border-obsidian/5 shadow-xl shadow-obsidian/5 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-champagne/10 flex items-center justify-center">
          <Calendar className="text-champagne" size={20} />
        </div>
        <h3 className="font-sans text-xl font-bold text-obsidian">Гарантия результата</h3>
      </div>
      
      <p className="text-slate text-sm mb-6 leading-relaxed">
        Страховка имущества и бесплатный доклинг при необходимости
      </p>
      
      {/* Weekly Grid */}
      <div ref={canvasRef} className="bg-white rounded-2xl p-4 flex-1">
        <div className="grid grid-cols-7 gap-2 mb-4">
          {weekDays.map((day, index) => (
            <div
              key={index}
              className={`aspect-square rounded-xl flex items-center justify-center font-mono text-sm transition-all duration-300 ${
                activeDay === index
                  ? "bg-champagne text-obsidian scale-95"
                  : "bg-obsidian/5 text-slate"
              }`}
            >
              {day}
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-slate">Ближайший слот: завтра, 10:00</span>
          <button className="bg-obsidian text-ivory px-4 py-2 rounded-full text-xs font-medium magnetic-hover">
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
    <section ref={sectionRef} id="услуги" className="py-24 md:py-32 px-6 md:px-16 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-champagne text-sm tracking-wider mb-4">
            ТРИ ПРИНЦИПА
          </p>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-obsidian tracking-tight">
            Почему выбирают нас
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
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
    <section ref={sectionRef} className="relative py-32 md:py-48 overflow-hidden">
      {/* Dark Background */}
      <div className="absolute inset-0 bg-obsidian" />
      
      {/* Texture Image */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-16 text-center">
        <p className="philosophy-text text-ivory/60 text-lg md:text-xl mb-8 leading-relaxed">
          Большинство клининговых компаний фокусируется на скорости и низкой цене.
        </p>
        
        <h2 className="philosophy-text font-serif text-3xl md:text-5xl lg:text-6xl text-ivory leading-tight italic">
          Мы фокусируемся на{" "}
          <span className="text-champagne not-italic font-sans font-bold">
            качестве и заботе
          </span>{" "}
          о вашем пространстве.
        </h2>
        
        <div className="philosophy-text mt-12 flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2 text-ivory/50">
            <div className="w-1.5 h-1.5 rounded-full bg-champagne" />
            <span className="font-mono text-sm">100% эко-средства</span>
          </div>
          <div className="flex items-center gap-2 text-ivory/50">
            <div className="w-1.5 h-1.5 rounded-full bg-champagne" />
            <span className="font-mono text-sm">Страховка до 500 000 ₽</span>
          </div>
          <div className="flex items-center gap-2 text-ivory/50">
            <div className="w-1.5 h-1.5 rounded-full bg-champagne" />
            <span className="font-mono text-sm">5000+ довольных клиентов</span>
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
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.to(card, {
              scale: 1 - progress * 0.1,
              filter: `blur(${progress * 20}px)`,
              opacity: 1 - progress * 0.5,
              duration: 0.1,
            });
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
    <section ref={sectionRef} id="о-нас" className="bg-slate py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        <div className="text-center mb-16">
          <p className="font-mono text-champagne text-sm tracking-wider mb-4">
            ПРОТОКОЛ
          </p>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-ivory tracking-tight">
            Как мы работаем
          </h2>
        </div>
        
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              ref={(el) => { cardRefs.current[index] = el; }}
              className="bg-obsidian rounded-[3rem] p-8 md:p-12 border border-ivory/5 relative overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="font-mono text-champagne text-sm">{step.number}</span>
                  <h3 className="font-sans text-3xl md:text-4xl font-bold text-ivory mt-2 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-ivory/60 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Animation Canvas */}
                <div className="relative h-48 md:h-64">
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

// SVG Animation: Rotating Double Helix
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
      <path
        className="helix-path"
        d="M100,10 Q150,50 100,100 Q50,150 100,190"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="2"
        opacity="0.8"
      />
      <path
        className="helix-path"
        d="M100,10 Q50,50 100,100 Q150,150 100,190"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="2"
        opacity="0.4"
      />
      {[0, 1, 2, 3, 4].map((i) => (
        <circle
          key={i}
          className="helix-path"
          cx={100}
          cy={30 + i * 35}
          r="6"
          fill="#C9A84C"
          opacity={0.3 + i * 0.15}
        />
      ))}
    </svg>
  );
}

// SVG Animation: Scanning Laser Line
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
      {/* Grid */}
      {Array.from({ length: 5 }).map((_, i) => (
        <g key={i}>
          {Array.from({ length: 5 }).map((_, j) => (
            <circle
              key={`${i}-${j}`}
              cx={30 + j * 35}
              cy={30 + i * 35}
              r="4"
              fill="#C9A84C"
              opacity="0.3"
            />
          ))}
        </g>
      ))}
      {/* Scanning Line */}
      <line
        ref={lineRef}
        x1="10"
        y1="20"
        x2="190"
        y2="20"
        stroke="#C9A84C"
        strokeWidth="2"
        opacity="0.8"
      />
    </svg>
  );
}

// SVG Animation: Pulsing Waveform
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
      <path
        ref={pathRef}
        d="M0,40 Q25,10 50,40 T100,40 T150,40 T200,40"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="10 5"
        opacity="0.8"
      />
      <path
        d="M0,40 Q25,70 50,40 T100,40 T150,40 T200,40"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.3"
      />
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
      features: [
        "Всё из Базового",
        "Уборка кухни (внутри шкафов)",
        "Мытьё окон и зеркал",
        "Химчистка мягкой мебели",
        "Эко-средства включены",
      ],
      highlighted: true,
    },
    {
      name: "Корпоративный",
      price: "Договорная",
      description: "Регулярная уборка офисов и бизнес-центров",
      features: [
        "Индивидуальный график",
        "Персональный менеджер",
        "Страховка имущества",
        "Ежемесячный отчёт",
        "Приоритетное обслуживание",
      ],
      highlighted: false,
    },
  ];

  return (
    <section ref={sectionRef} id="цены" className="py-24 md:py-32 px-6 md:px-16 bg-ivory">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-champagne text-sm tracking-wider mb-4">
            ТАРИФЫ
          </p>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-obsidian tracking-tight">
            Прозрачные цены
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card rounded-[2rem] p-8 ${
                plan.highlighted
                  ? "bg-obsidian text-ivory scale-105 ring-2 ring-champagne shadow-2xl shadow-champagne/20"
                  : "bg-white border border-obsidian/5 shadow-xl shadow-obsidian/5"
              }`}
            >
              {plan.highlighted && (
                <div className="bg-champagne text-obsidian text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                  ПОПУЛЯРНЫЙ
                </div>
              )}
              
              <h3 className={`font-sans text-2xl font-bold ${plan.highlighted ? "text-ivory" : "text-obsidian"}`}>
                {plan.name}
              </h3>
              
              <p className={`text-sm mt-2 mb-6 ${plan.highlighted ? "text-ivory/60" : "text-slate"}`}>
                {plan.description}
              </p>
              
              <div className="mb-6">
                <span className={`font-serif text-4xl italic ${plan.highlighted ? "text-champagne" : "text-obsidian"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.highlighted ? "text-ivory/50" : "text-slate"}`}> ₽</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check size={16} className={plan.highlighted ? "text-champagne" : "text-champagne"} />
                    <span className={`text-sm ${plan.highlighted ? "text-ivory/80" : "text-slate"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <a
                href="#контакты"
                className={`block text-center py-3 rounded-full font-medium magnetic-hover ${
                  plan.highlighted
                    ? "bg-champagne text-obsidian"
                    : "bg-obsidian text-ivory"
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
    <footer id="контакты" className="bg-obsidian rounded-t-[4rem] pt-16 pb-8 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-3xl text-ivory italic mb-4">LUMEN</h3>
            <p className="text-ivory/50 text-sm leading-relaxed mb-6">
              Премиальный эко-клининг нового поколения. Научный подход к чистоте, этичный к природе.
            </p>
            
            {/* Status Indicator */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 pulse-dot" />
              <span className="font-mono text-xs text-ivory/50">Система активна</span>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="font-sans text-sm font-bold text-ivory mb-4 uppercase tracking-wider">
              Навигация
            </h4>
            <ul className="space-y-2">
              {["Услуги", "О нас", "Цены", "Контакты"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-ivory/50 text-sm hover:text-champagne transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-sans text-sm font-bold text-ivory mb-4 uppercase tracking-wider">
              Услуги
            </h4>
            <ul className="space-y-2">
              {["Уборка квартир", "Генеральная уборка", "Уборка офисов", "Химчистка мебели"].map((item) => (
                <li key={item}>
                  <span className="text-ivory/50 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-sans text-sm font-bold text-ivory mb-4 uppercase tracking-wider">
              Контакты
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-champagne" />
                <a href="tel:+74951234567" className="text-ivory/50 text-sm hover:text-champagne transition-colors">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-champagne" />
                <a href="mailto:info@lumen.clean" className="text-ivory/50 text-sm hover:text-champagne transition-colors">
                  info@lumen.clean
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-champagne mt-0.5" />
                <span className="text-ivory/50 text-sm">
                  Москва, ул. Тверская, 1
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-ivory/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ivory/30 text-xs">
            © 2024 LUMEN. Все права защищены.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-ivory/30 text-xs hover:text-ivory/50 transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-ivory/30 text-xs hover:text-ivory/50 transition-colors">
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
    <main className="min-h-screen">
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
