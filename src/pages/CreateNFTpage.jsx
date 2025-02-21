import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import IconGenerate from "../assets/GenerateNFT/icons/IconGenerat.svg"

import banner from '../assets/CreateNFTpage/images/createNFTbanner.webp'

const CreateNFTpage = () => {
    return (
        <>
            <Navbar />
            <div className='flex justify-center'>
                <div className='container mx-auto  max-sm:px-5 sm:px-12 lg:px-20 '>
                    <div className='flex flex-col gap-4'>
                        <img src={banner} alt="" />

                        <div className='flex justify-center'>
                            <p className=' capitalize'>get onboard and earn money like a pro</p>
                        </div>

                        <div className='p-0.5'>
                            <div className="mx-auto rounded-xl flex justify-between items-center gap-4 px-4  py-5 bg-inverted drop-shadow-md relative z-40 w-full max-w-[800px]">
                                <input className="font-secondary text-light w-full max-w-[600px] outline-none " placeholder="Fantasy Creature holding......" />
                                <a href="#" className="absolute navbtn-size text-small navbtn-border font-medium background-grad text-inverted px-4 py-2 shrink-0 cursor-pointer flex gap-1 right-4 z-50 ">
                                    <h6>Generate</h6>
                                    <img src={IconGenerate} alt="no img" />
                                </a>
                            </div>
                        </div>

                        <div className='w-full max-w-[600px] bg-red-500 mx-auto flex'>
                            <div className="h-10 w-full bg-blue-300"></div>
                            <div className="h-10 w-full bg-green-300"></div>
                            <div className="h-10 w-full bg-orange-300"></div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default CreateNFTpage;