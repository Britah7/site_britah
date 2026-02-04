import { Code2, Brain, Database, Workflow } from "lucide-react";

const technologies = [
  {
    icon: Code2,
    name: "Python",
    description: "Linguagem principal para automação robusta e eficiente",
  },
  {
    icon: Brain,
    name: "Inteligência Artificial",
    description: "Machine Learning e NLP para processos inteligentes",
  },
  {
    icon: Database,
    name: "Integração de Dados",
    description: "Conexão com bancos de dados e APIs diversas",
  },
  {
    icon: Workflow,
    name: "RPA & Workflows",
    description: "Automação de processos robóticos e fluxos de trabalho",
  },
];

export const Technologies = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Tecnologias <span className="text-primary">Avançadas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stack moderna para criar soluções de automação robustas e escaláveis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="relative p-6 rounded-xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 group hover:box-glow"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <tech.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{tech.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
