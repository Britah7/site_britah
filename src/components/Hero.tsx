import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import britahMascot from "@/assets/britah-mascot.png";

export const Hero = () => {
  return (
    <section id="principal" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background"></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <span className="text-sm font-medium text-primary">Automação + IA + Resultados</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Automação inteligente para{" "}
              <span className="text-primary text-glow">elevar a performance</span>{" "}
              do seu negócio
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              A Britah Consultoria de T.I. é especializada em automação de processos, 
              inteligência de dados e soluções digitais orientadas a resultados.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg box-glow group"
              >
                <MessageSquare className="mr-2 w-5 h-5" />
                Fale com um consultor
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 text-foreground font-semibold px-8 py-6 text-lg"
              >
                Diagnóstico Gratuito
              </Button>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                Automação de Processos
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                Assistentes de IA
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                Landing Pages
              </div>
            </div>
          </div>

          {/* Mascot Image */}
          <div className="hidden lg:flex justify-center items-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-75"></div>
              <img 
                src={britahMascot} 
                alt="Britah - Assistente Virtual" 
                className="relative w-96 h-96 object-contain animate-float"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 left-10 w-20 h-20 border border-primary/30 rounded-lg rotate-45 animate-float hidden lg:block"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-accent/30 rounded-lg rotate-12 animate-float-delayed hidden lg:block"></div>
    </section>
  );
};
