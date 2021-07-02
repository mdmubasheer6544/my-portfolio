import React from "react";
import "./project.css";
import movieImage from "../Projects-Images/Movie-Project.png";
import menuCardImage from "../Projects-Images/MenuCard-Project.png";
import NewsImage from "../Projects-Images/News-Project.png";
import SegmentImage from "../Projects-Images/Segment-project.png";
import foodImage from "../Projects-Images/FoodDelivery-project.png";
import PopupBox from "./PopupBox/PopUpBox";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";





const movieTitle="Movies Website";
const menuCardTitle="Menu Card";
const SegmentTitle="Add Segment";
const dailyNewsTitle="Daily News Website";
const FoodDeliveryTitle="Online Food Ordering";

const commTechnologies="React.js | Bootstrap 4 | Html5 | CSS3"
const foodTechnologies="Angular.js | Node.js | Bootstrap 4 | Html5 | CSS3"

const movieGithubUrl="movie_search_app";
const menuCardGithubUrl="newsApp"
const SegmentGithubUrl="Segment_Project"
const dailyNewsGithubUrl="Menu_Card"


const Projects = () => {
  const popupBox = (movieImage,title,technologies,githubUrl) => {
    const content = <>
    <img alt="cat" className="popupImg d-block" src={movieImage} />
    <div className="mt-3">
    <span className="font-weight-bold">Technologies Used:</span> 
    <p className="card-text text-muted"> {technologies}</p> 
    <div className="mt-3">
    <b>GitHub: </b><a href={`https://mdmubasheer6544.github.io/${githubUrl}`}>{`github.com/mdmubasheer6544/${githubUrl}`}</a>
    <a href={`https://github.com/mdmubasheer6544/${githubUrl}`} className="btn-main-offer text-black-50">Source Code</a>

    </div>
    </div>
    </>;
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: title,
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="mt-5 text-center text-uppercase title"> My Projects</h2>

      <div className="servicess-container mt-5">
        <div className="card mb-5" style={{ width: "19rem",height: "15rem",padding: "20px "}}>
          <img
            className="card-img-top"
            src={movieImage}
            alt="movie image cap"
            onClick={() => {
              popupBox(movieImage,movieTitle,commTechnologies,movieGithubUrl);
            }}
          />
        </div>


        <div className="card mb-5" style={{ width: "19rem",height: "15rem",padding: "20px "}}>
          <img
            className="card-img-top"
            src={menuCardImage}
            alt="menuCard image cap"
            onClick={() => {
              popupBox(menuCardImage,menuCardTitle,commTechnologies,menuCardGithubUrl);
            }}
          />
        </div>

        <div className="card mb-5" style={{ width: "19rem",height: "15rem",padding: "20px "}}>
          <img
            className="card-img-top"
            src={SegmentImage}
            alt="SegmentCard image cap"
            onClick={() => {
              popupBox(SegmentImage,SegmentTitle,commTechnologies,SegmentGithubUrl);
            }}
          />
      
        </div>

        <div className="card mb-5" style={{ width: "19rem",height: "15rem",padding: "20px "}}>
          <img
            className="card-img-top"
            src={NewsImage}
            alt="NewsCard image cap"
            onClick={() => {
              popupBox(NewsImage,dailyNewsTitle,commTechnologies,dailyNewsGithubUrl);
            }}
          />
          
        </div>

        <div className="card mb-5" style={{ width: "19rem",height: "15rem",padding: "20px "}}>
          <img
            className="card-img-top"
            src={foodImage}
            alt="NewsCard image cap"
            onClick={() => {
              popupBox(foodImage,FoodDeliveryTitle,foodTechnologies,'');
            }}
          />
        </div>

        <PopupBox popupBox={popupBox}/>
      </div>
    </div>
  );
};

export default Projects;
