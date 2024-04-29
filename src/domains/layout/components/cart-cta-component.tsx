import { ShoppingBagIcon } from 'lucide-react';

export function CartCtaComponent() {
  return (
    <a href='' className='flex items-center gap-2 pl-3 pr-3 lg:pr-0'>
      <ShoppingBagIcon /> <span>Cart</span>
    </a>
  );
}