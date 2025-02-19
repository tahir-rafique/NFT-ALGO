
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import heroImgNFT from './../assets/NFTdetail/images/heroImageNFT.webp';
import watchIco from "../assets/NFTdetail/icons/watch.webp";
import { useState } from "react";
import { NFTdetailData, NFTdetailsDescprtion, NFTdetailsListing, NFTitemActivityData, NFToffterData, NFTtraitsData } from "../constant/data";
import lineDown from '../assets/NFTdetail/icons/down_line.webp'

const NFTdetailpixacio = () => {
    const [open, setOpen] = useState(null);
    const [openDesc, setOpenDesc] = useState(null);


    // listing  butoton handeler
    const handleListing = (index) => {
        if (open === index) {
            setOpen(null);
        } else {
            setOpen(index);
        }
    };


    // Descriotn butoton handeler
    const handleDescrption = (index) => {
        if (openDesc === index) {
            setOpenDesc(null);
        } else {
            setOpenDesc(index);
        }
    };

    return (
        <>
            <Navbar />
            <div className='flex justify-center'>

                <div className='bg-green-400 container mx-auto  max-sm:px-5 sm:px-12 lg:px-20 pt-20 pb-4'>
                    {/* hero-Wraper */}
                    <div className='2xl:flex-row flex flex-col  gap-10 justify-between'>

                        {/* hero-Left */}
                        <div className="hero-left p-1 flex-col gap-4  flex justify-center">
                            <div>
                                <img src={heroImgNFT} alt="" className=' bg-[#fff] shadow-md p-3 rounded-2xl' />
                            </div>


                            {/* discrption */}
                            <div className="w-full">
                                {NFTdetailsDescprtion.map((item, index) => (
                                    <div
                                        key={index}
                                        className=" drop-shadow-md rounded-2xl bg-inverted  py-1.5 px-1 cursor-pointer w-full"
                                        onClick={() => handleDescrption(index)
                                        }
                                    >
                                        <div className="flex gap-3 items-center w-full">
                                            <div className="text-2xl flex items-center gap-2 w-full">
                                                {openDesc === index ?
                                                    <div className=" gap-4  flex items-center w-full rounded-md py-4 px-2 opacity-90">
                                                        <img src={item.url} alt="" />

                                                        <h4 className="font-secondary w-full rounded-md text-excp  text-para-light ">{item.title}</h4>
                                                        <img src={lineDown} alt="" />
                                                    </div>
                                                    :
                                                    <div className="  gap-4  flex items-center w-full rounded-md py-4 px-2 opacity-90">
                                                        <img src={item.url} alt="" />
                                                        <h4 className="font-secondary w-full rounded-md text-excp text-para-light">{item.title}</h4>
                                                        <img src={lineDown} alt="" className=' -rotate-90' />
                                                    </div>
                                                }
                                            </div>

                                        </div>
                                        {openDesc === index && (
                                            <div className='border-t-2 border-boorder py-2 px-4'>
                                                <div className='max-w-[420px] flex flex-col gap-1'>

                                                    <p className='text-excp text-para-light'>By <b className='text-secondary'>Stell Noav</b></p>
                                                    <p className='w-full text-para-light'>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu feugiat felis, in maximus neque. Morbi rutrum est interdum, suscipit erat et, mattis ante. Donec at diam pulvinar, pulvinar orci vitae, luctus mauris.
                                                    </p>
                                                </div>



                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>



                            {/*  Traits */}
                            <div className="w-full">
                                {NFTtraitsData.map((item, index) => (
                                    <div
                                        key={index}
                                        className=" drop-shadow-md rounded-2xl bg-inverted  py-1.5 px-1 cursor-pointer w-full"
                                        onClick={() => handleDescrption(index)
                                        }
                                    >
                                        <div className="flex gap-3 items-center w-full">
                                            <div className="text-2xl flex items-center gap-2 w-full">
                                                {openDesc === index ?
                                                    <div className=" gap-4  flex items-center w-full rounded-md py-4 px-2 opacity-90">
                                                        <img src={item.url} alt="" />

                                                        <h4 className="font-secondary w-full rounded-md text-excp text-para-light ">{item.title}</h4>
                                                        <img src={lineDown} alt="" />
                                                    </div>
                                                    :
                                                    <div className="  gap-4  flex items-center w-full rounded-md py-4 px-2 opacity-90">
                                                        <img src={item.url} alt="" />
                                                        <h4 className="font-secondary w-full rounded-md text-excp  text-para-light">{item.title}</h4>
                                                        <img src={lineDown} alt="" className=' -rotate-90' />
                                                    </div>
                                                }
                                            </div>

                                        </div>
                                        {openDesc === index && (
                                            <div className='border-t-2 border-boorder py-2'>
                                                <div className=''>

                                                    <div className='grid grid-cols-3 gap-4 px-4'>
                                                        <div className="bg-muted rounded-md  text-center py-4 flex flex-col justify-center items-center gap-1 px-2">
                                                            <p className="text-tarits font-medium text-para-light">{item.editon}</p>
                                                            <p className="text-tarits text-secondary"> <b> {item.founEdt}</b></p>
                                                            <p className="text-tarits text-para-light">{item.floor}</p>
                                                        </div>

                                                        <div className="bg-muted rounded-md  text-center py-4 flex flex-col justify-center items-center gap-1 px-2">
                                                            <p className="text-tarits font-medium text-para-light">{item.editon}</p>
                                                            <p className="text-tarits text-secondary"> <b> {item.founEdt}</b></p>
                                                            <p className="text-tarits text-para-light">{item.floor}</p>
                                                        </div>
                                                        <div className="bg-muted rounded-md  text-center py-4 flex flex-col justify-center items-center gap-1 px-2">
                                                            <p className="text-tarits font-medium text-para-light">{item.editon}</p>
                                                            <p className="text-tarits text-secondary"> <b> {item.founEdt}</b></p>
                                                            <p className="text-tarits text-para-light">{item.floor}</p>
                                                        </div>
                                                        <div className="bg-muted rounded-md  text-center py-4 flex flex-col justify-center items-center gap-1 px-2">
                                                            <p className="text-tarits font-medium text-para-light">{item.editon}</p>
                                                            <p className="text-tarits text-secondary"> <b> {item.founEdt}</b></p>
                                                            <p className="text-tarits text-para-light">{item.floor}</p>
                                                        </div>
                                                        <div className="bg-muted rounded-md  text-center py-4 flex flex-col justify-center items-center gap-1 px-2">
                                                            <p className="text-tarits font-medium text-para-light">{item.editon}</p>
                                                            <p className="text-tarits text-secondary"> <b> {item.founEdt}</b></p>
                                                            <p className="text-tarits text-para-light">{item.floor}</p>
                                                        </div>
                                                        <div className="bg-muted rounded-md  text-center py-4 flex flex-col justify-center items-center gap-1 px-2">
                                                            <p className="text-tarits font-medium text-para-light">{item.editon}</p>
                                                            <p className="text-tarits text-secondary"> <b> {item.founEdt}</b></p>
                                                            <p className="text-tarits text-para-light">{item.floor}</p>
                                                        </div>

                                                        <div className="bg-muted rounded-md  text-center py-4 flex flex-col justify-center items-center gap-1 px-2">
                                                            <p className="text-tarits font-medium text-para-light">{item.editon}</p>
                                                            <p className="text-tarits text-secondary"> <b> {item.founEdt}</b></p>
                                                            <p className="text-tarits text-para-light">{item.floor}</p>
                                                        </div>

                                                        <div className="bg-muted rounded-md  text-center py-4 flex flex-col justify-center items-center gap-1 px-2">
                                                            <p className="text-tarits font-medium text-para-light">{item.editon}</p>
                                                            <p className="text-tarits text-secondary"> <b> {item.founEdt}</b></p>
                                                            <p className="text-tarits text-para-light">{item.floor}</p>
                                                        </div>

                                                        <div className="bg-muted rounded-md  text-center py-4 flex flex-col justify-center items-center gap-1 px-2">
                                                            <p className="text-tarits font-medium text-para-light">{item.editon}</p>
                                                            <p className="text-tarits text-secondary"> <b> {item.founEdt}</b></p>
                                                            <p className="text-tarits text-para-light">{item.floor}</p>
                                                        </div>




                                                    </div>
                                                </div>



                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                        </div>



                        {/* hero-Right */}
                        <div className="hero-right flex flex-col items-center lg:justify-end 2xl:w-[55%] gap-4">
                            {/* text-top */}
                            <div className=' w-full'>
                                <h2>Pixacio</h2>
                                <h5 className='font-secondary text-para-light'>Owned by <b className='text-secondary'>  Stella Nova</b></h5>
                            </div>

                            {/* tiemr section */}
                            <div className='bg-inverted rounded-md drop-shadow-md w-full py-2'>

                                <div className='border-b-2 border-boorder px-4 py-2 flex gap-2 items-center'>
                                    <img src={watchIco} alt="" />
                                    <h5 className='text-excp font-secondary text-para-light '>Sale ends 18 November 2023 at 8:47 am </h5>
                                </div>

                                <div className='flex flex-col gap-2 px-4'>
                                    <div className=' py-2'>
                                        <p className='text-para-light'>Current price</p>
                                        <h3 className='font-secondary font-medium'>5.001 FRY</h3>
                                    </div>
                                    <div className='flex gap-2'>
                                        <div className='flex justify-center w-full'>
                                            <button className='w-full navbtn-size border-2 border-boorder text-secondary navbtn-border px-4 py-2 cursor-pointer font-medium'>
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


                            {/* listing */}
                            <div className="w-full">
                                {NFTdetailsListing.map((item, index) => (
                                    <div
                                        key={index}
                                        className=" drop-shadow-md rounded-2xl bg-inverted  py-1.5 px-1 cursor-pointer w-full"
                                        onClick={() => handleListing(index)
                                        }
                                    >
                                        <div className="flex gap-3 items-center w-full">
                                            <div className="text-2xl flex items-center gap-2 w-full">
                                                {open === index ?
                                                    <div className=" gap-4  flex items-center w-full rounded-md py-4 px-2 opacity-90">
                                                        <img src={item.url} alt="" />

                                                        <h4 className="font-secondary w-full rounded-md font-semibold text-secondary ">{item.title}</h4>
                                                        <img src={lineDown} alt="" />
                                                    </div>
                                                    :
                                                    <div className="  gap-4  flex items-center w-full rounded-md py-4 px-2 opacity-90">
                                                        <img src={item.url} alt="" />
                                                        <h4 className="font-secondary w-full rounded-md font-semibold text-secondary">{item.title}</h4>
                                                        <img src={lineDown} alt="" className=' -rotate-90' />
                                                    </div>
                                                }
                                            </div>

                                        </div>
                                        {open === index && (
                                            <div className='border-t-2 w-full border-boorder py-2 px-4'>
                                                <div className='border-b-2 w-full border-boorder flex gap-20  items-center py-2'>
                                                    <p>{item.priceTag}</p>
                                                    <p>{item.usdpriceTag}</p>
                                                    <p>{item.quantityTag}</p>
                                                    <p>{item.fromTag}</p>
                                                    <p></p>
                                                </div>
                                                <div className='border-b-2 w-full border-boorder flex gap-20  items-center py-2'>
                                                    <p>{item.price}</p>
                                                    <p>{item.usdpirce}</p>
                                                    <p>{item.quantity}</p>
                                                    <p>{item.from}</p>
                                                    <p>buy</p>
                                                </div>



                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Offers */}
                            <div className="w-full">
                                {NFToffterData.map((item, index) => (
                                    <div
                                        key={index}
                                        className=" drop-shadow-md rounded-2xl bg-inverted  py-1.5 px-1 cursor-pointer w-full"
                                        onClick={() => handleListing(index)
                                        }
                                    >
                                        <div className="flex gap-3 items-center w-full">
                                            <div className="text-2xl flex items-center gap-2 w-full">
                                                {open === index ?
                                                    <div className=" gap-4  flex items-center w-full rounded-md py-4 px-2 opacity-90">
                                                        <img src={item.url} alt="" />

                                                        <h4 className="font-secondary w-full rounded-md text-para-light text-excp ">{item.title}</h4>
                                                        <img src={lineDown} alt="" />
                                                    </div>
                                                    :
                                                    <div className="  gap-4  flex items-center w-full rounded-md py-4 px-2 opacity-90">
                                                        <img src={item.url} alt="" />
                                                        <h4 className="font-secondary w-full rounded-md text-para-light text-excp">{item.title}</h4>
                                                        <img src={lineDown} alt="" className=' -rotate-90' />
                                                    </div>
                                                }
                                            </div>

                                        </div>
                                        {open === index && (
                                            <div className='border-t-2 w-full border-boorder py-2 px-4'>
                                                <div className="grid grid-cols-5 w-full gap-2">
                                                    <p className='text-secondary font-black'> <b>{item.price}</b></p>
                                                    <p className='text-secondary font-black'> <b>{item.usdprice}</b></p>
                                                    <p className='text-secondary font-black'> <b>{item.quantity}</b></p>
                                                    <p className='text-secondary font-black'> <b>{item.fooldif}</b></p>
                                                    <p className='text-secondary font-black'> <b>{item.from}</b></p>
                                                    <hr className='col-span-5 border-boorder border-b-1' />


                                                    {/*  */}
                                                    <p className='text-secondary'> <b> {item.p1}</b></p>
                                                    <p className='text-para-light'> {item.usdp1}</p>
                                                    <p className='text-para-light'>{item.q1}</p>
                                                    <p className='text-para-light'>{item.fd1}</p>
                                                    <p className='text-para-light'>{item.f1}</p>
                                                    <hr className='col-span-5 border-boorder border-b-1' />


                                                    {/*  */}
                                                    <p className='text-secondary'> <b> {item.p1}</b></p>
                                                    <p className='text-para-light'> {item.usdp1}</p>
                                                    <p className='text-para-light'>{item.q1}</p>
                                                    <p className='text-para-light'>{item.fd1}</p>
                                                    <p className='text-para-light'>{item.f1}</p>
                                                    <hr className='col-span-5 border-boorder border-b-1' />
                                                    
                                                    {/*  */}
                                                    <p className='text-secondary'> <b> {item.p1}</b></p>
                                                    <p className='text-para-light'> {item.usdp1}</p>
                                                    <p className='text-para-light'>{item.q1}</p>
                                                    <p className='text-para-light'>{item.fd1}</p>
                                                    <p className='text-para-light'>{item.f1}</p>
                                                    <hr className='col-span-5 border-boorder border-b-1' />

                                                

                                                </div>


                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/*  Details */}
                            <div className="flex justify-start w-full">
                                {NFTdetailData.map((item, index) => (
                                    <div
                                        key={index}
                                        className=" drop-shadow-md rounded-2xl bg-inverted  py-1.5 px-1 cursor-pointer min-w-[500px]"
                                        onClick={() => handleDescrption(index)
                                        }
                                    >
                                        <div className="flex gap-3 items-center m">
                                            <div className="text-2xl flex items-center gap-2 w-full">
                                                {openDesc === index ?
                                                    <div className=" gap-4  flex items-center w-full rounded-md py-4 px-2 opacity-90">
                                                        <img src={item.url} alt="" />
                                                        <h4 className="font-secondary w-full rounded-md text-excp text-para-light ">{item.title}</h4>
                                                        <img src={lineDown} alt="" />
                                                    </div>
                                                    :
                                                    <div className="  gap-4  flex items-center w-full rounded-md py-4 px-2 opacity-90">
                                                        <img src={item.url} alt="" />
                                                        <h4 className="font-secondary w-full rounded-md text-excp  text-para-light">{item.title}</h4>
                                                        <img src={lineDown} alt="" className=' -rotate-90' />
                                                    </div>
                                                }
                                            </div>

                                        </div>
                                        {openDesc === index && (
                                            <div className='border-t-2 border-boorder py-2 '>
                                                <div className='min-w-[420px]'>
                                                    <div className='flex flex-col gap-3 w-full px-4'>

                                                        <div className='flex justify-between text-para-light'>
                                                            <p>Contract Address</p>
                                                            <p>0x5848...1713</p>
                                                        </div>

                                                        <div className='flex justify-between text-para-light'>
                                                            <p>Token ID</p>
                                                            <p>7926</p>
                                                        </div>



                                                        <div className='flex justify-between text-para-light'>
                                                            <p>Token Standard</p>
                                                            <p>ERC-721</p>
                                                        </div>



                                                        <div className='flex justify-between text-para-light'>
                                                            <p>Chain</p>
                                                            <p>Algorand</p>
                                                        </div>

                                                        <div className='flex justify-between text-para-light'>
                                                            <p>Creator Earnings</p>
                                                            <p>6.5%</p>
                                                        </div>

                                                    </div>

                                                </div>



                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>


                        </div>
                    </div>


                    {/* items Activity*/}
                    <div className='py-10'>
                        <div className="w-full">
                            {NFTitemActivityData.map((item, index) => (
                                <div
                                    key={index}
                                    className=" drop-shadow-md rounded-2xl bg-inverted  py-1.5 px-1 cursor-pointer w-full"
                                    onClick={() => handleListing(index)
                                    }
                                >
                                    <div className="flex gap-3 items-center w-full">
                                        <div className="text-2xl flex items-center gap-2 w-full">
                                            {open === index ?
                                                <div className=" gap-4  flex items-center w-full rounded-md py-4 px-2 opacity-90">
                                                    <img src={item.url} alt="" />

                                                    <h4 className="font-secondary w-full rounded-md text-excp  text-secondary ">{item.title}</h4>
                                                    <img src={lineDown} alt="" />
                                                </div>
                                                :
                                                <div className="  gap-4  flex items-center w-full rounded-md py-4 px-2 opacity-90">
                                                    <img src={item.url} alt="" />
                                                    <h4 className="font-secondary w-full rounded-md text-excp text-secondary">{item.title}</h4>
                                                    <img src={lineDown} alt="" className=' -rotate-90' />
                                                </div>
                                            }
                                        </div>

                                    </div>

                                    {open === index && (
                                        <div className='border-t-2 w-full border-boorder py-2 px-4'>
                                            <div className='flex justify-center w-full '>
                                                <h2 className='bg-green-500 max-w-[600px]'>Filter</h2>
                                            </div>
                                            <div className='border-b-2 w-full border-boorder flex  justify-between py-2'>
                                                <div className='grid grid-cols-5 w-full'>
                                                    <p><b> {item.Event}</b></p>
                                                    <p><b>{item.Price} </b></p>
                                                    <p><b> {item.From}</b></p>
                                                    <p><b> {item.To}</b></p>
                                                    <p><b> {item.Date}</b></p>
                                                    <p></p>
                                                </div>
                                            </div>

                                            <div className='border-b-2 w-full border-boorder flex gap-20  items-center py-2'>
                                                <div className="grid grid-cols-5 w-full gap-2">
                                                    <p className='text-para-light'>{item.e1}</p>
                                                    <p><b> {item.p1}</b></p>
                                                    <p className='text-para-light'>{item.f1}</p>
                                                    <p className='text-para-light'>{item.t1}</p>
                                                    <p className='text-para-light' >{item.d1}</p>
                                                    <hr className='col-span-5 border-boorder border-b-1' />

                                                    {/*  */}

                                                    <p className='text-para-light'>{item.e2}</p>
                                                    <p> {item.p2}</p>
                                                    <p className='text-para-light'>{item.f2}</p>
                                                    <p className='text-para-light'>{item.t2}</p>
                                                    <p className='text-para-light'>{item.d2}</p>
                                                    <hr className='col-span-5 border-boorder border-b-1' />

                                                    {/*  */}
                                                    <p className='text-para-light'>{item.e3}</p>
                                                    <p><b>{item.p3} </b>    </p>
                                                    <p className='text-para-light'>{item.f3}</p>
                                                    <p className='text-para-light'>{item.t3}</p>
                                                    <p className='text-para-light'>{item.d3}</p>

                                                </div>

                                            </div>

                                        </div>
                                    )}
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

export default NFTdetailpixacio