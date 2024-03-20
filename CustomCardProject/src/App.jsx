import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Course from "./Course";

function App() {
  return (
    <>
      <Course
        title="Angular Kursu"
        description="Lorem,
         ipsum dolor sit amet consectetur adipisicing elit. 
         Eveniet rerum vitae reiciendis sint neque fugit, minima perferendis,
          non illo ratione quos recusandae tenetur asperiores nulla repellendus quia, repudiandae molestias aspernatur."
      />
      <Course
        title="Bootstrap Kursu"
        description="Lorem,
         ipsum dolor sit amet consectetur adipisicing elit. 
         Eveniet rerum vitae reiciendis sint neque fugit, minima perferendis,
          non illo ratione quos recusandae tenetur asperiores nulla repellendus quia, repudiandae molestias aspernatur."
      />
      <Course
        title=".Net Kursu"
        description="Lorem,
         ipsum dolor sit amet consectetur adipisicing elit. 
         Eveniet rerum vitae reiciendis sint neque fugit, minima perferendis,
          non illo ratione quos recusandae tenetur asperiores nulla repellendus quia, repudiandae molestias aspernatur."
      />
      <Course
        title="Java Kursu"
        description="Lorem,
         ipsum dolor sit amet consectetur adipisicing elit. 
         Eveniet rerum vitae reiciendis sint neque fugit, minima perferendis,
          non illo ratione quos recusandae tenetur asperiores nulla repellendus quia, repudiandae molestias aspernatur."
      />
    
    </>
  );
}

export default App;
