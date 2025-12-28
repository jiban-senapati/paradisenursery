import { useDispatch, useSelector } from 'react-redux';
import { ShoppingCart, Check } from 'lucide-react';
import { addItem } from '@/store/CartSlice';
import { Button } from '@/components/ui/button';

const ProductCard = ({ plant }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = cartItems.some(item => item.id === plant.id);

  const handleAddToCart = () => {
    if (!isInCart) {
      dispatch(addItem({
        id: plant.id,
        name: plant.name,
        price: plant.price,
        image: plant.image,
        category: plant.category,
      }));
    }
  };

  return (
    <div className="card-plant flex flex-col animate-fade-in">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          ${plant.price}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
          {plant.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 flex-1">
          {plant.description}
        </p>
        
        <Button
          onClick={handleAddToCart}
          disabled={isInCart}
          variant={isInCart ? "secondary" : "default"}
          className="w-full gap-2"
        >
          {isInCart ? (
            <>
              <Check className="h-4 w-4" />
              Added to Cart
            </>
          ) : (
            <>
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
