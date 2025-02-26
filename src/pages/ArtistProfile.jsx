import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import profilebanner from "../assets/ArtistProfilePage/images/profilebanner.webp"
import profileImage from "../assets/ArtistProfilePage/images/profileImage.webp"
import mpf from "../assets/ArtistProfilePage/images/mpf.webp"
import { artistProfilePageData, PixcaioPageData, SellerPageData, } from "../constant/data"


import websiteIcon from '../assets/Pixacio/icons/internet.webp'
import twitter from '../assets/Pixacio/icons/twitterIco.webp'
import binculars from '../assets/Pixacio/icons/bincularsIco.webp'
import desIco from '../assets/Pixacio/icons/discord.webp'
import logoprice from "../assets/FeatureCollection/images/logoprice.webp";
import { useEffect, useRef, useState } from "react"
import downArrow from "../assets/TrendingNFT/icons/downArrow.svg";
import { Link } from "react-router-dom"




const ArtistProfile = () => {

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
            <div className="flex justify-center relative z-100">
                <div className="container mx-auto max-sm:px-5 sm:px-8 lg:px-20">

                    {/* profile shifting/navigation */}
                    <div className="flex gap-4 border-2 px-2 py-1 w-fit rounded-lg font-secondary border-boorder mt-10">
                        <Link to='/artist-profile-page' className="hover:bg-main hover:text-inverted rounded-lg px-3 py-1">Profile</Link>
                        <Link to='/artist-profile-page-setting' className="hover:bg-main hover:text-inverted px-3 py-1 rounded-lg">Profile Settings</Link>
                    </div>


                    {/* Profile banner Container */}
                    <div className="profile-container py-5 flex flex-col gap-3 relative">

                        {/*  banner */}
                        <img src={profilebanner} alt="" className="profile-banner" />

                        <img src={profileImage} alt="" className="profile-image  absolute
                 xl:top-[70%] left-[50%] translate-[-50%] 
                 max-xl:top-[55%]
                 max-sm:top-[50%] max-sm:size-24"/>

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




                    {/* Cards-Wraper */}

                    <div className='flex flex-col gap-2 py-10 lg:py-30'>
                        <div className="flex justify-between gap-2 items-center">

                            <div>
                                <h6 className="text-main border-1 border-main py-2 px-3 rounded-md border-2">Collection</h6>
                            </div>
                            <div>
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
                                        <div className="absolute z-50 max-lg:w-33 w-45 bg-inverted border-2 border-muted rounded-lg shadow-lg ">
                                            <ul className="py-2">
                                                {artistProfilePageData.map((item) => (
                                                    <p key={item} className="font-secondary px-4 py-2 hover:bg-gray-100 cursor-pointer" >
                                                        {item}
                                                    </p>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                        <div className="flex max-md:justify-center">

                            <div className="grid max-sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:w-full">
                                {SellerPageData.map((item, index) => (
                                    <div key={index} className="border-muted border-3 rounded-2xl shadow-lg p-4 relative">
                                        {/* person */}
                                        <div className="flex flex-col   py-2">

                                            <h6 className="font-secondary font-bold">{item.name}</h6>
                                            <p className="text-para-light font-semibold">{item.item}</p>

                                        </div>

                                        {/* card  */}
                                        <div className="rounded-xl py-2 relative">
                                            <img src={item.frame} alt="" />
                                        </div>

                                    </div>
                                ))}
                            </div>


                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}

export default ArtistProfile