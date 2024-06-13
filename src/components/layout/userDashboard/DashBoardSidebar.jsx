import React from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { cn } from "@nextui-org/react";
import { Link, useLocation } from "react-router-dom";

const DashBoardSidebar = ({ pageslist }) => {
  const location = useLocation();

  return (
    <Listbox
      aria-label="User Menu"
      className="p-0 gap-0 divide-y overflow-visible"
      itemClasses={{
        base: "px-4 rounded-none  gap-3 h-12 data-[hover=true]:bg-default-100/80",
      }}
    >
      {pageslist.map((item, key) => {
        const isActive = location.pathname === item.link;
        return (
          <ListboxItem
            key={key}
            startContent={
              <div
                className={cn(
                  "flex items-center rounded-small justify-center w-7 h-7"
                )}
              >
                {item.icon}
              </div>
            }
            className={cn({ "bg-themeSecondry-0": isActive })} // Add a custom class for active items
          >
            <Link to={item?.link} className="table h-full w-full py-3">
              {item.item}
            </Link>
          </ListboxItem>
        );
      })}
    </Listbox>
  );
};

export default DashBoardSidebar;
