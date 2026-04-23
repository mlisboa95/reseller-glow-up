import { useEffect, useState, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Building2,
  ShieldCheck,
  Network,
  CloudCog,
  Camera,
  HeadsetIcon,
  Cog,
  MapPin,
  Mail,
  Phone,
  Globe,
} from "lucide-react";
import { partners } from "@/data/partners";
import logoMahvlaBranco from "@/assets/mahvla-branco.svg";
import logoMahvlaCinza from "@/assets/mahvla-cinza.svg";
import { BrazilMap } from "@/components/BrazilMap";

// Logos dos clientes
import clientUfg from "@/assets/clients/ufg.jpg";
import clientTjto from "@/assets/clients/tjto.jpg";
import clientTjes from "@/assets/clients/tjes.jpg";
import clientSerpro from "@/assets/clients/serpro.jpg";
import clientPcdf from "@/assets/clients/pcdf.jpg";
import clientMpto from "@/assets/clients/mpto.jpg";
import clientMetrodf from "@/assets/clients/metrodf.jpg";
import clientDpf from "@/assets/clients/dpf.jpg";
import clientDpe from "@/assets/clients/dpe.jpg";
import clientDetranap from "@/assets/clients/detranap.jpg";

// Logos dos parceiros
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

// ============== UI building blocks ==============

const DarkBackdrop = () => (
  <>
    <div className="absolute -right-40 -top-40 w-[560px] h-[560px] rounded-full bg-orange-500/20 blur-3xl pointer-events-none" />
    <div className="absolute -left-40 -bottom-40 w-[560px] h-[560px] rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
    <div
      className="absolute inset-0 opacity-[0.04] pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    />
  </>
);

const LightBackdrop = () => (
  <>
    <div className="absolute -right-40 -top-40 w-[520px] h-[520px] rounded-full bg-orange-500/[0.06] blur-3xl pointer-events-none" />
    <div
      className="absolute inset-0 opacity-[0.5] pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15,23,42,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,.04) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    />
  </>
);

const Watermark = ({ dark = false }: { dark?: boolean }) => (
  <div className="absolute bottom-6 right-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] z-10">
    <span className={dark ? "text-white/40" : "text-gray-400"}>mahvla.com.br</span>
    <img
      src={dark ? logoMahvlaBranco : logoMahvlaCinza}
      alt=""
      aria-hidden
      className="h-4 opacity-70"
    />
  </div>
);

// Light slide shell with editorial header
const LightShell = ({
  children,
  eyebrow,
  title,
  accent,
  number,
}: {
  children: React.ReactNode;
  eyebrow?: string;
  title?: string;
  accent?: string;
  number?: string;
}) => (
  <div className="w-full h-full flex flex-col px-12 md:px-20 py-10 md:py-14 bg-white relative overflow-hidden">
    <LightBackdrop />
    {(eyebrow || title) && (
      <header className="relative mb-6 md:mb-10 flex items-end justify-between gap-8">
        <div>
          {eyebrow && (
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-orange-500" />
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-orange-600">
                {eyebrow}
              </p>
            </div>
          )}
          {title && (
            <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 leading-[1.02] tracking-tight">
              {title}{" "}
              {accent && <span className="text-orange-600">{accent}</span>}
            </h2>
          )}
        </div>
        {number && (
          <span className="hidden md:block text-[11px] font-mono tracking-[0.2em] text-gray-400 uppercase">
            {number}
          </span>
        )}
      </header>
    )}
    <div className="relative flex-1 min-h-0">{children}</div>
    <Watermark />
  </div>
);

// ============== SLIDES ==============

// 01 — Capa (escuro)
const Slide1Capa = () => (
  <div className="w-full h-full flex flex-col justify-between px-12 md:px-20 py-12 md:py-16 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-900 text-white relative overflow-hidden">
    <DarkBackdrop />
    <div className="relative flex items-center justify-between">
      <img src={logoMahvlaBranco} alt="Mahvla" className="h-10 md:h-12" />
      <span className="text-[11px] font-mono tracking-[0.25em] text-white/50 uppercase">
        01 / 09
      </span>
    </div>
    <div className="relative space-y-7 max-w-5xl">
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-orange-500" />
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-orange-400">
          Apresentação Institucional · 2025
        </p>
      </div>
      <h1 className="text-6xl md:text-8xl lg:text-[8.5rem] font-display font-bold leading-[0.92] tracking-tight">
        Tecnologia <br />
        que <span className="text-orange-500">entrega</span> <br />
        resultado.
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
        22 anos projetando, implantando e operando infraestrutura de TI segura
        para órgãos públicos e empresas privadas em todo o Brasil.
      </p>
    </div>
    <div className="relative flex items-center gap-8 text-sm text-gray-400">
      <span className="flex items-center gap-2">
        <MapPin className="w-4 h-4 text-orange-500" /> Brasília · DF
      </span>
      <span className="hidden md:flex items-center gap-2">
        <Globe className="w-4 h-4 text-orange-500" /> mahvla.com.br
      </span>
    </div>
  </div>
);

