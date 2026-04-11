import { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import SEOHead from "@/components/SEOHead";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { partnerLogos } from "@/data/partners";
import { Search, FileText, ArrowLeft, ExternalLink } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ItemAta {
  grupo: number;
  item: number;
  especificacao: string;
  unidade: string;
  qtde: number;
  fabricante: string;
  valorUnitario: number;
  valorTotal: number;
}

interface Ata {
  id: string;
  numero: string;
  ambito: string;
  vigencia: string;
  objeto: string;
  categoria: string;
  valorGlobal: number;
  itens: ItemAta[];
}

const atas: Ata[] = [
  {
    id: "arp-90-2025",
    numero: "ARP Nº 90/2025",
    ambito: "Estadual (Judiciário)",
    vigencia: "28/07/2026",
    objeto:
      "Registro de preços visando aquisição futura de softwares e serviços para infraestrutura hiperconvergente e backup corporativos, para eventual(is) e futura(s) contratação(ões) dos itens especificados nesta Ata.",
    categoria: "Backup & Hiperconvergência",
    valorGlobal: 7070000.0,
    itens: [
      { grupo: 2, item: 7, especificacao: "Software de backup corporativo", unidade: "Und.", qtde: 300, fabricante: "Veeam", valorUnitario: 4500.0, valorTotal: 1350000.0 },
      { grupo: 2, item: 8, especificacao: "Appliance de backup", unidade: "Und.", qtde: 2, fabricante: "ExaGrid", valorUnitario: 2800000.0, valorTotal: 5600000.0 },
      { grupo: 2, item: 9, especificacao: "Serviço de instalação de solução de backup", unidade: "Und.", qtde: 2, fabricante: "Mahvla", valorUnitario: 20000.0, valorTotal: 40000.0 },
      { grupo: 2, item: 10, especificacao: "Serviço de treinamento em solução de backup", unidade: "Und.", qtde: 1, fabricante: "Mahvla", valorUnitario: 80000.0, valorTotal: 80000.0 },
    ],
  },
];

const categorias = [
  "Todas",
  "Backup & Hiperconvergência",
  "Rede Wireless",
  "Switches",
  "PABX IP",
];

const currency = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const Atas = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { t } = useLanguage();

  const [search, setSearch] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setSelectedId(null);
  }, [location.key]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return atas.filter((a) => {
      const matchCat = categoria === "Todas" || a.categoria === categoria;
      const matchSearch =
        !q || a.numero.toLowerCase().includes(q) || a.objeto.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [search, categoria]);

  const selected = selectedId ? atas.find((a) => a.id === selectedId) ?? null : null;

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
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {selected ? (
            <DetailView ata={selected} onBack={() => setSelectedId(null)} t={t} />
          ) : (
            <>
              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder={t("atas.search")}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <Select value={categoria} onValueChange={setCategoria}>
                  <SelectTrigger className="w-full sm:w-[220px]">
                    <SelectValue placeholder={t("atas.category")} />
                  </SelectTrigger>
                  <SelectContent>
                    {categorias.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c === "Todas" ? t("atas.categoryAll") : c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((ata) => (
                  <div
                    key={ata.id}
                    className="rounded-xl border border-border bg-card hover:shadow-md shadow-sm transition-all overflow-hidden"
                    style={{ border: '1px solid rgba(0,0,0,0.08)' }}
                  >
                    <div className="rounded-t-xl bg-white border-b border-border h-[120px] flex items-center justify-center gap-8 px-8">
                      {(() => {
                        const fabricantes = [...new Set(ata.itens.map(i => i.fabricante).filter(f => f !== "Mahvla"))];
                        if (fabricantes.length === 0) return <FileText className="h-12 w-12 text-primary/40" />;
                        return fabricantes.map(f => {
                          const logo = partnerLogos[f];
                          return logo ? (
                            <img key={f} src={logo} alt={f} className="max-h-[34px] w-auto object-contain" />
                          ) : (
                            <span key={f} className="text-xs text-gray-500 font-medium">{f}</span>
                          );
                        });
                      })()}
                    </div>
                    <div className="p-5 space-y-2.5">
                      <p className="text-lg text-primary font-bold tracking-tight">
                        {ata.numero}
                      </p>
                      <p className="text-sm font-medium text-gray-900 leading-relaxed">
                        {ata.objeto}
                      </p>
                      <p className="text-sm text-gray-500 font-medium">
                        {currency(ata.valorGlobal)}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        <Badge variant="secondary" className="bg-muted/50 text-xs rounded-full px-2 py-0.5 font-normal">
                          {ata.ambito}
                        </Badge>
                        <Badge variant="secondary" className="bg-muted/50 text-xs rounded-full px-2 py-0.5 font-normal">
                          Até {ata.vigencia}
                        </Badge>
                      </div>
                      <button
                        onClick={() => setSelectedId(ata.id)}
                        className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:underline cursor-pointer pt-1"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        {t("atas.viewRecord")}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filtered.length === 0 && (
                <p className="text-muted-foreground text-center py-12">
                  Nenhuma ata encontrada.
                </p>
              )}
            </>
          )}
        </div>
      </main>
      <Footer showCta={false} />
    </div>
  );
};

