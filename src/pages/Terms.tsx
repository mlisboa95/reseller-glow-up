import { FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Terms = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const sections = [
    {
      title: "1. Aceitação dos Termos",
      content: "Ao acessar e utilizar o site e os serviços da Mahvla Telecomm Consultoria e Serviços em Tecnologia LTDA, você concorda em cumprir estes Termos de Uso. Caso não concorde com qualquer parte destes termos, você não deve utilizar nosso site ou serviços."
    },
    {
      title: "2. Serviços",
      content: "A Mahvla Telecomm oferece serviços de tecnologia que incluem, entre outros, infraestrutura de redes, cibersegurança, ambientes cloud e híbridos, segurança física, operação assistida e consultoria. O escopo dos serviços para cada projeto é definido em contratos individuais entre a Mahvla e o cliente."
    },
    {
      title: "3. Uso do site",
      content: "Você concorda em utilizar este site apenas para fins lícitos. É proibido:",
      list: [
        "Utilizar o site de forma que viole leis ou regulamentações aplicáveis",
        "Tentar obter acesso não autorizado a qualquer parte do site ou seus sistemas",
        "Utilizar o site para transmitir conteúdo prejudicial, ofensivo ou enganoso",
        "Reproduzir, distribuir ou modificar qualquer conteúdo sem autorização prévia por escrito"
      ]
    },
    {
      title: "4. Propriedade intelectual",
      content: "Todo o conteúdo deste site, incluindo textos, gráficos, logotipos, imagens e software, é de propriedade da Mahvla Telecomm ou de seus licenciadores e está protegido pelas leis de propriedade intelectual aplicáveis. O uso não autorizado de qualquer material pode violar leis de direitos autorais, marcas registradas e outras legislações."
    },
    {
      title: "5. Limitação de responsabilidade",
      content: "A Mahvla Telecomm disponibiliza este site e seu conteúdo \"no estado em que se encontram\". Na máxima extensão permitida por lei, isentamo-nos de todas as garantias, expressas ou implícitas. Não seremos responsáveis por quaisquer danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso ou da impossibilidade de uso do nosso site ou serviços."
    },
    {
      title: "6. Links de terceiros",
      content: "Nosso site pode conter links para sites ou serviços de terceiros. A Mahvla Telecomm não se responsabiliza pelo conteúdo, práticas de privacidade ou disponibilidade desses sites externos. O acesso a links de terceiros é feito por sua conta e risco."
    },
    {
      title: "7. Confidencialidade",
      content: "Qualquer informação compartilhada entre a Mahvla e seus clientes durante a prestação de serviços é tratada como confidencial, sujeita aos termos de acordos de confidencialidade ou contratos de serviço aplicáveis."
    },
    {
      title: "8. Alterações",
      content: "A Mahvla Telecomm reserva-se o direito de atualizar ou modificar estes Termos de Uso a qualquer momento, sem aviso prévio. O uso continuado do site após quaisquer alterações constitui aceitação dos termos revisados."
    },
    {
      title: "9. Legislação aplicável",
      content: "Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer controvérsia será submetida ao foro da comarca de Brasília, Distrito Federal."
    },
    {
      title: "10. Contato",
      content: "Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:",
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
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Documento Legal</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-4 leading-[1.1]">
              Termos de <span className="text-primary">Uso</span>
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
                
                {section.contact && (
                  <div className="mt-4 space-y-2">
                    <p className="text-foreground">
                      <span className="text-muted-foreground">E-mail:</span>{" "}
                      <a href="mailto:contato@mahvla.com.br" className="text-primary hover:underline">
                        contato@mahvla.com.br
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

      <Footer showCta={false} />
    </div>
  );
};

export default Terms;
