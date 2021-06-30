import React from 'react';
import './project.css'
import movieImage from '../Projects-Images/Movie-Project.png';
import menuCardImage from '../Projects-Images/MenuCard-Project.png';
import NewsImage from '../Projects-Images/News-Project.png';
import SegmentImage from '../Projects-Images/Segment-project.png'

const Projects = () => {
    return (
        <div className="container mt-5">
        <h2 className="mt-5 text-center text-uppercase title"> My Projects</h2>
  
        <div className="servicess-container mt-5">
          <div className="card" style={{width: "19rem"}}>
            <img className="card-img-top" src={movieImage} alt="movie image cap" />
            <div className="card-body">
            <h5>Movie Search</h5>
              <p className="card-text text-muted">
              React.js | Bootstrap 4 | Html5 | CSS3
              </p>
              <a href="#" className="btn text-black-50">view</a>
              <a href="#" className="btn text-black-50">Code</a>
            </div>
          </div>
  
          <div className="card" style={{width: "19rem"}}>
            <img className="card-img-top" src={menuCardImage} alt="menuCard image cap" />
            <div className="card-body">
            <h5>Menu Card</h5>
              <p className="card-text text-muted">
              React.js | Bootstrap 4 | Html5 | CSS3
              </p>
              <a href="#" className="btn text-black-50">view</a>
              <a href="#" className="btn text-black-50">Code</a>
            </div>
          </div>


          <div className="card" style={{width: "19rem"}}>
            <img className="card-img-top" src={SegmentImage} alt="SegmentCard image cap" />
            <div className="card-body">
            <h5>Add Segment</h5>
              <p className="card-text text-muted">
              React.js | Bootstrap 4 | Html5 | CSS3
              </p>
              <a href="#" className="btn text-black-50">view</a>
              <a href="#" className="btn text-black-50">Code</a>
            </div>
          </div>

  
          <div className="card" style={{width: "19rem"}}>
            <img className="card-img-top" src={NewsImage} alt="NewsCard image cap" />
            <div className="card-body">
            <h5>Daily News</h5>
              <p className="card-text text-muted">
              React.js | Bootstrap 4 | Html5 | CSS3
              </p>
              <a href="#" className="btn text-black-50">view</a>
              <a href="#" className="btn text-black-50">Code</a>
            </div>
          </div>
  
  
  
  
  
        </div>
      </div>
  
    );
};

export default Projects;