// 02 — Sobre Nós + Manifesto (claro, números massivos)
const Slide2Sobre = () => {
  const stats = [
    { v: "22", suffix: "+", l: "anos de mercado" },
    { v: "50", suffix: "+", l: "certificações ativas" },
    { v: "200", suffix: "+", l: "projetos entregues" },
    { v: "15", suffix: "", l: "estados atendidos" },
  ];
  return (
    <LightShell
      eyebrow="Sobre nós"
      title="Conectando tecnologia a"
      accent="resultados reais."
      number="02 / 09"
    >
      <div className="grid lg:grid-cols-[1.1fr,1fr] gap-12 h-full items-center">
        <div className="space-y-6">
          <p className="text-2xl md:text-3xl font-display font-semibold text-gray-900 leading-snug">
            Não vendemos caixas. Entregamos{" "}
            <span className="text-orange-600">infraestrutura que funciona</span>{" "}
            — projetada, fornecida e operada por uma única equipe.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Sede em Brasília, atuação nacional. Há mais de duas décadas
            ajudamos empresas privadas e órgãos públicos a{" "}
            <span className="text-gray-900 font-semibold">projetar, implantar e operar</span>{" "}
            infraestrutura de TI segura.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {stats.map((s) => (
            <div key={s.l} className="border-l-2 border-orange-500 pl-5 py-2">
              <div className="text-6xl md:text-7xl font-display font-bold text-gray-900 tabular-nums leading-none">
                {s.v}
                <span className="text-orange-500">{s.suffix}</span>
              </div>
              <div className="text-xs uppercase tracking-wider text-gray-500 mt-3">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </LightShell>
  );
};

// 04 — Manifesto Soluções (escuro)
const Slide4ManifestoSolucoes = () => (
  <div className="w-full h-full flex flex-col justify-between px-12 md:px-20 py-12 md:py-16 bg-gray-950 text-white relative overflow-hidden">
    <DarkBackdrop />
    <div className="relative flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-orange-500" />
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-orange-400">
          Portfólio
        </p>
      </div>
      <span className="text-[11px] font-mono tracking-[0.25em] text-white/50 uppercase">
        03 / 09
      </span>
    </div>
    <div className="relative max-w-5xl space-y-6">
      <p className="text-3xl md:text-4xl font-display font-medium text-white/50 leading-snug">
        Da camada física à camada de aplicação,
      </p>
      <p className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.0] tracking-tight">
        cobrimos <span className="text-orange-500">tudo</span> que faz <br />
        sua TI <span className="text-orange-500">funcionar.</span>
      </p>
    </div>
    <Watermark dark />
  </div>
);

// 05 — Soluções (claro, grid editorial)
const Slide5Solucoes = () => {
  const solutions = [
    { icon: Network, title: "Redes Corporativas", tags: "LAN · WLAN · SD-WAN · NOC · VoIP" },
    { icon: ShieldCheck, title: "Cibersegurança", tags: "NGFW · WAF · EDR/XDR · ZTNA · SASE" },
    { icon: CloudCog, title: "Data Center & Cloud", tags: "HCI · Storage · Cloud · Containers" },
    { icon: Camera, title: "Cidades Inteligentes", tags: "CFTV · Controle de Acesso · LPR" },
    { icon: HeadsetIcon, title: "Suporte & Operação", tags: "SLA · 24/7 · NOC · Monitoramento" },
    { icon: Cog, title: "Consultoria & Projetos", tags: "Assessment · Arquitetura · Integração" },
  ];
  return (
    <LightShell
      eyebrow="Soluções"
      title="Portfólio completo,"
      accent="entrega ponta a ponta."
      number="04 / 09"
    >
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 h-full">
        {solutions.map((s, i) => (
          <div
            key={s.title}
            className="group relative bg-white border border-gray-200 rounded-2xl p-7 hover:border-orange-500/40 transition-colors overflow-hidden"
          >
            <span className="absolute top-5 right-5 text-[10px] font-mono text-gray-300 tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-5">
              <s.icon className="w-6 h-6 text-orange-600 stroke-[1.6]" />
            </div>
            <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
              {s.title}
            </h3>
            <p className="text-[11px] font-semibold text-gray-500 tracking-wide uppercase">
              {s.tags}
            </p>
          </div>
        ))}
      </div>
    </LightShell>
  );
};

// 07 — Parceiros (claro, grid 8x3)
const Slide7Parceiros = () => {
  const list = partners.filter((p) => partnerLogoMap[p.slug]);
  return (
    <LightShell
      eyebrow="Parceiros"
      title="Fabricantes líderes,"
      accent="certificações ativas."
      number="06 / 09"
    >
      <div className="grid grid-cols-6 md:grid-cols-8 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200">
        {list.map((p) => (
          <div
            key={p.slug}
            className="bg-white aspect-[5/3] flex items-center justify-center p-3 md:p-4"
          >
            <img
              src={partnerLogoMap[p.slug]}
              alt={p.name}
              className="max-h-7 md:max-h-9 max-w-full object-contain"
            />
          </div>
        ))}
      </div>
      <p className="mt-5 text-sm text-gray-500">
        {list.length} fabricantes parceiros · equipe multi-vendor com mais de 50
        certificações técnicas ativas.
      </p>
    </LightShell>
  );
};

// 08 — Mapa Presença Nacional (claro)
const Slide8Mapa = () => (
  <LightShell
    eyebrow="Presença Nacional"
    title="Projetos em todo o"
    accent="território nacional."
    number="07 / 09"
  >
    <div className="grid lg:grid-cols-[1.2fr,1fr] gap-10 h-full items-center">
      <div className="relative w-full h-full min-h-[420px] flex items-center justify-center">
        <div className="relative w-full max-w-[520px] aspect-square">
          <BrazilMap />
        </div>
      </div>
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="flex items-center gap-2 mb-1">
              <MapPin className="w-4 h-4 text-blue-600 fill-blue-500" />
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                HQ Brasil
              </p>
            </div>
            <p className="text-base font-display font-bold text-gray-900">
              Brasília · DF
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="flex items-center gap-2 mb-1">
              <MapPin className="w-4 h-4 text-blue-600 fill-blue-500" />
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                HQ EUA
              </p>
            </div>
            <p className="text-base font-display font-bold text-gray-900">
              Boca Raton · FL
            </p>
          </div>
        </div>
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
            Onde atuamos
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-700">
            {[
              "Alagoas",
              "Amapá",
              "Bahia",
              "Distrito Federal",
              "Espírito Santo",
              "Goiás",
              "Mato Grosso",
              "Mato Grosso do Sul",
              "Pará",
              "Paraíba",
              "Pernambuco",
              "Rio Grande do Norte",
              "Rondônia",
              "Roraima",
              "São Paulo",
              "Tocantins",
            ].map((uf) => (
              <span key={uf} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                {uf}
              </span>
            ))}
          </div>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed">
          Atendimento nacional com gestão centralizada em Brasília e equipes
          técnicas mobilizadas em projetos públicos e privados.
        </p>
      </div>
    </div>
  </LightShell>
);

// 09 — Contato (escuro)
// 08.5 — Quem confia (claro)
const Slide85Clientes = () => {
  const clients = [
    { src: clientDpf, name: "Polícia Federal" },
    { src: clientPcdf, name: "Polícia Civil DF" },
    { src: clientSerpro, name: "Serpro" },
    { src: clientMetrodf, name: "Metrô DF" },
    { src: clientUfg, name: "UFG" },
    { src: clientTjto, name: "TJ Tocantins" },
    { src: clientTjes, name: "TJ Espírito Santo" },
    { src: clientMpto, name: "MP Tocantins" },
    { src: clientDpe, name: "DPE Tocantins" },
    { src: clientDetranap, name: "Detran Amapá" },
  ];
  return (
    <LightShell
      eyebrow="Quem confia na Mahvla"
      title="Instituições que escolheram"
      accent="entrega de verdade."
      number="08 / 09"
    >
      <div className="grid grid-cols-3 md:grid-cols-5 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200">
        {clients.map((c) => (
          <div
            key={c.name}
            className="bg-white aspect-[5/3] flex items-center justify-center p-4 md:p-5"
          >
            <img
              src={c.src}
              alt={c.name}
              className="max-h-14 md:max-h-16 max-w-full object-contain"
            />
          </div>
        ))}
      </div>
      <p className="mt-5 text-sm text-gray-500">
        Órgãos públicos federais, estaduais e empresas privadas com operações
        críticas confiam na Mahvla há mais de 22 anos.
      </p>
    </LightShell>
  );
};

const Slide9Contato = () => (
  <div className="w-full h-full flex flex-col justify-between px-12 md:px-20 py-12 md:py-16 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-900 text-white relative overflow-hidden">
    <DarkBackdrop />
    <div className="relative flex items-center justify-between">
      <img src={logoMahvlaBranco} alt="Mahvla" className="h-10 md:h-12" />
      <span className="text-[11px] font-mono tracking-[0.25em] text-white/50 uppercase">
        09 / 09
      </span>
    </div>
    <div className="relative max-w-5xl space-y-8">
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-orange-500" />
        <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-orange-400">
          Vamos conversar
        </p>
      </div>
      <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] tracking-tight">
        Pronto para o seu <br />
        <span className="text-orange-500">próximo projeto?</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-white/10 mt-8">
        <div className="space-y-2 pt-6">
          <Building2 className="w-5 h-5 text-orange-500" />
          <p className="text-xs uppercase tracking-wider text-gray-500">Sede</p>
          <p className="text-base font-semibold">Brasília · DF</p>
        </div>
        <div className="space-y-2 pt-6">
          <Mail className="w-5 h-5 text-orange-500" />
          <p className="text-xs uppercase tracking-wider text-gray-500">E-mail</p>
          <p className="text-base font-semibold">contato@mahvla.com.br</p>
        </div>
        <div className="space-y-2 pt-6">
          <Phone className="w-5 h-5 text-orange-500" />
          <p className="text-xs uppercase tracking-wider text-gray-500">Atendimento</p>
          <p className="text-base font-semibold">SLA dedicado · 24/7</p>
        </div>
      </div>
    </div>
    <div className="relative flex items-center gap-2 text-sm text-gray-400">
      <Globe className="w-4 h-4 text-orange-500" /> mahvla.com.br
    </div>
  </div>
);

// ============== Stage ==============

const slides = [
  Slide1Capa,
  Slide2Sobre,
  Slide4ManifestoSolucoes,
  Slide5Solucoes,
  Slide6ManifestoParceiros,
  Slide7Parceiros,
  Slide8Mapa,
  Slide85Clientes,
  Slide9Contato,
];
const slideTitles = [
  "Capa",
  "Sobre Nós",
  "Portfólio",
  "Soluções",
  "Ecossistema",
  "Parceiros",
  "Presença Nacional",
  "Clientes",
  "Contato",
];
const totalSlides = slides.length;

const Apresentacao = () => {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const next = useCallback(
    () => setCurrent((c) => Math.min(c + 1, totalSlides - 1)),
    [],
  );
  const prev = useCallback(
    () => setCurrent((c) => Math.max(c - 1, 0)),
    [],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") setCurrent(0);
      else if (e.key === "End") setCurrent(totalSlides - 1);
      else if (e.key === "Escape" && document.fullscreenElement)
        document.exitFullscreen();
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
          <a
            href="/"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            ← Voltar ao site
          </a>
        </div>
        <div className="text-sm font-medium text-gray-700">
          {slideTitles[current]}{" "}
          <span className="text-gray-400">
            · {current + 1} / {totalSlides}
          </span>
        </div>
        <button
          onClick={toggleFullscreen}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition-colors"
        >
          {isFullscreen ? (
            <Minimize2 className="w-4 h-4" />
          ) : (
            <Maximize2 className="w-4 h-4" />
          )}
          {isFullscreen ? "Sair" : "Tela cheia"}
        </button>
      </div>

      {/* Slide stage */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="relative w-full max-w-[1280px] aspect-[16/9] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <div key={current} className="absolute inset-0 animate-fade-in">
            <Current />
          </div>
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
