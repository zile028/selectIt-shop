import React, { useEffect, useState } from "react";
import SidebarSearch from "./SidebarSearch";
import SidebarCategories from "./SidebarCategories";

function Sidebar() {

  return (
    <div className="sidebar">
      <SidebarSearch />
      <SidebarCategories />
    </div>
  );
}

export default Sidebar;
