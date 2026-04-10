import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef, useCallback } from "react";

import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";
import RippleButton from "./RippleButton";
import { useLanguage } from "@/contexts/LanguageContext";

// Partner logos (SVG/PNG, white on transparent)
import aristaLogo from "@/assets/partners/arista-partner.svg";
import awsLogo from "@/assets/partners/aws.svg";
import checkpointLogo from "@/assets/partners/checkpoint.svg";
import everpureLogo from "@/assets/partners/everpure.svg";
import elasticLogo from "@/assets/partners/elastic-partner.svg";
import exagridLogo from "@/assets/partners/exagrid.svg";
import extremeLogo from "@/assets/partners/extreme-partner.svg";
import gigamonLogo from "@/assets/partners/gigamon.png";
import halcyonLogo from "@/assets/partners/halcyon-partner.svg";
import hpeLogo from "@/assets/partners/hpe.svg";
import invenziLogo from "@/assets/partners/invenzi-partner.png";
import lenovoLogo from "@/assets/partners/lenovo-partner.svg";
import milestoneLogo from "@/assets/partners/milestone-partner.svg";
import mitelLogo from "@/assets/partners/mitel-partner.svg";
import netappLogo from "@/assets/partners/netapp-partner.svg";
import nutanixLogo from "@/assets/partners/nutanix.svg";
import proofpointLogo from "@/assets/partners/proofpoint-partner.svg";
import riverbedLogo from "@/assets/partners/riverbed.svg";
import rsaLogo from "@/assets/partners/rsa-partner.svg";
import sentineloneLogo from "@/assets/partners/s1-partner.svg";
import seguraLogo from "@/assets/partners/segura-partner.svg";
import veeamLogo from "@/assets/partners/veeam.svg";

// Alphabetical order, with individual width tuning for visual balance (Gigamon = reference at 112/128)
const heroPartners = [
  { name: "Arista", logo: aristaLogo, cls: "w-[100px] md:w-[118px] h-auto" },
  { name: "AWS", logo: awsLogo, cls: "w-[52px] md:w-[60px] h-auto" },
  { name: "Check Point", logo: checkpointLogo, cls: "w-[112px] md:w-[128px] h-auto" },
  { name: "Everpure", logo: everpureLogo, cls: "w-[112px] md:w-[128px] h-auto" },
  { name: "Elastic", logo: elasticLogo, cls: "w-[96px] md:w-[112px] h-auto" },
  { name: "ExaGrid", logo: exagridLogo, cls: "w-[96px] md:w-[112px] h-auto" },
  { name: "Extreme Networks", logo: extremeLogo, cls: "w-[112px] md:w-[128px] h-auto" },
  { name: "Gigamon", logo: gigamonLogo, cls: "w-[112px] md:w-[128px] h-auto" },
  { name: "Halcyon", logo: halcyonLogo, cls: "w-[108px] md:w-[124px] h-auto" },
  { name: "HPE", logo: hpeLogo, cls: "w-[64px] md:w-[72px] h-auto" },
  { name: "Invenzi", logo: invenziLogo, cls: "w-[96px] md:w-[112px] h-auto" },
  { name: "Lenovo", logo: lenovoLogo, cls: "w-[100px] md:w-[116px] h-auto" },
  { name: "Milestone", logo: milestoneLogo, cls: "w-[108px] md:w-[124px] h-auto" },
  { name: "Mitel", logo: mitelLogo, cls: "w-[88px] md:w-[100px] h-auto" },
  { name: "NetApp", logo: netappLogo, cls: "w-[96px] md:w-[112px] h-auto" },
  { name: "Nutanix", logo: nutanixLogo, cls: "w-[112px] md:w-[128px] h-auto" },
  { name: "Proofpoint", logo: proofpointLogo, cls: "w-[112px] md:w-[128px] h-auto" },
  { name: "Riverbed", logo: riverbedLogo, cls: "w-[112px] md:w-[128px] h-auto" },
  { name: "RSA", logo: rsaLogo, cls: "w-[72px] md:w-[84px] h-auto" },
  { name: "Segura", logo: seguraLogo, cls: "w-[108px] md:w-[124px] h-auto" },
  { name: "SentinelOne", logo: sentineloneLogo, cls: "w-[108px] md:w-[124px] h-auto" },
  { name: "Veeam", logo: veeamLogo, cls: "w-[112px] md:w-[128px] h-auto" },
];

