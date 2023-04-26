import { Fragment } from "react";
import classes from "./Experience.module.css";
import Container from "react-bootstrap/Container";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { PersonWorkspace, Book } from "react-bootstrap-icons";
import { Progress, Col, Row } from "antd";

import "react-vertical-timeline-component/style.min.css";

const content = [
  {
    // icon: <RocketTakeoff />,
    header: "Development",
    subtitle: "HTML5, CSS, JavaScript, Python, C#",
    text: "Bootstrap, Chart.js, Visual Studio 2018, Postman,Material UI, Git/ GitHub, Microsoft Office, PyCharm,Eclipse",
  },
  {
    // icon: <Database />,
    header: "Database",
    subtitle: "  SQL, MySQL, SQL Server, MongoDB",
    text: "Bootstrap, Chart.js, Visual Studio 2018, Postman,Material UI, Git/ GitHub, Microsoft Office, PyCharm,Eclipse",
  },
  {
    // icon: <Tools />,
    header: " Tools & Framework",
    subtitle:
      "React JS, Figma, AdobeXD, SFTP, Linux, Visual Studio,Pycharm, TFS, Git, Bitbucket",
    text: "Bootstrap, Chart.js, Visual Studio 2018, Postman,Material UI, Git/ GitHub, Microsoft Office, PyCharm,Eclipse",
  },
  {
    // icon: <Window />,
    header: "Assistant",
    subtitle: "   JIRA, Confluence, Microsoft Teams",
    text: "Bootstrap, Chart.js, Visual Studio 2018, Postman,Material UI, Git/ GitHub, Microsoft Office, PyCharm,Eclipse",
  },
];

