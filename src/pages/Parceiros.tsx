import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { partners } from "@/data/partners";
import { useLanguage } from "@/contexts/LanguageContext";
import useScrollAnimation from "@/hooks/useScrollAnimation";

// Import available logos
import aristaLogo from "@/assets/partners/arista.jpg";
import checkpointLogo from "@/assets/partners/checkpoint-partner.svg";
import cyberarkLogo from "@/assets/partners/cyberark.jpg";
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
import thalesLogo from "@/assets/partners/thales.jpg";
import trendLogo from "@/assets/partners/trend.jpg";
import veeamLogo from "@/assets/partners/veeam-partner.svg";
import invenziLogo from "@/assets/partners/invenzi-partner.png";
import lenovoLogo from "@/assets/partners/lenovo-partner.svg";
import rsaLogo from "@/assets/partners/rsa-partner.svg";
import halcyonLogo from "@/assets/partners/halcyon-partner.svg";
import proofpointLogo from "@/assets/partners/proofpoint-partner.svg";

const logoMap: Record<string, string> = {
  arista: aristaLogo,
  checkpoint: checkpointLogo,
  cyberark: cyberarkLogo,
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
  "trend-micro": trendLogo,
  veeam: veeamLogo,
  invenzi: invenziLogo,
  lenovo: lenovoLogo,
  rsa: rsaLogo,
  halcyon: halcyonLogo,
  proofpoint: proofpointLogo,
};

const Parceiros = () => {
  const { t } = useLanguage();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  useEffect(() => {
    document.title = "Parceiros Tecnológicos | Mahvla Telecomm";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Conheça os parceiros tecnológicos da Mahvla Telecomm. Fabricantes líderes em redes, cibersegurança, infraestrutura e cidades inteligentes.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-white pt-3 md:pt-5">
      <div className="mx-3 md:mx-5 rounded-[1.25rem] bg-background overflow-hidden relative">
        <Header />
        <div className="pt-32 md:pt-36 pb-10 px-6 lg:px-12 max-w-[1400px] mx-auto relative z-10">
          <div
            ref={headerRef}
            className={`max-w-3xl mb-12 scroll-fade-up ${headerVisible ? "visible" : ""}`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground mb-4 leading-[1.1]">
              {t("partners.page.title")}{" "}
              <span className="text-primary">{t("partners.page.titleHighlight")}</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {t("partners.page.description")}
            </p>
          </div>
        </div>
      </div>

      <main className="py-6 md:py-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div
            ref={gridRef}
            className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 stagger-children ${gridVisible ? "visible" : ""}`}
          >
            {partners.map((partner) => {
              const logo = logoMap[partner.slug];
              return (
                <Link
                  key={partner.slug}
                  to={`/parceiros/${partner.slug}`}
                  className="group flex items-center justify-center p-6 rounded-xl border border-gray-200 bg-white hover:border-primary/40 hover:shadow-lg transition-all duration-300"
                >
                  {logo ? (
                    <img
                      src={logo}
                      alt={partner.name}
                      className="h-12 w-auto object-contain transition-all duration-300"
                    />
                  ) : (
                    <div className="h-12 w-full flex items-center justify-center">
                      <span className="text-lg font-display font-bold text-gray-400 group-hover:text-primary transition-colors">
                        {partner.name}
                      </span>
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Parceiros;