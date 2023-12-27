import './App.css';
import React, { useContext, useEffect } from 'react';
import Splash from './component/Splash';
import axios from "axios";
import NewsData from './context/NewsData';
import { NewsContext } from "../src/context/NewsData";
import Home from './component/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Filterinfo from './context/Filterinfo';
import Testfile from './component/Testfile';

function App() {
  
 
  


  return (
    <div className="text-3xl">
      <NewsData>
        <Filterinfo>
        {/* <Testfile/> */}
           <Home/>
    
        </Filterinfo>
      </NewsData>
    
      
   
    </div>
  );
}

export default App;
