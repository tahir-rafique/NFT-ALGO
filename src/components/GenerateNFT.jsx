import IconGenerate from "../assets/GenerateNFT/icons/IconGenerat.svg"

import g1 from "../assets/GenerateNFT/images/g1.webp"
import g2 from "../assets/GenerateNFT/images/g2.webp"
import g3 from "../assets/GenerateNFT/images/g3.webp"
import g4 from "../assets/GenerateNFT/images/g4.webp"
import g5 from "../assets/GenerateNFT/images/g5.webp"
import g6 from "../assets/GenerateNFT/images/g6.webp"
import g7 from "../assets/GenerateNFT/images/g7.webp"
import g8 from "../assets/GenerateNFT/images/g8.webp"
import ellipce from '../assets/GenerateNFT/images/generateCenterEllicpe.webp'

import leftGrid from "../assets/GenerateNFT/images/leftGridgenerate.webp"

const GenerateNFT = () => {
    return (
        <div className="flex justify-center">

            <div className="container mx-auto max-sm:px-5 sm:px-12 lg:px-20 py-10">

                <div className="flex flex-col justify-center items-center gap-2 relative">
                    {/* main content */}
                    <h2 className="text-center line-height-l">Turn your imagination <br /> into digital Asset </h2>

                    <div className="max-lg:py-10 py-64 lg:py-84 relative ">


                        <div className="rounded-xl flex justify-between items-center gap-4 sm:gap-10 lg:gap-50 2xl:gap-70 3xl:gap-80 px-2 lg:px-4  py-3 bg-inverted drop-shadow-xl relative z-50">
                            <input className="font-secondary text-light" placeholder="Fantasy Creature holding......" />
                            <a href="#" className="navbtn-size text-small navbtn-border font-medium background-grad text-inverted px-4 py-2 shrink-0 cursor-pointer flex gap-1">
                                <span>Generate</span>
                                <img src={IconGenerate} alt="no img" />
                            </a>
                        </div>

                        {/* elicp */}
                        <img src={ellipce} alt="" className="absolute top-30 left-10 z-1 size-120 max-lg:hidden" />
                    </div>

                    {/* moneky skatboard */}
                    <img src={g1} alt="" className="max-lg:hidden absolute top-40 left-10" />
                    {/* eagale orange */}

                    <img src={g2} alt="" className="max-lg:hidden  absolute top-145  left-10" />
                    {/* Gril */}

                    <img src={g3} alt="" className="max-lg:hidden absolute top-170  left-85" />

                    {/* rbg Cat */}

                    <img src={g4} alt="" className="max-lg:hidden absolute bottom-145  right-10" />

                    {/* Big monk with banana */}

                    <img src={g5} alt="" className="max-lg:hidden absolute bottom-70  right-20" />


                    {/*  dog */}

                    <img src={g6} alt="" className="max-lg:hidden absolute top-35  right-85" />


                    {/*  eagel purple */}

                    <img src={g7} alt="" className="max-lg:hidden absolute bottom-25  right-95" />

                    {/*  cartoon */}

                    <img src={g8} alt="" className="max-lg:hidden absolute top-90  left-30" />


                </div>
            </div>

            <img src={leftGrid} alt="" className="left-0 absolute" />
        </div>



    )
}

export default GenerateNFT
