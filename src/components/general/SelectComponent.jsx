import { Select, SelectItem } from "@nextui-org/react";
import React from "react";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { DropDownSvg } from "../../data/svgs";

const SelectComponent = ({
  data,
  label,
  placeholder,
  register,
  name,
  errors,
}) => {
  return (
    <div className="max-w-lg">
      <div className="flex flex-col gap-1">
        <p className="font-semibold">{label}</p>
        <Select
          aria-labelledby={name}
          placeholder={placeholder}
          {...register(name)}
          selectorIcon={<DropDownSvg />}
          className="max-w-lg custom-color custom-color2"
          variant="bordered"
          classNames={{
            label: "group-data-[filled=true]:-translate-y-5",
            trigger: "h-12",
            listboxWrapper: "max-h-[400px]  ",
            selectorIcon : "text-2xl"
          }}
          listboxProps={{
            itemClasses: {
              base: [
                "rounded-[8px]",
                "data-[selectable=true]:focus:text-white",
                "data-[selectable=true]:focus:bg-themeButton-0",
              ],
            },
          }}
          popoverProps={{
            classNames: {
              base: "before:bg-default-200",
              content: "p-0 border-small border-divider   bg-background",
            },
          }}
        >
          {data?.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </Select>
      </div>

      {errors && errors[name] && (
        <p className="text-sm text-red-500 my-2">{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default SelectComponent;
