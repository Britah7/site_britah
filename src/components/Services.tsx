import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, FileCheck, Bot } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Automação de NF-e",
    description: "Processamento automático de informações da NF-e obtida via e-mail",
    details: "O Bot executa todo trabalho manual: leitura e pesquisa na caixa de e-mail, arquivamento do XML, extração de informações e cadastro em banco de dados ou Excel.",
  },
  {
    icon: FileCheck,
    title: "Geração de Documentos",
    description: "Automação para processar e gerar documentos oficiais ou pessoais",
    details: "Preenchimento automático de documentos acessando base de dados, com envio personalizado por e-mail em formato PDF para cada colaborador.",
  },
  {
    icon: Bot,
    title: "Agentes de IA",
    description: "Assistentes inteligentes 24/7 para atendimento ao cliente",
    details: "Agentes de IA transformam o atendimento oferecendo suporte personalizado, respostas contextuais extraídas de bases de conhecimento internas e externas.",
  },
];

export const Services = () => {
  return (
    <section id="servicos" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções especializadas em automação de processos com Python e IA
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-card hover:bg-card/80 border-border/50 hover:border-primary/50 transition-all duration-300 hover:box-glow group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base text-foreground/80">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {service.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
