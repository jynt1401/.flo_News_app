import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { NewsContext } from "../context/NewsData";
import Splash from "./Splash";
import "../";
import Workspace from "./Workspace";
import NavMob from "./NavBar/NavMob";
import NewsData from '../context/NewsData';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Discover from "./Discover";
import NavOther from "./NavBar/NavOther";

function Home() {
  const {
    setTrendingNews,
    TrendingNews,
    politicsNews,
    setpoliticsNews,
    SportsNews,
    setSportsNews,
    setSize,
    Size
  } = useContext(NewsContext);

  useEffect(()=>{
    const handlesize=()=>{
      setSize(window.innerWidth)
    }
    window.addEventListener("resize",handlesize)
  },[])

  useEffect(() => {
    fun();
  }, []);
  
  // https://newsapi.org/v2/everything?q=bitcoin&apiKey=66eef729b7604d448c2b3f820baef4a2
  const fun = async () => {
    await axios({
      method: "GET",
      url: "https://newsapi.org/v2/top-headlines?country=us&apiKey=66eef729b7604d448c2b3f820baef4a2",

      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => {
      console.log(res.data.articles);
      const data = res.data.articles;
      // [Removed]
      let newdata = data.filter((item) => item.description !== null);
       newdata = newdata.filter((item) => item.description !== "[Removed]");
      setTrendingNews(newdata);
    });
  };

  return (
    <div className={`bg-white bg-[#eeeeef] h-[100%] min-h-screen no-scrollbar `}>
      {TrendingNews.length > 0 ? (
        <>
          <Router>
          {Size>=768?<><NavOther/></>:<></>}

              <Routes>
                <Route exact path="/" element={<Workspace />} />
                <Route exact path="/search" element={<Discover />} />
              </Routes>
            {Size<768?<><NavMob/></>:<></>}
        
          </Router>
        </>
      ) : (
        <>
          <Splash />
        </>
      )}
    </div>
  );
}

export default Home;
