import Navlogo from "../assets/Navbar/navlogo.svg"
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ButtonSecondary from "../shared/ButtonSecondary";
import ButtonMain from "../shared/ButtonMain";

import topGridLeft from "../assets/Header/images/topGridLeft.webp"
import { Link } from "react-router-dom";

import { Button, Modal } from 'antd';
const Navbar = () => {
    const [menuOpen, setmenuOpen] = useState(false);

    const toggleNavbar = () => {
        setmenuOpen(!menuOpen);
    };


    // Ant-Desing Modal

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <nav className="flex justify-center">
            <div className="container mx-auto max-sm:px-5 sm:px-8 lg:px-16 py-4">
                <div className="absolute left-0 top-0 ">
                    <img src={topGridLeft} alt="" />
                </div>
                <div className="">
                    <div className="flex justify-between items-center ">

                        <a href="/" className="cursor-pointer">
                            <img src={Navlogo} alt="" className="max-lg:size-14 cursor-pointer" />
                        </a>
                        <div className="hidden lg:flex sm:gap-4 lg:gap-8">
                            <h6 className="">
                                <Link to="/" className="underline underline-offset-[6px] font-bold  text-main">
                                    Home
                                </Link>
                            </h6>
                            <h6 className="">
                                <Link to="/not-found" className="text-secondary">
                                    AI NFT GENERATION
                                </Link>
                            </h6>
                        </div>
                        <div className="hidden lg:flex gap-4">
                            <ButtonMain text="Connect Wallet" onClick={showModal} />
                            <ButtonSecondary text="Create NFT" />
                        </div>


                        {/* Ant-Desing Modal */}
                        <div className="ant-modal-container absolute right-[50%] translate-[-50%] top-[50%] z-100">
                            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                            </Modal>
                        </div>

                        {/* Navbar Menu on mobile */}
                        <div className="mobile-menu-navbar lg:hidden md:flex flex-col justify-end">
                            <button onClick={toggleNavbar}>
                                {menuOpen ? <X className="max-sm:size-10 sm:size-12" /> : <Menu className="max-sm:size-10 sm:size-12" />}
                            </button>
                        </div>
                    </div>


                    {/* Navbar Mobile */}
                    {menuOpen && (
                        <div className="lg:hidden fixed bg-inverted  py-5 px-10 flex flex-col gap-8 z-80 navMobile-anime h-[100%] top-0 w-[270px] left-0 bottom-0 transition-all transition-discrete delay-1000">
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
