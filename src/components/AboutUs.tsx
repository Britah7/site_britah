import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Lightbulb, Award, Users, Leaf, Zap, UserCheck } from "lucide-react";

const values = [
  { icon: Lightbulb, label: "Inovação", description: "Criatividade e busca constante por novas soluções" },
  { icon: Award, label: "Excelência", description: "Alta qualidade em tudo que fazemos" },
  { icon: Heart, label: "Integridade", description: "Honestidade, transparência e ética" },
  { icon: Users, label: "Colaboração", description: "Trabalho a quatro mãos com clientes e parceiros" },
  { icon: UserCheck, label: "Foco no Cliente", description: "O sucesso do cliente é nossa prioridade" },
  { icon: Leaf, label: "Sustentabilidade", description: "Crescimento sustentável e competitividade" },
  { icon: Zap, label: "Agilidade", description: "Respostas rápidas e eficientes" },
];

export const AboutUs = () => {
  return (
    <section id="quem-somos" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Quem <span className="text-primary">Somos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transformando desafios operacionais em soluções inovadoras e práticas
          </p>
        </div>

        {/* About Text */}
        <div className="max-w-4xl mx-auto mb-16 space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            A <span className="text-foreground font-semibold">Britah Consultoria de T.I.</span> é uma empresa especializada em automação de processos empresariais, 
            com o compromisso de transformar desafios operacionais em soluções inovadoras e práticas. 
            Fundada com o objetivo de proporcionar ganhos de eficiência, produtividade e inteligência para negócios, 
            a Britah une conhecimento técnico e uma visão estratégica voltada para resultados.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nosso nome é uma homenagem ao pai do fundador — símbolo de integridade e dedicação que inspira 
            mais de <span className="text-primary font-semibold">10 anos de atuação</span> no setor de Tecnologia da Informação. 
            Com expertise em automação, inteligência de dados e gestão de projetos, desenvolvemos soluções 
            personalizadas que atendem às demandas específicas de cada cliente.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Na Britah, acreditamos que a tecnologia é uma aliada essencial para a evolução dos negócios. 
            É por isso que nossa missão é oferecer serviços de alto padrão, utilizando as melhores práticas 
            e metodologias para garantir que cada projeto resulte em um impacto positivo e duradouro.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Missão</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Fornecer soluções inovadoras e eficientes de automação de processos empresariais que 
                capacitem nossos clientes a melhorar a produtividade, reduzir custos e alcançar 
                excelência operacional e gerencial.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/50 hover:border-accent/50 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Eye className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Visão</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Ser líder reconhecido no mercado de automação de processos empresariais, buscando 
                inovar e otimizar processos, promovendo um futuro onde a tecnologia e a automação 
                são a base do crescimento sustentável e a competitividade.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Nossos Valores</h3>
          <p className="text-muted-foreground">Princípios que guiam nossa atuação</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center p-4 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-semibold text-center">{value.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
