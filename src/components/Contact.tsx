import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Globe, ArrowRight, MessageSquare } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Entre em <span className="text-primary text-glow">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pronto para transformar seus processos? Fale com nossos especialistas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefone</p>
                  <a href="tel:+5561982130507" className="text-lg font-semibold hover:text-primary transition-colors"
                  onClick={() => window.open("https://wa.me/5561982130507", "_blank")}>
                    (61) 98213-0507
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <a href="mailto:contato@britahconsultoria.com.br" className="text-lg font-semibold hover:text-primary transition-colors">
                    contato@britahconsultoria.com.br
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Site</p>
                  <a href="https://britahconsultoria.com.br" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-primary transition-colors">
                    britahconsultoria.com.br
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Card */}
          <Card className="bg-card border-border/50">
            <CardContent className="p-8 space-y-6 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <MessageSquare className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Solicite um Diagnóstico Gratuito</h3>
              <p className="text-muted-foreground">
                Descubra como a automação inteligente pode transformar sua empresa. 
                Nossos especialistas estão prontos para ajudar.
              </p>
              <div className="flex flex-col gap-4">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg box-glow group w-full"
                >
                  <MessageSquare className="mr-2 w-5 h-5" />
                  <a href="tel:+5561982130507" className="text-lg font-semibold hover:text-primary transition-colors"
                  onClick={() => window.open("https://wa.me/5561982130507", "_blank")}>
                    Falar com Consultor
                  </a>
                  
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10 text-foreground font-semibold px-8 py-6 text-lg w-full"
                >
                <a href="tel:+5561982130507" className="text-lg font-semibold hover:text-primary transition-colors"
                  onClick={() => window.open("https://wa.me/5561982130507", "_blank")}>
                    Solicitar Diagnóstico
                </a>
                  
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
