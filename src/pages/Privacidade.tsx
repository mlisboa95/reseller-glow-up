import { Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Privacidade = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const sections = [
    {
      title: "1. Introdução",
      content: "A Mahvla Telecomm Consultoria e Serviços em Tecnologia LTDA tem o compromisso de proteger a privacidade e os dados pessoais de seus clientes, parceiros e visitantes do site. Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD) e demais legislações aplicáveis."
    },
    {
      title: "2. Dados que coletamos",
      content: "Podemos coletar os seguintes tipos de informação:",
      list: [
        "Dados de identificação: nome, e-mail, telefone, cargo e empresa",
        "Dados de navegação: endereço IP, tipo de navegador, páginas visitadas",
        "Cookies e tecnologias similares para melhorar a experiência do usuário",
        "Informações fornecidas voluntariamente por meio de formulários de contato"
      ]
    },
    {
      title: "3. Como utilizamos seus dados",
      content: "Utilizamos seus dados para:",
      list: [
        "Fornecer e aprimorar nossos serviços",
        "Responder a dúvidas e solicitações",
        "Enviar comunicações relevantes sobre nossos produtos e serviços",
        "Cumprir obrigações legais e regulatórias",
        "Analisar o uso do site para melhorar a experiência do usuário"
      ]
    },
    {
      title: "4. Cookies",
      content: "Utilizamos cookies para os seguintes fins:",
      list: [
        "Cookies essenciais: necessários para o funcionamento adequado do site",
        "Cookies de preferência: armazenam suas preferências de navegação",
        "Cookies analíticos: nos ajudam a entender como você utiliza o site"
      ],
      extra: "Você pode gerenciar suas preferências de cookies nas configurações do seu navegador."
    },
    {
      title: "5. Compartilhamento de dados",
      content: "Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing. Podemos compartilhar dados apenas com parceiros de negócios que nos auxiliam na prestação dos nossos serviços, sempre sob acordos de confidencialidade e em conformidade com as leis de privacidade aplicáveis."
    },
    {
      title: "6. Segurança dos dados",
      content: "Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Nosso compromisso com a qualidade e segurança se reflete nos padrões operacionais e certificações que mantemos."
    },
    {
      title: "7. Seus direitos",
      content: "De acordo com a LGPD, você tem o direito de:",
      list: [
        "Acessar e revisar seus dados pessoais",
        "Solicitar a correção de dados incorretos ou incompletos",
        "Solicitar a exclusão dos seus dados pessoais",
        "Revogar o consentimento a qualquer momento",
        "Solicitar a portabilidade dos seus dados"
      ]
    },
    {
      title: "8. Contato",
      content: "Para exercer seus direitos ou tirar dúvidas sobre esta Política de Privacidade, entre em contato conosco:",
      contact: true
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-3 md:pt-5">
      <div className="mx-3 md:mx-5 rounded-[1.25rem] bg-background overflow-hidden relative">
        <Header />
        <div className="pt-40 md:pt-44 pb-12 px-6 lg:px-12 max-w-[1400px] mx-auto relative z-10">
          <div 
            ref={headerRef}
            className={`max-w-3xl scroll-fade-up ${headerVisible ? 'visible' : ''}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Conformidade com a LGPD</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-4 leading-[1.1]">
              Política de <span className="text-primary">Privacidade</span>
            </h1>
            
            <p className="text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>

      <main className="py-14 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div 
            ref={contentRef}
            className={`max-w-3xl mx-auto space-y-6 scroll-fade-up ${contentVisible ? 'visible' : ''}`}
          >
            {sections.map((section, index) => (
              <div 
                key={index}
                className="p-6 md:p-8 rounded-2xl bg-card border border-border"
              >
                <h2 className="text-xl font-display font-bold text-foreground mb-4">
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
                
                {section.list && (
                  <ul className="mt-4 space-y-2">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                
                {section.extra && (
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    {section.extra}
                  </p>
                )}
                
                {section.contact && (
                  <div className="mt-4 space-y-2">
                    <p className="text-foreground">
                      <span className="text-muted-foreground">E-mail:</span>{" "}
                      <a href="mailto:privacidade@mahvla.com.br" className="text-primary hover:underline">
                        privacidade@mahvla.com.br
                      </a>
                    </p>
                    <p className="text-foreground">
                      <span className="text-muted-foreground">Endereço:</span>{" "}
                      <span className="text-muted-foreground">SRTVS Qd 701 Cj. L N. 38, Bloco 01, Salas 8, 9 e 10, Asa Sul, Brasília - DF</span>
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          </div>
        </div>
      </main>

      <Footer showCta={false} />
    </div>
  );
};

export default Privacidade;
