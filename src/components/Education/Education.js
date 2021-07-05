import React from "react";
import "./education.css";

const Education = () => {
  return (
    <div className="container mt-5">
      <h2 className="mt-5 text-center text-uppercase title"> My Education</h2>
      <div className="timeline">
        <div className="containers left">
          <div className="date">15-2018</div>
          <i className="icon fas fa-university"></i>
          <div className="content">
            <h2>Bachelor of Computer Applications(BCA). 2018</h2>
            <p>
              Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
              erat sagittis non. Ut blandit semper pretium.
            </p>
          </div>
        </div>
        <div className="containers right">
          <div className="date">18-2021</div>
          <i className="icon fas fa-graduation-cap"></i>
          <div className="content">
            <h2>Master of Computer Applications(MCA). 2021</h2>
            <p>
              Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
              erat sagittis non. Ut blandit semper pretium.
            </p>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default Education;
