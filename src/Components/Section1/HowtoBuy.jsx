import React from "react";
import UseEth from "../../assets/ethbnb.svg";
import UseTether from "../../assets/usdt_how.svg";
import UseCard from "../../assets/card_how.svg";

const HowtoBuy = () => {
  return (
    <>
      <section className="bg-[#000000] mt-12 sm:mt-6 pt-12 pb-12 sm:pb-16 lg:pt-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center text-[#fff] pb-[25px]">
            <h1 className="font-abc text-[24px] md:text-[35px] lg:text-[50px] font-extrabold">
              How To Buy <span className="font-abc text-[#4acfff]">$AI</span>
            </h1>
          </div>
          <div className="pb-20">
            <div className="text-center">
              <p className="text-[#fff] text-[14px] md:text-[20px]  ">
                The $AI token presale is your chance to be a part of a
                revolutionary new blockchain project that promises to shake up
                the industry. By purchasing $AI tokens during the presale,
                you'll be taking a first step toward becoming a part of the
                thriving AiDoge ecosystem.
              </p>
            </div>
          </div>

          {/* use eth or bnb or card  */}

          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-3 gap-y-12 lg:gap-x-16">

            <div className="border  border-[#4acfff] rounded-[35px]">
              <div className="flex flex-col text-center items-center pt-[4rem] pb-10">
                <img src={UseEth} alt="" />
                <h1 className="font-extrabold text-[26px] md:text-[23px] lg:text-[28px] uppercase mt-8 mb-4 text-[#4acfff] tracking-wide">
                  USE ETH OR BNB
                </h1>
                <div>
                  <p className="text-[#fff] px-4 text-center pt-4 text-[14px] md:text-[18px] lg:text-[19px] ">
                    If you have ETH or BNB in your wallet, select the relevant
                    tab in the buy widget and enter how much ETH or BNB you wish
                    to swap for $AI tokens. Take note of the gas cost, then
                    confirm the transaction.
                  </p>
                </div>
              </div>
            </div>

            <div className="border  border-[#4acfff] rounded-[35px]">
              <div className="flex flex-col text-center items-center pt-[4rem] pb-10">
                <img src={UseTether} alt="" />
                <h1 className="font-extrabold uppercase mt-8 mb-4 text-[26px] md:text-[23px] lg:text-[28px] text-[#4acfff] tracking-wide">
                  USE USDT
                </h1>
                <div>
                  <p className="text-[#fff] px-4 text-center pt-4 text-[14px] md:text-[18px] lg:text-[19px]">
                    If you have USDT in your wallet, select the relevant tab in
                    the buy widget and enter how much USDT you wish to swap for
                    $AI tokens. Approve USDT, take note of the gas cost, and
                    confirm the transaction.
                  </p>
                </div>
              </div>
            </div>

            <div className="border  border-[#4acfff] rounded-[35px]">
              <div className="flex flex-col text-center items-center pt-[4rem] pb-10">
                <img src={UseCard} alt="" />
                <h1 className="font-extrabold text-[26px] md:text-[23px] lg:text-[28px] uppercase mt-8 mb-4 text-[#4acfff] tracking-wide">
                  USE YOUR CARD
                </h1>
                <div>
                  <p className="text-[#fff] px-4 text-center pt-4 text-[14px] md:text-[18px] lg:text-[19px]">
                    $AI tokens can also be purchased directly using your bank
                    card. First connect your wallet, then select the card tab in
                    the buy widget. Fill out an order, and your tokens will be
                    sent to your connected wallet.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default HowtoBuy;
