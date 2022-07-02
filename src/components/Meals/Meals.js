import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';
import classes from './MealsSummary.module.css';

const Meals = () => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
};

export default Meals;
