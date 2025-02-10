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
import gl from "../assets/Footer/images/GridLeft.webp"
import gr from "../assets/Footer/images/GridRight.webp"
import EL from "../assets/Footer/images/footerLeftElicp.webp"
const Footer = () => {
  return (
    <div className="relative">

      {/* footer Elipc */}
      <img src={EL} alt="" className="absolute left-0 top-[-40px] size-130" />
      
      <div className="flex justify-center relative">
        {/* footer Grid */}
        <img src={gl} alt="" className="absolute left-0 bottom-0 " />
        <img src={gr} alt="" className="absolute right-0 bottom-0" />


        <div className="container mx-auto flex flex-col gap-4 max-sm:px-5 sm:px-12 lg:px-20 py-5">
          <div className="flex flex-col justify-center items-center gap-4 xl:gap-10">
            <h2 className="text-center">Ready for Next NFT Drop?</h2>
            <div className="footer-border flex justify-between items-center gap-12 lg:gap-50 2xl:gap-70 3xl:gap-80  px-4 lg:px-8  py-3">
              <h3 className="font-secondary text-main">info@gmail.com</h3>
              <span className="navbtn-size text-small navbtn-border font-medium background-grad text-inverted px-4 py-2 shrink-0 cursor-pointer">
                <img src={message} alt="no img" />
              </span>
            </div>
          </div>
          {/* footer end */}
          <div className="footer-bg px-10 lg:px-20 py-10 relative">
            <img src={logofooter} alt="" className="absolute top-8 left-30 max-2xl:top-30 max-md:hidden max-lg:left-20" />
            <img src={tracked} alt="" className="absolute bottom-0 left-0 max-xl:bottom-1 max-md:hidden 2xl:size-74 size-[450px]" />

            {/* main footer text */}
            <div className="2xl:flex-row 2xl:justify-end 2xl:items-center 2xl:gap-32 max-md:items-start flex flex-col gap-4 items-end">
              <div className="flex flex-col gap-4 lg:gap-10">
                <h5 className="font-secondary text-inverted">
                  NFT ALGO is the world’s leading NFTs <br /> marketplace where you can discover, sell <br /> and bid NFTs and get rich
                </h5>
                <div className="flex gap-2">
                  <img src={fb} alt="fb" />
                  <img src={telegram} alt="telegram" />
                  <img src={linkden} alt="linkden" />
                  <img src={discord} alt="discord" />
                  <img src={insta} alt="insta" />
                  <img src={tiktok} alt="tiktok" />
                  <img src={redit} alt="redit" />
                  <img src={github} alt="github" />
                </div>
              </div>
              <div className="font-secondary text-inverted flex flex-col gap-4">
                <h3>About</h3>
                <h5>About NFT</h5>
                <h5>Live Auctions</h5>
                <h5>Collection</h5>
                <h5>Activity</h5>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;







