import { Product } from '@/types/product';
import chocolateCake from '@/assets/chocolate-cake.png';
import carrotCake from '@/assets/carrot-cake.png';
import redVelvetCake from '@/assets/red-velvet-cake.png';
import lemonCake from '@/assets/lemon-cake.png';
import strawberryCake from '@/assets/strawberry-cake.png';
import coconutCake from '@/assets/coconut-cake.png';
import prestigioNinhoPote from '@/assets/prestigio-ninho-pote1.jpeg';
import chocolatePote from '@/assets/chocolate-pote1.jpeg';
import abacaxiPote from '@/assets/abacaxi-pote1.jpeg';
import ninhomorango from '@/assets/ninho-morango.jpeg';


export const products: Product[] = [
  {
    id: '1',
    name: 'Bolo de Chocolate',
    price: 45.00,
    image: chocolateCake,
    category: 'com-cobertura',
    flavor: 'chocolate',
    description: 'Delicioso bolo de chocolate com cobertura de ganache. Massa fofinha e sabor intenso.',
    isBestSeller: true,
  },
  {
    id: '2',
    name: 'Bolo de Cenoura',
    price: 40.00,
    image: carrotCake,
    category: 'com-cobertura',
    flavor: 'cenoura',
    description: 'Tradicional bolo de cenoura com cobertura cremosa de chocolate. Receita caseira autêntica.',
    isBestSeller: true,
  },
  {
    id: '3',
    name: 'Red Velvet',
    price: 35.00,
    image: redVelvetCake,
    category: 'com-cobertura',
    flavor: 'red-velvet',
    description: 'Clássico red velvet com cream cheese. Sabor suave e textura aveludada.',
  },
  {
    id: '4',
    name: 'Bolo de Limão',
    price: 40.00,
    image: lemonCake,
    category: 'com-cobertura',
    flavor: 'limao',
    description: 'Refrescante bolo de limão com cobertura branca. Perfeito para qualquer ocasião.',
  },
  {
    id: '5',
    name: 'Bolo de Fubá',
    price: 30.00,
    image: strawberryCake,
    category: 'sem-cobertura',
    flavor: 'Fubá ',
    description: 'Bolo de Fubá. Delicado e saboroso.',
  },
  {
    id: '6',
    name: 'Bolo de Coco',
    price: 35.00,
    image: coconutCake,
    category: 'com-cobertura',
    flavor: 'coco',
    description: 'Bolo fofinho de coco com cobertura coberta de flocos. Sabor tropical irresistível.',
  },
  {
    id: '7',
    name: 'Bolo de Pote Prestígio com Ninho',
    price: 13.00,
    image: prestigioNinhoPote,
    category: 'bolo-de-pote',
    flavor: 'prestigio-ninho',
    description: 'Camadas de chocolate com creme de coco e Ninho. Perfeito para levar e saborear.',
    isBestSeller: true,
  },
  {
    id: '8',
    name: 'Bolo de Pote Chocolate',
    price: 13.00,
    image: chocolatePote,
    category: 'bolo-de-pote',
    flavor: 'chocolate',
    description: 'Delicioso bolo de chocolate em camadas com mousse. Praticidade e sabor em cada colherada.',
  },
  {
    id: '9',
    name: 'Bolo de Pote Abacaxi',
    price: 13.00,
    image: abacaxiPote,
    category: 'bolo-de-pote',
    flavor: 'abacaxi',
    description: 'Bolo de baunilha com creme de abacaxi e pedaços da fruta. Refrescante e tropical.',
  },
  {
    id: '10',
    name: 'Bolo de Pote Ninho com Morango',
    price: 13.00,
    image: ninhomorango,
    category: 'bolo-de-pote',
    flavor: 'ninho-morango',
    description: 'Delicioso bolo de pote com creme de leite Ninho e calda de morango. Perfeito para sobremesas individuais.',
  }
];
