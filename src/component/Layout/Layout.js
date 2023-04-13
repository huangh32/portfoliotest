import { Fragment } from "react";
import MyPic from "./myProfile.jpg";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <Fragment>
      <div className={classes.leftsidebargrid}>
        <header className={classes.header}>
          <div className={classes.headerTwoColsGrid}>
            <div className={classes.headerrowLeft}>{props.title}</div>
            <div></div>
          </div>
        </header>
        <main className={classes.maincontent}>{props.children}</main>
        <section className={classes.leftsidebar}>
          {/* <img src={MyPic} className={classes.leftsidebarImg} alt="img" />
           */}
          {props.children}
        </section>
        <footer className={classes.footer}>Footer</footer>
      </div>
    </Fragment>
  );
};
export default Layout;
