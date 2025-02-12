import { timeLeft, TrendingNFTData } from "../constant/data.jsx";
import logoprice from "../assets/FeatureCollection/images/logoprice.webp";
import downArrow from "../assets/TrendingNFT/icons/downArrow.svg";
import { useState, useEffect, useRef } from "react";

const TrendingNFT = () => {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((isOpen) => !isOpen)
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) { setIsOpen(false) }
    };
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    };
  });


  return (
    <div className="flex justify-center relative z-50">
      <div className="container mx-auto max-sm:px-5 sm:px-12 lg:px-20 py-10">


        <div className=" flex flex-col max-sm:items-center gap-4 lg:gap-10">


          {/* 1st main*/}
          <div className="flex justify-between items-center gap-10">
            <h2>Trending nft’s</h2>
            <div ref={dropdownRef} className="inline-block" >
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
          <div className='grid max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 xl:grid-cols-4 gap-5 '>
            {
              TrendingNFTData.map((item, index) => (
                <div key={index} className='p-1 h-full pb-8'>
                  <div className="pt-6 px-3 drop-shadow-md max-sm:w-84 max-sm:pb-4"
                    style={{
                      backgroundImage: `url(${item.frame})`, backgroundRepeat: "no-repeat",
                      backgroundSize: "cover"
                    }}
                  >
                    <div className='flex flex-col gap-3'>
                      {/* person wraper */}
                      <div className="flex gap-2 items-center w-full">
                        <img src={item.personImg} alt="" />
                        <div>
                          <h6>{item.name}</h6>
                          <p className='text-secondary'>{item.username}</p>
                        </div>
                      </div>

                      <div className='relative'>
                        <img src={item.url} alt="" className='max-md:w-full max-md:h-fit rounded-2xl' />

                        <a className="text-l font-secondary navbtn-border background-grad text-inverted cursor-pointer  w-fit absolute  bottom-14 left-2 px-4 py-2">
                          Buy
                        </a>

                        <div className="navbtn-size navbtn-border font-medium bg-inverted py-2 px-4 shrink-0 cursor-pointer text-secondary flex items-center gap-1 text-small absolute bottom-14 right-5">
                          <p className="text-l ">Price:</p>
                          <span className="bg-black rounded-full">
                            <img src={logoprice} alt="" />
                          </span>
                          <p className="text-l text-para-light">142.02</p>
                        </div>



                      </div>
                    </div>

                  </div>
                </div>
              ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default TrendingNFT;
