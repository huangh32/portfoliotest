import React, { Fragment } from "react";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>Welcome to my porfolio</h2>
      </header>
      <div className={classes["main-image"]}>
        <img
          alt="A table of food"
          src="https://images.freeimages.com/images/large-previews/01a/technology-background-1632715.jpg"
        />
      </div>
    </Fragment>
  );
};
export default Header;
