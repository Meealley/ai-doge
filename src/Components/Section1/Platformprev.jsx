import React from "react";
// import SwiperImages from "./SwiperImages";
import IconLogo from "../../assets/icon-logo.svg";

import Images1 from "../../assets/slide-1.png";

const Platformprev = () => {
  return (
    <section
      className="pt-[20px] md:pt-[30px] lg:pt-[40px] rounded pb-20"
      id="platform"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div>
          <div className="pb-10">
            <h1 className="uppercase text-[24px]  md:text-[32px] lg:text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-400 font-extrabold text-center ">
              platform preview
            </h1>
          </div>
          <div className="mb-10">
            <div className="flex justify-between p-4 md:p-2 border border-[#4acfff] rounded-full text-[11px] md:text-[15px] font-abc">
              <div className="text-[#4acfff]">
                <p className="font-abc  text-[#4acfff]">
                  {" "}
                  When you realise that AIDOGE can turn your meme game from RUFF
                  to Fantastic
                </p>
              </div>
              <div className=" font-abc flex-end text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-700">
                Generate
              </div>
            </div>
          </div>
        </div>
        {/* <SwiperImages /> */}
        <div className="relative">
          <img
            className="rounded-[28px] contain border-[5px] border-cyan-500 w-[21rem] lg:w-[80rem] lg:h-[28rem] max-w-[700px] mx-auto"
            src={Images1}
            alt=""
          />
          {/* Icon logo at the top left corner */}
          <div className="absolute top-0 left-0 flex lg:hidden items-center justify-center w-12 h-12 bg-blue-500 rounded-full">
            <img src={IconLogo} alt="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platformprev;
