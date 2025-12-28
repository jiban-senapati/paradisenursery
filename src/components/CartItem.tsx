import { useDispatch } from 'react-redux';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { increaseQuantity, decreaseQuantity, removeFromCart, CartItem as CartItemType } from '@/store/CartSlice';
import { Button } from '@/components/ui/button';

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-4 p-4 bg-card rounded-xl border border-border animate-fade-in">
      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-lg font-semibold text-foreground">
            {item.name}
          </h3>
          <p className="text-muted-foreground text-sm">
            ${item.price.toFixed(2)} each
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => dispatch(decreaseQuantity(item.id))}
          >
            <Minus className="h-4 w-4" />
          </Button>
          
          <span className="font-semibold text-foreground w-8 text-center">
            {item.quantity}
          </span>
          
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => dispatch(increaseQuantity(item.id))}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="flex flex-col items-end justify-between">
        <Button
          variant="ghost"
          size="icon"
          className="text-destructive hover:text-destructive hover:bg-destructive/10"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          <Trash2 className="h-5 w-5" />
        </Button>
        
        <p className="font-serif text-lg font-bold text-primary">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
