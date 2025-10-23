import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroCake from '@/assets/hero-cake.jpg';

export const Hero = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('cardapio');
    menuSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroCake}
          alt="Bolo artesanal com cobertura dusty rose"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/50 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-display font-semibold text-primary-foreground mb-6 leading-tight">
           O sabor que adoça o seu dia!
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-medium">
          Bolos artesanais com amor e qualidade
        </p>
        <Button
          size="lg"
          onClick={scrollToMenu}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover-lift"
        >
          Ver Cardápio
        </Button>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToMenu}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Rolar para cardápio"
      >
        <ChevronDown className="w-8 h-8 text-primary-foreground" />
      </button>
    </section>
  );
};
