import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Apostrophe, UserProfile1 } from "../../assets";
import { testimonialData } from "../../data/homepage";

const TestimonailSlider = () => {
  return (
    <div className=" py-10 xl:py-14   bg-[#3F7FAE] ">
      <div className="container w-full mx-auto">
        <div className="lg:px-0 lg:py-0 flex flex-col gap-5  ">
          <h2 className="  text-white   uppercase  md:text-center md:max-w-[75%] mx-auto">
            Words from happy doctors
          </h2>
          <div className=" w-full mx-auto">
          <Swiper
            slidesPerView={1}
            spaceBetween={5}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="mySwiper"
          >
            {testimonialData?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="testimaol-item group cursor-default px-0 py-0   md:py-4 md:px-4">
                  <div className=" bg-white rounded-xl px-8 py-8 group-hover:bg-themeSecondry-0  h-[300px] transition-all duration-300">
                    <div className="testimonal-area mb-6">
                      <img src={Apostrophe} alt="Apostrophe" className="mb-4" />
                      <p className="text-[#5E84A1]  group-hover:text-white">
                        {item?.parag}
                      </p>
                      <div className="w-full flex justify-end">
                        <img
                          src={Apostrophe}
                          alt="Apostrophe"
                          className="mt-4 rotate-180  "
                        />
                      </div>
                    </div>
                    <div className="user-area">
                      <div className="flex items-center gap-3">
                        <div className="image-area ">
                          <img
                            width={50}
                            height={50}
                            src={item?.profile}
                            alt={UserProfile1}
                            className="w-[40px] h-[40px] rounded-full "
                          />
                        </div>
                        <div className="content-area">
                          <h6 className="font-bold text-base text-themeSecondry-0 group-hover:text-white">
                            {item?.name}
                          </h6>
                          <p className="text-themePrimary-0">
                            {item?.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        </div>
      
      </div>
    </div>
  );
};

export default TestimonailSlider;
