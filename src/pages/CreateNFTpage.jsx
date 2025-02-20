import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import IconGenerate from "../assets/GenerateNFT/icons/IconGenerat.svg"

import banner from '../assets/CreateNFTpage/images/createNFTbanner.webp'

import addicon from '../assets/CreateNFTpage/images/addicon.webp'

import copyimg from '../assets/CreateNFTpage/images/copyimg.webp'
import { CreateNFTPageData } from '../constant/data';



const CreateNFTpage = () => {
    return (
        <>
            <Navbar />
            <div className='flex justify-center'>
                <div className='container mx-auto  max-sm:px-5 sm:px-12 lg:px-20 pt-10'>

                    {/* Hero Section */}
                    <div className='hero-wraper flex flex-col gap-4'>

                        <div className='flex gap-8 justify-center '>
                            <h2>Create your own <span className='text-main'>masterpiece </span> </h2>

                        </div>
                        <img src={banner} alt="" />
                        <div className='flex justify-center'>
                            <p className=' capitalize'>get onboard and earn money like a pro</p>
                        </div>

                        <div className='p-0.5'>
                            <div className="mx-auto rounded-xl flex justify-between items-center gap-4 px-4  py-5 bg-inverted drop-shadow-md relative z-40 w-full max-w-[800px]">
                                <input className="font-secondary text-light w-full max-w-[600px] outline-none " placeholder="Fantasy Creature holding......" />
                                <a href="#" className="absolute navbtn-size text-small navbtn-border font-medium background-grad text-inverted max-md:px-2 px-4 py-2 shrink-0 cursor-pointer flex gap-1 right-4 z-50 ">
                                    <h6>Generate</h6>
                                    <img src={IconGenerate} alt="no img" />
                                </a>
                            </div>
                        </div>

                        <div className='w-full max-w-[600px]  mx-auto flex max-md:gap-6 gap-2 justify-between items-center max-sm:flex-col '>
                            <div className="border-2 border-boorder  rounded-xl pr-2 bg-inverted cursor-pointer">

                                <select id='select-create-nft' className='w-full py-2 md:py-2.5 px-4 bg-inverted text-para-light font-secondary outline-none rounded-xl cursor-pointer'>
                                    <option id='opt1' className='bg-inverted ' value='Single NFT'>Single NFT</option>
                                    <option id='opt2' className='bg-inverted' value='Collection'>Collection</option>
                                </select>

                            </div>


                            <div className="flex font-secondary text-para-light items-center gap-2 cursor-pointer">
                                <h6>Supply</h6>
                                <div className='border-2 border-boorder  rounded-xl py-2 bg-inverted px-8 cursor-pointer'>
                                    <h6> 10</h6>
                                </div>
                            </div>


                            <div className=" border-2 font-secondary border-boorder  rounded-xl gap-2 text-para-light cursor-pointer">

                                <button className='flex items-center gap-2 py-2 bg-inverted px-4 cursor-pointer'>
                                    <h6>Add Styles</h6>
                                    <img src={addicon} alt="" className='size-5.5 text-para-light' />
                                </button>

                            </div>
                        </div>

                    </div>

                    {/* Prompt Section */}
                    <div className='prompt-wraper py-10 lg:py-24'>
                        <h2 className=' capitalize pb-5'>Prompt examples</h2>
                        <div className="grid max-xl:grid-cols-1 grid-cols-2 gap-8 px-[5%]">
                            {CreateNFTPageData.map((data, index) => (
                                <div className='border-2 border-boorder rounded-xl p-4 bg-inverted flex max-sm:flex-col items-center gap-4 sm:gap-10 relative' key={index}>

                                    <div className='image-wraper h-fit'>
                                        <img src={data.url} alt="" className='w-full' />
                                    </div>

                                    <img src={copyimg} alt="" className='absolute max-sm:hidden  top-[44%] sm:top-[35%] max-md:left-54 left-70 xl:left-54 2xl:left-70 z-100' />

                                    <div className='max-sm:max-w-[80%] sm:max-w-[40%] md:h-full  flex flex-col gap-2  z-10'>
                                        <h4>{data.title}</h4>
                                        <p className='text-para-light max-sm:text-xs'>{data.descprtion}</p>
                                    </div>
                                </div>
                            ))}

                        </div>


                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default CreateNFTpage;