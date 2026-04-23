import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Building2, ShieldCheck, Network, CloudCog, Camera, HeadsetIcon, Cog, MapPin, Mail, Phone, Globe } from "lucide-react";
import { partners } from "@/data/partners";
import logoMahvlaBranco from "@/assets/mahvla-branco.svg";
import logoMahvlaCinza from "@/assets/mahvla-cinza.svg";
import brazilMap from "@/assets/brazil-map.png";

// Logos dos parceiros (mesma fonte usada em /parceiros)
import aristaLogo from "@/assets/partners/arista-partner.svg";
import awsLogo from "@/assets/partners/aws-partner.svg";
import checkpointLogo from "@/assets/partners/checkpoint-partner.svg";
import sentineloneLogo from "@/assets/partners/s1-partner.svg";
import dahuaLogo from "@/assets/partners/dahua-partner.svg";
import exagridLogo from "@/assets/partners/exagrid-partner.svg";
import extremeLogo from "@/assets/partners/extreme-partner.svg";
import f5Logo from "@/assets/partners/f5-partner.svg";
import gigamonLogo from "@/assets/partners/gigamon-partner.svg";
import hpeLogo from "@/assets/partners/hpe-partner.svg";
import mitelLogo from "@/assets/partners/mitel-partner.svg";
import nutanixLogo from "@/assets/partners/nutanix-partner.svg";
import everpureLogo from "@/assets/partners/everpure-partner.svg";
import riverbedLogo from "@/assets/partners/riverbed-partner.svg";
import elasticLogo from "@/assets/partners/elastic-partner.svg";
import thalesLogo from "@/assets/partners/thales-partner.svg";
import veeamLogo from "@/assets/partners/veeam-partner.svg";
import lenovoLogo from "@/assets/partners/lenovo-partner.svg";
import rsaLogo from "@/assets/partners/rsa-partner.svg";
import halcyonLogo from "@/assets/partners/halcyon-partner.svg";
import proofpointLogo from "@/assets/partners/proofpoint-partner.svg";
import milestoneLogo from "@/assets/partners/milestone-partner.svg";
import netappLogo from "@/assets/partners/netapp-partner.svg";
import seguraLogo from "@/assets/partners/segura-partner.svg";

const partnerLogoMap: Record<string, string> = {
  arista: aristaLogo,
  aws: awsLogo,
  checkpoint: checkpointLogo,
  sentinelone: sentineloneLogo,
  dahua: dahuaLogo,
  exagrid: exagridLogo,
  "extreme-networks": extremeLogo,
  f5: f5Logo,
  gigamon: gigamonLogo,
  "hpe-aruba": hpeLogo,
  mitel: mitelLogo,
  nutanix: nutanixLogo,
  everpure: everpureLogo,
  riverbed: riverbedLogo,
  thales: thalesLogo,
  elastic: elasticLogo,
  veeam: veeamLogo,
  lenovo: lenovoLogo,
  rsa: rsaLogo,
  halcyon: halcyonLogo,
  proofpoint: proofpointLogo,
  milestone: milestoneLogo,
  netapp: netappLogo,
  segura: seguraLogo,
};

const totalSlides = 6;

const SlideShell = ({ children, eyebrow, title, accent }: { children: React.ReactNode; eyebrow?: string; title?: string; accent?: string }) => (
  <div className="w-full h-full flex flex-col px-12 md:px-20 py-10 md:py-14">
    {(eyebrow || title) && (
      <header className="mb-6 md:mb-10">
        {eyebrow && (
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-600 mb-3">
            {eyebrow}
          </p>
        )}
        {title && (
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 leading-[1.05] tracking-tight">
            {title} {accent && <span className="text-orange-600">{accent}</span>}
          </h2>
        )}
      </header>
    )}
    <div className="flex-1 min-h-0">{children}</div>
  </div>
);

const Slide1Capa = () => (
  <div className="w-full h-full flex flex-col justify-between px-12 md:px-20 py-12 md:py-16 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white relative overflow-hidden">
    <div className="absolute -right-40 -top-40 w-[480px] h-[480px] rounded-full bg-orange-500/15 blur-3xl" />
    <div className="absolute -left-40 -bottom-40 w-[480px] h-[480px] rounded-full bg-orange-500/10 blur-3xl" />
    <div className="relative">
      <img src={logoMahvla} alt="Mahvla" className="h-10 md:h-12 brightness-0 invert" />
    </div>
    <div className="relative space-y-6 max-w-4xl">
      <p className="text-xs font-semibold tracking-[0.3em] uppercase text-orange-400">
        Apresentação Institucional · 2025
      </p>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] tracking-tight">
        Tecnologia que <span className="text-orange-500">entrega resultado.</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
        22 anos projetando, implantando e operando infraestrutura de TI segura para órgãos públicos e empresas privadas em todo o Brasil.
      </p>
    </div>
    <div className="relative flex items-center gap-8 text-sm text-gray-400">
      <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-orange-500" /> Brasília · DF</span>
      <span className="hidden md:flex items-center gap-2"><Globe className="w-4 h-4 text-orange-500" /> mahvla.com.br</span>
    </div>
  </div>
);

