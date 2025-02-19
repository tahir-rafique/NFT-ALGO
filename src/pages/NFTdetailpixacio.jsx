
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import heroImgNFT from './../assets/NFTdetail/images/heroImageNFT.webp';
import watchIco from "../assets/NFTdetail/icons/watch.webp"
import ButtonMain from '../shared/ButtonMain';
const NFTdetailpixacio = () => {
    return (
        <>
            <Navbar />
            <div className='flex justify-center'>

                <div className='bg-green-400 container mx-auto  max-sm:px-5 sm:px-12 lg:px-20 pt-20 pb-4'>
                    {/* hero-Wraper */}
                    <div className='2xl:flex-row flex flex-col  gap-10 justify-between'>

                        {/* hero-Left */}
                        <div className="hero-left p-1  flex justify-center">
                            <img src={heroImgNFT} alt="" className=' bg-[#fff] shadow-md p-3 rounded-2xl' />
                        </div>

                        {/* hero-Right */}
                        <div className="hero-right flex flex-col items-center lg:justify-end 2xl:w-[55%] gap-4">

                            <div className=' w-full'>
                                <h2>Pixacio</h2>
                                <h5 className='font-secondary text-para-light'>Owned by <b className='text-secondary'>  Stella Nova</b></h5>
                            </div>

                            {/* tiemr section */}
                            <div className='bg-inverted rounded-md drop-shadow-md w-full py-2'>

                                <div className='border-b-2  px-4 py-2 flex gap-2 items-center'>
                                    <img src={watchIco} alt="" />
                                    <h5 className='text-excp font-secondary text-para-light '>Sale ends 18 November 2023 at 8:47 am </h5>
                                </div>

                                <div className='flex flex-col gap-2 px-4'>
                                    <div className=' py-4'>
                                        <p className='text-para-light'>Current price</p>
                                        <h3 className='font-secondary font-medium'>5.001 FRY</h3>
                                    </div>
                                    <div className='flex gap-2'>
                                        <div className='flex justify-center w-full'>
                                            <button className='w-full navbtn-size border-2 border-para-light text-secondary navbtn-border px-4 py-2 cursor-pointer font-medium'>
                                                Buy now
                                            </button>
                                        </div>

                                        <div className='w-full flex justify-center'>
                                            <button className='navbtn-size  navbtn-border background-grad text-inverted px-5 py-2 cursor-pointer w-full'>
                                                Make offer
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>



                        {/* item Activity */}
                        
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default NFTdetailpixacio