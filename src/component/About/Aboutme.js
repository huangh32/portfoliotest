import { Fragment } from "react";
import MyPic from "./myProfile.jpg";
import classes from "./Aboutme.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { RocketTakeoff, Database, Tools, Window } from "react-bootstrap-icons";

const Aboutme = (props) => {
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
              <Row className={classes.mainContainerrow}>
                <Col xs={6} className={classes.mainContainerrowCol}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Header as="h3">
                        <RocketTakeoff />
                        Development
                      </Card.Header>
                      <Card.Subtitle className="mb-2 text-muted">
                        HTML5, CSS, JavaScript, Python, C#
                      </Card.Subtitle>
                      <Card.Text>
                        Bootstrap, Chart.js, Visual Studio 2018, Postman,
                        Material UI, Git/ GitHub, Microsoft Office, PyCharm,
                        Eclipse
                      </Card.Text>
                      {/* <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link> */}
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={6} className={classes.mainContainerrowCol}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Header as="h3">
                        <Database />
                        Database
                      </Card.Header>
                      <Card.Subtitle className="mb-2 text-muted">
                        SQL, MySQL, SQL Server, MongoDB
                      </Card.Subtitle>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      {/* <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link> */}
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className={classes.mainContainerrow}>
                <Col className={classes.mainContainerrowCol}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Header as="h3">
                        <Tools />
                        Tools & Framework
                      </Card.Header>
                      <Card.Subtitle className="mb-2 text-muted">
                        React JS, Figma, AdobeXD, SFTP, Linux, Visual Studio,
                        Pycharm, TFS, Git, Bitbucket
                      </Card.Subtitle>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      {/* <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link> */}
                    </Card.Body>
                  </Card>
                </Col>
                <Col className={classes.mainContainerrowCol}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Header as="h3">
                        <Window />
                        Assistant
                      </Card.Header>
                      <Card.Subtitle className="mb-2 text-muted">
                        JIRA, Confluence, Microsoft Teams
                      </Card.Subtitle>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      {/* <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link> */}
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
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
