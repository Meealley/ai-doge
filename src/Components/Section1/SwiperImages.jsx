import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./SwiperImages.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, Navigation, EffectCoverflow } from "swiper";
import Images1 from "../../assets/slide-1.png";
import Images2 from "../../assets/slide-2.png";
import Images3 from "../../assets/slide-3.png";
import Images4 from "../../assets/slide-4.png";
import Images5 from "../../assets/slide-5.png";
import Images6 from "../../assets/slide-6.png";
import IconLogo from "../../assets/icon-logo.svg";

// const swiperImages = [
//   {
//     id: 1,
//     image: Images1,
//   },
//   {
//     id: 2,
//     image: Images2,
//   },
//   {
//     id: 3,
//     image: Images3,
//   },
//   {
//     id: 4,
//     image: Images4,
//   },
//   {
//     id: 5,
//     image: Images5,
//   },
//   {
//     id: 6,
//     image: Images6,
//   },
// ];

const SwiperImages = () => {
  return (
    <div className="pt-10">
      <div className="swiper-slide swiper-slide-active">
        <Swiper
          
          loop={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={20}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          navigation={{
            nextEl: ".nextBtn",
            prevEl: ".prevBtn",
            clickable: true,
          }}
        >
          <SwiperSlide className="relative">
            <img
              className="rounded-[28px] contain border-[5px] border-cyan-500 w-[80rem] lg:h-[28rem] max-w-[700px] mx-auto"
              src={Images1}
              alt=""
            />
            {/* Icon logo at the top left corner */}
            <div className="absolute top-0 left-0 flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full">
              <img src={IconLogo} alt="icon" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-4 relative">
            <img
              className="rounded-[28px] cover border-[5px] border-cyan-500 w-[80rem] lg:h-[28rem] max-w-[700px] mx-auto"
              src={Images2}
              alt=""
            />
            {/* Icon logo at the top left corner */}
            <div className="absolute top-0 left-0 flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full">
              <img src={IconLogo} alt="icon" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-4 relative">
            <img
              className="rounded-[28px] cover border-[5px] border-cyan-500 w-[80rem] lg:h-[28rem] max-w-[700px] mx-auto"
              src={Images3}
              alt=""
            />
            {/* Icon logo at the top left corner */}
            <div className="absolute top-0 left-0 flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full">
              <img src={IconLogo} alt="icon" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-4 relative">
            <img
              className="rounded-[28px] cover border-[5px] border-cyan-500 w-[80rem] lg:h-[28rem] max-w-[700px] mx-auto"
              src={Images4}
              alt=""
            />
            {/* Icon logo at the top left corner */}
            <div className="absolute top-0 left-0 flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full">
              <img src={IconLogo} alt="icon" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-4 relative">
            <img
              className="rounded-[28px] cover border-[5px] border-cyan-500 w-[80rem] lg:h-[28rem] max-w-[700px] mx-auto"
              src={Images5}
              alt=""
            />
            {/* Icon logo at the top left corner */}
            <div className="absolute top-0 left-0 flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full">
              <img src={IconLogo} alt="icon" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-4 relative">
            <img
              className="rounded-[28px] cover border-[5px] border-cyan-500 w-[80rem] lg: h-auto max-w-[700px]"
              src={Images6}
              alt=""
            />
            {/* Icon logo at the top left corner */}
            <div className="absolute top-0 left-0 flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full">
              <img src={IconLogo} alt="icon" />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="flex items-center justify-center mt-[60px]">
          <div className="text-white font-bold text-[30px] prevBtn">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="text-white text-[30px] px-4 nextBtn">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>

      {/* Variations  */}
      <div className="pt-4 md:pt-10">
        <div>
          <div className="flex items-center justify-center">
            <div>
              <button className="w-[100px] text-center py-1">
                <div className="border-2 border-cyan-300 px-4 py-1 font-medium cursor-pointer text-sm text-cyan-300 font-abc rounded-[16px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-700">
                  Variations
                </div>
              </button>
            </div>
            <div className="px-3 md:px-8">
              <button className="w-[50px] text-center ">
                <div className="border-2 border-cyan-300  py-1 font-bold cursor-pointer text-sm text-cyan-300 font-abc rounded-full text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-700">
                  Edit
                </div>
              </button>
            </div>
            <div>
              <button className="w-[90px] text-center">
                <div className="border-2 border-cyan-300 py-1  font-medium cursor-pointer text-sm text-cyan-300 font-abc rounded-full text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-700">
                  Mint
                </div>
              </button>
            </div>
          </div>
          <div className="flex justify-center my-4">
            <button className="w-[100px] text-center">
              <div className="border-2 border-cyan-300 py-1 font-medium cursor-pointer text-sm text-cyan-300 font-abc rounded-full text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-cyan-700">
                Download
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiperImages;
