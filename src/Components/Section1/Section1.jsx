import React from "react";

const Section1 = () => {
  return (
    <>
      <section className=" bg-black mt-12 sm:mt-6 pt-12 pb-12 sm:pb-16 lg:pt-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div>
            <div className="pt-10 uppercase text-center">
              <h1 className="text-white text-[28px] md:text-[38px] font-extrabold font-abc">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-400"> AIDOGE</span> - THE GREATEST{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-400"> meme generation</span> PLATFORM
              </h1>
            </div>
          </div>

          <div>
            <p className="text-white text-center mt-4 pb-20 text-[20px]">
              Join us in revolutionizing the meme world with our innovative
              platform and community-driven approach
            </p>
          </div>

          <div className="pb-[20px] md:pb-[40px] lg:pb-[60px]">
            <div className="pt-10 text-center">
              <h1 className="text-white text-[24px] md:text-[33px] lg:text-[45px] font-extrabold font-abc pb-6">
                Generate the
                <span className="text-cyan-500"> Hottest Memes </span>
              </h1>
              <div>
                <p className="text-white text-[14px] md:text-[18px] lg:text-[20px] pb-[24px]">
                  The AiDoge platform provides an AI-driven meme generation
                  experience for users, adapting to the ever-changing crypto
                  world. It employs advanced AI technology for creating relevant
                  memes based on user-provided text prompts. Key aspects include
                  the AI-powered meme generator, text-based prompts, and $AI
                  tokens for purchasing credits.
                </p>
                <p className="text-white text-[14px] md:text-[18px] lg:text-[20px]">
                  AiDoge’s generator uses cutting-edge AI algorithms to create
                  contextually relevant memes, trained on extensive meme
                  datasets and crypto news. This ensures high-quality,
                  up-to-date memes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
