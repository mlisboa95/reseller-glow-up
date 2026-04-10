import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPartnerBySlug } from "@/data/partners";
import { useLanguage } from "@/contexts/LanguageContext";

// Reuse logo map
import aristaLogo from "@/assets/partners/arista.jpg";
import checkpointLogo from "@/assets/partners/checkpoint.jpg";
import cyberarkLogo from "@/assets/partners/cyberark.jpg";
import exagridLogo from "@/assets/partners/exagrid.jpg";
import extremeLogo from "@/assets/partners/extreme.jpg";
import f5Logo from "@/assets/partners/f5.jpg";
import gigamonLogo from "@/assets/partners/gigamon.jpg";
import hpeLogo from "@/assets/partners/hpe.jpg";
import mitelLogo from "@/assets/partners/mitel.jpg";
import nutanixLogo from "@/assets/partners/nutanix.jpg";
import purestorageLogo from "@/assets/partners/purestorage.jpg";
import riverbedLogo from "@/assets/partners/riverbed.jpg";
import thalesLogo from "@/assets/partners/thales.jpg";
import trendLogo from "@/assets/partners/trend.jpg";
import veeamLogo from "@/assets/partners/veeam.jpg";

const logoMap: Record<string, string> = {
  arista: aristaLogo,
  checkpoint: checkpointLogo,
  cyberark: cyberarkLogo,
  exagrid: exagridLogo,
  "extreme-networks": extremeLogo,
  f5: f5Logo,
  gigamon: gigamonLogo,
  "hpe-aruba": hpeLogo,
  mitel: mitelLogo,
  nutanix: nutanixLogo,
  purestorage: purestorageLogo,
  riverbed: riverbedLogo,
  thales: thalesLogo,
  "trend-micro": trendLogo,
  veeam: veeamLogo,
};

const PartnerDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const partner = slug ? getPartnerBySlug(slug) : undefined;

  useEffect(() => {
    if (partner) {
      document.title = partner.seoTitle;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute("content", partner.seoDescription);
      }
    }
  }, [partner]);

  if (!partner) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-40 pb-20 text-center">
          <h1 className="text-2xl font-display font-bold text-gray-900 mb-4">Parceiro não encontrado</h1>
          <Link to="/parceiros" className="text-primary hover:underline">
            Voltar para Parceiros
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const logo = logoMap[partner.slug];

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-3 md:mx-5 rounded-[1.25rem] bg-background overflow-hidden relative">
        <Header />
        <div className="pt-40 md:pt-44 pb-16 px-6 lg:px-12 max-w-[1400px] mx-auto relative z-10">
          <button
            onClick={() => navigate("/parceiros")}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("partners.detail.back")}
          </button>

          <div className="flex items-center gap-6 mb-6">
            {logo ? (
              <img src={logo} alt={partner.name} className="h-16 w-auto object-contain" />
            ) : (
              <div className="h-16 flex items-center">
                <span className="text-3xl font-display font-bold text-foreground">{partner.name}</span>
              </div>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-4">
            {partner.name}
          </h1>
        </div>
      </div>

      <main className="py-14 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              {partner.description}
            </p>

            {/* Related solutions */}
            <div className="mb-12">
              <h2 className="text-xl font-display font-bold text-gray-900 mb-4">
                {t("partners.detail.solutions")}
              </h2>
              <div className="flex flex-wrap gap-3">
                {partner.relatedSolutions.map((sol) => (
                  <Link
                    key={sol.label}
                    to={sol.href}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-700 bg-gray-100 border border-gray-200 hover:border-primary/40 hover:text-primary transition-all"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {sol.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="mailto:contato@mahvla.com.br"
              className="cta-button inline-flex items-center gap-3 px-8 py-4 font-semibold rounded-full text-primary-foreground text-sm"
            >
              {t("partners.detail.cta")}
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PartnerDetail;
