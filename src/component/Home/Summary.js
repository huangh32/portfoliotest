import React, { Fragment } from "react";
import { TypeAnimation } from "react-type-animation";
import classes from "./Summary.module.css";
import Button from "@mui/material/Button";

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
        Proficient in{" "}
        <TypeAnimation
          sequence={[
            "Frontend Development",
            500,
            "ETL", //  Continuing previous Text
            500,
            "Data Conversion",
            500,
          ]}
          style={{ fontSize: "13pt" }}
          repeat={Infinity}
        />
      </p>
      {/* <Button><a className= {classes.button} href="src\component\Home\Hannah_Huang_Resume.pdf"download="Hannah_Huang_CV.pdf" >Download CV</a></Button> */}
    </section>
  );
};

export default Summary;
