import React, { createContext, useState } from "react";

export const NewsContext=createContext(" ");

const NewsData=({children})=>{
    const [TrendingNews,setTrendingNews] = useState([]);
    const [TNews,setTNews] = useState([]);
    const [politicsNews,setpoliticsNews] = useState([]);
    const [SportsNews,setSportsNews] = useState([]);
    const [SearchedNews,setSearchedNews] = useState([]);
    const [KeywordToSearch,setKeywordToSearch] = useState("");
    const [Size, setSize] = useState(window.innerWidth);
    const [homeState,sethomeState]=useState(true);
  
    return (
      <NewsContext.Provider
        value={{
            TrendingNews,
          setTrendingNews,
          politicsNews,
          setpoliticsNews,
          SportsNews,
          setSportsNews,
          KeywordToSearch,
          setKeywordToSearch,
          SearchedNews,
          setSearchedNews,
          setSize,
          Size,
          homeState,sethomeState
        }}
      >
        {children}
      </NewsContext.Provider>
    );

}

export default NewsData;







