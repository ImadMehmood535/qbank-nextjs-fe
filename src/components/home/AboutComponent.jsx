import { HomeAbout } from "@/assets";
import Image from "next/image";
import React from "react";
import LinkComponent from "../general/LinkComponent";
 

const AboutComponent = () => {
  return (
    <div className="HomeAbout ">
      <div className="container w-full  mx-auto">
        <div className="flex justify-start flex-wrap lg:flex-nowrap items-center px-0 py-0 lg:px-0 lg:py-0 gap-7 lg:gap-10">
          <div className="w-full ">
            <Image
              src={HomeAbout}
              alt={HomeAbout}
              width={1000}
              height={1000}
              className="w-full !text-center mx-auto"
            />
          </div>
          <div className="w-full flex flex-col gap-5  ">
            <h2 className=" ">
              Prepare with Q Bank Model for the AMC MCQ Examination
            </h2>
            <p className=" ">
              Q Bank Model is a web-based application that guides you through
              the essential steps in preparing for the Australian Medical
              Council (AMC) MCQ exam. By simply creating a personal account, you
              gain easy and secure access to this comprehensive program. Q Bank
              Model facilitates, analyzes, and assesses your knowledge and
              skills, offering results almost identical to those of the actual
              AMC MCQ Exam. It provides an immersive experience that makes you
              feel as if you are taking the real test. With expert guidelines, Q
              Bank Model will be your go-to resource for tips and tricks for the
              AMC examination.
            </p>
            <div className="mt-4">
              <LinkComponent to={"/user/exam"} text={"Explore More"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
