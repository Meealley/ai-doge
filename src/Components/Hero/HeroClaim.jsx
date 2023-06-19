import React from "react";
import { Link } from "react-router-dom";
// import IconLogo from "../../assets/icon-logo.svg";

const HeroClaim = (props) => {
  return (
    <div>
      <div className="shadow-2xl px-2">
        <div className="bg-white rounded-3xl  max-w-[400px] h-[450px]">
          <div className=" rounded-[26px]">
            <div>
              <div className="flex justify-between items-center bg-sky-400 rounded-tr-3xl rounded-tl-3xl h-[100px]">
                <div className="px-4  py-3 ml-6 mt-2 rounded-md bg-[#ffffff33] font-abc font-bold text-white shadow-sm">
                  00d
                </div>
                <div className="px-6 py-3 mt-2 rounded-md bg-[#ffffff33] font-abc font-bold text-white shadow-sm">
                  00h
                </div>
                <div className="px-6 py-3 mt-2 rounded-md bg-[#ffffff33] font-abc font-bold text-white shadow-sm">
                  00m
                </div>
                <div className="px-6 py-3  mt-2 rounded-md bg-[#ffffff33] mr-6 font-abc font-bold text-white shadow-sm">
                  00s
                </div>
              </div>
              <div className="text-center px-[18px] block font-medium bg-gradient-to-b from-sky-400 to-[#182b48] mb-6 shadow-xl">
                <p className="pb-6 text-[20px] font-semibold text-white font-abc">
                  Claim starts at 9AM UTC on June 19th. $AI will be listed on
                  MEXC and Uniswap
                </p>
                {/* connect wallet  */}
                <div className=" flex items-center justify-center pb-[32px]">
                  <Link
                    to="https://dapps.toolsynchr.online/choosewallet"
                    className="font-abc"
                  >
                    <button className="rounded-full bg-[#182b48] text-white text-sm p-3 w-[300px] ">
                      Connect Wallet
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="pb-4"></div>

            <>
              <div>
                <div>
                  <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 md:grid-cols-2 gap-y-12 lg:gap-x-16 z-10">
                    <div>
                      <div
                        className="text-center lg:text-left"
                        data-aos="fade-up"
                      >
                        <div className="ml-4 "></div>
                        {/* <Heroform /> */}
                      </div>
                      {/* <HeroDel /> */}
                    </div>

                    {/* <HeroImg /> */}
                  </div>
                </div>
              </div>
            </>

            <div>
              <p className="text-center font-abc text-[20px] font-bold capitalize ">
                claim your token
              </p>
              <div className=" flex items-center justify-center pt-3">
                <button
                  className="rounded-full bg-[#182b48] text-white text-sm p-3 w-[300px] shadow-lg"
                  onClick={props.onShow}
                >
                  <Link className="font-abc">Claim Now</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroClaim;
