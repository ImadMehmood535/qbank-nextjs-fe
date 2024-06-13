import React, { useState } from "react";
import CountUps from "../general/CountUps";
import { doctors } from "../../assets";
import LinkComponent from "../general/LinkComponent";
import LinkComponent2 from "../general/LinkComponent2";

const WhyQbank = () => {
  return (
    <div className="container ">
      <div className=" py-8 px-4 lg:px-8 lg:py-16 bg-themeSecondryDark-0 rounded-[24px] flex flex-wrap lg:flex-nowrap justify-between items-center gap-6">
        <div className="flex flex-col gap-5 justify-center  text-white lg:max-w-[40%] w-full ">
          <h2 className="uppercase  ">WHY PREPARE WITH <br/> QBANK MODEL?</h2>
          <p>
            Preparing for the Australian Medical Licensing Exam is a significant
            step towards a medical career in Australia. Q Bank offers an
            extensive and meticulously curated medical MCQ bank to help you
            conquer the AMC MCQ Exam with confidence. Our platform is designed
            to provide a comprehensive AMC online test preparation experience,
            featuring thousands of high-quality multiple-choice questions that
            mimic the exam’s format and difficulty level. Each question comes
            with detailed explanations to deepen your understanding. Customize
            your practice test sessions to focus on specific topics, track your
            progress with our performance analytics, and study anytime, anywhere
            with our user-friendly online platform. Trust Q Bank to be your
            partner in achieving success on the AMC MCQ Exam.
          </p>

          {/* <div className="flex justify-start flex-wrap lg:flex-nowrap items-center gap-8">
            <CountUps end={1500} sign={"+"} content={"MCQ Questions"} />
            <CountUps end={5000} sign={"+"} content={"Doctor Trusted"} />
            <CountUps end={97} sign={"%"} content={"Success Rate"} />
          </div> */}

          <div className="my-4">
            <LinkComponent2 to={"/user/exam"} text={"Attempt Free Demo Exam"} />
          </div>
        </div>

        <div className="rounded-[20px]  flex justify-center pt-12  bg-themePrimary-0 lg:max-w-[700px] w-full ">
          <img src={doctors} alt="doctors" className="max-w-[65%]" />
        </div>
      </div>
    </div>
  );
};

export default WhyQbank;
