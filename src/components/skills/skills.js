import { Row, Col, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./skills.scss";
import cSharp from '../../images/c-sharp.png'
import javascript from '../../images/js.png'
import java from '../../images/java.png'
import c_logo from '../../images/C_Logo.png'
import cplusplus from '../../images/c-.png'
import python from '../../images/python.png'
import docker from '../../images/docker.png'
import firebase from '../../images/firebase.png'
import dotnet from '../../images/NET_Core_Logo.png'
import wordpress from '../../images/wordpress.png'
import github from '../../images/git.png'

function Skills() {
  const skillsData = [
    {
      category: "Programming Languages",
      skills: [
        { name: "C#", proficiency: 20, logo: cSharp },
        { name: "JavaScript", proficiency: 50, logo: javascript },
        { name: "Java", proficiency: 50, logo: java },
        { name: "C", proficiency: 50, logo: c_logo },
        { name: "C++", proficiency: 50, logo: cplusplus },
        { name: "Python", proficiency: 25, logo: python  },
      ],
    },
    {
      category: "Technologies",
      skills: [
        { name: ".NET", proficiency: 75, logo: dotnet },
        { name: "Git and Github", proficiency: 75, logo: github },
        { name: "Firebase", proficiency: 25, logo: firebase },
        { name: "Docker", proficiency: 50, logo: docker },
        { name: "Wordpress", proficiency: 50, logo: wordpress }
      ],
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <h2>Skills</h2>
        <p>Here are the set of skills i have learned throughout my college journey, studying, and in my OJT. </p>
        {skillsData.map((category, index) => (
          <Row key={index}>
            <Col>
              <div className="skill-bx">
                <h4>{category.category}</h4>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skill-slider"
                >
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="item">
                      <img src={skill.logo} alt={skill.name} />
                      {/* <h5>{skill.name}</h5> */}
                      <div className="skill-progress">
                        <div
                          className="progress-bar"
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
              <div className="spacer"></div>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
}

export default Skills;