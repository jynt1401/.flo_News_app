import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NewsContext } from "../../context/NewsData";

function NavOther() {
  const navigate = useNavigate();

  const cururl = window.location.href;

  const handleclick1 = () => {
    console.log("clicked");
    navigate("/");
  };
  const handleclick2 = () => {
    console.log("clicked");
    navigate("/search");
  };

  // console.log(window.location.href)
  const { sethomeState, homeState } = useContext(NewsContext);

  if (cururl === "http://localhost:3000/search") {
    sethomeState(false);
  } else {
    sethomeState(true);
  }
  return (
    <div className="bg-[#121216] w-[100%] z-10  fixed top-0 h-[8vh] flex justify-between">
      <div className="font-bold mt-2 ml-5 text-white">.flo</div>
      <div className="font-bold mt-2 ml-5 mr-5 font-semibold text-[20px]">
        <button className={`mr-3  ${homeState? 'text-white' : 'text-[#616161]'}`} onClick={handleclick1}>Home</button>
        <button className={`mr-3  ${homeState? 'text-[#616161]' : 'text-white'}`} onClick={handleclick2}>Search</button>
        <button className="text-[#616161]">Profile</button>
      </div>
    </div>
  );
}

export default NavOther;