const Experience = (props) => {
  return (
    <Fragment>
      <div className={classes.leftsidebargrid}>
        <header className={classes.header}>
          <div className={classes.headerTwoColsGrid}>
            <div className={classes.headerrowLeft}>Experience</div>
            <div></div>
          </div>
        </header>
        <main className={classes.maincontent}>
          <div>
            <Container className={classes.mainContainer}>
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "#e2e0ee",
                    color: "#3a332f",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  #e2e0ee",
                  }}
                  date="2021 - 2022"
                  iconStyle={{ background: "#b6afcf", color: "#fff" }}
                  icon={<PersonWorkspace />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Software Developer
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">MDLAND</h4>
                  <h5 className="vertical-timeline-element-subtitle">
                    New York/ Toronto (Remote)
                  </h5>
                  <p>
                    <ul>
                      <li>
                        Developed Web applications using ReactJS and NodeJS to
                        work with REST APIs using MongoDB and MySQL as
                        databases.
                      </li>
                      <li>
                        Utilized Javascript(ES6), JQuery, HTML5, CSS3, Bootstrap
                        to creating modular, responsive templates based on Adobe
                        XD UI design.
                      </li>
                      <li>
                        Utilized Scrum/Agile methodologies to gather
                        requirements and analysis from company teams and
                        clients, resulting in a 30% increase in development
                        efficiency.
                      </li>
                      <li>
                        Increased data transfer efficiency by 40% by
                        implementing cloud technology, using SFTP and Amazon AWS
                        S3 to transfer data sources with clients.
                      </li>
                      <li>
                        Collaborated with third-party developers and clients,
                        resulting positive feedback and great satisfaction rate.
                      </li>
                    </ul>
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="2020-2021"
                  contentStyle={{
                    background: "#e2e0ee",
                    color: "#3a332f",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  #e2e0ee",
                  }}
                  iconStyle={{ background: "#b6afcf", color: "#fff" }}
                  icon={<PersonWorkspace />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Frontend Developer
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Local & Yonder
                  </h4>
                  <h5 className="vertical-timeline-element-subtitle">
                    New York (Remote)
                  </h5>
                  <p>
                    <ul>
                      <li>
                        Upgraded company project by remodeling and adding new
                        features at initial levels, resulting in a 20% increase
                        in user engagement.
                      </li>
                      <li>
                        Built stable and maintainable codebases in React JS
                        (including Context API and Hooks) using VS Code Editor.
                      </li>
                      <li>
                        Utilized Git, Bitbucket, GitHub, and GitLab to version
                        projects, also worked with JIRA, Confluence, and AWS
                        services resulting in a 25% improvement in project
                        management efficiency.
                      </li>
                    </ul>
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "#e2e0ee",
                    color: "#3a332f",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  #e2e0ee",
                  }}
                  date="2020- 2020"
                  iconStyle={{ background: "#b6afcf", color: "#fff" }}
                  icon={<PersonWorkspace />}
                >
                  <h3 className="vertical-timeline-element-title">
                    SAP Analyst
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Inossem
                  </h4>
                  <h5 className="vertical-timeline-element-subtitle">
                    Quebec (Remote)
                  </h5>
                  <p>Resolve Supply Chain issue, manage CRM system</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "#e2e0ee",
                    color: "#3a332f",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  #e2e0ee",
                  }}
                  date="2017 - 2018"
                  iconStyle={{ background: "#b6afcf", color: "#fff" }}
                  icon={<PersonWorkspace />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Application Developer
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    CIBC (Canadian Imperial Bank of Commerce)
                  </h4>
                  <h5 className="vertical-timeline-element-subtitle">
                    Toronto, ON
                  </h5>
                  <p>
                    <ul>
                      <li>
                        Created automated scripts for bug detection for CIBC and
                        Simplii Web & Mobile application
                      </li>
                      <li>
                        Developed automated scripts using VBScript in HP QTP for
                        4+ web application.
                      </li>
                      <li>
                        Found more than 3 big defects and developed over 25% of
                        old test cases effectively.
                      </li>
                      <li>
                        Collaborated with teammates to analyze how this new data
                        transform method would influence the current system,
                        reduced system downtime during data updating by 27%.
                      </li>
                    </ul>
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  contentStyle={{
                    background: "#e0c9dd",
                    color: "#3a332f",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  #e0c9dd",
                  }}
                  date="2013 - 2019"
                  iconStyle={{ background: "#e0c9dd", color: "#fff" }}
                  icon={<Book />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Bachelor of Electrical and Computer Engineering COOP
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    McMaster University, Hamilton
                  </h4>
                  <p>Minored in Math</p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </Container>
          </div>
        </main>
        <section className={classes.leftsidebar}>
          <Row>
            <h3>Coding Skills</h3>
          </Row>
          <Row>
            <Col span={6} push={18}>
              React JS
            </Col>
            <Col span={18} pull={6}>
              <Progress
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068",
                }}
                percent={85}
                status="active"
              />
            </Col>
          </Row>
          <Row>
            <Col span={6} push={18}>
              Javascript
            </Col>
            <Col span={18} pull={6}>
              <Progress
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068",
                }}
                percent={80}
                status="active"
              />
            </Col>
          </Row>
          <Row>
            <Col span={6} push={18}>
              SQL/ T-SQL
            </Col>
            <Col span={18} pull={6}>
              <Progress
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068",
                }}
                percent={99}
                status="active"
              />
            </Col>
          </Row>
          <Row>
            <Col span={6} push={18}>
              Python
            </Col>
            <Col span={18} pull={6}>
              <Progress
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068",
                }}
                percent={80}
                status="active"
              />
            </Col>
          </Row>
          <Row>
            <Col span={6} push={18}>
              HTML5/CSS3
            </Col>
            <Col span={18} pull={6}>
              <Progress
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068",
                }}
                percent={99}
                status="active"
              />
            </Col>
          </Row>
          <Row>
            <h3>Tools </h3>
          </Row>
          <Row>
            <Col span={6} push={18}>
              AWS S3
            </Col>
            <Col span={18} pull={6}>
              <Progress
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068",
                }}
                percent={85}
                status="active"
              />
            </Col>
          </Row>
          <Row>
            <Col span={6} push={18}>
              SFTP
            </Col>
            <Col span={18} pull={6}>
              <Progress
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068",
                }}
                percent={85}
                status="active"
              />
            </Col>
          </Row>
          <Row>
            <Col span={6} push={18}>
              Git/ Bitbucket
            </Col>
            <Col span={18} pull={6}>
              <Progress
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068",
                }}
                percent={99}
                status="active"
              />
            </Col>
          </Row>
          <Row>
            <Col span={6} push={18}>
              Postman
            </Col>
            <Col span={18} pull={6}>
              <Progress
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068",
                }}
                percent={80}
                status="active"
              />
            </Col>
          </Row>
          <Row>
            <Col span={6} push={18}>
              Agile/ Scrum
            </Col>
            <Col span={18} pull={6}>
              <Progress
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068",
                }}
                percent={99}
                status="active"
              />
            </Col>
          </Row>
        </section>
        {/* <div>
            <h2 className={classes.mainh2}>I'm Hannah Huang</h2>
            <p className={classes.mainp1}>
              A highly motivated, results-oriented, innovative and professional
              developer in software development and data conversion. Proficient
              in Front-end development and ETL. Possess exceptional
              communication, interpersonal, problem solving, analytical, agility
              and time management skills.
            </p>
          </div> */}
        {/* <footer className={classes.footer}>Footer</footer> */}
      </div>
    </Fragment>
  );
};

export default Experience;
