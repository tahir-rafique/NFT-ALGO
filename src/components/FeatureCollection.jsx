import logoprice from "../assets/FeatureCollection/images/logoprice.webp";
import reactangle from "../assets/FeatureCollection/images/reactangle.webp";
import arrowUp from "../assets/FeatureCollection/icons/arrowUp.svg";
import arrowDown from "../assets/FeatureCollection/icons/arrowDown.svg";
import { FeatureCollectionData } from "../constant/data.jsx";
import arrowFram from "../assets/FeatureCollection/images/arrowFrame.webp";
import { useRef } from "react";
import ButtonMain from './../shared/ButtonMain';
import gridLef from "../assets/FeatureCollection/images/featuresLeftElicp.webp"
const FeatureCollection = () => {

  const sliderRef = useRef(null);
  
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 300;
    }
  };
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 300;
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
          <div className="max-lg:flex-col flex flex-row justify-between lg:items-center gap-2">
            <h6 className="text-para-light font-secondary font-light">
              Explore our exclusive featured collection, showcasing innovative campaigns and creative <br /> storytelling from top brands around the world.
            </h6>

            <div className="flex gap-2">
              <span
                className="p-5 cursor-pointer"
                style={{ backgroundImage: `url(${reactangle})`, backgroundRepeat: "no-repeat" }}
                onClick={scrollLeft}
              >
                <img src={arrowDown} alt="" />
              </span>
              
              <span
                className="p-5 cursor-pointer"
                style={{ backgroundImage: `url(${reactangle})`, backgroundRepeat: "no-repeat" }}
                onClick={scrollRight}
              >
                <img src={arrowUp} alt="" />
              </span>
            </div>
          </div>


          <div className="">
            <div className="flex gap-6 scroll-smooth" ref={sliderRef}>
              {FeatureCollectionData.map((item, index) => (
                <div
                  key={index}
                  className="px-2 py-6 relative drop-shadow-md flex flex-col gap-2 shrink-0 "
                  style={{ backgroundImage: `url(${item.frame})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", width: "318px", }}
                >
                  {/* person section */}
                  <div className="flex gap-2 items-center">
                    <img src={item.personImg} alt="" />
                    <div>
                      <h6 className="font-light">{item.name}</h6>
                      <p className="text-xs text-para-light">{item.username}</p>
                    </div>
                  </div>
                  {/* Image */}
                  <div className="">
                    <img src={item.url} alt="" className="" />
                  </div>
                  <div className="absolute bottom-8 left-4">
                    <ButtonMain text="Buy" />
                  </div>

                  <div className="navbtn-size navbtn-border font-medium bg-inverted py-2 px-4 shrink-0 cursor-pointer text-secondary flex items-center gap-1 text-small absolute bottom-8 left-41 xl:py-3">
                    <p className="text-l">Price:</p>
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

      <img src={arrowFram} alt="" className="absolute right-0 xl:top-480 lg:top-390 max-md:hidden " />

      <img src={gridLef} alt="" className="absolute left-0 top-350  max-md:hidden z-1 " />

    </div>
  );
};

export default FeatureCollection;



