import React from "react";
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Landing from "./pages/Landing";
import CoachList from "./pages/CoachList";
import CoachForm from "./pages/CoachForm";

function RoutesApp(){
  return( 
    <BrowserRouter>  
     <Routes>
        <Route path="/" Component={Landing} />
        <Route path="/study" Component={CoachList} />
        <Route path="/give-classes" Component={CoachForm} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;