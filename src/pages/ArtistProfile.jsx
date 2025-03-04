import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import profilebanner from "../assets/ArtistProfilePage/images/profilebanner.webp"
import profileImage from "../assets/ArtistProfilePage/images/profileImage.webp"
import { artistProfilePageData, SellerPageData, } from "../constant/data"



import { useEffect, useRef, useState } from "react"
import downArrow from "../assets/TrendingNFT/icons/downArrow.svg";


import ButtonMain from "../shared/ButtonMain";



import frylogo from '../assets/ArtistProfilePage/icons/frylogo.webp'



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

    const [selectedButton, setSelectedButton] = useState("profile")


    return (
        <>
            <Navbar />
            <div className="flex justify-center relative z-100">
                <div className="container mx-auto max-sm:px-5 sm:px-8 lg:px-20">

                    {/* profile shifting/navigation */}
                    <div className="artist-profile flex gap-4 border-2 px-2 py-1 w-fit rounded-lg font-secondary border-boorder mt-10">



                        <button onClick={() => setSelectedButton("profile")} className={` px-4 py-2 rounded-xl cursor-pointer ${selectedButton === "profile" ? "bg-main text-inverted" : ""}`}>Profile</button>

                        <button onClick={() => setSelectedButton("other")} className={`cursor-pointer px-4 py-2 rounded-xl ${selectedButton === "other" ? "bg-red-500 text-inverted" : ""}`}>Profile Settings</button>



                    </div>

                    {
                        selectedButton === 'profile' ?

                            <div className="artist-profile">


                                {/* Profile banner Container */}
                                <div className="profile-container py-5 flex flex-col gap-3 relative">


                                    <div className="font-secondary cursor-pointer bg-main w-fit font-medium absolute right-2 top-8 rounded-xl text-inverted px-4 py-2">Follow</div>

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



                                <div className="flex justify-center my-10">

                                    <div className="flex gap-x-2 bg-inverted border-2 border-boorder w-fit px-4 py-2 rounded-xl font-secondary">
                                        <img src={frylogo} alt="" />
                                        <h6>10.89FRY </h6>
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
                                                        <p className="text-para-light font-semibold capitalize">{item.item}</p>

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
                            :
                            null
                    }



                </div>

            </div>
            <Footer />
        </>
    )
}

export default ArtistProfile