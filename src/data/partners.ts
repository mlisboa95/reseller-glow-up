// Partner data for /parceiros pages
export interface Partner {
  slug: string;
  name: string;
  logo?: string;
  badge?: string;
  description: string;
  technologies?: { title: string; detail: string }[];
  relatedSolutions: { label: string; href: string }[];
  seoTitle: string;
  seoDescription: string;
}

export const partners: Partner[] = [
  {
    slug: "arista",
    name: "Arista",
    description: "Descrição em breve.",
    relatedSolutions: [{ label: "Redes & Conectividade", href: "/#servicos" }],
    seoTitle: "Arista | Mahvla Telecomm | Parceiro Autorizado",
    seoDescription: "Mahvla Telecomm é parceira autorizada Arista em Brasília. Soluções de redes e data center com tecnologia Arista.",
  },
  {
    slug: "checkpoint",
    name: "Check Point",
    description: "Descrição em breve.",
    relatedSolutions: [{ label: "Cibersegurança", href: "/#servicos" }],
    seoTitle: "Check Point | Mahvla Telecomm | Parceiro Autorizado",
    seoDescription: "Parceiro Check Point em Brasília. Soluções de cibersegurança, NGFW e proteção de ameaças com Mahvla Telecomm.",
  },
  {
    slug: "cyberark",
    name: "CyberArk",
    description: "Descrição em breve.",
    relatedSolutions: [{ label: "Cibersegurança", href: "/#servicos" }],
    seoTitle: "CyberArk | Mahvla Telecomm | Parceiro Autorizado",
    seoDescription: "Parceiro CyberArk em Brasília. Gestão de acessos privilegiados (PAM) com Mahvla Telecomm.",
  },
  {
    slug: "dahua",
    name: "Dahua",
    description: "Descrição em breve.",
    relatedSolutions: [{ label: "Segurança Física & Cidades Inteligentes", href: "/#servicos" }],
    seoTitle: "Dahua | Mahvla Telecomm | Parceiro Autorizado",
    seoDescription: "Parceiro Dahua em Brasília. CFTV IP e vigilância inteligente com Mahvla Telecomm.",
  },
  {
    slug: "exagrid",
    name: "ExaGrid",
    description: "Descrição em breve.",
    relatedSolutions: [{ label: "Infraestrutura & Cloud", href: "/#servicos" }],
    seoTitle: "ExaGrid | Mahvla Telecomm | Parceiro Autorizado",
    seoDescription: "Parceiro ExaGrid em Brasília. Backup e storage tiered com Mahvla Telecomm.",
  },
  {
    slug: "extreme-networks",
    name: "Extreme Networks",
    badge: "Diamond Partner",
    description: "A Extreme Networks é líder global em infraestrutura de redes corporativas, reconhecida seis vezes consecutivas como Leader no Gartner Magic Quadrant para Wired and Wireless LAN Infrastructure. Seu portfólio abrange switches universais, access points Wi-Fi 6E/7, SD-WAN, network fabric e segurança de rede, tudo gerenciado por uma única plataforma em nuvem, a Extreme Platform ONE.\n\nA Mahvla é parceira Diamond da Extreme, o mais alto nível do programa de canais Extreme Partner First. Isso significa que nossa equipe possui certificações técnicas e comerciais avançadas em todo o portfólio Extreme, com capacidade comprovada de projetar, implantar e operar redes completas, do edge ao data center.",
    technologies: [
      { title: "Switching", detail: "Universal Switches — séries 4000, 5320, 5420, 5520, 5720" },
      { title: "Wireless", detail: "Access Points Wi-Fi 6E e Wi-Fi 7" },
      { title: "Extreme Fabric", detail: "Segmentação automatizada e Zero Trust" },
      { title: "ExtremeCloud IQ / Platform ONE", detail: "Gestão centralizada em nuvem com AIOps" },
      { title: "SD-WAN", detail: "Conectividade segura entre sites" },
      { title: "Universal ZTNA", detail: "Controle de acesso Zero Trust" },
    ],
    relatedSolutions: [{ label: "Redes & Conectividade", href: "/#servicos" }],
    seoTitle: "Extreme Networks | Mahvla Telecomm | Parceiro Diamond Autorizado",
    seoDescription: "Mahvla Telecomm é parceira Diamond da Extreme Networks em Brasília. Switching, Wi-Fi 6E/7, SD-WAN e Extreme Fabric.",
  },
  {
    slug: "f5",
    name: "F5",
    description: "Descrição em breve.",
    relatedSolutions: [{ label: "Cibersegurança", href: "/#servicos" }, { label: "Redes & Conectividade", href: "/#servicos" }],
    seoTitle: "F5 | Mahvla Telecomm | Parceiro Autorizado",
    seoDescription: "Parceiro F5 em Brasília. Application delivery, WAF e segurança de aplicações com Mahvla Telecomm.",
  },
  {
    slug: "gigamon",
    name: "Gigamon",
    description: "Descrição em breve.",
    relatedSolutions: [{ label: "Redes & Conectividade", href: "/#servicos" }, { label: "Cibersegurança", href: "/#servicos" }],
    seoTitle: "Gigamon | Mahvla Telecomm | Parceiro Autorizado",
    seoDescription: "Parceiro Gigamon em Brasília. Visibilidade de rede e network intelligence com Mahvla Telecomm.",
  },
  {
    slug: "hpe-aruba",
    name: "HPE / Aruba",
    description: "Descrição em breve.",
    relatedSolutions: [{ label: "Redes & Conectividade", href: "/#servicos" }, { label: "Infraestrutura & Cloud", href: "/#servicos" }],
    seoTitle: "HPE / Aruba | Mahvla Telecomm | Parceiro Autorizado",
    seoDescription: "Parceiro HPE e Aruba em Brasília. Servidores, redes e infraestrutura enterprise com Mahvla Telecomm.",
  },
  {
    slug: "intelbras",
    name: "Intelbras",
    description: "Descrição em breve.",
    relatedSolutions: [{ label: "Segurança Física & Cidades Inteligentes", href: "/#servicos" }, { label: "Redes & Conectividade", href: "/#servicos" }],
    seoTitle: "Intelbras | Mahvla Telecomm | Parceiro Autorizado",
    seoDescription: "Parceiro Intelbras em Brasília. Segurança eletrônica e redes com Mahvla Telecomm.",
  },
  {
    slug: "invenzi",
    name: "Invenzi",
    description: "Descrição em breve.",
    relatedSolutions: [{ label: "Segurança Física & Cidades Inteligentes", href: "/#servicos" }],
    seoTitle: "Invenzi | Mahvla Telecomm | Parceiro Autorizado",
    seoDescription: "Parceiro Invenzi em Brasília. Controle de acesso e automação predial com Mahvla Telecomm.",
  },
  {
    slug: "juniper",
    name: "Juniper",
    description: "Descrição em breve.",
    relatedSolutions: [{ label: "Redes & Conectividade", href: "/#servicos" }],
    seoTitle: "Juniper | Mahvla Telecomm | Parceiro Autorizado",
    seoDescription: "Parceiro Juniper Networks em Brasília. Redes, SD-WAN e AI-driven enterprise com Mahvla Telecomm.",
  },
  {
    slug: "lenovo",
    name: "Lenovo",
    description: "Descrição em breve.",
    relatedSolutions: [{ label: "Infraestrutura & Cloud", href: "/#servicos" }],
    seoTitle: "Lenovo | Mahvla Telecomm | Parceiro Autorizado",
    seoDescription: "Parceiro Lenovo em Brasília. Servidores, storage e infraestrutura de data center com Mahvla Telecomm.",
  },
  {
    slug: "milestone",
    name: "Milestone",
    description: "Descrição em breve.",
    relatedSolutions: [{ label: "Segurança Física & Cidades Inteligentes", href: "/#servicos" }],
    seoTitle: "Milestone | Mahvla Telecomm | Parceiro Autorizado",
    seoDescription: "Parceiro Milestone em Brasília. VMS e gerenciamento de vídeo inteligente com Mahvla Telecomm.",
  },
  {
    slug: "mitel",
    name: "Mitel",
    description: "Descrição em breve.",
    relatedSolutions: [{ label: "Redes & Conectividade", href: "/#servicos" }],
    seoTitle: "Mitel | Mahvla Telecomm | Parceiro Autorizado",
    seoDescription: "Parceiro Mitel em Brasília. Comunicações unificadas e VoIP com Mahvla Telecomm.",
  },
  {
    slug: "netapp",
    name: "NetApp",
    description: "Descrição em breve.",
    relatedSolutions: [{ label: "Infraestrutura & Cloud", href: "/#servicos" }],
    seoTitle: "NetApp | Mahvla Telecomm | Parceiro Autorizado",
    seoDescription: "Parceiro NetApp em Brasília. Storage e gerenciamento de dados com Mahvla Telecomm.",
  },
  {
    slug: "nutanix",
    name: "Nutanix",
    description: "Descrição em breve.",
    relatedSolutions: [{ label: "Infraestrutura & Cloud", href: "/#servicos" }],
    seoTitle: "Nutanix | Mahvla Telecomm | Parceiro Autorizado",
    seoDescription: "Revenda Nutanix em Brasília. Hiperconvergência e cloud privada com Mahvla Telecomm.",
  },
  {
    slug: "proofpoint",
    name: "Proofpoint",
    description: "Descrição em breve.",
    relatedSolutions: [{ label: "Cibersegurança", href: "/#servicos" }],
    seoTitle: "Proofpoint | Mahvla Telecomm | Parceiro Autorizado",
    seoDescription: "Parceiro Proofpoint em Brasília. Proteção de e-mail e segurança de dados com Mahvla Telecomm.",
  },
  {
    slug: "purestorage",
    name: "PureStorage",
    description: "Descrição em breve.",
    relatedSolutions: [{ label: "Infraestrutura & Cloud", href: "/#servicos" }],
    seoTitle: "PureStorage | Mahvla Telecomm | Parceiro Autorizado",
    seoDescription: "Parceiro Pure Storage em Brasília. All-flash storage e modernização de data center com Mahvla Telecomm.",
  },
  {
    slug: "riverbed",
    name: "Riverbed",
    description: "Descrição em breve.",
    relatedSolutions: [{ label: "Redes & Conectividade", href: "/#servicos" }],
    seoTitle: "Riverbed | Mahvla Telecomm | Parceiro Autorizado",
    seoDescription: "Parceiro Riverbed em Brasília. Otimização WAN e visibilidade de rede com Mahvla Telecomm.",
  },
  {
    slug: "rsa",
    name: "RSA",
    description: "Descrição em breve.",
    relatedSolutions: [{ label: "Cibersegurança", href: "/#servicos" }],
    seoTitle: "RSA | Mahvla Telecomm | Parceiro Autorizado",
    seoDescription: "Parceiro RSA em Brasília. Autenticação multifator e gestão de risco com Mahvla Telecomm.",
  },
  {
    slug: "segura",
    name: "Segura",
    description: "Descrição em breve.",
    relatedSolutions: [{ label: "Cibersegurança", href: "/#servicos" }],
    seoTitle: "Segura | Mahvla Telecomm | Parceiro Autorizado",
    seoDescription: "Parceiro Segura em Brasília. Gestão de acessos e segurança de identidade com Mahvla Telecomm.",
  },
  {
    slug: "thales",
    name: "Thales",
    description: "Descrição em breve.",
    relatedSolutions: [{ label: "Cibersegurança", href: "/#servicos" }],
    seoTitle: "Thales | Mahvla Telecomm | Parceiro Autorizado",
    seoDescription: "Parceiro Thales em Brasília. Criptografia e proteção de dados com Mahvla Telecomm.",
  },
  {
    slug: "trend-micro",
    name: "Trend Micro",
    description: "Descrição em breve.",
    relatedSolutions: [{ label: "Cibersegurança", href: "/#servicos" }],
    seoTitle: "Trend Micro | Mahvla Telecomm | Parceiro Autorizado",
    seoDescription: "Parceiro Trend Micro em Brasília. Proteção de endpoints e cloud security com Mahvla Telecomm.",
  },
  {
    slug: "veeam",
    name: "Veeam",
    description: "Descrição em breve.",
    relatedSolutions: [{ label: "Infraestrutura & Cloud", href: "/#servicos" }],
    seoTitle: "Veeam | Mahvla Telecomm | Parceiro Autorizado",
    seoDescription: "Parceiro Veeam em Brasília. Backup e recuperação de dados com Mahvla Telecomm.",
  },
];

export const getPartnerBySlug = (slug: string): Partner | undefined => {
  return partners.find((p) => p.slug === slug);
};
