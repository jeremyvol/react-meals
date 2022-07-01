import HeaderCartButton from '../Cart/HeaderCartButton';
import classes from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      {/* <div className={classes['main-image']}>
        <img src="../../shared/meals.jpg" alt="" />
      </div> */}
    </>
  );
};

export default Header;
