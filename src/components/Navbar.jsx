import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Leaf, Home } from 'lucide-react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const location = useLocation();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Leaf className="h-8 w-8 text-primary transition-transform group-hover:rotate-12" />
            <span className="font-serif text-2xl font-bold text-primary">
              Paradise Nursery
            </span>
          </Link>

          <div className="flex items-center gap-8">
            <Link
              to="/"
              className={`flex items-center gap-2 transition-colors ${
                isActive('/') ? 'nav-link-active' : 'nav-link'
              }`}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>

            <Link
              to="/products"
              className={`flex items-center gap-2 transition-colors ${
                isActive('/products') ? 'nav-link-active' : 'nav-link'
              }`}
            >
              <Leaf className="h-4 w-4" />
              <span>Plants</span>
            </Link>

            <Link
              to="/cart"
              className={`relative flex items-center gap-2 transition-colors ${
                isActive('/cart') ? 'nav-link-active' : 'nav-link'
              }`}
            >
              <div className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalQuantity > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-scale-in">
                    {totalQuantity}
                  </span>
                )}
              </div>
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
