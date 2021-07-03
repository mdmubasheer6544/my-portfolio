import React from 'react';
import Type from "react-typed";
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>hey! <span>👋</span> i'm Mubasheer </h1>
                <Type
                    className="typed-text"
                    strings={["Web devlopment","Full-stack devlopment"]}
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