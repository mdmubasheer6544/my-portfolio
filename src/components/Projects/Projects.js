import React, { useState } from "react";
import "./project.css";
import movieImage from "../Projects-Images/Movie-Project.png";
import menuCardImage from "../Projects-Images/MenuCard-Project.png";
import NewsImage from "../Projects-Images/News-Project.png";
import SegmentImage from "../Projects-Images/Segment-project.png";
import foodImage from "../Projects-Images/FoodDelivery-project.png";
import PopUp from "./PopupBox/PopUp";

const movieTitle = "Movies Website";
const menuCardTitle = "Menu Card";
const SegmentTitle = "Add Segment";
const dailyNewsTitle = "Daily News Website";
const FoodDeliveryTitle = "Online Food Ordering";

const commTechnologies = "React.js | Bootstrap 4 | Html5 | CSS3";
const foodTechnologies = "Angular.js | Node.js | Bootstrap 4 | Html5 | CSS3";

const movieGithubUrl = "movie_search_app";
const menuCardGithubUrl = "Menu_Card";
const SegmentGithubUrl = "Segment_Project";
const dailyNewsGithubUrl = " newsApp";

const Projects = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState();

  const handleClose = () => setShow(false);
  const handleShow = (obj) => {
    setData(obj);
    setShow(true);
  };

  return (
    <div className="container mt-5">
      <h2 className="mt-5 text-center text-uppercase title"> My Projects</h2>

      <div className="servicess-container mt-5">
        <div className="card mb-5">
          <img
            className="card-img-top"
            src={movieImage}
            alt="movie-cap"
            onClick={() => {
              handleShow({
                imgSrc: movieImage,
                title: movieTitle,
                technologies: commTechnologies,
                githubUrl: movieGithubUrl,
              });
            }}
          />
        </div>

        <div className="card mb-5">
          <img
            className="card-img-top"
            src={menuCardImage}
            alt="menuCard-cap"
            onClick={() => {
              handleShow({
                imgSrc: menuCardImage,
                title: menuCardTitle,
                technologies: commTechnologies,
                githubUrl: menuCardGithubUrl,
              });
            }}
          />
        </div>

        <div className="card mb-5">
          <img
            className="card-img-top"
            src={SegmentImage}
            alt="SegmentCard-cap"
            onClick={() => {
              handleShow({
                imgSrc: SegmentImage,
                title: SegmentTitle,
                technologies: commTechnologies,
                githubUrl: SegmentGithubUrl,
              });
            }}
          />
        </div>

        <div className="card mb-5">
          <img
            className="card-img-top"
            src={NewsImage}
            alt="NewsCard-cap"
            onClick={() => {
              handleShow({
                imgSrc: NewsImage,
                title: dailyNewsTitle,
                technologies: commTechnologies,
                githubUrl: dailyNewsGithubUrl,
              });
            }}
          />
        </div>

        <div className="card mb-5">
          <img
            className="card-img-top"
            src={foodImage}
            alt="NewsCard-cap"
            onClick={() => {
              handleShow({
                imgSrc: foodImage,
                title: FoodDeliveryTitle,
                technologies: foodTechnologies,
                githubUrl: "",
              });
            }}
          />
        </div>
      </div>

      {data && <PopUp show={show} handleClose={handleClose} content={data} />}
    </div>
  );
};

export default Projects;
