import React, { useEffect, useState } from "react";

function Testfile() {
  // console.log(value)

  const [Size, setSize] = useState(window.innerWidth);


  return (
    <div className="bg-white w-[330px] h-[160px] m-2 lg:m-5 rounded-md mx-auto">
      <h1>{Size}</h1>
    </div>
  );
}

export default Testfile;
