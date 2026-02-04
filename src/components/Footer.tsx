import { Code2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Code2 className="w-6 h-6 text-primary" />
            <span className="text-xl font-display font-bold">AutomateIA</span>
          </div>
          
          <div className="text-muted-foreground text-sm text-center md:text-left">
            © 2025 AutomateIA. Automação Inteligente de Processos.
          </div>
          
          <div className="flex gap-6 text-sm">
            <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#tecnologias" className="text-muted-foreground hover:text-primary transition-colors">
              Tecnologias
            </a>
            <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