interface PartnerItem {
  name: string;
  logo: string;
  cls: string;
}

const DragCarousel = ({ partners }: { partners: PartnerItem[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const dragState = useRef({ startX: 0, scrollLeft: 0 });
  const resumeTimer = useRef<ReturnType<typeof setTimeout>>();

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    const container = containerRef.current;
    if (!container) return;
    setIsDragging(true);
    setIsPaused(true);
    clearTimeout(resumeTimer.current);
    dragState.current = { startX: e.clientX, scrollLeft: container.scrollLeft };
    container.setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging || !containerRef.current) return;
    const dx = e.clientX - dragState.current.startX;
    containerRef.current.scrollLeft = dragState.current.scrollLeft - dx;
  }, [isDragging]);

  const onPointerUp = useCallback(() => {
    setIsDragging(false);
    resumeTimer.current = setTimeout(() => setIsPaused(false), 3000);
  }, []);

  // Auto-scroll via requestAnimationFrame
  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    let animId: number;
    const speed = 0.5; // px per frame

    const tick = () => {
      if (!isPaused && !isDragging) {
        container.scrollLeft += speed;
        // Reset seamlessly when we've scrolled past the first set
        const halfWidth = inner.scrollWidth / 2;
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        }
      }
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [isPaused, isDragging]);

  return (
    <div
      ref={containerRef}
      className={`relative z-10 overflow-hidden select-none ${
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
      }`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div className="py-6">
        <div ref={innerRef} className="flex" style={{ width: "max-content" }}>
          {partners.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex-shrink-0 px-6 md:px-10 flex items-center justify-center h-14"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className={`${partner.cls} object-contain opacity-90 brightness-0 invert`}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contentOpacity = Math.max(0, 1 - scrollY / 600);

  // Duplicate for seamless loop
  const doubled = [...heroPartners, ...heroPartners];

  return (
    <section id="solucoes" className="relative flex flex-col">
      {/* Subtle orange glow */}
      <div
        className="absolute top-1/3 left-0 w-[500px] h-[400px] opacity-[0.04] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, hsl(24, 100%, 50%) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />

      {/* Main content */}
      <div
        className="flex-1 flex items-center w-full max-w-[1400px] mx-auto px-6 lg:px-12 pt-40 md:pt-44 pb-8 relative z-10"
        style={{ opacity: contentOpacity }}
      >
        <div className="max-w-3xl text-left">
          {t("hero.eyebrow") && (
            <TextReveal delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-6">
                {t("hero.eyebrow")}
              </p>
            </TextReveal>
          )}

          <TextReveal delay={400}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.95] mb-6 tracking-tight">
              <span className="text-foreground">{t("hero.title1")}</span>
              <br />
              <span className="text-primary hero-glow">{t("hero.title2")}</span>
            </h1>
          </TextReveal>


          <TextReveal delay={800}>
            <div className="flex flex-col sm:flex-row gap-4">
              <MagneticButton strength={0.15}>
                <RippleButton
                  href="#servicos"
                  className="cta-button inline-flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-semibold rounded-full text-primary-foreground"
                >
                  {t("hero.cta1")}
                  <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </RippleButton>
              </MagneticButton>

              <MagneticButton strength={0.15}>
                <a
                  href="#sobre"
                  className="group inline-flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-medium rounded-full border border-border text-foreground hover:border-primary/50 transition-all duration-300"
                >
                  {t("hero.cta2")}
                  <span className="w-7 h-7 rounded-full border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
              </MagneticButton>
            </div>
          </TextReveal>
        </div>
      </div>

      {/* Partner carousel with drag-to-scroll */}
      <DragCarousel partners={doubled} />
    </section>
  );
};

export default HeroSection;
