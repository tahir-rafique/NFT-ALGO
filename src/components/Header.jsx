import Himg1 from "../assets/Header/images/Himg1.webp";
import Himg2 from "../assets/Header/images/Himg2.webp";
import Himg3 from "../assets/Header/images/Himg3.webp";
import Himg4 from "../assets/Header/images/Himg4.webp";
import Himg5 from "../assets/Header/images/Himg5.webp";
import elicpBg from "../assets/Header/images/HeaderEllicpBG.webp"
import leftHand from "../assets/Header/images/left.webp"
import rightHand from "../assets/Header/images/right.webp"
import "../styles/animations.css"

const Header = () => {
    return (
        <div className="flex justify-center relative">
            <div className="container mx-auto max-sm:px-5 sm:px-12 lg:px-20 3xl:py-10 ">

                <div className="flex flex-col gap-0 relative py-10  xl:py-34  ">
                    <div className="text-center flex flex-col gap-3">
                        <h1 className=" font-normal text-secondary text-center uppercase">discover, create & <br /> sell artworks.</h1>
                        <h6 className="text-light text-center font-secondary">Discover and trade unique digital art pieces on our NFT website, <br /> where creativity meets blockchain technology.</h6>
                    </div>
                    <div className="flex justify-center relative py-40 sm:py-60">
                        <img src={Himg1} alt="" className="absolute left-[20%] top-4 max-lg:left-[10%] max-sm:left-[13%] max-sm:h-64 z-10 right-left-animation1" />
                        <img src={Himg2} alt="" className="absolute left-[26%] top-4 max-lg:left-[20%] max-sm:left-[18%] max-sm:h-64 z-20 right-left-animation2" />
                        <img src={Himg3} alt="" className="updown-animation absolute left-[38%] top-2 z-50 max-lg:left-[30%] max-sm:left-[26%] max-sm:h-66" />
                        <img src={Himg4} alt="" className="absolute left-[50%] top-4 z-10 max-lg:left-[42%] max-sm:left-[38%] max-sm:h-64 right-left-animation4" />
                        <img src={Himg5} alt="" className="absolute left-[60%] top-4 max-lg:left-[56%]
                        max-sm:left-[46%]  max-sm:h-64 z-8 right-left-animation5" />

                        {/* BG elicp */}
                    </div>
                    <img src={elicpBg} alt="" className="absolute z-3 top-54 left-24 lg:left-44 
                     2xl:left-94 2xl:top-74 h-120 max-lg:hidden"  />
                </div>

            </div>

            <img src={leftHand} alt="" className="absolute left-0 top-[40%]
            max-3xl:size-94 
            max-lg:size-74
            max-sm:size-44
            " />
            <img src={rightHand} alt="" className="absolute right-0 top-[40%]
             max-3xl:size-94 
             max-lg:size-74
             max-sm:size-44 

            " />

        </div>
    )
}

export default Header;