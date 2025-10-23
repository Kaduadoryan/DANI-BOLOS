import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CartItem } from '@/types/product';

const checkoutSchema = z.object({
  fullName: z.string()
    .trim()
    .min(3, 'Nome deve ter pelo menos 3 caracteres')
    .max(100, 'Nome muito longo'),
  address: z.string()
    .trim()
    .min(5, 'Endereço deve ter pelo menos 5 caracteres')
    .max(200, 'Endereço muito longo'),
  neighborhood: z.string()
    .trim()
    .min(3, 'Bairro deve ter pelo menos 3 caracteres')
    .max(100, 'Bairro muito longo'),
  number: z.string()
    .trim()
    .min(1, 'Número é obrigatório')
    .max(10, 'Número muito longo'),
  cep: z.string()
    .trim()
    .regex(/^\d{5}-?\d{3}$/, 'CEP inválido (formato: 00000-000)')
    .transform(val => val.replace(/\D/g, '').replace(/(\d{5})(\d{3})/, '$1-$2')),
  observations: z.string()
    .trim()
    .max(500, 'Observações muito longas')
    .optional(),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

interface CheckoutFormProps {
  items: CartItem[];
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutForm = ({ items, isOpen, onClose }: CheckoutFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fullName: '',
      address: '',
      neighborhood: '',
      number: '',
      cep: '',
      observations: '',
    },
  });

  const onSubmit = (data: CheckoutFormData) => {
    setIsSubmitting(true);

    // Generate order items list
    const itemsList = items
      .map((item) => `• ${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}`)
      .join('\n');
    
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // Build WhatsApp message with delivery info
    const message = `*🍰 NOVO PEDIDO - DANI BOLOS*\n\n` +
      `*ITENS DO PEDIDO:*\n${itemsList}\n\n` +
      `*TOTAL: R$ ${total.toFixed(2).replace('.', ',')}*\n\n` +
      `*DADOS DE ENTREGA:*\n` +
      `📝 Nome: ${data.fullName}\n` +
      `📍 Endereço: ${data.address}, Nº ${data.number}\n` +
      `🏘️ Bairro: ${data.neighborhood}\n` +
      `📮 CEP: ${data.cep}` +
      (data.observations ? `\n\n*OBSERVAÇÕES:*\n${data.observations}` : '');

    const whatsappUrl = `https://wa.me/5567984159574?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitting(false);
    form.reset();
    onClose();
  };

  const handleClose = () => {
    form.reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display">Dados de Entrega</DialogTitle>
          <DialogDescription>
            Preencha seus dados para finalizar o pedido
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome Completo *</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu nome completo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Endereço *</FormLabel>
                  <FormControl>
                    <Input placeholder="Rua, Avenida..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Número *</FormLabel>
                    <FormControl>
                      <Input placeholder="123" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cep"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CEP *</FormLabel>
                    <FormControl>
                      <Input placeholder="00000-000" {...field} maxLength={9} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="neighborhood"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bairro *</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome do bairro" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="observations"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Observações</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Alguma observação sobre o pedido? (opcional)"
                      className="resize-none"
                      rows={3}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={handleClose}
                disabled={isSubmitting}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-success hover:bg-success/90 text-success-foreground"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Finalizar no WhatsApp'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
