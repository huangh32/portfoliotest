import { Fragment } from "react";
import MyPic from "./myProfile.jpg";
import classes from "./Aboutme.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
import Item from "./UI/Item";
import { RocketTakeoff, Database, Tools, Window } from "react-bootstrap-icons";

const content = [
  {
    icon: <RocketTakeoff />,
    header: "Development",
    subtitle: "HTML5, CSS, JavaScript, Python, C#",
    text: "Bootstrap, Chart.js, Visual Studio 2018, Postman,Material UI, Git/ GitHub, Microsoft Office, PyCharm,Eclipse",
  },
  {
    icon: <Database />,
    header: "Database",
    subtitle: "  SQL, MySQL, SQL Server, MongoDB",
    text: "Bootstrap, Chart.js, Visual Studio 2018, Postman,Material UI, Git/ GitHub, Microsoft Office, PyCharm,Eclipse",
  },
  {
    icon: <Tools />,
    header: " Tools & Framework",
    subtitle:
      "React JS, Figma, AdobeXD, SFTP, Linux, Visual Studio,Pycharm, TFS, Git, Bitbucket",
    text: "Bootstrap, Chart.js, Visual Studio 2018, Postman,Material UI, Git/ GitHub, Microsoft Office, PyCharm,Eclipse",
  },
  {
    icon: <Window />,
    header: "Assistant",
    subtitle: "   JIRA, Confluence, Microsoft Teams",
    text: "Bootstrap, Chart.js, Visual Studio 2018, Postman,Material UI, Git/ GitHub, Microsoft Office, PyCharm,Eclipse",
  },
];

const Aboutme = (props) => {
  const Itemlist = content.map((i) => (
    <div className={classes.mainContainerrowCol}>
      <Item
        icon={i.icon}
        header={i.header}
        subtitle={i.subtitle}
        text={i.text}
        className={classes.item}
      />
    </div>
  ));
  return (
    <Fragment>
      <div className={classes.leftsidebargrid}>
        <header className={classes.header}>
          <div className={classes.headerTwoColsGrid}>
            <div className={classes.headerrowLeft}>About</div>
            <div></div>
          </div>
        </header>
        <main className={classes.maincontent}>
          <div>
            <h2 className={classes.mainh2}>I'm Hannah Huang</h2>
            <p className={classes.mainp1}>
              A highly motivated, results-oriented, innovative and professional
              developer in software development and data conversion. Proficient
              in Front-end development and ETL. Possess exceptional
              communication, interpersonal, problem solving, analytical, agility
              and time management skills.
            </p>
          </div>
          <div>
            <Container className={classes.mainContainer}>
              <Row className={classes.mainContainerrow}>{Itemlist}</Row>
            </Container>
          </div>
        </main>
        <section className={classes.leftsidebar}>
          <img src={MyPic} className={classes.leftsidebarImg} alt="img" />
        </section>
        {/* <footer className={classes.footer}>Footer</footer> */}
      </div>
    </Fragment>
  );
};
export default Aboutme;
