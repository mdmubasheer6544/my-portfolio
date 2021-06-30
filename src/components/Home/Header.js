import React from 'react';
import Type from "react-typed";
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Web devlopment and website promotions</h1>
                <Type
                    className="typed-text"
                    strings={["Web devlopment","Full-stack devloper"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />

                <Link to="/contact" className="btn-main-offer">Contact me</Link>
            </div>
        </div>
    );
};

export default Header;