import React from "react";

const RoadMap = () => {
  return (
    <>
      <section className="bg-[#000000] mt-12 sm:mt-6 pt-12 pb-12 sm:pb-16 lg:pt-8" id="roadmap">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-[#fff] text-center">
            <div className="flex justify-center">
              <div className="text-[40px] md:text-[70px] lg:text-[90px] font-extrabold uppercase font-abc text-[#182b48] relative">
                Roadmap
              </div>
              <div className=" absolute mt-[6] md:mt-[8] lg:mt-[12] mx-auto text-[23px] md:text-[36px] lg:text-[48px] font-extrabold font-abc uppercase">
                Roadmap
              </div>
            </div>
          </div>

          <div className="grid max-w-lg  grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-4 gap-y-12 lg:gap-x-16">
            <div>
              <div className="flex flex-col text-center items-center pt-[1rem] px-4">
                <h1 className="font-extrabold text-[19px] uppercase mt-8 mb-4 text-[#4acfff] tracking-wide">
                  q2 2023
                </h1>
                <div className="text-[#4acfff] text-[15px]">
                  <ul className="capitalize list-disc">
                    <li>presale & token development</li>
                    <li>solidProof contract auditing</li>
                    <li>presale ico launch</li>
                    <li>platform development begins</li>
                    <li>CEX & DEX listings</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col text-center items-center pt-[1rem] px-4">
                <h1 className="font-extrabold text-[19px] uppercase mt-8 mb-4 text-[#4acfff] tracking-wide">
                  q3 2023
                </h1>
                <div className="text-[#4acfff] text-left text-[15px]">
                  <ul className="capitalize list-disc">
                    <li>staking platform to allow users to build up credits</li>
                    <li>platform signup launches</li>
                    <li>platform development</li>
                    <li>new CEX & DEX listings</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col text-center items-center pt-[1rem] px-4">
                <h1 className="font-extrabold text-[19px] uppercase mt-8 mb-4 text-[#4acfff] tracking-wide">
                  q4 2023
                </h1>
                <div className="text-[#4acfff] text-left text-[15px]">
                  <ul className="capitalize list-disc">
                    <li>AI meme generation platform credit system.</li>
                    <li>user credit based on $AI staking balance.</li>
                    <li>public wall for meme created by community.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col text-center items-center pt-[1rem] px-4">
                <h1 className="font-extrabold text-[19px] uppercase mt-8 mb-4 text-[#4acfff] tracking-wide">
                  q1 2024
                </h1>
                <div className="text-[#4acfff] text-left text-[15px]">
                  <ul className="capitalize list-disc">
                    <li>
                      user able to vote on memes published by the community
                    </li>
                    <li>$AI paid out for the best community voted memes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoadMap;
