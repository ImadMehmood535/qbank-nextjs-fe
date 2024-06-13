import { FaTachometerAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import { MdContactSupport } from "react-icons/md";

const pageslist = [
  {
    item: "My Performance",
    icon: <FaTachometerAlt />,
    link: "/user/dashboard/summary",
  },
  {
    item: "My Exams",
    icon: <FaUserGraduate />,
    link: "/user/dashboard/exam",
  },
  {
    item: "My Profile",
    icon: <FaUser />,
    link: "/user/dashboard/profile",
  },
  {
    item: "My Subscriptions",
    icon: <FaBriefcase />,
    link: "/user/dashboard/subscription",
  },
  // {
  //   item: "Help & Support",
  //   icon: <MdContactSupport />,
  //   link: "/",
  // },
];
export { pageslist };
