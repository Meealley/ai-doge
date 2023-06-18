import React from "react";
import Usecart from "../../assets/cart.svg";
import Usepeople from "../../assets/refer_airdrop.svg";
import Useairdrop from "../../assets/airdrop.svg";

const BillionToken = () => {
  return (
    <>
      <section className="bg-[#000000] mt-12 sm:mt-6 pt-12 pb-12 sm:pb-16 lg:pt-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-20">
            <div>
              <h1 className="text-[#fff] text-center text-[24px] font-abc font-extrabold">
                <span className="text-[#4acfff] font-abc">$AI</span> 50 billion
                Token <span className="text-[#4acfff] font-abc"> Airdrop</span>
              </h1>
            </div>
            <div>
              <p className="text-[14px] md:text-[16px] lg:text-[16px] text-[#fff] text-center">
                Like free tokens? AiDoge supporters who help us reach our
                presale target will be given a huge $AI airdrop! The reward will
                be based on your cumulative referral amount. To participate,
                follow these simple steps:
              </p>
            </div>
          </div>

          {/* this are the icons  */}
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-3 gap-y-12 lg:gap-x-16 relative">
            <div className="border  border-[#4acfff] rounded-[35px]">
              <div className="flex flex-col text-center items-center pt-[4rem] pb-[4rem]">
                <img src={Usecart} alt="" />
                <h1 className="font-bold text-[20px] font-abc capitalize mt-8 mb-4 text-[#4acfff] tracking-wide">
                  Purchase $AI In Presale
                </h1>
                <div>
                  <p className="text-[#fff] px-4 text-center pt-1 text-[14px] md:text-[16px] lg:text-[16px]">
                    Join the AiDoge community and buy $AI tokens via the presale
                    widget.
                  </p>
                  {/* Icon logo at the top left corner */}

                  <div className="absolute top-0 font-bold text-[20px] left-[-10px] flex items-center justify-center w-12 h-12 bg-[#4acfff] rounded-full">
                    1
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="border  border-[#4acfff] rounded-[35px] ">
                <div className="flex flex-col text-center items-center pt-[4rem] pb-[4rem]">
                  <img src={Usepeople} alt="" />
                  <h1 className="font-bold capitalize font-abc mt-8 mb-4 text-[20px] text-[#4acfff] tracking-wide">
                    Share Your Referral Code
                  </h1>
                  <div>
                    <p className="text-[#fff] px-4 text-center pt-1 text-[14px] md:text-[16px] lg:text-[16px]">
                      Join the AiDoge community and buy $AI tokens via the
                      presale widget.
                    </p>
                    {/* Icon logo at the top left corner */}

                    <div className="absolute top-0 font-bold text-[20px] left-[-10px] flex items-center justify-center w-12 h-12 bg-[#4acfff] rounded-full">
                      2
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-[#4acfff] rounded-[35px] relative">
              <div className="flex flex-col text-center items-center pt-[4rem] pb-[4rem]">
                <img src={Useairdrop} alt="" />
                <h1 className="font-bold text-[20px] capitalize mt-8 mb-4 text-[#4acfff] tracking-wide">
                  Earn $AI Airdrop
                </h1>
                <div>
                  <p className="text-[#fff] px-4 text-center pt-1 text-[14px] md:text-[16px] lg:text-[16px]">
                    You’ll earn a share of 50bn $AI based on your referral
                    link’s total amount raised.
                  </p>
                  {/* Icon logo at the top left corner */}

                  <div className="absolute top-0 left-[-10px] font-bold text-[20px] flex items-center justify-center w-12 h-12 bg-[#4acfff] rounded-full">
                    3
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BillionToken;
