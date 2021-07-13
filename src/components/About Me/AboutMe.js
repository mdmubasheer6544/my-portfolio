import React from "react";
import "./aboutme.css";
import react from "../Projects-Images/reactjsLogo.png";
import node from "../Projects-Images/nodeLogo.png";
import skillImg from './pngLaptop.png'
import myProfile from "../Projects-Images/myProfile.JPG";
import Fade from "react-reveal/Fade";
import Roll from "react-reveal/Roll";
import Rotate from "react-reveal/Rotate";

const AboutMe = () => {
  return (
    <div className="container mt-5">
      <div className="row" style={{ alignItems: "center" }}>
        <Fade left>
          <div className="col-md-3 offset-md-2 reveal">
            <img
              src={myProfile}
              className="imglogo"
              alt="profile"
              height="200px"
            />
          </div>
        </Fade>
        <Roll right>
          <div className="col-md-5">
            <h2 className="mb-3 text-uppercase title aboutme">About Me</h2>
            <p className="description">
              Hello, I am Mubasheer, I'm Master in Computer Application from
              SRTM University.I'm full stack Web Developer. Technologies I used
              in MERN (MongoDB,ExpressJS,ReacJS,NodeJS).
            </p>
          </div>
        </Roll>
      </div>
      <div className="row skill-row" style={{ alignItems: "center" }}>
        <div className="col-md-5 offset-md-2 mt-5">
          <h2 className="text-uppercase title skill-title">My Skills</h2>
          <ul className="skill-list-ul">
            <div className="skill-item-container">
              <i className="programming lang-html"></i>
              <div>
                <small className="skill-title">HTML5,CSS3</small>
                <li className="skill-item">
                  <span className="skill-fill html"></span>
                </li>
              </div>
            </div>
            <div className="skill-item-container">
              <i className="programming lang-javascript"></i>
              <div>
                <small className="skill-title ">JavaScript</small>
                <li className="skill-item">
                  <span className="skill-fill js"></span>
                </li>
              </div>
            </div>
            <div className="skill-item-container">
              <div>
                <img src={react} alt="programming" className="programming" />
              </div>
              <div>
                <small className="skill-title">ReactJS</small>
                <li className="skill-item">
                  <span className="skill-fill react"></span>
                </li>
              </div>
            </div>
            <div className="skill-item-container">
              <img src={node} alt="programming" className="programming " />
              <div>
                <small className="skill-title">NodeJS</small>
                <li className="skill-item">
                  <span className="skill-fill nodejs"></span>
                </li>
              </div>
            </div>
          </ul>
        </div>

        <Rotate bottom right>
          <div className="col-md-5 mt-5">
            <img
              className="skillImage"
              src={skillImg}
              alt="skillImage"
              width="100%"
            />
          </div>
        </Rotate>
      </div>
    </div>
  );
};

export default AboutMe;
