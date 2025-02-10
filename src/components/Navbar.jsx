import Navlogo from "../assets/Navbar/navlogo.svg"
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ButtonSecondary from "../shared/ButtonSecondary";
import ButtonMain from "../shared/ButtonMain";

import topGridLeft from "../assets/Header/images/topGridLeft.webp"

const Navbar = () => {
    const [menuOpen, setmenuOpen] = useState(false);

    const toggleNavbar = () => {
        setmenuOpen(!menuOpen);
    };
    return (
        <nav className="flex justify-center">
            <div className="container mx-auto max-sm:px-5 sm:px-12 lg:px-20">

                <div className="absolute left-0 top-0 ">
                    <img src={topGridLeft} alt="" />
                </div>
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-1 items-center">
                            <img src={Navlogo} alt="logo" className="max-lg:size-16" />
                        </div>
                        <div className="hidden lg:flex sm:gap-4 lg:gap-8">
                            <h6>
                                <a href="#" className="underline underline-offset-4 text-main font-bold">
                                    Home
                                </a>
                            </h6>
                            <h6>
                                <a href="#" className="text-secondary">
                                    AI NFT GENERATION
                                </a>
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
                        <div className="lg:hidden fixed menuOpen-grad w-full p-12 flex flex-col gap-4 z-54 left-0 animate-pulse">
                            <div className="flex flex-col gap-4">
                                <h6>
                                    <a href="#" className="underline underline-offset-8 text-inverted">
                                        Home
                                    </a>
                                </h6>
                                <h6>
                                    <a href="#" className=" text-secondary">
                                        AI NFT GENERATION
                                    </a>
                                </h6>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div>
                                    <button className="navbtn-size  navbtn-border font-medium background-grad text-inverted px-4 py-1">
                                        Connect Wallet
                                    </button>
                                </div>
                                <div>
                                    <button className="navbtn-size border border-inverted text-inverted px-6 py-1 navbtn-border font-medium">
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
