import Navbar from './../components/Navbar';
import Footer from './../components/Footer';



// import HeroSubtract from '../assets/SellerCollectionPage/images/subtractHero.webp'

// import topLeft from '../assets/SellerCollectionPage/images/top_left.webp'
// import topRight from '../assets/SellerCollectionPage/images/top_right.webp'
// import bottomLeft from '../assets/SellerCollectionPage/images/bottom_left.webp'
// import bottomCenter from '../assets/SellerCollectionPage/images/bottom_right.webp'
// import bottomRight from '../assets/SellerCollectionPage/images/bottom_center.webp'

import subtractBanner from '../assets/SellerCollectionPage/images/subtractBanner.webp'
import { SellerPageData } from '../constant/data';

const SellerCollectionPage = () => {
    return (
        <>
            <Navbar />
            <div className='flex justify-center'>
                <div className='container mx-auto  max-sm:px-5 sm:px-12 lg:px-20 lg:py-5'>
                    {/* Hero Wrper */}
                    <div className="hero-wraper pt-10 px-4">

                        <h1 className='text-center leading-none text-main'>Jacob Jones </h1>
                        <h2 className='text-center leading-none'>collections</h2>
                        <div className=''>

                            {/* <img src={HeroSubtract} alt="" /> */}

                            {/* Images Top
                            <img src={topLeft} alt="" className='absolute top-50 left-3 ' />
                            <img src={topRight} alt="" className='absolute top-50 right-4 ' />
                            {/* Images Bottom */}

                            {/* <img src={bottomLeft} alt="" className='absolute bottom-24 left-4 ' />
                            <img src={bottomRight} alt="" className='absolute bottom-4 left-90 ' />
                            <img src={bottomCenter} alt="" className='absolute bottom-10 right-34 ' />  */}

                            <img src={subtractBanner} alt="" />


                        </div>


                    </div>

                    <div className='flex flex-col gap-2 py-10 lg:py-30'>
                        <h2 className=' capitalize max-md:text-center'>collections</h2>
                        <div className="flex max-md:justify-center">

                            <div className="grid max-sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-fit">
                                {SellerPageData.map((item, index) => (
                                    <div key={index} className="border-muted border-3 rounded-2xl shadow-lg p-4 relative">
                                        {/* person */}
                                        <div className="flex flex-col   py-2">

                                            <h6 className="font-secondary font-bold">{item.name}</h6>
                                            <p className="text-para-light font-semibold">{item.item}</p>

                                        </div>

                                        {/* card  */}
                                        <div className="rounded-xl py-2 relative">
                                            <img src={item.frame} alt="" />
                                        </div>

                                    </div>
                                ))}
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SellerCollectionPage