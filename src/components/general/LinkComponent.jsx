 import Link from "next/link";
import React from "react";
 
const LinkComponent = ({ to, text, varient2 = false }) => {
  return (
    <Link
      href={to}
      className={`rounded-[8px] w-fit font-semibold ${
        varient2
          ? " bg-white text-themeButton-0 hover:bg-themeButtonHover-0 hover:text-white !opacity-100 "
          : "    text-white bg-themeButton-0 hover:bg-themeButtonHover-0 !opacity-100   "
      }
        border-themeButton-0 text-[14px] transition-all hover:border-themeButtonHover-0  whitespace-nowrap    border-[2px]  px-6 !py-[10px]`}
    >
      {text}
    </Link>
  );
};

export default LinkComponent;
