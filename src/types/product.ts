export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'com-cobertura' | 'sem-cobertura' | 'bolo-de-pote';
  flavor: string;
  description: string;
  isBestSeller?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
