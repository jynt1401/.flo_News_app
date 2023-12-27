import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";
import { GoHome } from "react-icons/go";
import { IoSearchSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { BiSolidSearch } from "react-icons/bi";
import { NewsContext } from "../../context/NewsData";


function NavMob() {
  const navigate = useNavigate();

  const cururl=window.location.href;
 
 

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

  if(cururl=== "http://localhost:3000/search"){
    sethomeState(false)
  }
  else{
    sethomeState(true)

  }
  return (
    <div className="bg-[#fafafa] border-t-2 border-[#ebebeb] w-[100%] text-[#406d6d] fixed bottom-0 h-[8vh] ">
      <div className="w-[70%] mx-auto mt-3 grid grid-cols-3 text-[25px]">
        <button onClick={handleclick1} className="mx-auto text-black flex">
          {!homeState?<><GoHome /></>:<><GoHomeFill /></>}
          
          
        </button>
        <button onClick={handleclick2} className="mx-auto text-black flex">
        {homeState?<> <IoIosSearch /></>:<> <BiSolidSearch /></>}
         
         
        </button>
        <button className="mx-auto text-black ">
          <IoIosAddCircleOutline />
        </button>
      </div>
    </div>
  );
}

export default NavMob;
