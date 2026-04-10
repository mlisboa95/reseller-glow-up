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
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          style={{ backgroundColor: "hsl(0, 0%, 18%)" }}
        >
          <Headset className="w-5 h-5 text-white" />
          <span className="text-sm font-medium text-white">Suporte</span>
        </a>
      </TooltipTrigger>
      <TooltipContent side="left">
        <p>Central de Suporte</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default SupportButton;
