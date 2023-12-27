import React, { useContext, useEffect, useState } from "react";
import { NewsContext } from "../context/NewsData";
import Card from "./Card";
import axios from "axios";
import Filtermodal from "./Flitermodal";
import Filterinfo, { FilterContext } from "../context/Filterinfo";
import { HiMiniBars4 } from "react-icons/hi2";

function Discover() {
  const {
    setTrendingNews,
    TrendingNews,
    politicsNews,
    setpoliticsNews,
    SportsNews,
    setSportsNews,
    KeywordToSearch,
    setKeywordToSearch,
    SearchedNews,
    setSearchedNews,
    Size,
    setSize,
  } = useContext(NewsContext);

  const {
    openfilter,
    setopenfilter,
    categoryList,
    category,
    setcategory,
    to,
    setto,
    from,
    setfrom,
    setlinktosearch,
    linktosearch,
  } = useContext(FilterContext);

  useEffect(() => {
    dis();
  }, []);

  const dis = async () => {
    await axios({
      method: "GET",
      url: "https://newsapi.org/v2/top-headlines?country=in&apiKey=66eef729b7604d448c2b3f820baef4a2",

      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => {
      console.log(res.data.articles);
      const data = res.data.articles;
      const newdata = data.filter((item) => item.description !== null);
      setSearchedNews(newdata);

      // setSearchedNews(data);
    });
  };


  const fun = async () => {
    link = link + KeywordToSearch;
    link = link + "&apiKey=66eef729b7604d448c2b3f820baef4a2";
    setlinktosearch(KeywordToSearch);
    // // console.log(linktosearch);
    if (KeywordToSearch !== "") {
      await axios({
        method: "GET",
        url: link,
        headers: {
          "Content-type": "application/json",
        },
      }).then((res) => {
        // // console.log(res.data.articles);
        const data = res.data.articles;
        const newdata = data.filter((item) => item.description !== null);
        setSearchedNews(newdata);
      });
    } else {
      alert("search somethigs");
    }
  };

  let link = "https://newsapi.org/v2/everything?q=";
  // // console.log(SearchedNews);

  const handlemodal = () => {
    if (KeywordToSearch.length === 0) {
      alert("search something to use filter");
    } else {
      setopenfilter(true);
    }
  };
  // // console.log(from, to);

  const handlecategory = async (e) => {
    const cat = e.target.value;
    console.log(e.target.value);
    setselectedcat(cat);
    if (KeywordToSearch.length !== 0) {
      // // console.log("=======================================");
      if (cat === "General") {
        await axios({
          method: "GET",
          url: `https://newsapi.org/v2/everything?q=${KeywordToSearch}&apiKey=66eef729b7604d448c2b3f820baef4a2`,

          headers: {
            "Content-type": "application/json",
          },
        }).then((res) => {
          console.log(res.data.articles);
          const data = res.data.articles;
          const newdata = data.filter((item) => item.description !== null);
          setSearchedNews(newdata);
        });
      } else {
        await axios({
          method: "GET",
          url: `https://newsapi.org/v2/top-headlines?q=${KeywordToSearch}&category=${cat}&apiKey=66eef729b7604d448c2b3f820baef4a2`,

          headers: {
            "Content-type": "application/json",
          },
        }).then((res) => {
          // // console.log(res.data.articles);
          const data = res.data.articles;
          const newdata = data.filter((item) => item.description !== null);
          setSearchedNews(newdata);
        });
      }
    } else {
      if (cat === "General") {
        dis();
      } else {
        setselectedcat(cat);
        await axios({
          method: "GET",
          url: `https://newsapi.org/v2/top-headlines?category=${cat}&apiKey=66eef729b7604d448c2b3f820baef4a2`,

          headers: {
            "Content-type": "application/json",
          },
        }).then((res) => {
          // console.log(res.data.articles);
          const data = res.data.articles;
          const newdata = data.filter((item) => item.description !== null);
          setSearchedNews(newdata);
        });
      }
    }
  };

  const [selectedcat, setselectedcat] = useState("General");
  // console.log(KeywordToSearch)

  const handlekey=(e)=>{
    if(e.keyCode === 13){
      // e.preventDefault(); // Ensure it is only this code that runs
      console.log("enter pressed")
      fun();
  }
  }

  return (
    <div className={`bg-[#fafafa] h-[100%] min-h-screen ${Size < 768 ? "" : ""}`}>
      {openfilter ? (
        <>
          <Filtermodal />
        </>
      ) : (
        <></>
      )}

      <div className="">
        <div className={`${Size < 768 ? "mb-5 sticky top-0" : "mt-16 sticky top-16"}  w-[100%] bg-[#fafafa] h-content   text-xl sm:text-2xl md:text-3xl font-bold`}>
          <div className={`p-5 ${Size < 768 ? "" : ""}  md:w-[90%] 2xl:w-[75%] mx-auto `}>
            <p className="font-bold text-3xl md:text-4xl">Discover</p>
            <p className="font-medium text-sm text-[#757575]">
              News from all over the world
            </p>
          </div>

          <div className=" md:w-[90%] 2xl:w-[75%] mx-auto">
            <div className=" w-[90%] mx-auto  ml-5 ">
              <div className="col-span-2 ">
                <div  className="flex bg-[#ebebeb] p-1 rounded-md">
                    <input
                      id="searchInput"
                      type="text"
                      placeholder="Search"
                      className="w-[100%] focus:outline-none rounded-md p-1 ml-2 pl-3 font-normal text-sm bg-[#ebebeb]"
                      // value={Query}
                      onKeyDown={(e)=>{
                        handlekey(e)
                      }}
                      onChange={(e) => {
                        setKeywordToSearch(e.target.value);
                      }}
                    />
                    <button
                      className=" rounded-md mx-1 px-[5px] text-sm text-[#7a7a7a] "
                      onClick={handlemodal}
                    >
                     <HiMiniBars4 />
                    </button>
                  </div>
              </div>
              
            </div>
            <div className="flex overflow-scroll no-scrollbar  ml-5 w-[90%] my-3 mb-4">
              {categoryList.map((value, key) => {
                return (
                  <div className="m-1 my-2 ">
                    {selectedcat === value ? (
                      <>
                        <button
                          className="font-bold text-[20px] border-b-2 border-black"
                          onClick={handlecategory}
                          value={value}
                        >
                          {value}
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="font-normal text-[#c9c9c9] text-sm"
                          onClick={handlecategory}
                          value={value}
                        >
                          {value}
                        </button>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="h-[60vh] mx-auto grid bg-[#fafafa] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 2xl:w-[80%] overflow-scroll no-scrollbar  ">
          {SearchedNews.length > 0 ? (
            <>
              {SearchedNews.map((value, key) => {
                return (
                  <>
                    <div className="mx-auto  ">
                      <p>
                        <Card value={value} />
                      </p>
                    </div>
                  </>
                );
              })}
            </>
          ) : (
            <div className="w-[60%] h-[60%] text-sm font-semibold text-center mx-auto">
              No news found !!!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Discover;
