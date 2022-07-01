import classes from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';

const HeaderCartButton = () => {
  return (
    <>
      <button type="button" className={classes.button}>
        <div className={classes.icon}>
          <CartIcon />
        </div>
        Your cart
        <div className={classes.badge}>0</div>
      </button>
    </>
  );
};

export default HeaderCartButton;
