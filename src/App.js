import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/tsparticles/Enums/index";
import { BrowserRouter } from "react-router-dom";
import Landing from "./Landing";
function App() {
  return (
    <BrowserRouter>
      <Landing />
    </BrowserRouter>
  );
}

export default App;
