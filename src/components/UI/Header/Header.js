import HeaderCartButton from '../../Cart/HeaderCartButton/HeaderCartButton';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>ReactMeals</h1>
      <HeaderCartButton />
    </header>
  );
};

export default Header;
