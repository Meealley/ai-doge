import React from "react";
import FaqImage from "../../assets/faq.png";
import Faq from "./Faq";

const FaqReal = () => {
  return (
    <>
      <section className=" pt-12 pb-12 sm:pb-16 lg:pt-8 bg-[#000000]" id="faq">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16 bg-[#000000]">
            {/* Section Images */}
            <div className="mt-4">
              <img src={FaqImage} alt="" />
            </div>
            {/* Section texts */}
            <div className="bg-[#000000]">
              <div>
                <div>
                  <h1 className="text-[#4acfff] font-abc font-extrabold text-[24px]  md:text-[32px] lg:text-[48px]">
                    Frequently Asked Questions
                  </h1>
                  <Faq />
                </div>
              </div>
            </div>

            {/* end  */}
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqReal;
