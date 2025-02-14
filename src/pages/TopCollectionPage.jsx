import heroImage from '../assets/TopCollectionPage/heroImage.webp'
import Footer from '../components/Footer';
import Navbar from './../components/Navbar';
import "../styles/typography.css"
import { TopCollectionPageData } from '../constant/data';

const TopCollectionPage = () => {
    return (
        <>
            <Navbar />
            <section className='top-collection-wraper w-full relative z-50 flex justify-center'>
                <div className='container mx-auto  max-sm:px-5 sm:px-12 lg:px-20 lg:py-10 py-5 flex flex-col gap-8 max-md:items-center'>

                    {/* Hero Section */}
                    <div className='topCollection-hero max-md:flex-col flex gap-10 justify-between items-center'>
                        <div className='leading-none'>
                            {/* text */}
                            <h1 className=' text-main font-bold tracking-widest nftTextLarger'>NFT</h1>
                            <h3 className='text-secondary collectionTextLarger'>Collection</h3>
                        </div>
                        <img src={heroImage} alt="" className='max-lg:max-w-74 max-xl:max-w-100 max-w-160' />
                    </div>



                    {/* Explore Collection  */}
                    <div className='explore-collection-wraper  flex flex-col gap-4'>

                        <div className='flex flex-col gap-4'>
                            <h2>Explore collections</h2>
                            <div className='sm:flex gap-5 items-center font-secondary'>
                                <h6 className='text-main border-2 px-4 py-2 rounded-md w-fit'>Popular</h6>
                                <h6>Trending</h6>
                                <h6>Sport </h6>
                                <h6>Art</h6>    
                                <h6>Fantasy</h6>
                                <h6>Photography</h6>
                                <h6>Space</h6>
                            </div>
                        </div>

                        {/* Explores' Cards */}
                        <div className="flex max-sm:justify-center">
                            <div className="grid max-md:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-fit">
                                {TopCollectionPageData.map((item, index) => (
                                    <div key={index} className="border-muted border-3 rounded-2xl shadow-lg p-4 relative">

                                        {/* person */}
                                        <div className="flex gap-2 items-center py-2 relative">
                                            <div className="">
                                                <img src={item.person} alt="" />
                                            </div>
                                            <div className=''>
                                                <h6 className="font-secondary font-bold">{item.name}</h6>
                                                <p className="text-para-light font-semibold">{item.owner}</p>

                                                <img src={item.icon} alt="" className="absolute  left-53 2xl:left-58 size-4 top-11" />
                                            </div>
                                        </div>

                                        {/* card  */}
                                        <div className="rounded-xl py-2 relative">
                                            <img src={item.frame} alt="" />
                                        </div>

                                        <div className='absolute font-secondary bg-muted rounded-md px-2 py-1 
                                        bottom-3 max-md:left max-lg:left-43 max-xl:left-41  max-2xl:left-32.5 2xl:left-42   itemsss'>{item.itemText} 1.5k</div>
                                    </div>
                                ))}
                            </div>


                        </div>

                    </div>
                </div>
            </section>

            <Footer />


        </>
    )
}

export default TopCollectionPage