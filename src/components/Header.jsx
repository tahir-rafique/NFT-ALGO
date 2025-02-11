import Himg1 from "../assets/Header/images/Himg1.webp";
import Himg2 from "../assets/Header/images/Himg2.webp";
import Himg3 from "../assets/Header/images/Himg3.webp";
import Himg4 from "../assets/Header/images/Himg4.webp";
import Himg5 from "../assets/Header/images/Himg5.webp";
import elicpBg from "../assets/Header/images/HeaderEllicpBG.webp"
import leftHand from "../assets/Header/images/leftHand.png"
import rightHand from "../assets/Header/images/rightHand.png"
import "../styles/animations.css"

const Header = () => {
    return (
        <div className="flex justify-center relative">
            <div className="container mx-auto max-sm:px-5 sm:px-12 lg:px-20 3xl:py-10 ">
                <div className="flex flex-col gap-0 max-lg:pt-0 max-lg:pb-0 pt-10  py-60 relative z-50">
                    <div className="text-center flex flex-col gap-3 relative z-50">
                        <h1 className=" font-normal text-secondary text-center uppercase">discover, create & <br /> sell artworks.</h1>
                        <h6 className="text-light text-center font-secondary">Discover and trade unique digital art pieces on our NFT website, <br /> where creativity meets blockchain technology.</h6>
                    </div>
                    <div className="flex justify-center relative py-40 sm:py-80">
                        <img src={Himg1} alt="" className="absolute left-[20%] top-4 max-lg:left-[10%] max-sm:left-[13%] max-sm:h-64 z-10 cardOneFive-animation" />
                        <img src={Himg2} alt="" className="absolute left-[26%] top-4 max-lg:left-[20%] max-sm:left-[18%] max-sm:h-64 z-20 cardTwoFour-animation" />
                        <img src={Himg3} alt="" className="updownCard-animation absolute left-[38%] top-2 z-50 max-lg:left-[30%] max-sm:left-[26%] max-sm:h-66" />
                        <img src={Himg4} alt="" className="absolute left-[50%] top-4 z-10 max-lg:left-[42%] max-sm:left-[38%] max-sm:h-64 cardTwoFour-animation" />
                        <img src={Himg5} alt="" className="absolute left-[60%] top-4 max-lg:left-[56%]
                        max-sm:left-[46%]  max-sm:h-64 z-8 cardOneFive-animation" />

                        {/* BG elicp */}
                    </div>
                    <img src={elicpBg} alt="" className="absolute z-1 top-58 left-24 lg:left-44 2xl:left-94 2xl:top-74 h-120 max-lg:hidden" />
                </div>

            </div>

            <img src={leftHand} alt="" className="leftHand-anime absolute z-1  top-[50%] max-lg:hidden size-[550px] -left-20" />
            <img src={rightHand} alt="" className="leftRight-anime absolute z-1 top-[50%] max-lg:hidden size-[550px] -right-20" />

        </div>
    )
}

export default Header;