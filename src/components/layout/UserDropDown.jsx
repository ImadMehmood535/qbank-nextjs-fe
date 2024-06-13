import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const UserDropDown = ({ user, handleLogout }) => {
  const path = useLocation();
  const url = path.pathname;
  return (
    <Dropdown showArrow placement="bottom-end" backdrop="blur">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          src={user?.imageUrl}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">{user?.email} </p>
        </DropdownItem>
 
        <DropdownItem key="Summary">
          <Link
            className={
              url == "/user/dashboard/summary"
                ? "text-primary table w-full"
                : "table w-full"
            }
            to={"/user/dashboard/summary"}
          >
             Performance
          </Link>
        </DropdownItem>
        <DropdownItem key="Profile">
          <Link
            className={
              url == "/user/dashboard/profile"
                ? "text-primary table w-full"
                : "table w-full"
            }
            to={"/user/dashboard/profile"}
          >
            Profile
          </Link>
        </DropdownItem>
        <DropdownItem key="Exams">
          <Link
            className={
              url == "/user/dashboard/exam"
                ? "text-primary table w-full"
                : "table w-full"
            }
            to={"/user/dashboard/exam"}
          >
            Exams
          </Link>
        </DropdownItem>
        <DropdownItem
          key="Subscription"
          className={
            url == "/user/dashboard/subscription"
              ? "text-primary table w-full"
              : "table w-full"
          }
        >
          <Link className=" table w-full" to={"/user/dashboard/subscription"}>
            Subscription
          </Link>
        </DropdownItem>
        <DropdownItem
          key="logout"
          color="danger"
          className="text-danger"
          onClick={handleLogout}
        >
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserDropDown;
