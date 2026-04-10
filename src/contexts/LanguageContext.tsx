import { createContext, useContext, useCallback, ReactNode } from "react";

interface LanguageContextType {
  language: "pt";
  setLanguage: (lang: "pt") => void;
  t: (key: string) => string;
}

const translations: Record<string, string> = {
  // Header
  "nav.about": "A Mahvla",
  "nav.solutions": "Soluções",
  "nav.partners": "Parceiros",
  "nav.atas": "Atas & Contratos",
  "nav.compliance": "Compliance",
  "nav.portal": "Fale Conosco",

  // Hero
  "hero.eyebrow": "Projeto. Execução. Entrega.",
  "hero.title1": "Tecnologia que entrega",
  "hero.title2": "resultado.",
  "hero.subtitle": "Integradora brasileira com 22 anos de experiência em redes, cibersegurança, infraestrutura e cidades inteligentes.",
  "hero.cta1": "Nossas Soluções",
  "hero.cta2": "Conheça a Mahvla",

  // About
  "about.label": "Sobre Nós",
  "about.title": "Mais de duas décadas entregando com",
  "about.titleHighlight": "consistência",
  "about.description": "Somos uma integradora de tecnologia com sede em Brasília-DF e escritório nos Estados Unidos (Boca Raton, FL). Há mais de 22 anos, ajudamos empresas privadas e órgãos públicos — federais, estaduais e municipais — a projetar, implantar e operar infraestrutura de TI segura, do data center à nuvem.",
  "about.stat1": "anos de experiência",
  "about.stat2": "certificações ativas",
  "about.stat3": "projetos entregues",
  "about.stat4": "clientes atendidos",

  // Services
  "services.label": "Áreas de Atuação",
  "services.title": "Nossas",
  "services.titleHighlight": "Soluções",
  "services.s1.title": "Redes & Conectividade",
  "services.s1.desc": "Projetos de rede corporativa abrangendo LAN/WLAN campus, otimização WAN, SD-WAN e comunicações unificadas. Entregamos visibilidade completa com ferramentas de NPM e operação 24/7 via NOC dedicado.",
  "services.s2.title": "Cibersegurança",
  "services.s2.desc": "Estratégias de defesa em camadas com NGFW, WAF, EDR/XDR e frameworks Zero Trust. Implementamos governança de identidade (IAM/PAM), arquiteturas SASE e pipelines de detecção de ameaças — em conformidade com a LGPD e controles NIST/CIS.",
  "services.s3.title": "Infraestrutura & Cloud",
  "services.s3.desc": "Ambientes híbridos e multi-cloud projetados para performance e resiliência — desde plataformas hiperconvergentes e storage enterprise até migração de workloads para AWS, deployments containerizados e automação via IaC.",
  "services.s4.title": "Segurança Física & Cidades Inteligentes",
  "services.s4.desc": "Ecossistemas de vigilância integrada com CFTV IP, controle de acesso biométrico, LPR e analíticos com IA. Experiência comprovada em órgãos governamentais, infraestrutura crítica e projetos de mobilidade urbana.",
  "services.s5.title": "Operação Assistida & Suporte",
  "services.s5.desc": "Equipes técnicas dedicadas para operação assistida, monitoramento proativo e contratos de manutenção com SLAs garantidos — ampliando a capacidade de TI sem aumentar o headcount.",
  "services.s6.title": "Consultoria & Arquitetura",
  "services.s6.desc": "Assessments de tecnologia, arquitetura de soluções e advisory vendor-neutral. Traduzimos requisitos de negócio em blueprints de infraestrutura com ROI mensurável e roadmaps claros de implementação.",

  // Contact CTA
  "cta.badge": "Vamos Conversar",
  "cta.title": "Vamos conversar sobre o seu",
  "cta.titleHighlight": "projeto?",
  "cta.description": "Conte sobre o seu ambiente — desenhamos a solução e cuidamos de toda a entrega.",
  "cta.button": "Fale Conosco",

  // Footer
  "footer.office": "Escritórios",
  "footer.contact": "Contato",
  "footer.copyright": "Todos os direitos reservados.",
  "footer.privacy": "Política de Privacidade",
  "footer.terms": "Termos de Uso",

  // Compliance
  "compliance.title": "Nosso compromisso com a",
  "compliance.titleHighlight": "ética",
  "compliance.desc1": "Na Mahvla, integridade é a base de todo relacionamento. Mantemos um programa robusto de compliance alinhado aos mais altos padrões nacionais e internacionais.",
  "compliance.desc2": "Promovemos transparência, ética e responsabilidade em todas as operações, garantindo que nossos parceiros e clientes possam confiar plenamente na nossa conduta.",
  "compliance.report.title": "Relatar uma irregularidade",
  "compliance.report.subtitle": "Seu relato será tratado com sigilo absoluto e analisado de forma independente.",
  "compliance.anonymous": "Enviar relato anonimamente",
  "compliance.name": "Nome",
  "compliance.name.placeholder": "Seu nome",
  "compliance.email": "E-mail",
  "compliance.reason": "Motivo",
  "compliance.reason.placeholder": "Selecione um motivo",
  "compliance.description": "Descrição",
  "compliance.description.placeholder": "Descreva a irregularidade com o máximo de detalhes possível...",
  "compliance.submit": "Enviar relato",
  "compliance.submitting": "Enviando...",
  "compliance.privacyNote": "Ao enviar, você concorda com nossa",
  "compliance.certifications": "Certificações",
  "compliance.comingSoon": "Em breve",
  "compliance.integrity": "Integridade",
  "compliance.antisuborno": "Antissuborno",
  "compliance.quality": "Qualidade",
  "compliance.environmental": "Ambiental",
  "compliance.toast.error.title": "Erro de validação",
  "compliance.toast.error.desc": "Por favor, corrija os campos destacados.",
  "compliance.toast.success.title": "Relato enviado com sucesso",
  "compliance.toast.success.desc": "Seu relato foi registrado e será analisado com total sigilo.",

  // Compliance reasons
  "reason.corruption": "Corrupção ou suborno",
  "reason.fraud": "Fraude",
  "reason.harassment": "Assédio moral ou sexual",
  "reason.conflict": "Conflito de interesses",
  "reason.leak": "Vazamento de informações",
  "reason.discrimination": "Discriminação",
  "reason.policy": "Violação de políticas internas",
  "reason.other": "Outros",

  // Atas
  "atas.title": "Atas de Registro de",
  "atas.titleHighlight": "Preços",
  "atas.description": "Confira as atas de registro de preços disponíveis para contratação direta por órgãos públicos. Documentos atualizados e em conformidade com a legislação vigente.",
  "atas.search": "Buscar atas...",
  "atas.preparing": "Atas em preparação",
  "atas.preparingDesc": "As atas de registro de preços estão sendo organizadas e em breve estarão disponíveis para consulta e download.",

  // Partners page
  "partners.page.title": "Nossos Parceiros",
  "partners.page.titleHighlight": "Tecnológicos",
  "partners.page.description": "Trabalhamos com os principais fabricantes de tecnologia do mundo para entregar soluções de ponta aos nossos clientes.",
  "partners.detail.solutions": "Soluções relacionadas",
  "partners.detail.cta": "Fale com um especialista",
  "partners.detail.back": "Voltar para Parceiros",
  "partners.detail.placeholder": "Descrição em breve.",

  // Partners carousel (hero)
  "partners.label": "25+ Parceiros Globais",
  "partners.title": "Principais",
  "partners.titleHighlight": "fabricantes",
  "partners.titleEnd": "",
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const t = useCallback((key: string): string => {
    return translations[key] ?? key;
  }, []);

  return (
    <LanguageContext.Provider value={{ language: "pt", setLanguage: () => {}, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
