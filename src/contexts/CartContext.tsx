import { createContext, useContext, useReducer, ReactNode } from 'react';
import { CartItem, Product, Customization } from '../types';

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalAmount: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { product: Product; customizations: Customization[] } }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' };

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalAmount: 0,
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, customizations } = action.payload;
      const existingItemIndex = state.items.findIndex(
        item => item.product.id === product.id &&
        JSON.stringify(item.selectedCustomizations) === JSON.stringify(customizations)
      );

      const customizationPrice = customizations.reduce((sum, cust) => sum + cust.price, 0);
      const totalPrice = product.price + customizationPrice;

      if (existingItemIndex >= 0) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += 1;
        updatedItems[existingItemIndex].totalPrice += totalPrice;

        return {
          ...state,
          items: updatedItems,
          totalItems: state.totalItems + 1,
          totalAmount: state.totalAmount + totalPrice,
        };
      } else {
        const newItem: CartItem = {
          product,
          quantity: 1,
          selectedCustomizations: customizations,
          totalPrice,
        };

        return {
          ...state,
          items: [...state.items, newItem],
          totalItems: state.totalItems + 1,
          totalAmount: state.totalAmount + totalPrice,
        };
      }
    }

    case 'REMOVE_ITEM': {
      const itemIndex = state.items.findIndex(item => item.product.id === action.payload);
      if (itemIndex >= 0) {
        const item = state.items[itemIndex];
        const updatedItems = state.items.filter((_, index) => index !== itemIndex);

        return {
          ...state,
          items: updatedItems,
          totalItems: state.totalItems - item.quantity,
          totalAmount: state.totalAmount - item.totalPrice,
        };
      }
      return state;
    }

    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      const itemIndex = state.items.findIndex(item => item.product.id === id);

      if (itemIndex >= 0 && quantity > 0) {
        const item = state.items[itemIndex];
        const quantityDiff = quantity - item.quantity;
        const updatedItems = [...state.items];
        updatedItems[itemIndex] = {
          ...item,
          quantity,
          totalPrice: item.totalPrice / item.quantity * quantity,
        };

        return {
          ...state,
          items: updatedItems,
          totalItems: state.totalItems + quantityDiff,
          totalAmount: state.totalAmount + (item.totalPrice / item.quantity * quantityDiff),
        };
      } else if (quantity === 0) {
        return cartReducer(state, { type: 'REMOVE_ITEM', payload: id });
      }
      return state;
    }

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
}

interface CartContextType {
  state: CartState;
  addItem: (product: Product, customizations: Customization[]) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (product: Product, customizations: Customization[]) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, customizations } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{ state, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
