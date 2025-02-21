import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import IconGenerate from "../assets/GenerateNFT/icons/IconGenerat.svg"

import banner from '../assets/CreateNFTpage/images/createNFTbanner.webp'
import addicon from '../assets/CreateNFTpage/images/addicon.webp'



const CreateNFTpage = () => {
    return (
        <>
            <Navbar />
            <div className='flex justify-center'>
                <div className='container mx-auto  max-sm:px-5 sm:px-12 lg:px-20 '>
                    <div className='flex flex-col gap-4'>

                        <div className='flex gap-8 justify-center '>
                            <h2>Create your own</h2>
                            <h2 className='text-main'>masterpiece</h2>

                        </div>
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

                        <div className='w-full max-w-[600px]  mx-auto flex gap-2 justify-between items-center max-sm:flex-col '>

                            <div className="border-2 border-boorder  rounded-xl pr-2 bg-inverted cursor-pointer">

                                <select id='select-create-nft' className='w-full py-2.5 px-4 bg-inverted text-para-light font-secondary outline-none rounded-xl cursor-pointer'>
                                    <option id='opt1' className='bg-inverted ' value='Single NFT'>Single NFT</option>
                                    <option id='opt2' className='bg-inverted' value='Collection'>Collection</option>
                                </select>

                            </div>


                            <div className="flex font-secondary text-para-light items-center gap-2">

                                <h6>Supply</h6>
                                <div className='border-2 border-boorder  rounded-xl py-2 bg-inverted px-8 '>
                                    <h6> 10</h6>
                                </div>

                            </div>


                            <div className=" border-2 font-secondary border-boorder  rounded-xl gap-2 text-para-light cursoer-pointer">

                                <button className='flex items-center gap-2 py-2 bg-inverted px-4'>
                                    <h6>Add Styles</h6>
                                    <img src={addicon} alt="" className='size-5 text-para-light' />
                                </button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default CreateNFTpage;