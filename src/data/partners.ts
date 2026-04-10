// Partner data for /parceiros pages
export interface Partner {
  slug: string;
  name: string;
  logo?: string;
  badge?: string;
  description: string;
  technologies?: { title: string; detail: string }[];
  faq?: { question: string; answer: string }[];
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
    description: "A Check Point Software Technologies é líder global em cibersegurança, protegendo mais de 100.000 organizações em todo o mundo. Desde 1993, quando pioneirou o conceito de firewall stateful inspection, a empresa evoluiu para uma plataforma de segurança completa, potencializada por inteligência artificial e entregue via nuvem, com uma taxa de prevenção de 99,8% contra ameaças.\n\nA Mahvla é parceira autorizada da Check Point, com capacidade de projetar, implantar e operar soluções de segurança baseadas na plataforma Check Point Infinity. Nossa equipe atua desde o dimensionamento da solução até a operação contínua, garantindo proteção em todas as camadas do ambiente.",
    technologies: [
      { title: "Check Point Quantum", detail: "Firewalls de próxima geração (NGFW) e segurança de rede" },
      { title: "Check Point CloudGuard", detail: "Segurança nativa para ambientes cloud (AWS, Azure, GCP)" },
      { title: "Check Point Harmony", detail: "Proteção de endpoints, e-mail, navegação e acesso remoto" },
      { title: "Check Point Infinity", detail: "Plataforma unificada de gerenciamento e inteligência contra ameaças" },
      { title: "Threat Prevention", detail: "IPS, Anti-Bot, SandBlast, Threat Extraction" },
      { title: "SD-WAN & SASE", detail: "Conectividade segura e acesso distribuído" },
    ],
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
    description: "A Mahvla é revenda autorizada Extreme Networks com classificação Diamond, o mais alto nível do programa de canais Extreme Partner First. Com sede em Brasília-DF e atendimento em todo o Brasil, nossa equipe possui certificações técnicas e comerciais avançadas em todo o portfólio Extreme, com capacidade comprovada de projetar, implantar e operar redes corporativas completas.\n\nA Extreme Networks é reconhecida seis vezes consecutivas como Leader no Gartner Magic Quadrant para Wired and Wireless LAN Infrastructure. Seu portfólio abrange switches universais, access points Wi-Fi 6E e Wi-Fi 7, SD-WAN, network fabric e segurança de rede, tudo gerenciado por uma única plataforma em nuvem, a Extreme Platform ONE.\n\nOferecemos desde o dimensionamento e cotação de equipamentos até a implantação completa e suporte técnico contínuo com SLA dedicado. Se você busca um parceiro Extreme Networks no Brasil para seu projeto de rede corporativa, campus, data center ou filiais distribuídas, fale com nosso time.",
    technologies: [
      { title: "Switching", detail: "Universal Switches — séries 4000, 5320, 5420, 5520, 5720, 7520, 7720, 7830" },
      { title: "Wireless", detail: "Access Points Wi-Fi 6E e Wi-Fi 7" },
      { title: "Extreme Fabric", detail: "Segmentação automatizada e Zero Trust" },
      { title: "ExtremeCloud IQ / Platform ONE", detail: "Gestão centralizada em nuvem com AIOps" },
      { title: "SD-WAN", detail: "Conectividade segura entre sites" },
      { title: "Universal ZTNA", detail: "Controle de acesso Zero Trust" },
    ],
    faq: [
      { question: "Como comprar equipamentos Extreme Networks pela Mahvla?", answer: "Somos revenda Diamond autorizada. Solicite uma cotação pelo botão Fale com um especialista ou envie um e-mail para contato@mahvla.com.br. Atendemos empresas privadas e órgãos públicos em todo o Brasil." },
      { question: "A Mahvla atende fora de Brasília?", answer: "Sim. Temos sede em Brasília-DF, mas atendemos projetos em todo o território nacional, com equipe técnica certificada e suporte remoto e presencial." },
      { question: "Quais segmentos a Mahvla atende com Extreme Networks?", answer: "Atendemos empresas privadas, órgãos federais, estaduais e municipais, instituições de ensino, saúde e ambientes de missão crítica que necessitam de infraestrutura de rede de alto desempenho." },
      { question: "Qual o prazo de implantação de uma rede Extreme?", answer: "O prazo varia conforme a complexidade do projeto. Após o levantamento técnico, apresentamos um cronograma detalhado. Projetos de campus corporativo típicos levam de 4 a 12 semanas entre aprovação e operação." },
      { question: "A Mahvla oferece suporte técnico pós-implantação?", answer: "Sim. Oferecemos contratos de suporte com SLA garantido, operação assistida 24/7, monitoramento proativo via NOC e manutenção preventiva e corretiva." },
    ],
    relatedSolutions: [{ label: "Redes & Conectividade", href: "/#servicos" }],
    seoTitle: "Extreme Networks | Parceiro Diamond Autorizado — Mahvla Telecomm, Brasília-DF",
    seoDescription: "Revenda Extreme Networks Diamond em Brasília. Switches universais, access points Wi-Fi 6E/7, SD-WAN e Extreme Fabric. Projeto, implantação e suporte técnico com SLA dedicado. Atendimento em todo o Brasil.",
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
