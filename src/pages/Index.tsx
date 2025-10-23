import { useState, useMemo } from 'react';
import { Product } from '@/types/product';
import { products } from '@/data/products';
import { useCart } from '@/hooks/useCart';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProductFilters } from '@/components/ProductFilters';
import { ProductCard } from '@/components/ProductCard';
import { ProductModal } from '@/components/ProductModal';
import { CartDrawer } from '@/components/CartDrawer';
import { CheckoutForm } from '@/components/CheckoutForm';
import { Footer } from '@/components/Footer';
const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedFlavor, setSelectedFlavor] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cart = useCart();

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory;
      const matchesFlavor = selectedFlavor === 'todos' || product.flavor === selectedFlavor;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesFlavor && matchesSearch;
    });
  }, [selectedCategory, selectedFlavor, searchQuery]);
  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };
  const handleOpenCheckout = () => {
    if (cart.items.length === 0) return;
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };
  const handleCheckoutClose = () => {
    setIsCheckoutOpen(false);
  };
  return <div className="min-h-screen bg-background">
      <Header cartItemCount={cart.getTotalItems()} onCartClick={() => setIsCartOpen(true)} onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />

      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="fixed inset-0 z-40 bg-card pt-20 md:hidden">
          <nav className="flex flex-col p-6 space-y-4">
            <a href="#inicio" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium hover:text-primary transition-colors">
              Início
            </a>
            <a href="#cardapio" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium hover:text-primary transition-colors">
              Cardápio
            </a>
            <a href="#sobre" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#contato" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium hover:text-primary transition-colors">
              Contato
            </a>
          </nav>
        </div>}

      <Hero />

      {/* Products Section */}
      <section id="cardapio" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4">
            Nosso Cardápio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha entre nossos deliciosos bolos artesanais, feitos com ingredientes selecionados
          </p>
        </div>

        <ProductFilters selectedCategory={selectedCategory} selectedFlavor={selectedFlavor} searchQuery={searchQuery} onCategoryChange={setSelectedCategory} onFlavorChange={setSelectedFlavor} onSearchChange={setSearchQuery} />

        {filteredProducts.length === 0 ? <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">
              Nenhum bolo encontrado com os filtros selecionados 😢
            </p>
          </div> : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {filteredProducts.map(product => <ProductCard key={product.id} product={product} onAddToCart={cart.addItem} onViewDetails={handleViewDetails} />)}
          </div>}
      </section>

      {/* About Section */}
      <section id="sobre" className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-display font-semibold">
              Sobre Nós
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Na Dani Bolos, acreditamos que cada celebração merece um toque especial.
              Desde 2020, criamos bolos artesanais que combinam sabor excepcional com
              apresentação impecável. Cada receita é cuidadosamente desenvolvida com
              ingredientes premium e muito carinho.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nosso compromisso é transformar momentos ordinários em memórias doces e
              inesquecíveis. Fazemos encomendas personalizadas para casamentos,
              aniversários, eventos corporativos e qualquer ocasião que mereça ser
              celebrada com sabor!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-display font-semibold">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground">
            Tem alguma dúvida ou quer fazer uma encomenda especial? Fale com a gente!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="https://wa.me/5567984159574" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-success hover:bg-success/90 text-success-foreground font-semibold rounded-lg transition-all hover-lift">
              💬 Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Modals */}
      <ProductModal product={selectedProduct} isOpen={isProductModalOpen} onClose={() => setIsProductModalOpen(false)} onAddToCart={cart.addItem} />

      <CartDrawer items={cart.items} isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} onUpdateQuantity={cart.updateQuantity} onRemoveItem={cart.removeItem} onOpenCheckout={handleOpenCheckout} />

      <CheckoutForm items={cart.items} isOpen={isCheckoutOpen} onClose={handleCheckoutClose} />
    </div>;
};
export default Index;