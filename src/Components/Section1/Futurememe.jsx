import React from "react";
import FutureDogs from "../../assets/future_doge.png";

const Futurememe = () => {
  return (
    <section className=" pt-12 pb-12 sm:pb-16 lg:pt-8 bg-[#000000]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16 bg-[#000000]">
          {/* Section Images */}
          <div className="mt-4">
            <img src={FutureDogs} alt="" />
          </div>
          {/* Section texts */}
          <div className="bg-[#000000]">
            <div>
              <div>
                <h1 className="text-[#fff] font-abc font-extrabold text-[24px]  md:text-[32px] lg:text-[48px]">
                  <span className="text-[#4acfff] font-abc">$AI</span> - “The{" "}
                  <span className="font-abc text-[#4acfff]"> future </span>of
                  memes”
                </h1>
                <p className="pt-[35px] text-[#fff] text-[14px]  md:text-[18px] lg:text-[21px]">
                  The AiDoge ecosystem offers users the opportunity to stake $AI
                  tokens to earn daily credit rewards and access platform
                  features. Staking is crucial for long-term engagement and
                  platform stability.
                </p>
                <p className="pt-[35px] text-[#fff] text-[14px]  md:text-[18px] lg:text-[21px]">
                  The public wall is a dynamic space within AiDoge where users
                  view and share AI-generated memes. The wall includes filters
                  and sorting options, allowing users to browse memes based on
                  criteria like popularity, recency, or specific themes.
                </p>
                <p className="pt-[35px] text-[#fff] text-[14px]  md:text-[18px] lg:text-[21px]">
                  We offer an innovative meme generation solution, leveraging
                  advanced AI technology, user-friendly prompts, and a
                  token-based credit system to revolutionize meme creation and
                  cultivate a thriving crypto community.
                </p>
              </div>
            </div>
          </div>

          {/* end  */}
        </div>
      </div>
    </section>
  );
};

export default Futurememe;
