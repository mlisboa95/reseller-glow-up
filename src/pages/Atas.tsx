import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import SEOHead from "@/components/SEOHead";

const Atas = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white pt-3 md:pt-5">
      <SEOHead
        title="Atas de Registro de Preços | Mahvla Telecomm"
        description="Confira as atas de registro de preços da Mahvla Telecomm disponíveis para contratação direta por órgãos públicos."
      />
      <div className="mx-3 md:mx-5 rounded-[1.25rem] bg-background overflow-hidden relative">
        <Header />
        <div className="pt-32 md:pt-36 pb-10 px-6 lg:px-12 max-w-[1400px] mx-auto relative z-10">
          <div
            ref={contentRef}
            className={`max-w-3xl scroll-fade-up ${contentVisible ? "visible" : ""}`}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-4 leading-[1.1]">
              {t("atas.title")}{" "}
              <span className="text-primary">{t("atas.titleHighlight")}</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("atas.description")}
            </p>
          </div>
        </div>
      </div>

      <main className="py-6 md:py-8">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 min-h-[120px]">
          <p className="text-muted-foreground text-lg">
            As atas de registro de preços estarão disponíveis em breve.
          </p>
        </div>
      </main>
      <Footer showCta={false} />
    </div>
  );
};

export default Atas;
