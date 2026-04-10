import { Search } from "lucide-react";
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
        <div className="pt-40 md:pt-44 pb-12 px-6 lg:px-12 max-w-[1400px] mx-auto relative z-10">
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

      <main className="py-14 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-12 text-center">
              <Search className="w-10 h-10 text-muted-foreground/40 mx-auto mb-4" />
              <h2 className="text-xl font-display font-bold text-foreground mb-2">
                {t("atas.preparing")}
              </h2>
              <p className="text-muted-foreground">
                {t("atas.preparingDesc")}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer showCta={false} />
    </div>
  );
};

export default Atas;
