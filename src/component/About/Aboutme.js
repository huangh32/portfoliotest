import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

import classes from "./Aboutme.module.css";

const Aboutme = (props) => {
  return (
    <Fragment>
      <div className={classes.leftsidebargrid}>
        <header className={classes.header}>Header</header>
        <main className={classes.maincontent}>Main content</main>
        <section className={classes.leftsidebar}>Left sidebar</section>
        <footer className={classes.footer}>Footer</footer>
      </div>
    </Fragment>
  );
};
export default Aboutme;
