import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import heroImage1 from '../assets/TopSellerPage/images/heroImg1.webp'
import heroImage2 from '../assets/TopSellerPage/images/heroImg2.webp'
import heroImage3 from '../assets/TopSellerPage/images/heroImg3.webp'
import { useEffect, useRef, useState } from "react"
import { categoryListItemsData, selectCategory } from "../constant/data"
import lineDown from '../assets/TopSellerPage/icons/down_line.webp'
import logo from '../assets/TopSellerPage/images/logo.webp'

const TopSellerPage = () => {
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
            <div className="flex justify-center bg-frame">
                <div className="container mx-auto max-sm:px-5 sm:px-12 lg:px-20 py-20">


                    {/* Hero Wraper */}
                    <div className="hero-wraper flex justify-between items-center relative py-30 pb-50">
                        {/* Hero Left */}
                        <div className="hero-Left w-[50%]">
                            <h2 className="  capitalize">TOP</h2>
                            <h2 className=" capitalize text-main seller-text">SELLERS</h2>
                        </div>


                        <img src={heroImage1} alt="" className="absolute z-100 right-30" />
                        <img src={heroImage2} alt="" className="absolute z-50 right-10" />
                        <img src={heroImage3} alt="" className="absolute right-0 z-10" />

                    </div>

                    {/* Category Wraper */}
                    <div className="category-wraper py-10">

                        {/* Category Selection Wraper */}
                        <div className="Category-selection-wraper flex justify-between items-center ">

                            <div ref={dropdownRef} className="inline-block p-0.5" >
                                <button
                                    onClick={toggleDropdown}
                                    className="bg-inverted px-3  py-2 rounded-md drop-shadow-md flexitems-center ">
                                    <p className="flex  gap-4 justify-between items-center">
                                        Category
                                        <img src={lineDown} alt="" className="size-5" />
                                    </p>
                                </button>

                                {isOpen && (
                                    <div className="absolute z-50 max-sm:w-33 w-45 bg-inverted border-2 border-muted rounded-lg shadow-lg ">
                                        <ul className="py-2">
                                            {selectCategory.map((item) => (
                                                <p key={item} className="font-secondary px-4 py-2 hover:bg-gray-100 cursor-pointer" >
                                                    {item}
                                                </p>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                            </div>

                            <div className="p-0.5">
                                <p className="bg-inverted px-3  py-2 rounded-md drop-shadow-md">Last 30 days</p>
                            </div>


                        </div>

                        {/* Category List Name */}
                        <div className="rounded-[8px] border-2 border-boorder mt-5 grid grid-cols-7 py-4">
                            <div className=" col-span-2 pl-10 font-secondary text-secondary font-semibold">
                                <h4>Collections</h4>
                            </div>

                            <div className=" font-secondary text-secondary font-semibold">
                                <h4>Volume</h4>
                            </div>
                            <div className=" font-secondary text-secondary font-semibold">
                                <h4>Followers</h4>
                            </div>

                            <div className=" font-secondary text-secondary font-semibold">
                                <h4>24%</h4>
                            </div>

                            <div className=" font-secondary text-secondary font-semibold">
                                <h4>Floor price</h4>
                            </div>

                            <div className=" font-secondary text-secondary font-semibold">
                                <h4>Items</h4>
                            </div>



                        </div>

                        {/* Category List items  */}
                        {categoryListItemsData.map((item, index) => (
                            <div className="rounded-[8px] border-2 border-boorder grid-rows-1 mt-5 grid grid-cols-7 py-4 font-secondary" key={index}>

                                <div className="pl-10 flex items-center  col-span-2 gap-3">
                                    <h5 className="font-semibold">{item.num}</h5>
                                    <img src={item.url} alt="" className="size-10"/>
                                    <h4 className="font-bold">{item.name}</h4>

                                </div>

                                {/*  volume*/}
                                <div className="flex items-center gap-2 ">
                                    <img src={logo} alt="" />
                                    <p className="font-medium ">
                                        {item.volume}
                                    </p>

                                </div>

                                {/*  Follower*/}
                                <div className="flex items-center ">
                                    <p className="font-medium ">
                                        {item.follower}
                                    </p>


                                </div>

                                {/* 24% */}
                                <div className="flex items-center ">
                                    <p className="font-medium text-[#4CCB9E]">
                                        {item.percnet}
                                    </p>


                                </div>

                                {/*  Floor price*/}
                                <div className="flex items-center gap-2 ">
                                    <img src={logo} alt="" />
                                    <p className="font-medium">
                                        {item.floorprice}
                                    </p>

                                </div>

                                {/* items */}
                                <div className="flex items-center ">
                                    <p className="font-medium">
                                        {item.items}
                                    </p>

                                </div>

                            </div>

                        ))}



                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default TopSellerPage