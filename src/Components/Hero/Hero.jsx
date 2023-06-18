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
        <div className="mx-[120px] mt-20">
          <div>
            <div>
              <button className="flex justify-center mx-auto md:mt-10">
                <Link
                  to="https://aidoge.com/assets/documents/Aidoge_Whitepaper.pdf"
                  className="border-2 border-cyan-500 px-8 py-3 font-medium cursor-pointer text-lg text-white font-abc rounded-full text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-700"
                >
                  WhitePaper
                </Link>
              </button>
            </div>

            {/* social media  */}
            <div className="">
              <Link className="text-black">
                {/* <FontAwesomeIcon icon={faTwitter} /> */}
                
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
