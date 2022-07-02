import HeaderCartButton from '../../Cart/HeaderCartButton/HeaderCartButton';
import classes from './Header.module.css';

import mealsImage from '../../../assets/meals.jpg';

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
