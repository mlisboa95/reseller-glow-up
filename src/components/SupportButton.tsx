import { Headset } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SupportButton = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href="https://salesforce.com"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_28px_rgba(0,0,0,0.35)]"
          style={{ backgroundColor: "hsl(0, 0%, 18%)" }}
        >
          <Headset className="w-6 h-6 text-white" />
          <span className="text-[0.9rem] font-semibold text-white tracking-wide">Suporte</span>
        </a>
      </TooltipTrigger>
      <TooltipContent side="left">
        <p>Central de Suporte</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default SupportButton;
