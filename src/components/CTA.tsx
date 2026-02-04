import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Pronto para <span className="text-primary text-glow">automatizar</span> seus processos?
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entre em contato com nossos especialistas e descubra como a automação inteligente pode transformar sua empresa
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg box-glow group"
            >
              <MessageSquare className="mr-2 w-5 h-5" />
              Solicitar Consultoria
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 text-foreground font-semibold px-8 py-6 text-lg"
            >
              Ver casos de uso
            </Button>
          </div>

          <div className="pt-8 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">90%</div>
              <div className="text-sm text-muted-foreground">Redução de tempo</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Disponibilidade</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Processos automatizados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
