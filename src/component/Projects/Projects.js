import { Fragment } from "react";

import classes from "./Projects.module.css";
import Container from "react-bootstrap/Container";
import { Row, Col, Card, Avatar } from "antd";
import { PlaySquareOutlined, GithubOutlined } from "@ant-design/icons";
const { Meta } = Card;
import iclinic from "./UI/iclinic.png";
import { RocketTakeoff, Database, Tools, Window } from "react-bootstrap-icons";
import { icons } from "antd/es/image/PreviewGroup";

// const content = [
//   {
//     icon: <RocketTakeoff />,
//     header: "Development",
//     subtitle: "HTML5, CSS, JavaScript, Python, C#",
//     text: "Bootstrap, Chart.js, Visual Studio 2018, Postman,Material UI, Git/ GitHub, Microsoft Office, PyCharm,Eclipse",
//   },
//   {
//     icon: <Database />,
//     header: "Database",
//     subtitle: "  SQL, MySQL, SQL Server, MongoDB",
//     text: "Bootstrap, Chart.js, Visual Studio 2018, Postman,Material UI, Git/ GitHub, Microsoft Office, PyCharm,Eclipse",
//   },
//   {
//     icon: <Tools />,
//     header: " Tools & Framework",
//     subtitle:
//       "React JS, Figma, AdobeXD, SFTP, Linux, Visual Studio,Pycharm, TFS, Git, Bitbucket",
//     text: "Bootstrap, Chart.js, Visual Studio 2018, Postman,Material UI, Git/ GitHub, Microsoft Office, PyCharm,Eclipse",
//   },
//   {
//     icon: <Window />,
//     header: "Assistant",
//     subtitle: "   JIRA, Confluence, Microsoft Teams",
//     text: "Bootstrap, Chart.js, Visual Studio 2018, Postman,Material UI, Git/ GitHub, Microsoft Office, PyCharm,Eclipse",
//   },
// ];

const Projects = (props) => {
  //   const firstRow = content.slice(0, 2).map((i) => (
  //     <div className={classes.mainContainerrowCol}>
  //       {/* <Item
  //         icon={i.icon}
  //         header={i.header}
  //         subtitle={i.subtitle}
  //         text={i.text}
  //         className={classes.item}
  //       /> */}
  //     </div>
  //   ));

  //   const secondRow = content.slice(2).map((i) => (
  //     <div className={classes.mainContainerrowCol2}>
  //       {/* <Item
  //         icon={i.icon}
  //         header={i.header}
  //         subtitle={i.subtitle}
  //         text={i.text}
  //         className={classes.item}
  //       /> */}
  //     </div>
  //   ));

  return (
    <Fragment>
      <div className={classes.leftsidebargrid}>
        <header className={classes.header}>
          <div className={classes.headerTwoColsGrid}>
            <div className={classes.headerrowLeft}>Projects</div>
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
                <Col
                  xs={{
                    span: 5,
                    offset: 1,
                  }}
                  lg={{
                    span: 6,
                    offset: 2,
                  }}
                >
                  <Card
                    style={{
                      width: 300,
                    }}
                    cover={<img alt="example" src={iclinic} />}
                    actions={[<PlaySquareOutlined />]}
                  >
                    <Meta
                      avatar={
                        <Avatar src="https://avatars.githubusercontent.com/u/28953838?v=4" />
                      }
                      title="Iclinic Module Upgration"
                      description="Developed new modules and functionalities for the MDLand Electronic Medical Record that allow users to upload and remove PDFs and images more easily."
                    />
                  </Card>
                </Col>
                <Col
                  xs={{
                    span: 11,
                    offset: 1,
                  }}
                  lg={{
                    span: 6,
                    offset: 2,
                  }}
                >
                  <Card
                    style={{
                      width: 300,
                    }}
                    cover={
                      <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      />
                    }
                    actions={[<PlaySquareOutlined />]}
                  >
                    <Meta
                      avatar={
                        <Avatar src="https://avatars.githubusercontent.com/u/28953838?v=4" />
                      }
                      title="Card title"
                      description="This is the description"
                    />
                  </Card>
                </Col>
                <Col
                  xs={{
                    span: 5,
                    offset: 1,
                  }}
                  lg={{
                    span: 6,
                    offset: 2,
                  }}
                >
                  <Card
                    style={{
                      width: 300,
                    }}
                    cover={
                      <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      />
                    }
                    actions={[<PlaySquareOutlined />]}
                  >
                    <Meta
                      avatar={
                        <Avatar src="https://avatars.githubusercontent.com/u/28953838?v=4" />
                      }
                      title="Card title"
                      description="This is the description"
                    />
                  </Card>
                </Col>
              </Row>
              <Row className={classes.mainContainerrow}>
                <Col
                  xs={{
                    span: 5,
                    offset: 1,
                  }}
                  lg={{
                    span: 6,
                    offset: 2,
                  }}
                >
                  <Card
                    style={{
                      width: 300,
                    }}
                    cover={
                      <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      />
                    }
                    actions={[<PlaySquareOutlined />]}
                  >
                    <Meta
                      avatar={
                        <Avatar src="https://avatars.githubusercontent.com/u/28953838?v=4" />
                      }
                      title="Card title"
                      description="This is the description"
                    />
                  </Card>
                </Col>
                <Col
                  xs={{
                    span: 11,
                    offset: 1,
                  }}
                  lg={{
                    span: 6,
                    offset: 2,
                  }}
                >
                  <Card
                    style={{
                      width: 300,
                    }}
                    cover={
                      <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      />
                    }
                    actions={[<PlaySquareOutlined />]}
                  >
                    <Meta
                      avatar={
                        <Avatar src="https://avatars.githubusercontent.com/u/28953838?v=4" />
                      }
                      title="Card title"
                      description="This is the description"
                    />
                  </Card>
                </Col>
                <Col
                  xs={{
                    span: 5,
                    offset: 1,
                  }}
                  lg={{
                    span: 6,
                    offset: 2,
                  }}
                >
                  <Card
                    style={{
                      width: 300,
                    }}
                    cover={
                      <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      />
                    }
                    actions={[<PlaySquareOutlined />]}
                  >
                    <Meta
                      avatar={
                        <Avatar src="https://avatars.githubusercontent.com/u/28953838?v=4" />
                      }
                      title="Card title"
                      description="This is the description"
                    />
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </main>
        <section className={classes.leftsidebar}></section>
        {/* <footer className={classes.footer}>Footer</footer> */}
      </div>
    </Fragment>
  );
};

export default Projects;
