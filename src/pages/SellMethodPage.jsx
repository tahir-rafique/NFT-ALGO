import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import backdooricon from '../assets/SellMethod/icons/bdicon.webp'
import personIMG from '../assets/SellMethod/images/personImage.webp'
import logoprice from '../assets/SellMethod/icons/logoprice.webp'

const SellMethodPage = () => {

    return (
        <>
            <Navbar />
            <div className="flex justify-center relative z-100">
                <div className="bg-green-500 container max-sm:px-5 sm:px-12 lg:px-20  mx-auto pt-20">

                    {/* BAck button */}
                    <div className="bg-inverted w-fit px-4 rounded-md drop-shadow-xl py-2 items-center" >
                        <Link to="/" className="flex gap-2">
                            <img src={backdooricon} alt="" />
                            <h5> Back</h5>
                        </Link>
                    </div>
                    {/* main content div */}
                    <div className="flex gap-10 py-5 max-lg:flex-col">

                        {/* left container*/}
                        <div className="max-w-[400px] flex flex-col gap-4">
                            <img src={personIMG} alt="" className=" drop-shadow-md border-10 border-boorder rounded-4xl w-[300px]" />
                            <h4 className="font-secondary capitalize font-medium text-secondary">Preview your item</h4>
                        </div>

                        {/* Right Container */}
                        <div className="bg-inverted rounded-xl drop-shadow-xl w-full px-24">
                            <h2 className="uppercase text-center">Royal Samurai</h2>


                            {/* select */}
                            <div className="bg-green-500 ">
                                <h3>Select Your Sell Method</h3>
                                <div className="flex gap-2">

                                    <div className="bg-amber-950 h-[300px] w-[300px]"></div>
                                    <div className="bg-amber-950 h-[300px] w-[300px]"></div>
                                </div>

                            </div>


                            {/* pirce */}

                            <div>
                                <label htmlFor="price"> <h5 className="font-secondary font-medium">Price</h5></label>
                                <div className="flex gap-4  items-center">
                                    <div className="flex gap-2 items-center border-3 border-boorder px-4 py-2 rounded-lg">
                                        <img src={logoprice} alt="" />
                                        <p className="w-full">FRY</p>
                                    </div>
                                    <div className="w-full py-2">
                                        <input type="number" id="price" placeholder="Enter price for one item" className="w-full font-secondary pl-4  border-3 border-boorder rounded-lg py-1 lg:py-1.5" />
                                    </div>
                                </div>
                            </div>


                            {/* date */}

                            <div className="w-full">
                                <label htmlFor="dateselect">
                                    <h5 className="font-secondary font-medium">schedule listing</h5>
                                </label>
                                <div className="w-full border-3 border-boorder rounded-md font-seondary">
                                    <input type="date" id="dateselect"  min="2025-02" value="2025-02" className="w-full pl-4 h-full py-2 pr-10" />
                                </div>
                            </div>


                            <div className="pt-10 flex justify-end font-light font-secondary pb-10">
                               <input type="submit" className="bg-main px-4 py-2 rounded-md text-inverted" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SellMethodPage