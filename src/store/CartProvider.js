import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  let updatedItems = [];
  let updatedTotalAmount;
  switch (action.type) {
    case 'ADD':
      updatedItems = [...state.items, action.payload];
      updatedTotalAmount = state.totalAmount + action.payload.price * action.payload.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

    case 'REMOVE':
      updatedItems = state.items.filter((item) => item.id !== action.payload);
      updatedTotalAmount = state.totalAmount - state.items.find((item) => item.id === action.payload).price;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

    default:
      return defaultCartState;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', payload: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', payload: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
