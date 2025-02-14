import logoprice from "../assets/FeatureCollection/images/logoprice.webp";
import reactangle from "../assets/FeatureCollection/images/reactangle.webp";
import arrowUp from "../assets/FeatureCollection/icons/arrowUp.svg";
import arrowDown from "../assets/FeatureCollection/icons/arrowDown.svg";
import { FeatureCollectionData } from "../constant/data.jsx";
import arrowFram from "../assets/FeatureCollection/images/arrowFrame.webp";
import { useRef } from "react";
import gridLef from "../assets/FeatureCollection/images/featuresLeftElicp.webp"


const FeatureCollection = () => {

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 360;
    }
  };
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 370;
    }
  };

  return (
    <div>
      <div className="flex justify-center relative z-50">
        <div className="container mx-auto flex flex-col gap-3 max-sm:px-5 sm:px-12 lg:px-20 py-10">
          {/* 1st */}
          <div>
            <h2>Featured Collection</h2>
          </div>

          {/* 2nd */}
          <div className="flex flex-row justify-between lg:items-center gap-2">
            <h6 className="text-para-light font-secondary font-light max-w-[60%]">
              Explore our exclusive featured collection, showcasing innovative campaigns and creative <br /> storytelling from top brands around the world.
            </h6>

            <div className="flex gap-2 justify-end ">
              <span
                className="cursor-pointer size-16 relative"
                style={{ backgroundImage: `url(${reactangle})`, backgroundRepeat: "no-repeat" }}
                onClick={scrollLeft}
              >
                <img src={arrowDown} alt="" className="absolute left-[50%] top-[50%]  translate-[-50%]" />
              </span>

              <span
                className="cursor-pointer size-16 relative"
                style={{ backgroundImage: `url(${reactangle})`, backgroundRepeat: "no-repeat" }}
                onClick={scrollRight}
              >
                <img src={arrowUp} alt="" className="absolute top-[50%] translate-[-50%] left-[50%]" />
              </span>
            </div>
          </div>

          <div className="p-1">
            <div className="flex px-3 gap-15 scroll-smooth" ref={sliderRef}>
              {FeatureCollectionData.map((item, index) => (
                <div
                  key={index}
                  className="px-3 py-6 relative drop-shadow-md flex flex-col gap-2 shrink-0 max-lg:max-w-[310x] h-full"
                  style={{ backgroundImage: `url(${item.frame})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", }}
                >
                  <div className="flex gap-2 items-center">
                    <img src={item.personImg} alt="" />
                    <div>
                      <h6 className="font-light">{item.name}</h6>
                      <p className="text-xs text-para-light font-light">{item.username}</p>
                    </div>
                  </div>
                  <div className="">
                    <img src={item.url} alt="" className="" />
                  </div>
                  <button className="background-grad text-inverted px-4 py-2 cursor-pointer flex items-center font-secondary font-medium bg-inverted  shrink-0   gap-1 text-l absolute bottom-8 left-4">
                    Buy
                  </button>
                  <div className="  font-medium bg-inverted py-2 px-4 shrink-0 cursor-pointer text-secondary flex items-center navbtn-border gap-1 text-l absolute bottom-8 left-41">
                    <p className="text-l ">Price:</p>
                    <span className="bg-black rounded-full">
                      <img src={logoprice} alt="" />
                    </span>
                    <p className="text-l text-para-light">142.02</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Arrow Fram */}
      <img src={arrowFram} alt="" className="absolute right-0 xl:top-480 lg:top-390 max-lg:hidden size-110" />

      <img src={gridLef} alt="" className="absolute left-0 top-350  max-md:hidden z-1 " />

    </div>
  );
};

export default FeatureCollection;



