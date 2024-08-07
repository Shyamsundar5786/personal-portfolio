import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Project1a.png";
import projImg2 from "../assets/img/Project2a.png";
import projImg3 from "../assets/img/Project3a.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Restaurant Management System",
      description: "Design & Development",
      imgUrl: projImg2,
    },

    {
      title: "Blood Bank Management System",
      description: "Design & Development",
      imgUrl: projImg3,
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Experience a showcase of my professional journey through a curated selection of projects, each a testament to my expertise and commitment to excellence.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="first">
                        <p>Explore my portfolio, where creativity meets functionality. Dive into the seamless world of restaurant operations with my Restaurant Management System, which provides an immersive combination of design and efficiency. Explore my Personal Portfolio Website, a canvas on which I express my enthusiasm for unique digital solutions. Finally, see how the Blood Bank Management System combines technology and healthcare in a way that is both precise and compassionate. Each project demonstrates my dedication to creating meaningful digital experiences that make a lasting impression. Join me in the world of endless possibilities.</p>

                      </Tab.Pane>
                      <Tab.Pane eventKey="second">

                        <p><h3><a href="https://github.com/Shyamsundar5786/react-port" target="_blank" rel="noopener noreferrer">Personal Portfolio Website:</a></h3>
                          Embark on a journey through my professional world with the Personal Portfolio Website. A testament to my creativity and technical expertise, this website is not just a showcase; it's an interactive space that reflects my passion for design and development. Immerse yourself in a user-friendly experience that encapsulates my skills, projects, and the unique story behind each line of code.
                        </p>
                        <p>
                          <h3><a href="https://github.com/Shyamsundar5786/restaurant-management-system" target="_blank" rel="noopener noreferrer">Restaurant Management System:</a></h3>
                          Elevate the dining experience with my innovative Restaurant Management System. Seamlessly blending design and development, this project showcases my mastery in crafting user-friendly interfaces for both customers and restaurant staff. From intuitive menu navigation to streamlined order processing, every detail is designed to enhance efficiency and delight customers.</p>

                        <p>
                          <h3><a href="https://example.com/project1" target="_blank" rel="noopener noreferrer">Blood Bank Management System:</a></h3>
                          Experience the intersection of technology and healthcare with the Blood Bank Management System. Designed and developed with precision, this project addresses critical needs in the healthcare sector. From efficient blood inventory management to seamless donor registration, this system stands as a testament to my commitment to making a positive impact through technology. Join me in revolutionizing healthcare solutions.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <p><h3><a href="https://github.com/Shyamsundar5786/react-port" target="_blank" rel="noopener noreferrer">Personal Portfolio Website:</a></h3>
                          Embark on a journey through my professional world with the Personal Portfolio Website. A testament to my creativity and technical expertise, this website is not just a showcase; it's an interactive space that reflects my passion for design and development. Immerse yourself in a user-friendly experience that encapsulates my skills, projects, and the unique story behind each line of code.
                        </p>
                        <p>
                          <h3><a href="https://github.com/Shyamsundar5786/restaurant-management-system" target="_blank" rel="noopener noreferrer">Restaurant Management System:</a></h3>
                          Elevate the dining experience with my innovative Restaurant Management System. Seamlessly blending design and development, this project showcases my mastery in crafting user-friendly interfaces for both customers and restaurant staff. From intuitive menu navigation to streamlined order processing, every detail is designed to enhance efficiency and delight customers.</p>

                        <p>
                          <h3><a href="https://example.com/project1" target="_blank" rel="noopener noreferrer">Blood Bank Management System:</a></h3>
                          Experience the intersection of technology and healthcare with the Blood Bank Management System. Designed and developed with precision, this project addresses critical needs in the healthcare sector. From efficient blood inventory management to seamless donor registration, this system stands as a testament to my commitment to making a positive impact through technology. Join me in revolutionizing healthcare solutions.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
