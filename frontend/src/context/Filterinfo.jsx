import React, { createContext, useState } from "react";

export const FilterContext=createContext(" ");

const Filterinfo=({children})=>{
  
    const [openfilter,setopenfilter] = useState(false);
    const [category,setcategory] = useState("");
    const [to,setto] = useState("");
    const [from,setfrom] = useState("");
    const [sortvalue,setsortvalue] = useState("");
    var [linktosearch,setlinktosearch] = useState("https://newsapi.org/v2/everything?q=");
    const categoryList=["General","Entertainment","Health","Science","Sports","Technology","Business"];
    const sortByList=["relevancy","popularity","publishedAt"];
  
    return (
      <FilterContext.Provider
        value={{
         
          openfilter,
          setopenfilter,
          categoryList,
          category,
          setcategory,
          to,setto,
          from,setfrom,
          linktosearch,setlinktosearch,sortByList,setsortvalue,sortvalue


        }}
      >
        {children}
      </FilterContext.Provider>
    );

}

export default Filterinfo;







