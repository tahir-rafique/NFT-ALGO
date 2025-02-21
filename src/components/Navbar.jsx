import Navlogo from "../assets/Navbar/navlogo.webp"
import favicon from "../assets/Navbar/favicon.svg"
import lineVector from "../assets/Modal/icons/line-vector.svg"
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ButtonSecondary from "../shared/ButtonSecondary";
import ButtonMain from "../shared/ButtonMain";
import logo1 from '../assets/Modal/images/logo1.webp'
import logo2 from '../assets/Modal/images/logo2.webp'
import logo3 from '../assets/Modal/images/logo3.webp'
import logo4 from '../assets/Modal/images/logo4.webp'

import topGridLeft from "../assets/Header/images/topGridLeft.webp"
import { Link, useNavigate } from "react-router-dom";

import { Modal } from 'antd';
import { use } from "react";

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

    // navigate
    const navigate = useNavigate();

    return (
        <nav className="flex justify-center">
            <div className="container mx-auto max-sm:px-5 sm:px-8 lg:px-16 py-4">
                <div className="absolute left-0 top-0 ">
                    <img src={topGridLeft} alt="" />
                </div>
                <div className="">
                    <div className="flex justify-between items-center relative z-100">

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
                            <ButtonSecondary text="Create NFT" onClick={() => navigate('create-nft-page')} />
                        </div>


                        {/* Ant-Desing Modal */}
                        <div className="ant-modal-main absolute">
                            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                <div className="flex flex-col items-center gap-2 pt-4">
                                    <div className="modal-top-section flex flex-col items-center gap-1 pb-2">
                                        <h3 className="ant-main-text">Connect your wallet</h3>
                                        <img src={favicon} alt="" className="size-30" />
                                        <img src={lineVector} alt="" />
                                    </div>

                                    <div className="modal-bottom-section flex flex-col gap-2">
                                        <div className="flex gap-4 items-center border-main border-2 pl-4 py-2 rounded-md">
                                            <img src={logo1} alt="" />
                                            <input type="text" name="" id="" placeholder="Pera" />
                                        </div>

                                        <div className="flex gap-4 items-center border-main border-2 pl-4 py-2 rounded-md">
                                            <img src={logo2} alt="" />
                                            <input type="text" name="" id="" placeholder="Defly" />
                                        </div>


                                        <div className="flex gap-4 items-center border-main border-2 pl-4 py-2 rounded-md">
                                            <img src={logo3} alt="" />
                                            <input type="text" name="" id="" placeholder="Daffi" />
                                        </div>

                                        <div className="flex gap-4 items-center border-main border-2 pl-4 py-2 rounded-md">
                                            <img src={logo4} alt="" />
                                            <input type="text" name="" id="" placeholder="WalletConnect" />
                                        </div>
                                    </div>

                                </div>
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

                                    <button className="navbtn-size  navbtn-border font-medium background-grad text-inverted  py-1  w-fit px-4" onClick={showModal}>
                                        Connect Wallet
                                    </button>


                                    <button onClick={() => navigate('create-nft-page')} className="w-fit navbtn-size border border-main text-main  py-1 navbtn-border font-medium px-6.5">
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
