import { Product } from '@/types/product';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const ProductModal = ({ product, isOpen, onClose, onAddToCart }: ProductModalProps) => {
  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCart(product);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display">{product.name}</DialogTitle>
          <DialogDescription className="sr-only">
            Detalhes do produto {product.name}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.isBestSeller && (
              <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
                Mais Vendido
              </Badge>
            )}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Descrição</h3>
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          {/* Details */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Detalhes</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-muted-foreground">Categoria:</span>
                <span className="ml-2 font-medium">
                  {product.category === 'com-cobertura' ? 'Com Cobertura' : 'Sem Cobertura'}
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">Sabor:</span>
                <span className="ml-2 font-medium capitalize">{product.flavor}</span>
              </div>
            </div>
          </div>

          {/* Price and CTA */}
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="text-3xl font-bold text-accent">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </div>
            <Button
              size="lg"
              onClick={handleAddToCart}
              className="bg-primary hover:bg-primary/90"
            >
              Adicionar ao Carrinho
            </Button>
          </div>

          {/* Info */}
          <p className="text-sm text-muted-foreground text-center">
            ⏰ Encomendas com 24h de antecedência
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
