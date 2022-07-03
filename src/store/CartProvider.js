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
      updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
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

export const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCarthandler = (item) => {
    dispatchCartAction({ type: 'ADD', payload: item });
  };

  const removeItemFromCarthandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', payload: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCarthandler,
    removeItem: removeItemFromCarthandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};
