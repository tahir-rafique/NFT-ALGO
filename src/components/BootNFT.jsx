import boostIcon from "../assets/BoostNFT/icons/boostIcon.svg"
import subtract from "../assets/BoostNFT/images/subtract.webp"
import person from "../assets/BoostNFT/images/person.webp"
import monkey from "../assets/BoostNFT/images/monkey.webp"
import logoprice from "../assets/FeatureCollection/images/logoprice.webp";
import elipBoost from "../assets/BoostNFT/images/boostElicpMain.webp"
import upArr from "../assets/BoostNFT/images/UpArrowBoost.webp"
import sArr from "../assets/BoostNFT/images/Sarrow.webp"
import boostTwo from "../assets/BoostNFT/images/boost2.webp"
import boostThree from "../assets/BoostNFT/images/boost3.webp"
import elipBoostLeft from "../assets/BoostNFT/images/boostElicpLeft.webp"

const BootNFT = () => {
    return (
        <div className="flex justify-center relative">
            <div className="container mx-auto max-sm:px-5 sm:px-12 lg:px-20 py-10">
                <div className="flex max-lg:flex-col gap-10">
                    <div className="flex flex-col justify-center gap-24 ">
                        <div className="flex flex-col gap-4">
                            <h2 className="line-height-l">Boost Your NFTs: <br />
                                Enhance Visibility <br /> and Value</h2>
                            <h6 className="font-secondary leading-tight tracking-tight text-para-light">The Boost feature is a premium service that allows NFT creators and <br /> collectors to elevate their listings on our marketplace. By boosting an <br /> NFT, you can ensure it appears prominently in search results, <br /> featured sections, and on the homepage, maximizing exposure to <br /> potential buyers.</h6>
                        </div>
                        <div>
                            <button className="navbtn-size  navbtn-border font-medium background-grad text-inverted px-8 py-3 cursor-pointer flex gap-2">
                                <span>
                                    Boost
                                </span>
                                <img src={boostIcon} alt="" />
                            </button>
                        </div>
                    </div>

                    <div className="w-[50%] max-md:py-0 py-74 max-lg:py-60 relative">
                        <div className="absolute top-0 max-lg:left-10 left-22 z-50 max-md:hidden">
                            <div className="px-4 py-8 relative" style={{ backgroundImage: `url(${subtract})`, backgroundRepeat: "no-repeat", backgroundSize: "" }}>
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                        <img src={person} alt="" />
                                        <div>
                                            <p>Stella Nova</p>
                                            <p className="text-xs text-para-light">@Stella Nova</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={monkey} alt="" />
                                    </div>
                                </div>

                                <button className="flex justify-between gap-2 font-secondary bg-inverted px-2 py-2 rounded-lg absolute bottom-10 left-6 text-xs">
                                    <span className="font-medium">In Stock</span> <span className="text-para-light">7</span>
                                </button>

                                <button className="flex  gap-2 font-secondary bg-inverted px-2 py-2 rounded-lg absolute bottom-10 left-34 text-xs">
                                    <span className="font-medium">Price:</span><span className="bg-black rounded-full">
                                        <img src={logoprice} alt="" />
                                    </span> <span className="text-para-light">142.02</span>
                                </button>
                            </div>
                        </div>
                        <img src={upArr} alt="" className="absolute top-2 left-78 z-50 max-lg:hidden" />
                        <img src={sArr} alt="" className="absolute top-64 left-8 z-50 max-md:hidden" />

                        <img src={elipBoost} alt="" className="absolute top-0 size-120 z-1 max-md:hidden" />

                        <img src={boostThree} alt="" className="absolute bottom-10 left-30 h-38 max-xl:hidden" />


                        <img src={boostTwo} alt="" className="absolute right-22 bottom-0 h-54 max-lg:h-34 max-md:hidden" />


                    </div>


                </div>
            </div>
            <img src={elipBoostLeft} alt="" className="absolute top-0 size-160 z-1 left-0 max-md:size-94" />
        </div>
    )
}

export default BootNFT