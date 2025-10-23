import { ShoppingCart, Menu, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
  onMenuClick: () => void;
}

export const Header = ({ cartItemCount, onCartClick, onMenuClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
            🍰 Dani Bolos
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#inicio" className="text-foreground hover:text-primary transition-colors font-medium">
            Início
          </a>
          <a href="#cardapio" className="text-foreground hover:text-primary transition-colors font-medium">
            Cardápio
          </a>
          <a href="#sobre" className="text-foreground hover:text-primary transition-colors font-medium">
            Sobre
          </a>
          <a href="#contato" className="text-foreground hover:text-primary transition-colors font-medium">
            Contato
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/*<Button
            variant="ghost"
            size="icon"
            className="hidden md:flex"
            aria-label="Buscar"
          >
            <Search className="w-5 h-5" />
          </Button>*/}
          
          <Button
            variant="ghost"
            size="icon"
            onClick={onCartClick}
            className="relative"
            aria-label="Carrinho"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartItemCount > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs animate-bounce-in"
              >
                {cartItemCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};
