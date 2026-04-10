import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getPartnerBySlug } from "@/data/partners";
import { useLanguage } from "@/contexts/LanguageContext";

// Reuse logo map
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
import veeamWhiteLogo from "@/assets/partners/veeam.svg";

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
};

// Partners with dedicated white logos for dark backgrounds (skip CSS filter)
const whiteLogoMap: Record<string, string> = {
  veeam: veeamWhiteLogo,
};

const FaqSection = ({ items }: { items: { question: string; answer: string }[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-10 mb-8">
      <h2 className="text-lg font-display font-bold text-gray-900 mb-4">Perguntas frequentes</h2>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
            >
              {item.question}
              <ChevronDown className={`w-4 h-4 text-gray-400 flex-shrink-0 ml-4 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`} />
            </button>
            {openIndex === i && (
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
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
  const whiteLogo = whiteLogoMap[partner.slug];
  const hasTechnologies = partner.technologies && partner.technologies.length > 0;
  const primarySolution = partner.relatedSolutions[0];

  return (
    <div className="min-h-screen bg-white pt-3 md:pt-5">
      <div className="mx-3 md:mx-5 rounded-[1.25rem] bg-background overflow-hidden relative">
        <Header />
        <div className="pt-28 md:pt-32 pb-8 px-6 lg:px-12 max-w-[1400px] mx-auto relative z-10">
          <button
            onClick={() => navigate("/parceiros")}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("partners.detail.back")}
          </button>

          <div className="flex items-center gap-6">
            {(whiteLogo || logo) ? (
              <img
                src={whiteLogo || logo}
                alt={partner.name}
                className={`h-14 w-auto object-contain ${whiteLogo ? '' : 'brightness-0 invert'}`}
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
          {/* Two-column layout: description left, technologies + area right */}
          <div className={`grid gap-10 mb-8 ${hasTechnologies ? 'lg:grid-cols-[1fr_380px]' : ''}`}>
            <div>
              {partner.description.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-lg text-gray-600 leading-relaxed mb-5">
                  {paragraph}
                </p>
              ))}
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
                {primarySolution && (
                  <p className="text-sm text-gray-500 mt-6 pt-4 border-t border-gray-200">
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
            )}

            {/* If no technologies, show area link in left column */}
            {!hasTechnologies && primarySolution && (
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

          {/* CTA */}
          <div className="py-8 border-t border-gray-200 flex justify-center">
            <a
              href="mailto:contato@mahvla.com.br"
              className="cta-button inline-flex items-center justify-center gap-3 px-10 py-4 font-semibold rounded-full text-primary-foreground text-sm w-full sm:w-auto sm:min-w-[320px]"
            >
              {t("partners.detail.cta")}
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </span>
            </a>
          </div>

          {/* FAQ */}
          {partner.faq && partner.faq.length > 0 && (
            <FaqSection items={partner.faq} />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PartnerDetail;