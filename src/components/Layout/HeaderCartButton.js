import { useContext } from 'react';
import CartContext from '../../store/cart-context';

import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((current, item) => current + item.amount, 0);

  return (
    <>
      <button type="button" className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
