import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div classNameName="container bg-dark">
       

        <div className="row">
        <div className="col-md-6 offset-md-3">

      <div className="container text-center">
        <h2 className="mt-5 text-uppercase title">Contact Me</h2>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A beatae
          
        </p>
        </div>
          <form className="mt-5">
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
              />
            </div>

            <div className="form-group mb-3">
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Phone"
              />
            </div>
 
            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email"
              />
            </div>

            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Subject"
              />
            </div>

            <div className="form-group mb-3">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Please describe shortly your project"
              ></textarea>
            </div>

            <div className="form-group mb-3 text-center">
              <button className="btn text-black-50 btn-main-offer">CONTACT ME</button>
            </div>
          </form>
      
        </div>
      </div>
    </div>
  );
};

export default Contact;
