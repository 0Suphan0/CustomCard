import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Course from "./Course";

import Angular from "./images/angular.jpg"
import Bootstrap from "./images/bootstrap5.png"
import Csharp from "./images/ccsharp.png"
import Web from "./images/kompleweb.jpg"



function App() {
  return (
    <>
      <Course
        image={Angular}
        title="Angular Kursu"
        description="Lorem,
         ipsum dolor sit amet consectetur adipisicing elit. 
         Eveniet rerum vitae reiciendis sint neque fugit, minima perferendis,
          non illo ratione quos recusandae tenetur asperiores nulla repellendus quia, repudiandae molestias aspernatur."
      />
      <Course
       image={Bootstrap}
        title="Bootstrap Kursu"
        description="Lorem,
         ipsum dolor sit amet consectetur adipisicing elit. 
         Eveniet rerum vitae reiciendis sint neque fugit, minima perferendis,
          non illo ratione quos recusandae tenetur asperiores nulla repellendus quia, repudiandae molestias aspernatur."
      />
      <Course
        image={Csharp}
        title="C# Kursu"
        description="Lorem,
         ipsum dolor sit amet consectetur adipisicing elit. 
         Eveniet rerum vitae reiciendis sint neque fugit, minima perferendis,
          non illo ratione quos recusandae tenetur asperiores nulla repellendus quia, repudiandae molestias aspernatur."
      />
      <Course
        image={Web}
        title="Web Kursu"
        description="Lorem,
         ipsum dolor sit amet consectetur adipisicing elit. 
         Eveniet rerum vitae reiciendis sint neque fugit, minima perferendis,
          non illo ratione quos recusandae tenetur asperiores nulla repellendus quia, repudiandae molestias aspernatur."
      />
    
    </>
  );
}

export default App;
