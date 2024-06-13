import { Button } from "@nextui-org/react";
import React from "react";

const ButtonComponent = ({
  loading,
  text,
  isActive,
  onClick,
  btnclass,
  type,
}) => {
  return (
    <div className="btn-com font-semibold max-w-[130px] mx-auto">
      {" "}
      <Button
        type={type}
        className={`w-full px-6 !py-[10px] text-white text-[14px] font-medium  border ${
          isActive
            ? "bg-themeButton-0 hover:bg-themeButtonHover-0 !opacity-100"
            : "bg-transparent text-[#8F8F8F] border-[#8F8F8F] cursor-pointer"
        } ${btnclass}`}
        onClick={onClick}
        isLoading={loading}
      >
        {text}
      </Button>
    </div>
  );
};

export default ButtonComponent;