const Slide2Sobre = () => {
  const stats = [
    { v: "22+", l: "anos de mercado" },
    { v: "50+", l: "certificações ativas" },
    { v: "200+", l: "projetos entregues" },
    { v: "100+", l: "clientes ativos" },
  ];
  return (
    <SlideShell eyebrow="Sobre nós" title="22 anos conectando tecnologia a" accent="resultados reais.">
      <div className="grid md:grid-cols-2 gap-10 h-full">
        <div className="space-y-5 text-gray-600 text-base md:text-lg leading-relaxed">
          <p>
            Sede em Brasília, atuação nacional e internacional. Há mais de duas décadas ajudamos empresas privadas e órgãos públicos a projetar, implantar e operar infraestrutura de TI segura.
          </p>
          <p>
            Equipe multi-vendor, projeto, fornecimento e operação integrados, com entrega on-prem, híbrida e cloud.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {["Esfera Federal", "Esfera Estadual", "Esfera Municipal", "Empresas Privadas"].map((t) => (
              <span key={t} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-gray-700 bg-gray-100 border border-gray-200">
                <span className="w-1 h-1 rounded-full bg-orange-500" /> {t}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-px bg-gray-200 rounded-2xl overflow-hidden self-center">
          {stats.map((s) => (
            <div key={s.l} className="bg-white p-8 flex flex-col items-start justify-center">
              <div className="text-5xl md:text-6xl font-display font-bold text-gray-900 tabular-nums">{s.v}</div>
              <div className="text-sm text-gray-500 mt-2">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
};

const Slide3Solucoes = () => {
  const solutions = [
    { icon: Network, title: "Redes Corporativas", tags: "LAN · WLAN · SD-WAN · NOC · VoIP" },
    { icon: ShieldCheck, title: "Cibersegurança", tags: "NGFW · WAF · EDR/XDR · ZTNA · SASE" },
    { icon: CloudCog, title: "Data Center & Cloud", tags: "HCI · Storage · Cloud · Containers" },
    { icon: Camera, title: "Cidades Inteligentes", tags: "CFTV · Controle de Acesso · LPR" },
    { icon: HeadsetIcon, title: "Suporte & Operação", tags: "SLA · 24/7 · NOC · Monitoramento" },
    { icon: Cog, title: "Consultoria & Projetos", tags: "Assessment · Arquitetura · Consultoria" },
  ];
  return (
    <SlideShell eyebrow="Soluções" title="Portfólio completo, entrega" accent="ponta a ponta.">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 rounded-2xl overflow-hidden">
        {solutions.map((s) => (
          <div key={s.title} className="bg-white p-6 md:p-7">
            <s.icon className="w-7 h-7 text-orange-600 mb-4 stroke-[1.5]" />
            <h3 className="text-lg font-display font-bold text-gray-900 mb-2">{s.title}</h3>
            <p className="text-[11px] font-semibold text-orange-600/70 tracking-wide uppercase">{s.tags}</p>
          </div>
        ))}
      </div>
    </SlideShell>
  );
};

const Slide4Parceiros = () => {
  const order = ["Arista", "Check Point", "HPE", "Nutanix", "Veeam", "ExaGrid", "F5", "Extreme Networks", "Gigamon", "Riverbed", "Thales", "SentinelOne", "Proofpoint", "Halcyon", "Milestone", "Mitel", "Everpure"];
  return (
    <SlideShell eyebrow="Parceiros" title="Fabricantes líderes," accent="certificações ativas.">
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-px bg-gray-200 rounded-2xl overflow-hidden">
        {order.filter((n) => partnerLogos[n]).map((name) => (
          <div key={name} className="bg-white aspect-[5/3] flex items-center justify-center p-5">
            <img src={partnerLogos[name]} alt={name} className="max-h-10 max-w-full object-contain" />
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-gray-500">
        Equipe multi-vendor com mais de 50 certificações técnicas ativas.
      </p>
    </SlideShell>
  );
};

const Slide5Mapa = () => (
  <SlideShell eyebrow="Presença Nacional" title="Projetos em todo o" accent="território nacional.">
    <div className="grid lg:grid-cols-[1fr,360px] gap-8 h-full">
      <div className="bg-gray-50 rounded-2xl border border-gray-200 p-4 min-h-[400px]">
        <BrazilMap />
      </div>
      <div className="space-y-6 self-center">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-500/20" />
            <div>
              <p className="text-sm font-semibold text-gray-900">Brasília · DF</p>
              <p className="text-xs text-gray-500">Sede e centro de operações</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-3 h-3 rounded-full bg-orange-500 ring-4 ring-orange-500/20 mt-1.5" />
            <div>
              <p className="text-sm font-semibold text-gray-900">Projetos ativos</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Amapá · Bahia · Espírito Santo · Goiás · Pará · Paraíba · Rio Grande do Norte · Rondônia · Roraima · Tocantins
              </p>
            </div>
          </div>
        </div>
        <div className="pt-4 border-t border-gray-200">
          <p className="text-3xl font-display font-bold text-gray-900">11 estados</p>
          <p className="text-sm text-gray-500 mt-1">com projetos entregues ou em operação</p>
        </div>
      </div>
    </div>
  </SlideShell>
);

const Slide6Contato = () => (
  <div className="w-full h-full flex flex-col justify-between px-12 md:px-20 py-12 md:py-16 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white relative overflow-hidden">
    <div className="absolute -right-40 top-1/3 w-[500px] h-[500px] rounded-full bg-orange-500/15 blur-3xl" />
    <div className="relative">
      <img src={logoMahvla} alt="Mahvla" className="h-10 md:h-12 brightness-0 invert" />
    </div>
    <div className="relative max-w-4xl space-y-8">
      <p className="text-xs font-semibold tracking-[0.3em] uppercase text-orange-400">Vamos conversar</p>
      <h2 className="text-5xl md:text-7xl font-display font-bold leading-[0.95] tracking-tight">
        Pronto para o seu <span className="text-orange-500">próximo projeto?</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-6 pt-6">
        <div className="space-y-2">
          <Building2 className="w-5 h-5 text-orange-500" />
          <p className="text-sm text-gray-400">Sede</p>
          <p className="text-base font-semibold">Brasília · DF</p>
        </div>
        <div className="space-y-2">
          <Mail className="w-5 h-5 text-orange-500" />
          <p className="text-sm text-gray-400">E-mail</p>
          <p className="text-base font-semibold">comercial@mahvla.com.br</p>
        </div>
        <div className="space-y-2">
          <Phone className="w-5 h-5 text-orange-500" />
          <p className="text-sm text-gray-400">Atendimento</p>
          <p className="text-base font-semibold">SLA dedicado · 24/7</p>
        </div>
      </div>
    </div>
    <div className="relative flex items-center gap-2 text-sm text-gray-400">
      <Globe className="w-4 h-4 text-orange-500" /> mahvla.com.br
    </div>
  </div>
);

const slides = [Slide1Capa, Slide2Sobre, Slide3Solucoes, Slide4Parceiros, Slide5Mapa, Slide6Contato];
const slideTitles = ["Capa", "Sobre Nós", "Soluções", "Parceiros", "Presença Nacional", "Contato"];

const Apresentacao = () => {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const next = useCallback(() => setCurrent((c) => Math.min(c + 1, totalSlides - 1)), []);
  const prev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") { e.preventDefault(); next(); }
      else if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); prev(); }
      else if (e.key === "Home") setCurrent(0);
      else if (e.key === "End") setCurrent(totalSlides - 1);
      else if (e.key === "Escape" && document.fullscreenElement) document.exitFullscreen();
    };
    window.addEventListener("keydown", onKey);
    const onFs = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFs);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("fullscreenchange", onFs);
    };
  }, [next, prev]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen();
    else document.exitFullscreen();
  };

  const Current = slides[current];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200">
        <div className="flex items-center gap-3">
          <a href="/" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">← Voltar ao site</a>
        </div>
        <div className="text-sm font-medium text-gray-700">
          {slideTitles[current]} <span className="text-gray-400">· {current + 1} / {totalSlides}</span>
        </div>
        <button
          onClick={toggleFullscreen}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition-colors"
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          {isFullscreen ? "Sair" : "Tela cheia"}
        </button>
      </div>

      {/* Slide stage */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="relative w-full max-w-[1280px] aspect-[16/9] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <Current />
        </div>
      </div>

      {/* Bottom controls */}
      <div className="flex items-center justify-center gap-4 pb-6">
        <button
          onClick={prev}
          disabled={current === 0}
          className="p-3 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${i === current ? "w-8 bg-orange-500" : "w-2 bg-gray-300 hover:bg-gray-400"}`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          disabled={current === totalSlides - 1}
          className="p-3 rounded-full bg-white border border-gray-200 shadow-sm text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Apresentacao;