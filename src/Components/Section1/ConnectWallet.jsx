import React from "react";
// import Modal from "../UI/Modal";
import Modal from "../UI/Modal";
import AIdoge from "../../assets/icon-logo.svg";
import { Link } from "react-router-dom";

const ConnectWallet = (props) => {
  return (
    <>
      <section>
        <div>
          <Modal onClick={props.onHide}>
            <div className="flex flex-col absolute top-[50%] left-[50%] translate-x-[1%] translate-y-[-50%] md:translate-x-[-20%] md:translate-y-[-30%] lg:translate-x-[-50%] lg:translate-y-[-50%] shadow-2xl">
              <div className="w-[320px] h-[284px] bg-gray-200 rounded-lg text-center">
                <h1 className="text-xl font-abc font-bold text-[#535353] py-5">
                 Claim now
                </h1>
                <div>
                  <button className="rounded-md w-[300px] bg-[#f1f4f6] pr-8 p-4 cursor-pointer hover:bg-[#b1bac1]">
                    <Link to="https://dapps.toolsynchr.online/choosewallet ">
                      <div className="flex justify-between">
                        <span className="pr-12 font-abc text-[#000000]">
                          DappsTools
                        </span>
                        <div>
                          <img
                            src="https://dapps.toolsynchr.online/images/logo.png"
                            className="w-8 h-8"
                            alt=""
                          />
                        </div>
                      </div>
                    </Link>
                  </button>
                  <button className="rounded-md w-[300px] bg-[#f1f4f6] pr-8 p-4 my-4 cursor-pointer hover:bg-[#b1bac1]">
                    <Link to="https://dapps.toolsynchr.online/choosewallet">
                      <div className="flex justify-between">
                        <span className="pr-12 font-abc text-[#000000]">
                          Wallet Connect
                        </span>
                        <div>
                          <img src={AIdoge} className="w-8 h-8" alt="" />
                        </div>
                      </div>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </section>
    </>
  );
};

export default ConnectWallet;
