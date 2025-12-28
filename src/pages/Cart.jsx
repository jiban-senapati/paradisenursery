import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingBag, ArrowLeft, CreditCard } from 'lucide-react';
import CartItemComponent from '@/components/CartItem';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

// Function to calculate the total amount of all items in the cart
const calculateTotalAmount = (items) => {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

const Cart = () => {
  const { items, totalQuantity } = useSelector((state) => state.cart);

  // Calculate total amount using the helper function
  const totalAmount = calculateTotalAmount(items);

  const handleCheckout = () => {
    toast({
      title: "Coming Soon!",
      description: "Checkout functionality will be available soon. Thank you for your patience!",
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center animate-fade-in">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="h-12 w-12 text-muted-foreground" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
            Your Cart is Empty
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Looks like you haven't added any plants to your cart yet. Start exploring our beautiful collection!
          </p>
          <Link to="/products">
            <Button size="lg" className="gap-2">
              <ArrowLeft className="h-5 w-5" />
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-serif text-4xl font-bold text-foreground mb-8 animate-fade-in">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <CartItemComponent key={item.id} item={item} />
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl border border-border p-6 sticky top-24 animate-slide-up">
              <h2 className="font-serif text-xl font-semibold text-foreground mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Items ({totalQuantity})</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span className="text-primary font-medium">Free</span>
                </div>
                <div className="h-px bg-border" />
                <div className="flex justify-between text-lg font-semibold text-foreground">
                  <span>Total</span>
                  <span className="text-primary">${totalAmount.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  onClick={handleCheckout}
                  className="w-full gap-2"
                  size="lg"
                >
                  <CreditCard className="h-5 w-5" />
                  Checkout
                </Button>
                
                <Link to="/products" className="block">
                  <Button 
                    variant="outline" 
                    className="w-full gap-2"
                    size="lg"
                  >
                    <ArrowLeft className="h-5 w-5" />
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
