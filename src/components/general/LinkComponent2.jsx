import Link from "next/link";
import React from "react";
 
const LinkComponent2 = ({ to, text }) => {
  return (
    <Link
      href={to}
      className={`w-fit rounded-[8px] font-semibold text-white bg-themeButton-0 hover:bg-themeButtonHover-0 !opacity-100  border-themeButton-0 text-[14px] transition-all hover:border-themeButtonHover-0  whitespace-nowrap    border-[2px]  px-6 !py-[10px]`}
    >
      {text}
    </Link>
  );
};

export default LinkComponent2;