function DetailView({
  ata,
  onBack,
  t,
}: {
  ata: Ata;
  onBack: () => void;
  t: (k: string) => string;
}) {
  const fields: { label: string; value: string; span?: boolean }[] = [
    { label: t("atas.numero"), value: ata.numero },
    { label: t("atas.ambito"), value: ata.ambito },
    { label: t("atas.vigencia"), value: ata.vigencia },
    { label: t("atas.objeto"), value: ata.objeto, span: true },
  ];

  return (
    <div className="space-y-6">
      {/* Meta grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
        {fields.map((f) => (
          <div key={f.label} className={f.span ? "sm:col-span-2" : ""}>
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">
              {f.label}
            </p>
            <p className="text-sm font-medium text-gray-900">{f.value}</p>
          </div>
        ))}
      </div>

      {/* Table or empty */}
      {ata.itens.length === 0 ? (
        <p className="text-muted-foreground text-center py-8">{t("atas.semItens")}</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-border">
          <Table>
            <TableHeader>
              <TableRow className="bg-foreground hover:bg-foreground">
                <TableHead className="text-background text-xs uppercase tracking-wide">{t("atas.grupo")}</TableHead>
                <TableHead className="text-background text-xs uppercase tracking-wide">{t("atas.item")}</TableHead>
                <TableHead className="text-background text-xs uppercase tracking-wide">{t("atas.especificacao")}</TableHead>
                <TableHead className="text-background text-xs uppercase tracking-wide">{t("atas.unidade")}</TableHead>
                <TableHead className="text-background text-xs uppercase tracking-wide text-right">{t("atas.qtde")}</TableHead>
                <TableHead className="text-background text-xs uppercase tracking-wide">{t("atas.fabricante")}</TableHead>
                <TableHead className="text-background text-xs uppercase tracking-wide text-right">{t("atas.valorUnitario")}</TableHead>
                <TableHead className="text-background text-xs uppercase tracking-wide text-right">{t("atas.valorTotal")}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ata.itens.map((it, i) => (
                <TableRow key={i} className={`${i % 2 === 1 ? "bg-gray-50" : "bg-white"} hover:bg-gray-50`}>
                  <TableCell className="text-sm text-gray-900">{it.grupo}</TableCell>
                  <TableCell className="text-sm text-gray-900">{it.item}</TableCell>
                  <TableCell className="text-sm text-gray-900">{it.especificacao}</TableCell>
                  <TableCell className="text-sm text-gray-900">{it.unidade}</TableCell>
                  <TableCell className="text-sm text-gray-900 text-right">{it.qtde.toLocaleString("pt-BR")}</TableCell>
                  <TableCell className="text-sm text-gray-900">{it.fabricante}</TableCell>
                  <TableCell className="text-sm text-gray-900 text-right">{currency(it.valorUnitario)}</TableCell>
                  <TableCell className="text-sm text-gray-900 text-right">{currency(it.valorTotal)}</TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-gray-100 hover:bg-gray-100">
                <TableCell colSpan={7} className="text-sm text-gray-900 text-right font-bold">
                  {t("atas.valorGlobal")}
                </TableCell>
                <TableCell className="text-sm text-gray-900 text-right font-bold">
                  {currency(ata.valorGlobal)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}

      {/* Back */}
      <div className="flex justify-center pt-2">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:underline cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("atas.back")}
        </button>
      </div>
    </div>
  );
}

export default Atas;
