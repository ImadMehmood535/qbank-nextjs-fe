import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import LinkComponent from "../general/LinkComponent";

const ModelHelp = ({ data }) => {
  return (
    <div className="ModelHelp py-10 xl:py-10 bg-[#E8DCD0]">
      <div className="container w-full   mx-auto">
        <div className="lg:px-0 lg:py-4 gap-7 ">
          <h2 className="  text-black   mb-7 md:text-center md:max-w-[75%] mx-auto">
            5 ways Qbank model helps your AMC preparation
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5">
          {data.map((item, index) => (
            <div key={index} to={"/sign-in"}>
              <div className="image-box group rounded-2xl  h-[231px] cursor-pointer transition-all duration-200 overflow-hidden relative bg-[#243656] hover:bg-themePrimary-0 py-6 px-6">
                <div className="content-area z-20 sticky">
                  <div className="icon-wrapper  mb-4">
                    <item.icon />
                  </div>
                  <h4 className="text-white font-semibold text-2xl mb-4">
                    {item.title}
                  </h4>
                  <p className="text-white text-sm md:text-base mb-4 leading-4">
                    {item.text}
                  </p>
                 </div>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:px-0 lg:py-5 mt-8  mx-auto text-center">
          <LinkComponent to="/sign-up" text="Get Started" varient2={false} />
        </div>
      </div>
    </div>
  );
};

export default ModelHelp;
