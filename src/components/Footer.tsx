import { Mail, Phone, MapPin } from "lucide-react";
import { forwardRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface FooterProps {
  showCta?: boolean;
}

const Footer = forwardRef<HTMLElement, FooterProps>(({ showCta = true }, ref) => {
  const { t } = useLanguage();

  return (
    <footer ref={ref} id="contato" className="bg-background relative overflow-hidden border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Navegação */}
          <div>
            <h4 className="text-primary font-display font-semibold text-sm mb-3">Navegação</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: t("nav.about"), href: "/#sobre" },
                { label: t("nav.solutions"), href: "/#servicos" },
                { label: t("nav.partners"), href: "/parceiros" },
                { label: t("nav.atas"), href: "/atas" },
                { label: t("nav.compliance"), href: "/compliance" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-primary font-display font-semibold text-sm mb-3">
              {t("footer.office")}
            </h4>
            <address className="not-italic text-muted-foreground text-sm leading-relaxed space-y-4">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">Brasília, DF (Sede)</p>
                  <p>SRTVS Qd 701 Cj. L N. 38</p>
                  <p>Bloco 01, Salas 8, 9 e 10</p>
                  <p>Asa Sul, Brasília - DF</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">Boca Raton, FL</p>
                  <p>5550 Glades Road, Suite 511</p>
                  <p>33431</p>
                </div>
              </div>
            </address>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary font-display font-semibold text-sm mb-3">
              {t("footer.contact")}
            </h4>
            <div className="space-y-3">
              <a href="mailto:contato@mahvla.com.br" className="flex items-center gap-2.5 text-muted-foreground text-sm hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                contato@mahvla.com.br
              </a>
              <a href="mailto:suporte@mahvla.com.br" className="flex items-center gap-2.5 text-muted-foreground text-sm hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                suporte@mahvla.com.br
              </a>
              <a href="tel:+556121914900" className="flex items-center gap-2.5 text-muted-foreground text-sm hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +55 (61) 2191-4900
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
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
