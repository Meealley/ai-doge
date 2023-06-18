import React, { useState } from "react";
import Hero from "../Hero/Hero";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  // const [isShown, setIsShown] = useState(false)
  const [toggelNav, setToggleNav] = useState(false);
  const [onScroll, setOnScroll] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 10) {
      setOnScroll(true);
    } else {
      setOnScroll(false);
    }
  };

  const handleToggle = () => {
    setToggleNav((prevNav) => !prevNav);
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <>
      <div className="bg-bg-image bg-no-repeat bg-cover h-screen">
        <header
          className={
            onScroll
              ? "navbar onScroll py-2 md:py-4 z-[1] sticky top-0 "
              : "py-2 md:py-6 z-[1] sticky top-0"
          }
        >
          <div className=" px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0">
                <a
                  href="/"
                  title=""
                  className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  <img
                    className="w-[200px] h-5"
                    src="https://aidoge.com/assets/images/logo_web.png"
                    // src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/AiDoge_1684756904.webp"
                    alt=""
                  />
                </a>
              </div>

              <div className="flex lg:hidden absolute right-4 md:right-20  pl-32 ">
                <button
                  onClick={handleToggle}
                  type="button"
                  className="text-gray-900 transition delay-200 ease-in-out duration-200"
                >
                  {/* {toggelNav ? (
                    // <FontAwesomeIcon
                    //   icon={faXmark}
                    //   className="text-3xl text-white"
                    // />
                  ) : (
                    <FontAwesomeIcon
                      icon={faBars}
                      className="w-7 h-7 text-white"
                    />
                  )} */}
                </button>
              </div>

              <div className="hidden capitalize lg:flex lg:ml-10 xl:ml-16 lg:items-center lg:justify-center lg:space-x-8 xl:space-x-16">
                <Link
                  to="/find-a-card"
                  title=""
                  className="text-lg font-medium text-white transition-all text-shadow duration-200 rounded focus:outline-none font-pj hover:text-opacity-50"
                >
                  {" "}
                  Platform
                </Link>

                <Link
                  to="/offers-and-promotions"
                  title=""
                  className="text-lg font-medium text-white shadow-xl transition-all text-shadow duration-200 rounded focus:outline-none font-pj hover:text-opacity-50"
                >
                  {" "}
                  $AI Token
                </Link>

                <NavLink
                  to="/ways-to-pay"
                  title=""
                  className="text-lg capitalize font-medium text-white transition-all text-shadow duration-200 rounded focus:outline-none font-pj hover:text-opacity-50"
                >
                  {" "}
                  how to buy
                </NavLink>

                <NavLink
                  to="/vision"
                  title=""
                  className="text-lg capitalize font-medium text-white transition-all text-shadow duration-200 rounded focus:outline-none font-pj hover:text-opacity-50"
                >
                  {" "}
                  roadmap
                </NavLink>

                <NavLink
                  to="/vision"
                  title=""
                  className="text-lg font-medium text-white transition-all text-shadow duration-200 rounded focus:outline-none font-pj hover:text-opacity-50"
                >
                  {" "}
                  airdrop
                </NavLink>
                <NavLink
                  to="/vision"
                  title=""
                  className="text-lg uppercase font-medium text-white transition-all text-shadow duration-200 rounded focus:outline-none font-pj hover:text-opacity-50"
                >
                  {" "}
                  faq
                </NavLink>
              </div>

              {/* responsive one / */}
              {toggelNav ? (
                <div
                  className="block capitalize lg:hidden"
                  onClick={handleToggle}
                >
                  <div className="flex flex-col bg-black text-black cursor-pointer text-left w-full h-85 items-start absolute lg:top-10 md:top-20 top-[60px] left-0 z-10  space-x-6 transition-all ease-in duration-500">
                    <Link href="/"></Link>
                    <Link to="/find-a-card" className="pt-8">
                      find a card
                    </Link>
                    <Link to="/offers-and-promotions" className="pt-8">
                      offers and promotions
                    </Link>
                    <Link to="/ways-to-pay" className="pt-8">
                      ways to pay
                    </Link>
                    <Link to="/vision" className="pt-8">
                      vision
                    </Link>
                    <div className="my-8 flex justify-between">
                      <div>
                        <Link to="/signIn" className="pt-8">
                          sign in
                        </Link>
                      </div>
                      <div className="pb-8 ml-20 md:justify-end">
                        <Link
                          to="/"
                          className="bg-amber-700 px-4 py-4 rounded-md text-white"
                        >
                          create account
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}

              {/* <div className="lg:ml-auto lg:flex lg:items-center lg:space-x-8 xl:space-x-10 ml-10 sm:hidden">
                <NavLink
                  to="/signin"
                  title=""
                  className=" text-white bg-slate-800 p-3 w-60 rounded-full pr-20 pl-4 font-bold text-lg"
                >
                  English
                  <span className="pl-[137px]">V</span>
                </NavLink>
              </div> */}
            </div>
          </div>
        </header>

        <Hero onShow={props.onShow}/>
      </div>
    </>
  );
};

export default NavBar;
