import React, { useContext, useEffect, useState } from "react";
import NavMob from "./NavBar/NavMob";
import { NewsContext } from "../context/NewsData";
import Card from "./Card";

function Workspace() {
  const {
    setTrendingNews,
    TrendingNews,
    politicsNews,
    setpoliticsNews,
    SportsNews,
    setSportsNews,
    setSize,
    Size,
  } = useContext(NewsContext);

  

  const imgurl = [
    "https://www.livemint.com/lm-img/img/2023/12/20/600x338/PTI11-19-2023-000807A-0_1703054398776_1703054427567.jpg",
    "https://static.tnn.in/thumb/msid-106271876,thumbsize-1625344,width-1280,height-720,resizemode-75/106271876.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxFpQLcGPDxSQFhwqJX67f1Q6TBoKcNlfWSQ&usqp=CAU",
    "https://static.tnn.in/thumb/msid-105480684,thumbsize-74644,width-1280,height-720,resizemode-75/105480684.jpg",
    "https://www.livemint.com/lm-img/img/2023/12/20/600x338/PTI11-19-2023-000807A-0_1703054398776_1703054427567.jpg",
    "https://static.tnn.in/thumb/msid-106271876,thumbsize-1625344,width-1280,height-720,resizemode-75/106271876.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxFpQLcGPDxSQFhwqJX67f1Q6TBoKcNlfWSQ&usqp=CAU",
    "https://static.tnn.in/thumb/msid-105480684,thumbsize-74644,width-1280,height-720,resizemode-75/105480684.jpg",
    "https://www.livemint.com/lm-img/img/2023/12/20/600x338/PTI11-19-2023-000807A-0_1703054398776_1703054427567.jpg",
    "https://static.tnn.in/thumb/msid-106271876,thumbsize-1625344,width-1280,height-720,resizemode-75/106271876.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxFpQLcGPDxSQFhwqJX67f1Q6TBoKcNlfWSQ&usqp=CAU",
    "https://static.tnn.in/thumb/msid-105480684,thumbsize-74644,width-1280,height-720,resizemode-75/105480684.jpg",
    "https://www.livemint.com/lm-img/img/2023/12/20/600x338/PTI11-19-2023-000807A-0_1703054398776_1703054427567.jpg",
    "https://static.tnn.in/thumb/msid-106271876,thumbsize-1625344,width-1280,height-720,resizemode-75/106271876.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxFpQLcGPDxSQFhwqJX67f1Q6TBoKcNlfWSQ&usqp=CAU",
    "https://static.tnn.in/thumb/msid-105480684,thumbsize-74644,width-1280,height-720,resizemode-75/105480684.jpg",


  ];
  const [imgurldyn, setimgurldyn] = useState("");
  const delay = 2500;
const fun=(e)=>{
  setimgurldyn(e);
  // console.log(imgurldyn)


}
useEffect(()=>{
  imgurl.forEach((el, i) => {
    setTimeout(() => fun(el), delay * i);
    
  });
},[])
 
  return (
    <>
      <div className="bg-[#fafafa] h-screen overflow-scroll no-scrollbar">
        {/* <div
            className={` pl-5 mb-5 font-bold text-red-700 fixed top-0 py-3 bg-white w-[100%]  ${
              Size < 768 ? "flex" : "hidden"
            }`}
          >
           
          </div> */}

        <div className={`${Size<768?"sticky top-0":""} bg-[#fafafa]`}>
          <a
            href="https://www.livemint.com/sports/cricket-news/ipl-auction-2024-live-updates-india-premier-league-teams-list-19-dec-2023-csk-mi-rcb-srh-kkr-pbks-lsg-gt-srh-rr-players-11702954586192.html"
            target="__href"
            className= {`h-content w-[90%] mx-auto pb-4`}
          >
            <div
              className={`bg-cover bg-[#fafafa]   ${Size<768? "w-[100%] rounded-b-3xl h-[32vh] sm:h-[50vh]":" w-[90%] h-[80vh] mx-auto rounded-2xl mt-[10vh]"}`}
              style={{ backgroundImage: `url(${imgurldyn})` }}
            >
              <div className={`pt-[150px] sm:pt-[250px] md:pt-[400px] lg:pt-[450px]`}>
                <div className=" text-white text-md leading-7 sm:text-md md:text-3xl lg:text-5xl mx-3 font-bold text-left ">
                  IPL Auction 2024
                </div>
                <div className=" text-white text-sm leading-7 sm:text-xl md:text-3xl mx-3 font-bold text-left ">
                  Complete list of players for teams
                </div>
              </div>
            </div>
          </a>

          <div className="flex justify-between mx-2 pt-8 pb-14 bg-[#fafafa] w-[90%] md:w-[90%] 2xl:w-[75%] md:mt-14  md:mx-auto h-[5vh]  mb-1   sm:text-2xl md:text-4xl font-extrabold">
            <p className="font-bold text-3xl md:text-4xl">Breaking News</p>
            <div className="mr-3 mt-1 font-medium text-[#33363d] text-sm md:text-xl">
              More
            </div>
          </div>
        </div>
        <div className=" pt-5 md:pt-10 ">
          <div className="h-[60vh] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 2xl:w-[80%] overflow-scroll no-scrollbar ">
            {TrendingNews.map((value, key) => {
              return  (
                <div className="mx-auto ">
                  <div className="">
                    <Card value={value} />
                  </div>
                </div>
              ) 
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Workspace;
