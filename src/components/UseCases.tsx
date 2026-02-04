import { Card, CardContent } from "@/components/ui/card";
import { Building2, Bot, Megaphone, Workflow, CheckCircle } from "lucide-react";

const useCases = [
  {
    icon: Building2,
    title: "Automação Administrativa Corporativa",
    description: "Fluxos automatizados para gestão de documentos, relatórios e processos internos",
    benefits: ["Redução de erros manuais", "Economia de tempo", "Padronização de processos"],
  },
  {
    icon: Bot,
    title: "Agentes de IA para Atendimento",
    description: "Assistentes virtuais para relacionamento, suporte e atendimento ao cliente",
    benefits: ["Disponibilidade 24/7", "Respostas instantâneas", "Escalabilidade"],
  },
  {
    icon: Megaphone,
    title: "Landing Pages Estratégicas",
    description: "Páginas de alta conversão para campanhas de marketing digital",
    benefits: ["Alta taxa de conversão", "Design responsivo", "SEO otimizado"],
  },
  {
    icon: Workflow,
    title: "Workflows Automatizados",
    description: "Processos automatizados para suporte, acompanhamento e follow-up",
    benefits: ["Integração de sistemas", "Notificações automáticas", "Monitoramento em tempo real"],
  },
];

export const UseCases = () => {
  return (
    <section id="casos-de-uso" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Casos de <span className="text-primary">Uso</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções que já transformaram a realidade de diversos negócios
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <Card 
              key={index}
              className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <useCase.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">{useCase.title}</h3>
                    <p className="text-muted-foreground">{useCase.description}</p>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
