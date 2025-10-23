import { Product } from '@/types/product';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart, onViewDetails }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden hover-lift group cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden bg-muted" onClick={() => onViewDetails(product)}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {product.isBestSeller && (
          <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
            Mais Vendido
          </Badge>
        )}
      </div>
      
      <div className="p-4 space-y-3">
        <h3 className="text-xl font-display font-semibold text-foreground">
          {product.name}
        </h3>
        
        <p className="text-2xl font-bold text-accent">
          R$ {product.price.toFixed(2).replace('.', ',')}
        </p>

        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => onViewDetails(product)}
          >
            Ver Detalhes
          </Button>
          <Button
            className="flex-1 bg-primary hover:bg-primary/90"
            onClick={() => onAddToCart(product)}
          >
            Adicionar
          </Button>
        </div>
      </div>
    </Card>
  );
};
