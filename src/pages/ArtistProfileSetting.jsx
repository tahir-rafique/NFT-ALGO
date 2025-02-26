import Navbar from "../components/Navbar";
import profileBanner from '../assets/ArtistProfilePageSetting/images/pb.webp'
import { Link } from "react-router-dom";
import profileImage from '../assets/ArtistProfilePageSetting/images/pi.webp'
import ButtonMain from "../shared/ButtonMain";
import { useState } from "react";

const ArtistProfileSetting = () => {

    const [imageFile, setImageFile] = useState(profileImage);
    const [bannerFile, setBannerFile] = useState(profileBanner);

    function handleProfileImage(e) {
        setImageFile(URL.createObjectURL(e.target.files[0]));
    }
    function handleBannerImage(e) {
        setBannerFile(URL.createObjectURL(e.target.files[0]));
    }



    return (
        <>

            <Navbar />
            <div className="flex justify-center">
                <div className="container mx-auto max-sm:px-5 sm:px-8 lg:px-20 py-10 relative z-10">

                    {/* profile shifting/navigation */}
                    <div className="flex gap-4 border-2 px-2 py-1 w-fit rounded-lg font-secondary border-boorder">
                        <Link to='/artist-profile-page' className="hover:bg-main hover:text-inverted rounded-lg px-3 py-1">Profile</Link>
                        <Link to='/artist-profile-page-setting' className="hover:bg-main hover:text-inverted px-3 py-1 rounded-lg">Profile Settings</Link>
                    </div>

                    {/*  user images*/}
                    <div className="py-5 w-full relative">

                        {/* upload banner  */}
                        <img src={bannerFile} alt="" className="flex justify-center w-full h-[330px] object-cover rounded-2xl" />

                        <div className="py-18 flex justify-center absolute top-[40%] left-[50%] translate-[-50%]">
                            <input type="file" className=" absolute z-100" style={{ width: '300px', color: 'transparent' }}
                                onChange={handleBannerImage} />
                            <p className="relative z-10 border-2 border-boorder px-4 py-3 rounded-lg bg-inverted">Upload Banner</p>
                        </div>

                        <img src={imageFile} alt="" className="flex justify-center absolute left-[50%]  translate-[-50%] w-[140px] rounded-full" />


                        {/* upload proifle image    */}
                        <div className="py-18 flex justify-center">
                            <input type="file"
                                onChange={handleProfileImage}
                                className=" absolute z-100" style={{ width: '300px', color: 'transparent' }} />
                            <p className="relative z-10 border-2 border-boorder px-4 py-3 rounded-lg bg-inverted">Upload Profile</p>
                        </div>
                    </div>


                    {/* user detials  */}
                    <div className="max-w-[820px] mx-auto font-secondary flex flex-col gap-8 ">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name"><h5>Dispaly Name</h5></label>
                            <input type="text" id="name" placeholder="Enter your Name" className="bg-inverted border-3 border-boorder rounded-md w-full px-3 py-3" />
                        </div>



                        <div className="flex flex-col gap-2">
                            <label htmlFor="bio"><h5>Bio</h5></label>
                            <textarea id="bio" rows={'4'} placeholder="Enter Bio" className="bg-inverted border-3 border-boorder rounded-xl w-full px-3 py-3" />
                        </div>


                        <div className="flex flex-col gap-2">
                            <label htmlFor="email"><h5>E-mail</h5></label>
                            <input type="email" id="email" placeholder="Enter Email" className="bg-inverted border-3 border-boorder rounded-xl w-full px-3 py-3" />
                        </div>


                        {/* Social LInks */}
                        <h3>SOCIAL LINKS</h3>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="website"><h5>Website</h5></label>
                            <input type="website" id="website" placeholder="http://" className="bg-inverted border-3 border-boorder rounded-xl w-full px-3 py-3" />
                        </div>


                        <div className="flex flex-col gap-2">
                            <label htmlFor="twitter"><h5> X(Twitter)</h5></label>
                            <div className="mx-auto rounded-xl flex justify-between items-center gap-4 px-4  py-3 bg-inverted  relative z-40 w-full border-3 border-boorder">
                                <input id="twitter" className="font-secondary text-light w-full max-w-[730px] outline-none " placeholder="@username" />
                                <a href="#" className="absolute navbtn-size text-small navbtn-border font-medium background-grad text-inverted px-2 py-1 shrink-0 cursor-pointer flex gap-1 right-2 z-50 ">
                                    <h6 className="font-light">Connect</h6>

                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="twitter"><h5> Discord</h5></label>
                            <div className="mx-auto rounded-xl flex justify-between items-center gap-4 px-4  py-3 bg-inverted  relative z-40 w-full border-3 border-boorder">
                                <input id="twitter" className="font-secondary text-light w-full max-w-[730px] outline-none " placeholder="@username" />
                                <a href="#" className="absolute navbtn-size text-small navbtn-border font-medium background-grad text-inverted px-2 py-1 shrink-0 cursor-pointer flex gap-1 right-2 z-50 ">
                                    <h6 className="font-light">Connect</h6>

                                </a>
                            </div>
                        </div>


                        <div className="flex flex-col gap-2 pb-20">
                            <label htmlFor="twitter"><h5> Instagram</h5></label>
                            <div className="mx-auto rounded-xl flex justify-between items-center gap-4 px-4  py-3 bg-inverted  relative z-40 w-full border-3 border-boorder">
                                <input id="twitter" className="font-secondary text-light w-full max-w-[730px] outline-none " placeholder="@username" />
                                <a href="#" className="absolute navbtn-size text-small navbtn-border font-medium background-grad text-inverted px-2 py-1 shrink-0 cursor-pointer flex gap-1 right-2 z-50 ">
                                    <h6 className="font-light">Connect</h6>
                                </a>
                            </div>
                        </div>


                        <ButtonMain text={'Save Changes'} />

                    </div>
                </div>

            </div>
        </>
    )
}

export default ArtistProfileSetting;