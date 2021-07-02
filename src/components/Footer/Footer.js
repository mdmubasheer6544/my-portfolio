import React from "react";
import{Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="page-footer font-small mdb-color pt-4 bg-dark text-white">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left mt-3">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Address</h6>
            <p>
              Degloor Naka , Rahmat Nagar <br/> Nanded - 431604.
            </p>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <p>
              <Link to="/" className="text-uppercase text-white">Home</Link>
            </p>
            <p>
              <Link to="/aboutme" className="text-uppercase text-white">About Me</Link>
            </p>
            <p>
              <Link to="/project" className="text-uppercase text-white">Projects</Link>
            </p>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <p>
              <Link to="/education" className="text-uppercase text-white">Education</Link>
            </p>
            <p>
              <Link to="/contact" className="text-uppercase text-white">Contact</Link>
            </p>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p>
              <i className="fas fa-home mr-3"></i> Nanded, MH 431604, IN
            </p>
            <p>
              <i className="fas fa-envelope mr-3"></i>mdmubasheer6544@gmail.com
            </p>
            <p>
              <i className="fas fa-phone mr-3"></i> + 91 9623559228
            </p>
          </div>
        </div>

        <hr />

        <div className="row d-flex align-items-center">
          <div className="col-md-7 col-lg-8">
            <p className="text-center text-md-left">
              Project Devloped By: Md | Mubasheer <br />
              <small>© 2021 Copyright | All Rights Reserved</small>
            </p>
          </div>

          <div className="col-md-5 col-lg-4 ml-lg-0">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1" >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1" >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
