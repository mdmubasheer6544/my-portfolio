import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/tsparticles/Enums/index";
import { HashRouter } from "react-router-dom";
import Landing from "./Landing";
function App() {
  return (
    <HashRouter>
      <Landing />
    </HashRouter>
  );
}

export default App;
