import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";

const Atas = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { t } = useLanguage();

  useEffect(() => {
    document.title = "Atas de Registro de Preços | Mahvla Telecomm";
  }, []);

  return (
    <div className="min-h-screen bg-white pt-3 md:pt-5">
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