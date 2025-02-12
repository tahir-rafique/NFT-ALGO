import { AuctionData } from "../constant/data";
import exploreArrow from "../assets/Auction/icons/explorArrow.svg";
import { Link, useNavigate } from "react-router-dom";



const RecentSold = () => {

    const navigate = useNavigate();
    return (
        <div className="flex justify-center">
            <div className="container mx-auto px-5 sm:px-12 lg:px-20 py-10 flex flex-col gap-4 lg:gap-10">
                <h2 className="">Auction </h2>

                <div className=' grid max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 xl:grid-cols-4 gap-4'>
                    {
                        AuctionData.map((item, index) => (
                            <div key={index} className='p-1'>
                                <div className="pt-6 px-2 drop-shadow-md max-sm:w-84 max-sm:pb-4" key={index}
                                    style={{
                                        backgroundImage: `url(${item.frame})`, backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover"
                                    }}
                                >
                                    <div className='flex flex-col gap-3'>
                                        {/* person wraper */}
                                        <div className="flex gap-2 items-center w-full">
                                            <img src={item.personImg} alt="" />
                                            <div>
                                                <h6>{item.name}</h6>
                                                <p className='text-secondary'>{item.username}</p>
                                            </div>
                                        </div>

                                        {/*auction image */}
                                        <div className='px-2 pb-3 max-lg:pb-4 2xl:pb-7 relative'>
                                            <img src={item.url} alt="" className='max-md:w-full max-md:h-fit' />
                                            <div className="absolute  max-sm:left-24 max-sm:top-36 sm:top-25 sm:left-18 md:left-24 md:top-34 lg:top-26 2xl:top-34 lg:left-21  font-medium bg- py-1 px-4 shrink-0 cursor-pointer text-para-light font-secondary rounded-md bg-sold ">
                                                3:06:59:18
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                </div>
                {/* Auction Page  Link */}
                <div className="flex md:justify-center">
                    <Link onClick={navigate} className="cursor-pointer navbtn-size  navbtn-border background-grad text-inverted px-5 py-2 font-medium flex gap-2 items-cente" to="/auction" >Explore More <img src={exploreArrow} alt="" /></Link>
                </div>
            </div>
        </div>
    )
}
export default RecentSold;

