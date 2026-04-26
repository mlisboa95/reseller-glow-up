import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Privacidade from "./pages/Privacidade";
import Compliance from "./pages/Compliance";
import Terms from "./pages/Terms";
import Atas from "./pages/Atas";
import Parceiros from "./pages/Parceiros";
import PartnerDetail from "./pages/PartnerDetail";
import NotFound from "./pages/NotFound";
import Apresentacao from "./pages/Apresentacao";
import SupportButton from "@/components/SupportButton";
import { useLocation } from "react-router-dom";

const ConditionalSupport = () => {
  const { pathname } = useLocation();
  if (pathname.startsWith("/apresentacao")) return null;
  return <SupportButton />;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/privacidade" element={<Privacidade />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/termos" element={<Terms />} />
            <Route path="/atas" element={<Atas />} />
            <Route path="/parceiros" element={<Parceiros />} />
            <Route path="/parceiros/:slug" element={<PartnerDetail />} />
            <Route path="/apresentacao" element={<Apresentacao />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ConditionalSupport />
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
