import React, { useState } from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LinkComponent from "../general/LinkComponent";
import UserDropDown from "./UserDropDown";
import { deleteCookie } from "../../hooks/useCookies";
import { logoutUser } from "../../store/slices/userSlice";
import { successToast } from "../../hooks/useToast";
import { menuItems } from "../../data/header";
import { logo } from "../../assets";

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    deleteCookie("token");
    dispatch(logoutUser());
    successToast("Successfully logged out");
  };

  const handleLinkClick = (link) => {
    navigate(link);
    setIsMenuOpen(false);
  };

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="lg:hidden py-4"
      isBlurred={false}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
        <img
          src={logo}
          alt="logo"
          width={200}
          height={100}
          className="max-w-[150px]"
        />
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          {!user?.authorized ? (
            <div className="flex scale-80 justify-end gap-2 items-center text-[12px] cursor-pointer">
              <LinkComponent varient2={true} to="/sign-in" text="Sign In" />
            </div>
          ) : (
            <div className="mr-12 sm:mr-0 max-w-[200px] w-full flex justify-end cursor-pointer">
              <UserDropDown handleLogout={handleLogout} user={user} />
            </div>
          )}
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems?.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <p onClick={() => handleLinkClick(item.to)} className="cursor-pointer">
              {item.label}
            </p>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default MobileHeader;
