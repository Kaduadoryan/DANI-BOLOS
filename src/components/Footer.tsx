import { Instagram, Facebook, Phone, Mail } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-muted border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-semibold">Dani Bolos</h3>
            <p className="text-muted-foreground">
              Bolos artesanais feitos com amor e ingredientes de qualidade.
              Adoçando momentos especiais desde 2020.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#inicio" className="text-muted-foreground hover:text-primary transition-colors">
                Início
              </a>
              <a href="#cardapio" className="text-muted-foreground hover:text-primary transition-colors">
                Cardápio
              </a>
              <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">
                Sobre
              </a>
              <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">
                Contato
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-3">
              <a href="https://wa.me/5567996074340" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span>(67) 99607-4340</span>
              </a>
              <a href="mailto:contato@danibolos.com.br" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <span>contato@danibolos.com.br</span>
              </a>
              
              <div className="danibolos flex items-center gap-3">
                <a href="https://www.instagram.com/danibolosedoces5" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <span className="text-muted-foreground font-medium">danibolos</span>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                  
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Dani Bolos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>;
};