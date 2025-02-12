import { AuctionData } from "../constant/data";
import ButtonMain from './../shared/ButtonMain';
import exploreArrow from "../assets/Auction/icons/explorArrow.svg";
import { Link, useNavigate } from "react-router-dom";



const RecentSold = () => {

    const navigate = useNavigate();
    return (
        <div className="flex justify-center">
            <div className="container mx-auto px-5 sm:px-12 lg:px-20 py-10 flex flex-col gap-4 lg:gap-10">
                <h2>Auction </h2>
                <div className="grid max-md:grid-cols-1 max-xl:grid-cols-2 max-2xl:grid-cols-3 grid-cols-4 w-fit gap-10">
                    {
                        AuctionData.map((item, index) => (
                            <div className="px-2 py-6 drop-shadow-xl w-fit" key={index} style={{
                                backgroundImage: `url(${item.frame})`,
                                backgroundRepeat: "no-repeat"
                            }} >
                                <div className="flex flex-col gap-2 relative">
                                    <div className="flex gap-2 ">
                                        <img src={item.personImg} alt="" />
                                        <div>
                                            <h6>{item.name}</h6>
                                            <p>{item.username}</p>
                                        </div>
                                    </div>
                                    <img src={item.url} alt="" className="w-fit" />
                                    <div className="absolute top-50 left-20  font-medium bg- py-1 px-4 shrink-0 cursor-pointer text-para-light font-secondary rounded-md bg-sold">
                                        3:06:59:18
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="flex md:justify-center">
                    {/* <ButtonMain text={"Explore"} expIcon={exploreArrow} navigate={navigate} /> */}
                    <a onClick={navigate} className="cursor-pointer" href="/auction" >Hello</a>
                </div>
            </div>
        </div>
    )
}
export default RecentSold;

