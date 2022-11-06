import React from "react";
import './App.css';
import './base.css';
import AnimatedGrid from "./animated-grid";
import Basicgrid from "./basicgrid";
import PhotoGrid from "./photo-grid";

function App() {
  return (
    <div>
      <div>
        <h2>Animated Grid refresh page</h2>
        <AnimatedGrid />
      </div><br /><br />
      <div>
        <h2>Basic one</h2>
        <Basicgrid />
      </div>
      <div>
        <h2>Grid with photo (hd)</h2>
        <PhotoGrid />
      </div>
    </div>

  )
}

export default App;