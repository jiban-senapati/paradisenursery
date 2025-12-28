import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

// Helper function to calculate total amount from items
const calculateTotalAmount = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

// Helper function to calculate total quantity from items
const calculateTotalQuantity = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + item.quantity, 0);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // addItem: Adds a new item to the cart or increases quantity if already exists
    addItem: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      
      state.totalQuantity = calculateTotalQuantity(state.items);
      state.totalAmount = calculateTotalAmount(state.items);
    },
    
    // removeItem: Removes an item completely from the cart
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.totalQuantity = calculateTotalQuantity(state.items);
      state.totalAmount = calculateTotalAmount(state.items);
    },
    
    // updateQuantity: Updates the quantity of a specific item
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      
      if (item) {
        if (action.payload.quantity <= 0) {
          state.items = state.items.filter(i => i.id !== action.payload.id);
        } else {
          item.quantity = action.payload.quantity;
        }
        state.totalQuantity = calculateTotalQuantity(state.items);
        state.totalAmount = calculateTotalAmount(state.items);
      }
    },
    
    // clearCart: Removes all items from the cart
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

// Export actions with required naming convention
export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;

// Also export aliases for backwards compatibility
export const addToCart = addItem;
export const removeFromCart = removeItem;
export default cartSlice.reducer;
