import { CartItem } from '@/types/product';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface CartDrawerProps {
  items: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onOpenCheckout: () => void;
}

export const CartDrawer = ({
  items,
  isOpen,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onOpenCheckout,
}: CartDrawerProps) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-2xl font-display">Seu Carrinho</SheetTitle>
          <SheetDescription>
            {items.length === 0 ? 'Seu carrinho está vazio' : `${items.length} ${items.length === 1 ? 'item' : 'itens'}`}
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            <p>Adicione alguns bolos deliciosos ao carrinho! 🍰</p>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-4 py-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 border-b pb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    
                    <div className="flex-1 space-y-2">
                      <h4 className="font-semibold text-sm">{item.name}</h4>
                      <p className="text-accent font-bold">
                        R$ {item.price.toFixed(2).replace('.', ',')}
                      </p>
                      
                      <div className="flex items-center gap-2">
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-7 w-7"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-7 w-7"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>

                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-7 w-7 ml-auto text-destructive"
                          onClick={() => onRemoveItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t pt-4 space-y-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span className="text-2xl text-accent">
                  R$ {total.toFixed(2).replace('.', ',')}
                </span>
              </div>

              <Button
                size="lg"
                className="w-full bg-success hover:bg-success/90 text-success-foreground"
                onClick={onOpenCheckout}
              >
                Finalizar no WhatsApp
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                ⏰ Encomendas com 24h de antecedência
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};
