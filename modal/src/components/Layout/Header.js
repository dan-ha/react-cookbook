import React from "react";

import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpeg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}>Card</HeaderCartButton>
      </header>
    </React.Fragment>
  );
};

export default Header;
