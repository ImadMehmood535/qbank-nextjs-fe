import React from "react";

const CheckBox = ({ register, id, label, errors, freeTrial }) => {
  return (
    <div className="flex flex-col ">
      <div className="bg-themeGray-0 rounded-[8px] p-2">
        <div className="checkbox-wrapper-13 flex justify-center items-center w-fit">
          <input
            id={`checkbox-${id}`}
            type="checkbox"
            disabled={freeTrial}
            {...register(`categories.${id}`)}
          />
          <label htmlFor={`checkbox-${id}`} className="px-3 font-semibold">{label}</label>
        </div>
      </div>
      {errors && errors[`categories.${id}`] && (
        <p className="text-sm text-red-700">
          {errors[`categories.${id}`]?.message}
        </p>
      )}
    </div>
  );
};

export default CheckBox;
