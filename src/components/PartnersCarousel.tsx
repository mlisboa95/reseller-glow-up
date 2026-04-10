import { partnerLogos } from "@/data/partners";
import { useLanguage } from "@/contexts/LanguageContext";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const partners = Object.entries(partnerLogos).map(([name, logo]) => ({ name, logo }));

const PartnersCarousel = () => {
  const allPartners = [...partners, ...partners];
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="parceiros" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div
        ref={ref}
        className={`max-w-[1400px] mx-auto px-6 lg:px-12 mb-10 text-center scroll-fade-up ${isVisible ? 'visible' : ''}`}
      >
        <span className="badge-pill mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          {t("partners.label")}
        </span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold tracking-tight text-foreground">
          {t("partners.title")}{" "}
          <span className="text-primary">{t("partners.titleHighlight")}</span>{" "}
          {t("partners.titleEnd")}
        </h2>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex animate-scroll-left-slow"
          style={{ width: 'max-content' }}
        >
          {allPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 px-6 md:px-10 flex items-center justify-center h-20 group"
            >
              <img
                src={partner.logo}
                alt={`Logo ${partner.name}`}
                loading="lazy"
                decoding="async"
                className="h-[50px] md:h-[60px] w-auto object-contain opacity-40 hover:opacity-90 transition-all duration-500 hover:scale-110 grayscale hover:grayscale-0"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;
