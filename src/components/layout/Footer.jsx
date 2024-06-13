import { FaTwitter, FaFacebookF } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
import { logoFooter } from "../../assets";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="text-white bg-themeSecondryDark-0 ">
      <div className="container  mx-auto">
        <footer className=" text-start lg:text-left ">
          <div className="  py-10 text-left  dark:border-neutral-500 lg:justify-between">
            <div className="flex justify-between w-full flex-wrap  gap-[40px]  lg:flex-nowrap">
              <div className="w-full flex flex-col gap-4 max-w-[900px]">
                <div className="w-full max-w-[400px]  flex justify-start items-center gap-4  ">
                  <Link to="/" className="cursor-pointer">
                    <img
                      src={logoFooter}
                      alt="Header_logo"
                      width={500}
                      height={500}
                      className=" max-w-[300px]   "
                    />
                  </Link>
                 </div>
                <div className="w-full max-w-[400px] text-sm">
                  <p className="text-sm py-5">
                    {" "}
                    Stay connected with us and let's know more stories about
                    housing & real estate and more explorer us
                  </p>
                </div>
              </div>

              <div className="w-full flex flex-wrap lg:flex-nowrap gap-[40px] justify-start lg:justify-end   ">
                <div className="w-full flex lg:justify-end">
                  <div className="w-[50%]">
                    <h6 className="mb-4 flex  font-[400]  justify-start">
                      Discover
                    </h6>
                    <ul className="  space-y-2 text-sm">
                      <li>
                        <Link to="/" className="text-sm">Home</Link>{" "}
                      </li>
                      <li>
                        <Link to="/" className="text-sm">Test Drive</Link>{" "}
                      </li>
                      <li>
                        <Link to="/contact" className="text-sm">Subscriptions</Link>{" "}
                      </li>
                      <li>
                        <Link to="/" className="text-sm">Blogs</Link>{" "}
                      </li>
                      <li>
                        <Link to="/blogs" className="text-sm">Contact</Link>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full flex lg:justify-end">
                  <div className="w-[50%]">
                    <h6 className="mb-4 flex  font-[400] whitespace-nowrap justify-start">
                      Quick Link
                    </h6>
                    <ul className=" space-y-2 text-sm">
                      <li>
                        <Link to="/">Link 1</Link>{" "}
                      </li>
                      <li>
                        <Link to="/">Link 1</Link>{" "}
                      </li>
                      <li>
                        <Link to="/faq" className="whitespace-nowrap">
                          Link 1
                        </Link>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full flex lg:justify-end">
                  <div className="w-[50%]">
                    <h6 className="mb-4 flex  font-[400]  justify-start">
                      Information{" "}
                    </h6>
                    <ul className="  space-y-2 text-sm">
                      <li>
                        <Link to="/">About Us</Link>{" "}
                      </li>
                      <li>
                        <Link to="/">What is AMC?</Link>{" "}
                      </li>
                      <li>
                        <Link to="/faq">Terms</Link>{" "}
                      </li>
                      <li>
                        <Link to="/teem-&-conditions">Privacy Policy</Link>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className="flex flex-col sm:flex-row bg-themePrimary-0 items-center md:justify-between justify-start container  !py-5 font-[400] ">
        <div className="w-full">
          <p>© 2024 Q Bank Model. All Rights Reserved.</p>
        </div>
        <div className="flex justify-start text-start items-start gap-7 py-2 sm:py-0">
          <FaFacebookF className="text-xl text-white" />
          <FaTwitter className="text-xl text-white" />
          <RiInstagramFill className="text-xl text-white" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
