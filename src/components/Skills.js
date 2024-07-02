/** @format */

import meter4 from "../assets/img/meter4.svg";
import meter5 from "../assets/img/meter5.svg";
import meter6 from "../assets/img/meter6.svg";
import meter7 from "../assets/img/meter7.svg";
import meter8 from "../assets/img/meter8.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import colorSharp from "../assets/img/color-sharp1.png";
import "./Skills.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Versatile and skilled professional with expertise in mobile
                development, web development, graphic design, video editing, and
                UI/UX design. Adept at creating dynamic applications, compelling
                graphics, and engaging user interfaces.
                <br /> Proficient in modern frameworks and tools, ensuring
                high-quality digital experiences across various platforms
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter4} alt="Image" />
                  <h5>Mobile Development</h5>
                </div>
                <div className="item">
                  <img src={meter5} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter6} alt="Image" />
                  <h5>Graphic Design</h5>
                </div>
                <div className="item">
                  <img src={meter7} alt="Image" />
                  <h5>Video Editing</h5>
                </div>
                <div className="item">
                  <img src={meter8} alt="Image" />
                  <h5>UI/UX Design</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
