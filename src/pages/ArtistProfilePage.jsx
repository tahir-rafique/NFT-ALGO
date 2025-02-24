import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import profilebanner from "../assets/ArtistProfilePage/images/profilebanner.webp"
import profileImage from "../assets/ArtistProfilePage/images/profileImage.webp"
import mpf from "../assets/ArtistProfilePage/images/mpf.webp"
import { PixcaioPageData, timeLeft } from "../constant/data"

//
import websiteIcon from '../assets/Pixacio/icons/internet.webp'
import twitter from '../assets/Pixacio/icons/twitterIco.webp'
import binculars from '../assets/Pixacio/icons/bincularsIco.webp'
import desIco from '../assets/Pixacio/icons/discord.webp'
import logoprice from "../assets/FeatureCollection/images/logoprice.webp";
import { useEffect, useRef, useState } from "react"
import downArrow from "../assets/TrendingNFT/icons/downArrow.svg";


const ArtistProfilePage = () => {

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
        <>
            <Navbar />
            <div className="flex justify-center">
                <div className="container mx-auto max-sm:px-5 sm:px-8 lg:px-20">
                    {/* Profile banner Container */}
                    <div className="profile-container pt-10 pb-2 flex flex-col gap-3 relative">

                        {/*  banner */}
                        <img src={profilebanner} alt="" className="profile-banner" />

                        <img src={profileImage} alt="" className="profile-image  absolute
                         max-sm:top-[58%] max-lg:top-[64%] max-xl:top-[70%] top-[73%] left-[50%] translate-[-50%] max-2xl:size-20" />


                        {/* name & followers */}
                        <div className="profile-details flex flex-col items-center pt-10">
                            <h3>William Akarana</h3>
                            <div className="flex gap-10 max-sm:gap-2">
                                <div className="followers flex gap-2 items-center">
                                    <h5 className="font-secondary font-medium">99</h5>
                                    <p className="text-para-light">Followers</p>
                                </div>

                                <div className="followers flex gap-2 items-center">
                                    <h5 className="font-secondary font-medium">26</h5>
                                    <p className="text-para-light">Following</p>
                                </div>

                                <div className="followers flex gap-2 items-center">
                                    <h5 className="font-secondary font-medium">12</h5>
                                    <p className="text-para-light">items</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* profile Detials wraper*/}
                    <div className='2xl:flex-row flex flex-col  gap-10 justify-between py-10 pb-4 lg:pb-30'>

                        {/* hero-Left */}
                        <div className="hero-left p-1  flex justify-center">
                            <img src={mpf} alt="" className=' bg-[#fff] shadow-md p-3 rounded-2xl' />
                        </div>

                        {/* hero-Right */}
                        <div className="hero-right flex flex-col items-center lg:justify-end 2xl:w-[55%]">

                            {/* right top */}
                            <div className='right-top-wraper flex flex-col gap-8  w-full'>
                                <h2>Pixacio</h2>

                                <div className='flex flex-wrap max-lg:flex-col gap-10 p-1'>

                                    <div className='bg-inverted px-4 py-3 rounded-md flex justify-between drop-shadow-md max-w-[330px] gap-42 items-center'>
                                        <p className='text-para-light'>Items listed</p>
                                        <p className='text-para-light'> <b> 3,027</b></p>
                                    </div>

                                    <div className='bg-inverted px-4 py-3 rounded-md flex justify-between drop-shadow-md max-w-[330px] gap-36 items-center'>
                                        <p className='text-para-light'>Num of Sold Items</p>
                                        <p className='text-para-light'> <b>120</b></p>
                                    </div>

                                    <div className='bg-inverted px-4 py-3 rounded-md flex justify-between drop-shadow-md max-w-[330px] gap-44 items-center '>
                                        <p className='text-para-light'>Vol FRY</p>
                                        <p className='text-para-light'><b>18.5 FRY</b></p>
                                    </div>


                                </div>


                                <hr className='border-b-2 border-main max-w-[1100px]' />
                            </div>


                            {/* right bottom */}
                            <div className='right-bottom-wraper py-2 '>
                                <div className='flex  flex-wrap gap-4 py-4 px-1'>
                                    {/* website */}
                                    <div className='bg-inverted h-fit rounded-md drop-shadow-md  px-2 py-1  '>
                                        <img src={websiteIcon} alt="" />
                                    </div>

                                    {/* twitter */}
                                    <div className='bg-inverted h-fit rounded-md drop-shadow-md  px-2 py-[2px] min-w-[110px] '>
                                        <div className='flex justify-between items-center '>
                                            <img src={twitter} alt="" />
                                            <div className='text-[7px] bg-[#FF9292] h-fit py-1 px-2 rounded-[2px]'>
                                                12.3k
                                            </div>
                                        </div>
                                    </div>


                                    {/* Discord */}
                                    <div className='bg-inverted h-fit rounded-md drop-shadow-md  px-2 py-1  '>
                                        <img src={desIco} alt="" />
                                    </div>

                                    {/* Link */}
                                    <div className='bg-inverted h-fit rounded-md drop-shadow-md  px-2 py-1 min-w-[110px] '>
                                        <div className='flex justify-between items-center '>
                                            <img src={binculars} alt="" />
                                            <div className='text-[7px] bg-[#FF9292] h-fit py-1 px-2 rounded-[2px]'>
                                                12.3k
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className='text-para-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod vulputate ipsum, non molestie magna facilisis a. Cras tincidunt sem sed lorem dapibus laoreet. Curabitur vel lectus purus. In gravida eros ac aliquam facilisis. Suspendisse at elementum metus. Proin elementum maximus placerat. Suspendisse sapien justo, interdum sit amet sollicitudin quis, porttitor a metus. In eu accumsan dolor, eu venenatis eros. Aliquam erat volutpat. Etiam suscipit placerat mi. Mauris diam purus, sagittis eu feugiat eu, sodales a quam. Cras elit enim. </p>

                            </div>
                        </div>
                    </div>

                    {/* MEnu Section */}
                    <div className='menu-section max-sm:justify-center flex justify-between items-center py-10 flex-wrap gap-4'>
                        {/* Menu */}
                        <div className="flex gap-4 max-md:justify-center flex-wrap lg:gap-12 items-center font-secondary  text-secondary">
                            <h6 className='text-main border-2 px-4 py-2 rounded-md w-fit'>All</h6>
                            <h6>Generated</h6>
                            <h6>Minted </h6>
                            <h6>On Sale</h6>
                            <h6>Auction</h6>
                            <h6>Sold</h6>

                        </div>

                        {/* Dropdown menu */}
                        <div ref={dropdownRef} className="inline-block " >
                            <button
                                onClick={toggleDropdown}
                                className="navbtn-size border border-grd text-main navbtn-border  px-4 py-2 3xl:px-6 3xl:py-2 cursor-pointer font-medium flex items-center gap-1">
                                <span>
                                    <h6>
                                        Newest
                                    </h6>
                                </span>
                                <span>
                                    <img src={downArrow} alt="" />
                                </span>
                            </button>

                            {isOpen && (
                                <div className="absolute z-50 max-sm:w-33 w-45 bg-inverted border-2 border-muted rounded-lg shadow-lg ">
                                    <ul className="py-2">
                                        {timeLeft.map((item) => (
                                            <p key={item} className="font-secondary px-4 py-2 hover:bg-gray-100 cursor-pointer" >
                                                {item}
                                            </p>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                    </div>

                    {/* Cards-Wraper */}
                    <div className="Cards-Wraper flex flex-col max-sm:items-center   gap-4 lg:gap-10 py-5 pb-10 lg:pb-30">

                        <div className='grid max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 xl:grid-cols-4 gap-5'>
                            {
                                PixcaioPageData.map((item, index) => (
                                    <div key={index} className='p-1 h-full'>
                                        <div className="pt-6 px-3 max-sm:w-[300px] h-full drop-shadow-md  max-sm:pb-5 max-md:pb-1 max-lg:pb-4 max-xl:pb-2 xl:pb-1  2xl:pb-4"
                                            style={{
                                                backgroundImage: `url(${item.frame})`, backgroundRepeat: "no-repeat",
                                                backgroundSize: "cover",

                                            }}
                                        >
                                            <div className='flex flex-col gap-3 relative'>

                                                <div className="flex gap-2 items-center w-full">
                                                    <img src={item.personImg} alt="" />
                                                    <div>
                                                        <h6 className="font-light">{item.name}</h6>
                                                        <p className='text-para-light font-light text-xs'>{item.username}</p>
                                                    </div>
                                                </div>

                                                <div className=''>
                                                    <img src={item.url} alt="" className='w-full h-fit rounded-2xl' />

                                                    <a className="text-l font-medium font-secondary navbtn-border background-grad text-inverted cursor-pointer  w-fit absolute  bottom-4 left-2 px-4 py-2">
                                                        Buy
                                                    </a>

                                                    <div className="  font-medium bg-inverted py-2 px-4 shrink-0 cursor-pointer text-secondary flex items-center navbtn-border gap-1 text-l absolute bottom-4 right-3">
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
            <Footer />
        </>
    )
}

export default ArtistProfilePage