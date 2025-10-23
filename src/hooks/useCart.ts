import { useState, useEffect } from 'react';
import { Product, CartItem } from '@/types/product';
import { toast } from 'sonner';

export const useCart = () => {
  const [items, setItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('dani-bolos-cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('dani-bolos-cart', JSON.stringify(items));
  }, [items]);

  const addItem = (product: Product) => {
    setItems((current) => {
      const existing = current.find((item) => item.id === product.id);
      
      if (existing) {
        toast.success('Quantidade atualizada!');
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      toast.success('Bolo adicionado ao carrinho! 🍰');
      return [...current, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    
    setItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setItems((current) => current.filter((item) => item.id !== id));
    toast.info('Item removido do carrinho');
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalItems = () => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  };

  return {
    items,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    getTotalItems,
  };
};
