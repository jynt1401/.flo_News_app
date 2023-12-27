import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FilterContext } from "../context/Filterinfo";
import { NewsContext } from "../context/NewsData";
import axios from "axios";
import Dropdown from 'react-bootstrap/Dropdown';

function Filtermodal() {
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
    linktosearch,
    setlinktosearch,
    sortByList,
    sortvalue,
    setsortvalue,
  } = useContext(FilterContext);
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
  } = useContext(NewsContext);

  const handlemodal = () => {
    // console.log("set to false");
    setopenfilter(false);
  };
  // // console.log("list",categoryList)

  const handleFromdate = (e) => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    // console.log("---------------", month);
    let today = date + "" + month + "" + year;
    // console.log("todays date", today);

    let fromdate = e.target.value;
    let fromdateFormate = fromdate.split("-");
    let fyear = fromdateFormate[0];
    let fmonth = fromdateFormate[1];
    let fdate = fromdateFormate[2];
    let fromdatemerged = fdate + "" + fmonth + "" + fyear;
    // console.log("from date", fromdatemerged);

    // console.log(parseInt(fmonth) + 1);
    if (
      year == fyear &&
      ((month == fmonth && date > fdate) ||
        (parseInt(fmonth) + 1 == month && 30 - parseInt(fdate) + date < 30))
    ) {
      // console.log("correct*************");
      setfrom(fromdate);
    } else {
      alert("you cannt access news from this date");
      setfrom("");
    }
  };
  const handletodate = (e) => {
    // console.log(from);
    if (from.length > 0) {
      let fromdate = from;
      let fromdateFormate = fromdate.split("-");
      let fyear = fromdateFormate[0];
      let fmonth = fromdateFormate[1];
      let fdate = fromdateFormate[2];
      let fromdatemerged = fdate + "" + fmonth + "" + fyear;
      // console.log("from date", fromdatemerged);

      const todate = e.target.value;
      let todateFormate = todate.split("-");
      let tyear = todateFormate[0];
      let tmonth = todateFormate[1];
      let tdate = todateFormate[2];
      let tromdatemerged = tdate + "" + tmonth + "" + tyear;
      // console.log("to date", todateFormate);
      // console.log("****************************************");
      const daysleftfrompre = 30 - parseInt(fdate);
      const daysleftinpresent = parseInt(tdate);
      // console.log("total days", daysleftfrompre + daysleftinpresent);
      if (
        tyear == fyear &&
        (tmonth == fmonth ||
          (parseInt(fmonth) + 1 == tmonth &&
            daysleftfrompre + daysleftinpresent < 30))
      ) {
        // console.log("correct hai#############################");
        // // console.log(todate);
        setto(todate);
      } else {
        alert("Interval cant be more than 1 month");

        setto("");
      }
    } else {
      alert("select previous date");
      setto("");
    }
  };
  const handleclear = () => {
    setto("");
    setfrom("");
    setsortvalue("");
    setopenfilter(false);
  };
  const handlesearch = async () => {
    // console.log();
    let link;
    if (from.length === 0 && to.length === 0) {
      link = `https://newsapi.org/v2/everything?q=${KeywordToSearch}`;
    } else if (from.length !== 0 && to.length !== 0) {
      link = `https://newsapi.org/v2/everything?q=${KeywordToSearch}&from=${from}&to=${to}`;
    } else {
      alert("set dates correctly");
    }
    if (sortvalue.length !== 0) {
      link =
        link + `&sortBy=${sortvalue}&apiKey=66eef729b7604d448c2b3f820baef4a2`;
    } else {
      link = link + `&apiKey=66eef729b7604d448c2b3f820baef4a2`;
    }
    await axios({
      method: "GET",
      url: link,
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => {
      // console.log(res.data.articles);
      const data = res.data.articles;
      setSearchedNews(data);
      setopenfilter(false);
    });
  };

  console.log(sortByList);
  const handlesort = (e) => {
    setsortvalue(e.target.value);
  };
  return (
    <div className="w-[100%] fixed top-0 h-full snap-none z-50 bg-[#131722e9] text-red-600  ">
      {/* bg-[#131722c3] */}
      <div className="text-black bg-white rounded-md border-2 border-white w-[70%] md:w-[50%] mx-auto mt-[40px] md:mt-[200px] p-5">
        <div className="flex flex-row-reverse font-semibold">
          <button onClick={handlemodal}>x</button>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 p-3">
          <div className="flex p-2 justify-between m-1 flex-wrap z-50">
            <label className="font-semibold text-md text-[18px] sm:text-[25px]">
              From Date:
            </label>
            <input
              type="date"
              onChange={handleFromdate}
              placeholder={from}
              className="text-[15px] w-[100%] px-1 text-black bg-[#cfcfcf]"
            ></input>
          </div>
          <div className="flex p-2 justify-between m-1 flex-wrap z-50">
            <label className="font-semibold text-md text-[18px] sm:text-[25px]">
              To Date:
            </label>
            <input
              type="date"
              onChange={handletodate}
              placeholder={to}
              className="text-[15px] px-1 w-[100%] text-black bg-[#cfcfcf]"
            ></input>
          </div>
         
        </div>

        <div>
      
        <div className="flex p-2 w-[80%] justify-between m-1 flex-wrap z-50">
            <label className="font-semibold text-md text-[18px] sm:text-[25px]">
              Sort By:
            </label>
            <div className="flex flex-wrap ">
              {sortByList.map((value, key) => {
                return (
                  <div className="bg-[#cfcfcf] m-1 px-1 rounded-md">
                    <button
                      className="font-medium text-md md:text-[18px] text-[13px]"
                      onClick={handlesort}
                      value={value}
                    >
                      {value}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="text-center mx-auto font-semibold m-3 bg-[#131722] rounded-md text-white w-[100px] p-1 hover:bg-[#414141]">
            <button onClick={handlesearch}>search</button>
          </div>
          <div className="text-center mx-auto font-semibold m-3 bg-[#131722] rounded-md text-white w-[100px] p-1 hover:bg-[#414141]">
            <button onClick={handleclear}>clear</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filtermodal;
