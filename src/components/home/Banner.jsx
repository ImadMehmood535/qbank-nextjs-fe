import { HoneBannerScreen, RightArrow, TabMobile } from "@/assets";
import { features } from "@/data/features";
import Image from "next/image";
import React from "react";
import LinkComponent2 from "../general/LinkComponent2";

const Banner = () => {
  return (
    <div className="container mx-auto w-full">
      <div className=" bg-pattern bg-[#243656] rounded-3xl text-white">
        <div className="flex flex-wrap lg:flex-nowrap items-center px-3 py-6 lg:px-0 lg:py-0">
          <div className="w-full lg:px-16 flex flex-col gap-5">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl uppercase">
              Prepare for <br /> AMC Medical Exam
            </h1>
            <p className="font-normal text-base sm:text-lg">
              Realtime preparation for your Australian Medical Council AMC MCQ Exam.
            </p>
            <ul className="flex flex-col gap-1">
              {features?.map((feature, index) => (
                <li key={index} className="flex justify-start items-center gap-2">
                  <div className="px-2">
                    <Image
                      src={RightArrow}
                      width={20}
                      height={30}
                      alt="Right Arrow"
                      layout="fixed"
                      quality={20}
                      loading="lazy"
                    />
                  </div>
                  <div className="w-[400px]">
                    <p>{feature}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="w-full mt-4">
              <LinkComponent2 to="/user/exam" text="Try Demo Exam" />
            </div>
          </div>
          <div className="w-full">
            <div className="hidden lg:block w-[700px]">
              <Image
                src={HoneBannerScreen}
                layout="responsive"
                width={1000}
                height={1000}
                alt="Hone Banner Screen"
                quality={100}
                loading="lazy"
              />
            </div>
            <div className="block lg:hidden py-4 mt-8 ">
              <Image
                src={TabMobile}
                layout="cover"
                width={1000}
                height={1000}
                alt="Hone Banner Screen"
                quality={10}
                objectPosition="center"
                loading="lazy"
                className="w-[350px] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
