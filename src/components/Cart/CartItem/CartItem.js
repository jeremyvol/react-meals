import classes from './CartItem.module.css';

const CartItem = (props) => {
  return (
    <div className={classes['cart-item']}>
      <h2>{props.title}</h2>
      <div className={classes.summary}>{props.summary}</div>
      <div className={classes.price}>{props.price}</div>
    </div>
  );
};

export default CartItem;
