import React from "react";
import SwiperImages from "./SwiperImages";

const Platformprev = () => {
  return (
    <div>
      <section className="pt-[20px] md:pt-[30px] lg:pt-[40px] rounded pb-20">
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
                    When you realise that AIDOGE can turn your meme game from
                    RUFF to Fantastic
                  </p>
                </div>
                <div className=" font-abc flex-end text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-700">
                  Generate
                </div>
              </div>
            </div>
          </div>
          <SwiperImages />
        </div>
      </section>
    </div>
  );
};

export default Platformprev;
