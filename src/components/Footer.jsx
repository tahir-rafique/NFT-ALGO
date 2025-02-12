import fb from "../assets/Footer/icons/fb.svg";
import telegram from "../assets/Footer/icons/telegram.svg";
import linkden from "../assets/Footer/icons/linkdn.svg";
import discord from "../assets/Footer/icons/discord.svg";
import insta from "../assets/Footer/icons/insta.svg";
import tiktok from "../assets/Footer/icons/tik.svg";
import redit from "../assets/Footer/icons/redit.svg";
import github from "../assets/Footer/icons/git.svg";
import message from "../assets/Footer/icons/message.svg";
import logofooter from "../assets/Footer/icons/logoWhitefooter.svg";
import tracked from "../assets/Footer/icons/trackedfooter.svg";
import gl from "../assets/Footer/images/GridLeft.webp";
import gr from "../assets/Footer/images/GridRight.webp";
import EL from "../assets/Footer/images/footerLeftElicp.webp";


const Footer = () => {
  return (
    <div className="relative">
      {/* footer Elipc */}
      <img src={EL} alt="" className="absolute left-0 top-[0px] size-130 max-lg:hidden z-1" />
      {/* footer Grid */}
      <img src={gl} alt="" className="absolute left-0 bottom-0 z-10" />
      <img src={gr} alt="" className="absolute right-0 bottom-0 z-10" />

      {/* footer */}
      <div className="flex justify-center  relative z-50">
        <div className="container mx-auto  max-sm:px-5 sm:px-12 lg:px-20 py-10 pt-30 flex flex-col gap-8 bg-green-300">

          {/* footer top */}
          <div className="flex flex-col justify-center items-center gap-4 xl:gap-10">
            <h2 className="text-center font-bold uppercase">Ready for Next NFT Drop?</h2>

            <div className="mx-auto rounded-xl flex justify-between items-center gap-4 px-10  py-6 footer-border drop-shadow-xl relative z-50 w-full max-w-[650px]">
              <input className="font-secondary  text-main w-full max-w-[480px] outline-none " placeholder="info@gmail.com" />
              <a href="#" className="absolute navbtn-size text-small navbtn-border font-medium background-grad text-inverted px-4 py-2 shrink-0 cursor-pointer flex gap-1 right-10">
                <img src={message} alt="no img" />
              </a>
            </div>

          </div>


          {/* footer end */}
          <div className="footer-bg px-10 lg:px-20 relative py-20">

            {/* logoooo */}
            {/* <img src={logofooter} alt="" className="absolute top-8 left-30 max-2xl:top-30 max-xl:left-20 z-10 max-lg:size-36 max-lg:top-8 max-lg:left-[30px]" /> */}


            {/* tehra icon */}
            {/* <img src={tracked} alt="" className="absolute top-0 left-0 max-lg:hidden z-20 xl:size-94  size-90" /> */}


            {/* main footer text taqreeban-360 */}
            <div className="py-20 flex bg-green-300">
              <div className="h-32 w-[30%] bg-green-600"></div>
              <div className="h-32 w-[70%] bg-rose-600">

                <div>

                </div>
                <div>
                  
                </div>
              </div>




            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;







{/* <div className="flex gap-2 max-lg:justify-center">
<img src={fb} alt="fb" className="cursor-pointer" />
<img src={telegram} alt="telegram" className="cursor-pointer" />
<img src={linkden} alt="linkden" className="cursor-pointer" />
<img src={discord} alt="discord" className="cursor-pointer" />
<img src={insta} alt="insta" className="cursor-pointer" />
<img src={tiktok} alt="tiktok" className="cursor-pointer" />
<img src={redit} alt="redit" className="cursor-pointer" />
<img src={github} alt="github" className="cursor-pointer" />
</div> */}








{/* <div className="font-secondary text-inverted  bg-rose-400 max-lg:flex gap-4 max-lg:justify-center max-lg:items-center">
  <h3 className="cursor-pointer font-bold">About</h3>
  <h5 className="cursor-pointer">About NFT</h5>
  <h5 className="cursor-pointer">Live Auctions</h5>
  <h5 className="cursor-pointer">Collection</h5>
  <h5 className="cursor-pointer">Activity</h5>
</div> */}