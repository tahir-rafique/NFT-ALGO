import { TopSellerData } from "../constant/data"
import elicpRight from '../assets/TopSeller/images/topSellerRightElicp.webp'
import gridLeft from "../assets/TopSeller/images/topSellerGridLeft.webp"

const TopSeller = () => {
    return (
        <div className="flex justify-center relative">
            <div className="container mx-auto max-sm:px-5 sm:px-12 lg:px-20 py-10 flex flex-col gap-4 lg:gap-10 relative z-50">
                <div className="flex justify-between items-center">
                    <h2>TOP SELLER</h2>
                    <a href="#" className="cursor-pointer">
                        <h4 className="font-secondary text-main">View all</h4>
                    </a>
                </div>
                <div className="grid max-xl:grid-cols-2 max-sm:grid-cols-1 grid-cols-3 3xl:grid-cols-4 gap-10">
                    {
                        TopSellerData.map((item, index) => (
                            <div key={index} className="flex items-center gap-2  relative">
                                <div className="absolute top-0 left-23">
                                    <img src={item.icon} alt="" />
                                </div>
                                <div>
                                    <img src={item.url} alt="" />
                                </div>
                                <div>
                                    <h4 className="font-secondary font-bold">{item.name}</h4>
                                    <p className="text-para-light font-bold">{item.price}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <img src={elicpRight} alt="" className="size-120 max-sm:size-44 max-sm:top-20 absolute right-0 top-2" />



            <img src={gridLeft} alt="" className="size-90 max-sm:hidden absolute left-0 top-30" />

        </div>
    )
}

export default TopSeller;