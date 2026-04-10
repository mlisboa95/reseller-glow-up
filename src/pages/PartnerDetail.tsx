import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPartnerBySlug } from "@/data/partners";
import { useLanguage } from "@/contexts/LanguageContext";

// Reuse logo map
import aristaLogo from "@/assets/partners/arista.jpg";
import checkpointLogo from "@/assets/partners/checkpoint.jpg";
import cyberarkLogo from "@/assets/partners/cyberark.jpg";
import exagridLogo from "@/assets/partners/exagrid.jpg";
import extremeLogo from "@/assets/partners/extreme-partner.svg";
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
  const hasTechnologies = partner.technologies && partner.technologies.length > 0;
  const primarySolution = partner.relatedSolutions[0];

  return (
    <div className="min-h-screen bg-white pt-3 md:pt-5">
      <div className="mx-3 md:mx-5 rounded-[1.25rem] bg-background overflow-hidden relative">
        <Header />
        <div className="pt-32 md:pt-36 pb-10 px-6 lg:px-12 max-w-[1400px] mx-auto relative z-10">
          <button
            onClick={() => navigate("/parceiros")}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("partners.detail.back")}
          </button>

          <div className="flex items-center gap-6">
            {logo ? (
              <img
                src={logo}
                alt={partner.name}
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            ) : (
              <div className="h-14 flex items-center">
                <span className="text-3xl font-display font-bold text-foreground">{partner.name}</span>
              </div>
            )}
            {partner.badge && (
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded bg-primary/15 text-primary">
                {partner.badge}
              </span>
            )}
          </div>
        </div>
      </div>

      <main className="py-6 md:py-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Two-column layout: description left, technologies right */}
          <div className={`grid gap-10 mb-8 ${hasTechnologies ? 'lg:grid-cols-[1fr_380px]' : ''}`}>
            <div>
              {partner.description.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-lg text-gray-600 leading-relaxed mb-5">
                  {paragraph}
                </p>
              ))}
              {primarySolution && (
                <p className="text-sm text-gray-500">
                  Área de atuação:{" "}
                  <Link
                    to={primarySolution.href}
                    className="text-primary hover:underline font-medium"
                  >
                    {primarySolution.label}
                  </Link>
                </p>
              )}
            </div>

            {hasTechnologies && (
              <div className="lg:border-l lg:border-gray-200 lg:pl-10">
                <h2 className="text-lg font-display font-bold text-gray-900 mb-4">
                  Soluções e tecnologias
                </h2>
                <div className="space-y-3">
                  {partner.technologies!.map((tech) => (
                    <div key={tech.title} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-gray-900 text-sm">{tech.title}</span>
                        <span className="text-gray-500 text-sm"> — {tech.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="pt-8 border-t border-gray-200">
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