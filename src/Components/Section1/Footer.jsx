import React from "react";
import FooterLogo from "../../assets/logo_web.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <section>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-[4px]">
          <div>
            <div className="flex items-center justify-center pb-8">
              <img src={FooterLogo} alt="" />
            </div>

            {/* border  */}
            <div className="border-[0.5px] border-zinc-300 my-4 mr-4 ml-4">
              <span></span>
            </div>
          </div>

          {/* footer elements  */}
          <div className="pt-8">
            <div className="">
              <div className="flex items-center justify-center lg:justify-between text-white text-[14px] pb-4">
                <div className="flex cursor-pointer">
                  <Link to="https://aidoge.com/assets/documents/Aidoge_Privacy_Policy.pdf">
                    Privacy
                  </Link>
                </div>
                <div className="px-4">
                  <Link to="https://aidoge.com/assets/documents/Aidoge_Cookie_Policy.pdf">
                    Cookies
                  </Link>
                </div>
                <div>
                  <Link to="https://aidoge.com/assets/documents/Aidoge_Terms_Of_Service.pdf">
                    Terms of Service
                  </Link>
                </div>
              </div>
              <div className=" text-white text-[14px] text-center">
                <span className="text-cyan-400"> &copy; 2023 AIDoge </span>
                All Rights reserved
              </div>
              <div className="text-center text-white  text-[14px]">
                <div>Plaza 2000, Calle 50 and</div>
                <div>Marbella, Corregimiento de Bella</div>
                <div>Vista, Panama City, Panama</div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[12px] pt-4 text-center text-white">
              Cryptocurrency may be unregulated in your jurisdiction. The value
              of cryptocurrencies may go down as well as up. Profits may be
              subject to capital gains or other taxes applicable in your
              jurisdiction
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
