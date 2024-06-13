"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Image from "next/image";
import { logo } from "@/assets";
import { menuItems } from "@/data/header";
import { useRouter } from "next/navigation";
 
const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();

  //   const handleLogout = () => {
  //     deleteCookie("token");
  //     dispatch(logoutUser());
  //     successToast("Successfully logged out");
  //   };

  const handleLinkClick = (link) => {
    router.push(link);
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
        <Image
          src={logo}
          alt="logo"
          width={200}
          height={100}
          className="max-w-[150px]"
        />
      </NavbarContent>

      <NavbarMenu>
        {menuItems?.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <p
              onClick={() => handleLinkClick(item.to)}
              className="cursor-pointer"
            >
              {item.label}
            </p>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default MobileHeader;
