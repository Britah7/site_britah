import { Zap, TrendingUp, Shield, Clock } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Eficiência Operacional",
    description: "Reduza tempo de execução de tarefas repetitivas em até 90%",
  },
  {
    icon: TrendingUp,
    title: "Escalabilidade",
    description: "Processos automatizados que crescem junto com seu negócio",
  },
  {
    icon: Shield,
    title: "Confiabilidade",
    description: "Elimine erros humanos e garanta precisão nas operações",
  },
  {
    icon: Clock,
    title: "Disponibilidade 24/7",
    description: "Automações funcionando continuamente, sem interrupções",
  },
];

export const Benefits = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Por que <span className="text-primary">automatizar</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Benefícios significativos que transformam a eficiência e competitividade da empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center space-y-4 p-6 rounded-lg hover:bg-card/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:box-glow-accent transition-all">
                <benefit.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
