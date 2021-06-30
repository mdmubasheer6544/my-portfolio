import React from 'react';
import profile from './user-profile.png'
import './aboutme.css'


const AboutMe = () => {
    return (
        <div className="container mt-5">
         <div className="aboutme-container">
             <div className="image">
                 <img src={profile} alt="profile" height="200px" />
             </div>
             <div className="about-me">
                 <h2 className="mb-3 text-uppercase title">About Me</h2>
                 <p className="aboutme-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolores accusantium saepe alias labore optio quis libero perspiciatis quo excepturi modi, magni recusandae qui ea eos non pariatur! Aperiam sequi eaque atque veritatis beatae ipsa animi, autem explicabo? Suscipit itaque sit, magnam velit pariatur dicta adipisci! Sapiente amet veniam ex illo obcaecati iste placeat earum sint odio sequi ipsam dignissimos pariatur at iusto recusandae perferendis, ratione ullam totam suscipit nulla veritatis nobis nisi facilis quaerat. Iure voluptate corrupti quasi a officiis optio eveniet eligendi eius illum ut dolores suscipit sit, doloribus atque ratione corporis. Explicabo ipsam quam perferendis ex dolores.</p>
             </div>
         </div>
         <div className="skill-container">
             <h2 className="mt-5 text-uppercase title">My Skill</h2>
         </div>

        </div>
    );
};

export default AboutMe;