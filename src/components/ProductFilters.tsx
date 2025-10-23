import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface ProductFiltersProps {
  selectedCategory: string;
  selectedFlavor: string;
  searchQuery: string;
  onCategoryChange: (category: string) => void;
  onFlavorChange: (flavor: string) => void;
  onSearchChange: (query: string) => void;
}

const categories = [
  { value: 'todos', label: 'Todos' },
  { value: 'com-cobertura', label: 'Com Cobertura' },
  { value: 'sem-cobertura', label: 'Sem Cobertura' },
  { value: 'bolo-de-pote', label: 'Bolo de Pote' },
];

const flavors = [
  { value: 'todos', label: 'Todos os Sabores' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'cenoura', label: 'Cenoura' },
  { value: 'red-velvet', label: 'Red Velvet' },
  { value: 'limao', label: 'Limão' },
  { value: 'Fubá ', label: 'Fubá ' },
  { value: 'coco', label: 'Coco' },
  { value: 'prestigio-ninho', label: 'Prestígio com Ninho' },
  { value: 'abacaxi', label: 'Abacaxi' },
];

export const ProductFilters = ({
  selectedCategory,
  selectedFlavor,
  searchQuery,
  onCategoryChange,
  onFlavorChange,
  onSearchChange,
}: ProductFiltersProps) => {
  return (
    <div className="space-y-6 mb-8">
      {/* Search */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
        <Input
          type="text"
          placeholder="Buscar bolos..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category.value}
            variant={selectedCategory === category.value ? 'default' : 'outline'}
            onClick={() => onCategoryChange(category.value)}
            className={selectedCategory === category.value ? 'bg-primary' : ''}
          >
            {category.label}
          </Button>
        ))}
      </div>

      {/* Flavor Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        {flavors.map((flavor) => (
          <Button
            key={flavor.value}
            variant={selectedFlavor === flavor.value ? 'default' : 'outline'}
            size="sm"
            onClick={() => onFlavorChange(flavor.value)}
            className={selectedFlavor === flavor.value ? 'bg-secondary' : ''}
          >
            {flavor.label}
          </Button>
        ))}
      </div>
    </div>
  );
};
