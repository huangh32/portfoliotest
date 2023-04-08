import React, { Fragment } from "react";
import classes from "./Summary.module.css";

const Summary = (props) => {
  return (
    <section className={classes.summary}>
      <h6>HELLO, THERE</h6>
      <h2>I'm Hannah Huang</h2>
      <p>
        Highly motivated and results-oriented software developer and data
        conversion specialist with a track record of delivering exceptional
        results.
      </p>
      <p>
        Proficient in front-end development and ETL with exceptional
        communication, interpersonal, problem-solving, analytical, agility, and
        time management skills.
      </p>
    </section>
  );
};

export default Summary;
