import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Modal } from "react-bootstrap";
const PopUp = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={() => {
        props.handleClose();
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>{props.content.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="popupbox-content">
          <img
            alt="cat"
            className="popupImg d-block"
            src={props.content.imgSrc}
          />
          <div className="mt-3">
            <span className="font-weight-bold">Technologies Used:</span>
            <p className="card-text text-muted">{props.content.technologies}</p>
            <div className="mt-3 d-flex">
              <a
                href={`https://github.com/mdmubasheer6544/${props.content.githubUrl}`}
              >
                <button type="button" className="btn btn-secondary btn-sm  ">
                  <i className="fab fa-github"></i>
                </button>
              </a>
              <a
                className="githubLink "
                style={{ paddingLeft: "25px" }}
                href={`https://mdmubasheer6544.github.io/${props.content.githubUrl}`}
              >
                <i
                  className="fas fa-external-link-alt"
                  style={{ fontSize: "30px" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PopUp;
