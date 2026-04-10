import { Mail, Phone, MapPin } from "lucide-react";
import { forwardRef } from "react";
import logoMahvla from "@/assets/logo-mahvla-footer.png";
import { useLanguage } from "@/contexts/LanguageContext";

interface FooterProps {
  showCta?: boolean;
}

const Footer = forwardRef<HTMLElement, FooterProps>(({ showCta = true }, ref) => {
  const { t } = useLanguage();

  return (
    <footer ref={ref} id="contato" className="bg-background relative overflow-hidden border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo */}
          <div className="lg:col-span-2">
            <img src={logoMahvla} alt="Mahvla Telecomm" className="h-20 w-auto" />
          </div>

          {/* Offices — Brasília primary */}
          <div>
            <h4 className="text-primary font-display font-semibold text-base mb-6">
              {t("footer.office")}
            </h4>
            <address className="not-italic text-muted-foreground text-sm leading-relaxed space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium mb-1">Brasília, DF (Sede)</p>
                  <p>SRTVS Qd 701 Cj. L N. 38</p>
                  <p>Bloco 01, Salas 8, 9 e 10</p>
                  <p>Asa Sul, Brasília - DF, Brasil</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium mb-1">Boca Raton, FL</p>
                  <p>5550 Glades Road, Suite 511</p>
                  <p>Boca Raton, FL 33431</p>
                  <p>Estados Unidos</p>
                </div>
              </div>
            </address>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary font-display font-semibold text-base mb-6">
              {t("footer.contact")}
            </h4>
            <div className="space-y-4">
              <a href="mailto:contato@mahvla.com.br" className="flex items-center gap-3 text-muted-foreground text-sm hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                contato@mahvla.com.br
              </a>
              <a href="mailto:suporte@mahvla.com.br" className="flex items-center gap-3 text-muted-foreground text-sm hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                suporte@mahvla.com.br
              </a>
              <a href="tel:+556121914900" className="flex items-center gap-3 text-muted-foreground text-sm hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +55 (61) 2191-4900
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Mahvla Telecomm Consultoria e Serviços em Tecnologia LTDA · CNPJ 06.277.077/0001-90 · {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacidade" className="text-muted-foreground/60 text-sm hover:text-primary transition-colors underline underline-offset-4">
              {t("footer.privacy")}
            </a>
            <a href="/termos" className="text-muted-foreground/60 text-sm hover:text-primary transition-colors underline underline-offset-4">
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
