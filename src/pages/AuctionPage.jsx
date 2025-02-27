import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import APMimg1 from "../assets/AuctionPage/images/main1.webp";
import APMimg2 from "../assets/AuctionPage/images/main2.webp";
import APMimg3 from "../assets/AuctionPage/images/main3.webp";
import APMimg4 from "../assets/AuctionPage/images/main4.webp";
import { AuctionPageData } from '../constant/data';
import logoprice from "../assets/FeatureCollection/images/logoprice.webp";
import "../styles/typography.css"

import { useRef, useState } from 'react';
import gridRight from "../assets/AuctionPage/icons/GridRightAuctionPage.webp"
import leftArrow from "../assets/AuctionPage/icons/LeftArrow.webp"
import elicpRight from '../assets/AuctionPage/icons/leftElicp.webp'
import elicpLeft from '../assets/AuctionPage/icons/rightElicp.webp'
import refresh from "../assets/AuctionPage/icons/ReFresh.webp"
import filter from "../assets/AuctionPage/icons/filter.svg"
import downfill from "../assets/AuctionPage/icons/downfill.svg"




const AuctionPage = () => {
  const [StockCount] = useState(7);

  // filter

  // Single NFT dropdown

  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((isOpen) => !isOpen)
  };


  return (
    <>
      <Navbar />
      <div className='AuctionPage flex justify-center relative'>
        <div className='container mx-auto  max-sm:px-5 sm:px-12 lg:px-20  py-5 lg:py-10 '>

          {/* heroSectionWraper */}
          <div className='Auction topWraper flex flex-col items-center py-10 max-sm:py-5 relative z-50'>
            {/* hero-text */}
            <div>
              <h1 className='text-[150px] text-main font-bold tracking-widest acutionLargerfont'>Auction</h1>
            </div>

            {/* Hero-images */}
            <div className='flex flex-wrap justify-center gap-6 py-10 '>
              <div className='bg-inverted h-fit w-fit p-2 rounded-2xl drop-shadow-md '><img src={APMimg1} alt="" /></div>
              <div className=' flex max-md:pt-0 pt-27'>
                <div className='bg-inverted w-fit h-fit p-2 rounded-2xl drop-shadow-md'><img src={APMimg2} alt="" /></div>
              </div>
              <div className=' flex max-md:pt-0 pt-27'>
                <div className='bg-inverted w-fit h-fit p-2 rounded-2xl drop-shadow-md'><img src={APMimg3} alt="" /></div>
              </div>
              <div className='bg-inverted h-fit w-fit p-2 rounded-2xl drop-shadow-md'><img src={APMimg4} alt="" /></div>
            </div>
          </div>

          {/* topListed-cardsWraper */}
          <div className='flex justify-between gap-4 pb-10 '>
            <h2 className='uppercase'>Top Listed</h2>

            <div className='flex items-center gap-2'>
              <img src={refresh} alt="" className=' cursor-pointer' />
              <p className=' capitalize text-l text-para-light cursor-pointer'>Refresh A While Ago</p>
            </div>

            {/* Filter 📌 */}
            <div className='absolute left-0 max-[1800px]:hidden py-5 bg-inverted rounded-3xl w-[250px] top-[20%] drop-shadow-2xl px-3 flex flex-col gap-y-4'>

              {/* filter button */}
              <div className='flex justify-between px-2 py-4 items-center'>
                <img src={filter} alt="" />
                <img src={downfill} alt="" />
              </div>

              <hr />

              {/* div 1 */}
              {/* Popular  */}
              <div className="border-2 border-boorder  rounded-xl pr-2 bg-inverted cursor-pointer flex  items-center py-2 px-2">
                <div className=" w-full" >
                  <button
                    onClick={toggleDropdown}
                    className="flex font-secondary text-para-light items-center w-full cursor-pointer justify-between">

                    <div className='flex  gap-10'>
                      <h6 className='pl-2'>
                        Popular
                      </h6>

                    </div>
                    <div className='flex items-center gap-1'>
                      <h6 className=''>
                        15
                      </h6>

                      <img src={downfill} alt="" className='size-6' />
                    </div>
                  </button>
                </div>
              </div>

              {/* div 2 */}
              {/* Price  */}
              <div className="border-2 border-boorder  rounded-xl pr-2 bg-inverted cursor-pointer flex  items-center py-2 px-2">
                {/* Dropdown menu */}
                <div ref={dropdownRef} className="inline-block w-full " >

                  <button
                    onClick={toggleDropdown}
                    className="flex font-secondary text-para-light items-center w-full cursor-pointer justify-between gap-10">

                    <h6 className='pl-2'>
                      Price
                    </h6>

                    <img src={downfill} alt="" className='size-6' />

                  </button>

                  {isOpen && (
                    <div className=" mt-3 z-50  bg-inverted  rounded-lg shadow-lg w-full">

                      <p className='py-2 text-para-light w-full hover:bg-boorder hover:text-secondary px-2'>Single NFT mint</p>
                      <p className='py-2 text-para-light w-full hover:bg-boorder hover:text-secondary px-2'>Multi NFT mint</p>

                    </div>
                  )}
                </div>

              </div>


              {/* div 3 */}
              {/* Background  */}
              <div className="border-2 border-boorder  rounded-xl pr-2 bg-inverted cursor-pointer flex  items-center py-2 px-2">
                {/* Dropdown menu */}
                <div ref={dropdownRef} className="inline-block w-full " >
                  <button
                    onClick={toggleDropdown}
                    className="flex font-secondary text-para-light items-center w-full cursor-pointer justify-between gap-10">

                    <div className='flex  gap-5'>
                      <h6 className='pl-2'>
                        Background
                      </h6>
                      <h6 className=''>
                        20
                      </h6>
                    </div>

                    <img src={downfill} alt="" className='size-6' />

                  </button>

                  {isOpen && (
                    <div className=" mt-3 z-50  bg-inverted  rounded-lg shadow-lg w-full">

                      <p className='py-2 text-para-light w-full hover:bg-boorder hover:text-secondary px-2'>Single NFT mint</p>
                      <p className='py-2 text-para-light w-full hover:bg-boorder hover:text-secondary px-2'>Multi NFT mint</p>

                    </div>
                  )}
                </div>

              </div>

              {/* div 4 */}
              {/* Clothing  */}
              <div className="border-2 border-boorder  rounded-xl pr-2 bg-inverted cursor-pointer flex  items-center py-2 px-2">
                <div className=" w-full" >
                  <button
                    onClick={toggleDropdown}
                    className="flex font-secondary text-para-light items-center w-full cursor-pointer justify-between">

                    <div className='flex  gap-10'>
                      <h6 className='pl-2'>
                        Clothing
                      </h6>

                    </div>
                    <div className='flex items-center gap-1'>
                      <h6 className=''>
                        110
                      </h6>

                      <img src={downfill} alt="" className='size-6' />
                    </div>
                  </button>
                </div>
              </div>




              {/* div 5 */}
              {/* Eye  */}
              <div className="border-2 border-boorder  rounded-xl pr-2 bg-inverted cursor-pointer flex  items-center py-2 px-2">
                <div className=" w-full" >
                  <button

                    className="flex font-secondary text-para-light items-center w-full cursor-pointer justify-between">

                    <div className='flex  gap-10'>
                      <h6 className='pl-2'>
                        Eye
                      </h6>

                    </div>
                    <div className='flex items-center gap-1'>
                      <h6 className=''>
                        2
                      </h6>

                      <img src={downfill} alt="" className='size-6' />
                    </div>
                  </button>
                </div>
              </div>

              {/* div 6 */}
              {/* Body Color  */}
              <div className="border-2 border-boorder  rounded-xl pr-2 bg-inverted cursor-pointer flex  items-center py-2 px-2">
                <div className=" w-full" >
                  <button

                    className="flex font-secondary text-para-light items-center w-full cursor-pointer justify-between">

                    <div className='flex  gap-10'>
                      <h6 className='pl-2'>
                        Body Color
                      </h6>

                    </div>
                    <div className='flex items-center gap-1'>
                      <h6 className=''>
                        11
                      </h6>

                      <img src={downfill} alt="" className='size-6' />
                    </div>
                  </button>
                </div>
              </div>

              {/* div 7 */}
              {/* Head  */}
              <div className="border-2 border-boorder  rounded-xl pr-2 bg-inverted cursor-pointer flex  items-center py-2 px-2">
                <div className=" w-full" >
                  <button

                    className="flex font-secondary text-para-light items-center w-full cursor-pointer justify-between">

                    <div className='flex  gap-10'>
                      <h6 className='pl-2'>
                        Head
                      </h6>

                    </div>
                    <div className='flex items-center gap-1'>
                      <h6 className=''>
                        33
                      </h6>

                      <img src={downfill} alt="" className='size-6' />
                    </div>
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/*  Tolisted Cards Wraper*/}

          <div className='cards-wraper grid max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 xl:grid-cols-4 gap-4 max-md:justify-items-center '>

            {
              AuctionPageData.map((item, index) => (
                <div key={index} className='p-1 h-full'>
                  <div className="pt-6 px-3 max-sm:w-[300px] h-full drop-shadow-md  max-sm:pb-5 max-md:pb-1 max-lg:pb-4 max-xl:pb-2 xl:pb-1 2xl:pb-4" key={index}
                    style={{
                      backgroundImage: `url(${item.frame})`, backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className='flex flex-col gap-3 relative'>
                      {/* person wraper */}

                      <div className="flex gap-2 items-center w-full">

                        <img src={item.personImg} alt="" />
                        <div>
                          <h6 className="font-light">{item.name}</h6>
                          <p className='text-xs text-para-light font-light'>{item.username}</p>
                        </div>
                      </div>

                      {/* Stock timer */}
                      <div className=''>
                        <img src={item.url} alt="" className='w-full h-fit rounded-2xl' />
                        <div className="fixed text-s left-[50%] translate-[-50%] top-[55%] font-medium bg- py-1 px-4 shrink-0 cursor-pointer text-secondary font-secondary rounded-md bg-sold ">
                          3:06:59:18
                        </div>
                      </div>

                      {/* Stock Price */}
                      <div className="navbtn-size navbtn-border font-medium bg-inverted py-2 px-4 shrink-0 cursor-pointer text-secondary flex items-center gap-1 text-small absolute bottom-5 2xl:bottom-8 right-4">
                        <p className="text-l ">Price:</p>
                        <span className="bg-black rounded-full">
                          <img src={logoprice} alt="" />
                        </span>
                        <p className="text-l text-para-light">142.02</p>
                      </div>

                      {/* Stock Amount */}
                      <div className="navbtn-size navbtn-border font-medium bg-inverted py-2 px-2 shrink-0 cursor-pointer text-secondary flex items-center gap-4 text-small absolute bottom-5 2xl:bottom-8 left-4 ">
                        <span className='text-l font-medium capitalize '>In Stock</span>
                        <span className='text-l text-para-light'>{StockCount}</span>
                      </div>

                    </div>

                  </div>
                </div>
              ))}
          </div>

          {/*  Auction Cards Wraper */}
          <div className='auction-cards-wraper py-20 max-sm:flex max-sm:flex-col max-sm:items-center relative z-50'>
            <h2 className='pb-10 uppercase'>Live Auction</h2>

            <div className='cards-wraper grid max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 xl:grid-cols-4 gap-4 max-md:justify-items-center'>
              {
                AuctionPageData.map((item, index) => (
                  <div key={index} className='p-1 h-full'>
                    <div className="pt-6 px-3 max-sm:w-[300px] h-full drop-shadow-md  max-sm:pb-5 max-md:pb-1 max-lg:pb-4 max-xl:pb-2 xl:pb-1 2xl:pb-4" key={index}
                      style={{
                        backgroundImage: `url(${item.frame})`, backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <div className='flex flex-col gap-3 relative'>
                        {/* person wraper */}

                        <div className="flex gap-2 items-center w-full">

                          <img src={item.personImg} alt="" />
                          <div>
                            <h6 className="font-light">{item.name}</h6>
                            <p className='text-xs text-para-light font-light'>{item.username}</p>
                          </div>
                        </div>

                        {/* Stock timer */}
                        <div className=''>
                          <img src={item.url} alt="" className='w-full h-fit rounded-2xl' />
                          <div className="fixed text-s left-[50%] translate-[-50%] top-[55%] font-medium bg- py-1 px-4 shrink-0 cursor-pointer text-secondary font-secondary rounded-md bg-sold ">
                            3:06:59:18
                          </div>
                        </div>

                        {/* Stock Price */}
                        <div className="navbtn-size navbtn-border font-medium bg-inverted py-2 px-4 shrink-0 cursor-pointer text-secondary flex items-center gap-1 text-small absolute bottom-5 2xl:bottom-8 right-4">
                          <p className="text-l ">Price:</p>
                          <span className="bg-black rounded-full">
                            <img src={logoprice} alt="" />
                          </span>
                          <p className="text-l text-para-light">142.02</p>
                        </div>

                        {/* Stock Amount */}
                        <div className="navbtn-size navbtn-border font-medium bg-inverted py-2 px-2 shrink-0 cursor-pointer text-secondary flex items-center gap-4 text-small absolute bottom-5 2xl:bottom-8 left-4 ">
                          <span className='text-l font-medium capitalize '>In Stock</span>
                          <span className='text-l text-para-light'>{StockCount}</span>
                        </div>

                      </div>

                    </div>
                  </div>
                ))}
            </div>

          </div>

          {/* Elicp Right */}
          <img src={elicpRight} alt="" className='absolute right-0 bottom-430 h-220  z-1 max-lg:hidden' />

          {/* Arrow Left */}
          <img src={leftArrow} alt="" className='absolute left-0 bottom-320 h-120  z-1 max-lg:hidden' />

          {/* Elicp Left */}
          <img src={elicpLeft} alt="" className='absolute left-0 bottom-130 h-240  z-1 max-lg:hidden' />

          {/* Grid Right */}
          <img src={gridRight} alt="" className='absolute right-0 top-90 z-1 max-lg:hidden' />

        </div>
      </div>
      <Footer />
    </>
  )
}

export default AuctionPage;