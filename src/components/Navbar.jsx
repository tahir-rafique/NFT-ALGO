import Navlogo from "../assets/Navbar/navlogo.svg"
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ButtonSecondary from "../shared/ButtonSecondary";
import ButtonMain from "../shared/ButtonMain";

import topGridLeft from "../assets/Header/images/topGridLeft.webp"
import { Link } from "react-router-dom";
const Navbar = () => {
    const [menuOpen, setmenuOpen] = useState(false);

    const toggleNavbar = () => {
        setmenuOpen(!menuOpen);
    };
    return (
        <nav className="flex justify-center">
            <div className="container mx-auto max-sm:px-5 sm:px-12 lg:px-20 py-4">
                <div className="absolute left-0 top-0 ">
                    <img src={topGridLeft} alt="" />
                </div>
                <div className="">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-1 items-center">
                            <img src={Navlogo} alt="logo" className="max-lg:size-16" />
                        </div>
                        <div className="hidden lg:flex sm:gap-4 lg:gap-8">
                            <h6 className="">
                                <Link to="/" className="underline underline-offset-[6px] font-bold  text-main">
                                    Home
                                </Link>
                            </h6>
                            <h6 className="">
                                <Link to="/notfound" className="text-secondary">
                                    AI NFT GENERATION
                                </Link>
                            </h6>
                        </div>
                        <div className="hidden lg:flex gap-4">
                            <ButtonMain text="Connect Wallet" />
                            <ButtonSecondary text="Create NFT" />
                        </div>
                        <div className="lg:hidden md:flex flex-col justify-end">
                            <button onClick={toggleNavbar}>
                                {menuOpen ? <X className="max-sm:size-10 sm:size-12" /> : <Menu className="max-sm:size-10 sm:size-12" />}
                            </button>
                        </div>
                    </div>

                    {menuOpen && (
                        <div className="lg:hidden fixed bg-inverted  py-5 px-10 flex flex-col gap-8 z-80 navMobile-anime h-[100%] top-0 w-[270px] left-0 bottom-0">
                            <div className="flex gap-1 items-center">
                                <img src={Navlogo} alt="logo" className="max-lg:size-16" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-col gap-3">
                                    <h6>
                                        <a href="/" className=" text-main underline underline-offset-8 text-xl">
                                            Home
                                        </a>
                                    </h6>
                                    <h6>
                                        <a href="/not-found" className=" text-secondary text-xl">
                                            AI NFT GENERATION
                                        </a>
                                    </h6>
                                </div>
                                <div className="flex flex-col gap-3">

                                    <button className="navbtn-size  navbtn-border font-medium background-grad text-inverted  py-1  w-fit px-4">
                                        Connect Wallet
                                    </button>


                                    <button className="w-fit navbtn-size border border-main text-main  py-1 navbtn-border font-medium px-6.5">
                                        Create NFT
                                    </button>

                                </div>
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
