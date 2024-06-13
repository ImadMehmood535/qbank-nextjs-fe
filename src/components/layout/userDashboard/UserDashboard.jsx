import React from "react";
import DashBoardSidebar from "./DashBoardSidebar";

import DashBoardBody from "./DashBoardBody";
import { pageslist } from "../../../data/pageslist";

const UserDashboard = () => {
  return (
    <div className="profile w-full pagelayout py-6">
      <div className="HomeAbout ">
        <div className="container w-full  mx-auto flex flex-wrap sm:flex-nowrap gap-3">
          <div className="w-full sm:w-3/12 h-full sm:h-[84vh]   rounded-medium  px-0 bg-themePrimary-0 text-white">
            <DashBoardSidebar pageslist={pageslist} />
          </div>
          <div className="w-full md:w-3/4 py-6 sm:py-0 px-0 md:px-4">
            <DashBoardBody />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
