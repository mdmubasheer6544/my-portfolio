import React from "react";
import profile from "./user-profile.png";
import "./aboutme.css";
import react from "../Projects-Images/reactjsLogo.png";
import node from "../Projects-Images/nodeLogo.png";
import skillImg from "../Projects-Images/skillImage.jpg";
import myProfile from '../Projects-Images/myProfile.JPG'
import Fade from "react-reveal/Fade";
import Roll from "react-reveal/Roll";
import Rotate  from "react-reveal/Rotate";

const AboutMe = () => {
  return (
    <div className="container mt-5">
      <div className="row" style={{alignItems:"center"}}>
        <Fade left>
          <div className="col-md-3 offset-md-2 reveal">
            <img src={myProfile} className="imglogo" alt="profile" height="200px" />
          </div>
        </Fade>
        <Roll right>
          <div className="col-md-5">
            <h2 className="mb-3 text-uppercase title aboutme">About Me</h2>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              dolores accusantium saepe alias labore optio quis libero
              perspiciatis quo excepturi modi, magni recusandae qui ea eos non
              pariatur! Aperiam sequi eaque atque veritatis beatae ipsa animi,
              autem explicabo? Suscipit itaque sit, magnam velit pariatur dicta
              adipisci! Sapiente amet veniam ex illo obcaecati iste placeat
              earum sint odio sequi ipsam dignissimos pariatur at iusto
              recusandae perferendis, ratione ullam totam suscipit nulla
              veritatis nobis nisi facilis quaerat. Iure voluptate corrupti
              quasi a officiis optio eveniet eligendi eius illum ut dolores
              suscipit sit, doloribus atque ratione corporis. Explicabo ipsam
              quam perferendis ex dolores.
            </p>
          </div>
        </Roll>
      </div>
      <div className="row mt-5" style={{alignItems:"center"}}>
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
                <img src={react} className="programming" />
              </div>
              <div>
                <small className="skill-title">ReactJS</small>
                <li className="skill-item">
                  <span className="skill-fill react"></span>
                </li>
              </div>
            </div>
            <div className="skill-item-container">
              <img src={node} className="programming " />
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
            <img src={skillImg} alt="skillImage" width="100%" />
          
          </div>
      
        </Rotate>
      </div>
    </div>
  );
};

export default AboutMe;
