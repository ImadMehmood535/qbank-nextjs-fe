import { Image } from "@nextui-org/react";
import React from "react";
import { Telescope } from "../../assets";
import LinkComponent from "../general/LinkComponent";

const ExamGuaidComponent = ({ data }) => {
  return (
    <div className="HomeAbout pb-5 ">
      <div className="container w-full  mx-auto">
        <div className="  lg:px-0 lg:py-0 gap-7 lg:gap-10 mb-6 lg:mb-16">
          <h2 className=" md:text-center">Your Guide to AMC Exam</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.map((item, index) => (
            <div
              key={index}
              className="icon-box relative overflow-hidden duration-500     group cursor-pointer z-10 rounded-2xl bg-[#EFEFEF]  hover:bg-themePrimary-0 py-6 pb-[38px] px-6 "
            >
              <div className="content-area z-20 static ">
                <div className="icon-wrapper mb-2 ">
                  <item.icon hoverfill={"#243656"} />
                </div>
                <h4 className="text-[#15202E] group-hover:text-white font-semibold text-2xl mb-2">
                  {item.title}
                </h4>
                <p className="text-[#525252]  h-[220px] group-hover:text-white mb-4">
                  {item.text}
                </p>
                <LinkComponent to={"/user/exam"} text={"Learn More"} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExamGuaidComponent;
