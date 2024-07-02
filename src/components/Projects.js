/** @format */

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./Projects.css";

export const Projects = () => {
  const projects = [
    {
      title: "Employee Transport Management App",
      description: "Design & Development",
      imgUrl: projImg1,
      link: "https://github.com/kavindu-98/MobileProject.git",
    },
    {
      title: "Mobile Travel & Hotel Booking App",
      description: "Design & Development",
      imgUrl: projImg2,
      link: "https://github.com/kavindu-98/Travel_App.git",
    },
    {
      title: "Student Learning Quiz App",
      description: "Front-end Development",
      imgUrl: projImg3,
      link: "https://github.com/kavindu-98/learnr-mobile.git",
    },
    {
      title: "Student Learning Quiz App",
      description: "Front-end Development",
      imgUrl: projImg3,
      link: "https://github.com/kavindu-98/learnr-mobile.git",
    },
  ];

  const webprojects = [
    {
      title: "Employee Transport Management Web Application",
      description: "Design & Development",
      imgUrl: projImg4,
      link: "https://www.behance.net/gallery/149357783/My-project-Admin-Dashboard",
    },
    {
      title: "Lionsden Gym Management Web Application",
      description: "Design & Development",
      imgUrl: projImg5,
      link: "https://github.com/kavindu-98/lionsden.git",
    },
    {
      title: "Samadhi Children Home Management Web Application",
      description: "Design & Development",
      imgUrl: projImg6,
      link: "https://github.com/kavindu-98/samadhi.git",
    },
    {
      title: "Samadhi Children Home Management Web Application",
      description: "Design & Development",
      imgUrl: projImg6,
      link: "https://github.com/kavindu-98/samadhi.git",
    },
  ];
  const designprojects = [
    {
      title: "Freelance Flyer Design",
      description: "Flyer Design",
      imgUrl: projImg7,
      link: "https://www.behance.net/gallery/138907569/Graphics",
    },
    {
      title: "Digital Marketing Flyer",
      description: "Marketing Flyers",
      imgUrl: projImg8,
      link: "https://www.behance.net/gallery/138907569/Graphics",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    My portfolio includes diverse projects: a transport
                    management app, a travel booking app, and a student quiz
                    app, all showcasing my design and development skills. Web
                    projects feature transport management, gym management, and
                    children home management applications. Additionally, my
                    graphic design work includes freelance flyer and digital
                    marketing flyer designs.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Mobile Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Web Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Graphic Design</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {webprojects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {designprojects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
