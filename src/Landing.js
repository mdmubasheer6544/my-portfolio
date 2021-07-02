import React from 'react';
import Navbar from './components/Home/Navbar';
import {Route,Switch} from "react-router-dom"
import Home from './components/Home/Home';
import AboutMe from './components/About Me/AboutMe';
import Servicess from './components/Education/Education';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const Landing = () => {
    return (
        <>
          <Navbar/>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/aboutme" component={AboutMe}/>
              {/* <Route exact path="/servicess" component={Servicess}/>*/}
              <Route exact path="/project" component={Projects}/>
              <Route exact path="/education" component={Education}/> 
              <Route exact path="/contact" component={Contact}/>
          </Switch>
          <Footer/>


        </>
    );
};

export default Landing;