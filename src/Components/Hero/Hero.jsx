import React from "react";
import HeroClaim from "./HeroClaim";
import { Link } from "react-router-dom";

const Hero = (props) => {
  return (
    <>
      <section className="pt-12 pb-12 sm:pb-16 lg:pt-8 md:pt-4 h-[150vh]">
        <div className=" max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16 z-10">
            {/* Hero texts */}
            <div>
              <div className="text-center lg:text-left" data-aos="fade-up">
                {/* <Heroform /> */}
              </div>
              {/* <HeroDel /> */}
            </div>

            {/* <HeroImg /> */}
            <div className="float-right">
              <HeroClaim onShow={props.onShow} />
            </div>
          </div>
        </div>
        <div className="mt-16  px-4">
          <div className="sm:block  lg:flex md:justify-between lg:justify-between ">
            <div className="text-center pb-8">
              <button className="sm:text-center lg:text-left md:mt-4 border-2 border-cyan-500 rounded-full py-2">
                <Link
                  to="https://aidoge.com/assets/documents/Aidoge_Whitepaper.pdf"
                  className="px-8 font-medium cursor-pointer text-[13px] text-white font-abc  text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-700"
                >
                  WhitePaper
                </Link>
              </button>
            </div>

            {/* social media  */}
            <div className="flex mt-12 lg:mt-4">
              <div className="text-center">
                <Link to="https://twitter.com/aidogecrypto" className="text-black">
                  {/* <FontAwesomeIcon icon={faTwitter} /> */}
                  <img
                    src="https://aidoge.com/assets/images/svg-icons/social-twitter.svg"
                    alt="twitter"
                    className="w-12 h-8"
                  />
                </Link>
              </div>
              <div >
                <Link to="https://www.instagram.com/aidogecrypto/">
                  <img
                    src="https://aidoge.com/assets/images/svg-icons/social-instagram.svg"
                    alt="instagram"
                    className="w-12 h-8"
                  />
                </Link>
              </div>
              <div >
                <Link to="https://discord.com/invite/QE5PdhbjUY">
                  <img
                    src="https://aidoge.com/assets/images/svg-icons/social-discord.svg"
                    alt="discord"
                    className="w-12 h-8"
                  />
                </Link>
              </div>
              <div >
                <Link to="https://t.me/AiDogeCryptoOfficial">
                  <img
                    src="https://aidoge.com/assets/images/svg-icons/social-telegram.svg"
                    alt="telegram"
                    className="w-12 h-8"
                  />
                </Link>
              </div>
              <div >
                <Link to="https://www.tiktok.com/@aidogecrypto">
                  <img
                    src="https://aidoge.com/assets/images/svg-icons/social-tiktok.svg"
                    alt="tiktok"
                    className="w-12 h-8"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
