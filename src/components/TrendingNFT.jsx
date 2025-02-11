import { timeLeft, TrendingNFTData } from "../constant/data.jsx";
import { useState, } from "react";
import logoprice from "../assets/FeatureCollection/images/logoprice.webp";
import downArrow from "../assets/TrendingNFT/icons/downArrow.svg";

import { useEffect } from "react";

const TrendingNFT = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let hideHandler = ()=>{
      setIsOpen(false);
    }
    document.addEventListener("mousedown", hideHandler)
  })


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center relative z-50">
      <div className="container mx-auto flex flex-col gap-4 lg:gap-10 max-sm:px-5 sm:px-12 lg:px-20 py-10">
        {/* 1st main*/}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
          <h2>Trending nft’s</h2>
          <div className="inline-block lg:pr-53 xl:pr-30 2xl:pr-5" >
            <button
              onClick={toggleDropdown}
              className="navbtn-size border border-grd text-main navbtn-border  px-4 py-1 3xl:px-6 3xl:py-2 cursor-pointer font-medium flex items-center gap-1">
              <span>Last 30 Minutes</span><span><img src={downArrow} alt="" /></span>
            </button>

            {isOpen && (
              <div className="absolute z-50 w-54 bg-inverted border-2 border-muted rounded-lg shadow-lg">
                <ul className="py-2">
                  {timeLeft.map((item) => (
                    <li key={item} className="font-secondary px-4 py-2 hover:bg-gray-100 cursor-pointer" >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>


        {/* 2nd main */}
        <div className="grid max-md:grid-cols-1 max-xl:grid-cols-2 max-2xl:grid-cols-3 grid-cols-4 gap-10 relative w-fit">
          {TrendingNFTData.map((item, index) => (
            <div
              className="px-2 py-6 drop-shadow-xl"
              key={index}
              style={{
                backgroundImage: `url(${item.frame})`,
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex flex-col gap-2 relative">
                <div className="flex gap-2 items-center">
                  <img src={item.personImg} alt="" />
                  <div>
                    <h6>{item.name}</h6>
                    <p className="text-para-light">{item.username}</p>
                  </div>
                </div>
                <img src={item.url} alt="" className="w-fit rounded-xl" />

                {/* buy */}
                <button className="background-grad text-inverted px-4 py-2 cursor-pointer flex items-center font-secondary font-medium bg-inverted  shrink-0   gap-1 text-l absolute bottom-4 left-4">
                  Buy
                </button>
                {/* price */}
                <div className="navbtn-size navbtn-border font-medium bg-inverted py-2 px-4 shrink-0 cursor-pointer text-secondary flex items-center gap-1 text-small absolute bottom-4 left-41">
                  <p className="text-l ">Price:</p>
                  <span className="bg-black rounded-full">
                    <img src={logoprice} alt="" />
                  </span>
                  <p className="text-l text-para-light">142.02</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingNFT;
