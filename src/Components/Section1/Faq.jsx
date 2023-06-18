import React from "react";
import "./Faq.css";
// import Footer from "./Footer";

const Faq = () => {
  return (
    <>
      <div className="faq bg-[#000000]">
        <ul className="accordion">
          <li className="border-t-[0.3px] border-cyan-400">
            <input type="radio" name="accordion" id="first" />
            <label htmlFor="first" className="text-[#4acfff] text-[18px]">
              What is AIDoge?
            </label>
            <div className="content text-[#fff]">
              AiDoge is a next-level, AI-powered meme generation platform
              designed to revolutionise the way crypto memes are created and
              shared.
            </div>
          </li>
          <li className="border-t-[0.3px] border-cyan-400">
            <input type="radio" name="accordion" id="second" />
            <label htmlFor="second" className="text-[#4acfff] text-[18px]">
              Why AIDoge?
            </label>
            <div className="content text-[#fff]">
              AiDoge is addressing a growing problem on Crypto Twitter and other
              social media - the regurgitation of the same stale memes. We’re
              injecting life into meme creation through the power of $AI tokens.
            </div>
          </li>
          <li className="border-t-[0.3px] border-cyan-400">
            <input type="radio" name="accordion" id="third" />
            <label htmlFor="third" className="text-[#4acfff] text-[18px]">
              What is the $AI token utility?
            </label>
            <div className="content text-[#fff]">
              The $AI token is the key to accessing our bespoke AI generation
              tools. $AI token holders will receive special benefits such as
              exclusive access to advanced meme generation software, airdrops,
              and more.
            </div>
          </li>
          <li className="border-t-[0.3px] border-cyan-400">
            <input type="radio" name="accordion" id="fourth" />
            <label htmlFor="fourth" className="text-[#4acfff] text-[18px]">
              When will I get my AI tokens
            </label>
            <div className="content text-[#fff]">
              If you’ve purchased $AI tokens in presale, you’ll be able to claim
              them on June 19th at 9am UTC.
            </div>
          </li>
          <li className="border-t-[0.3px] border-cyan-400">
            <input type="radio" name="accordion" id="fifth" />
            <label htmlFor="fifth" className="text-[#4acfff] text-[18px]">
              When will I be able to generate AI memes?
            </label>
            <div className="content text-[#fff]">
              The AiDoge meme generation platform is earmarked to go live in Q4
              2023 and will operate based on users’ credit balances earned via
              staking.
            </div>
          </li>
          <li className="border-t-[0.3px] border-cyan-400">
            <input type="radio" name="accordion" id="sixth" />
            <label htmlFor="sixth" className="text-[#4acfff] text-[18px]">
              What are the benefits of staking AI?
            </label>
            <div className="content text-[#fff]">
              Staking $AI tokens builds up credits for users. Credits will allow
              access to the AiDoge platform’s meme generation features.
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Faq;
