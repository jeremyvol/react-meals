import classes from './Card.module.css';

const Card = (props) => {
  // const classNames = `${classes.card} ${props.className}`;
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
