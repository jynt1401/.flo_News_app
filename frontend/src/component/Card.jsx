import React from "react";

function Card({ value }) {
  // console.log(value)
  return (
    <a href={value.url} target="__href">

    <div className="bg-white shadow-xl w-[330px] h-[160px] m-2 lg:m-5 rounded-md mx-auto">
      <div className="text-[15px] lg:text-[14px] 2xl:text-[16px] text-black text-[#436f6d] font-bold ml-2 mr-12 truncate">
        {value.title}
      </div>
      <div className="flex">
        <p className="leading-5 font-semibold w-[50%] text-[12px] lg:text-[14px] 2xl:text-[14px] m-2 ml-3 h-[100px] overflow-hidden text-pretty">
          {value.description}
        </p>
        <div
          className="bg-cover w-[160px] m-2 h-[100px] bg-black mt-1  "
          style={{ backgroundImage: `url(${value.urlToImage})` }}
          ></div>
      </div>
    </div>
    </a>
  );
}

export default Card;
