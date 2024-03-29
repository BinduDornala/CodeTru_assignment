import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Button } from "@mui/material";
import { Home } from "@mui/icons-material";
import SouthAmericaIcon from "@mui/icons-material/SouthAmerica";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";

function SideNav() {
  const [collapsed, setCollapsed] = useState(true);

  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sidebar collapsed={collapsed} style={{ height: "100vh" }}>
      <Button onClick={handleToggleSidebar}> {<MenuIcon />} </Button>

      <Menu>
        <MenuItem icon={<Home />}>Home</MenuItem>
        <MenuItem icon={<Home />}>Home</MenuItem>
        <MenuItem icon={<Home />}>Home</MenuItem>
        <MenuItem icon={<Home />}>Home</MenuItem>
        <MenuItem icon={<Home />}>Home</MenuItem>
        <MenuItem icon={<Home />}>Home</MenuItem>
        <MenuItem icon={<Home />}>Home</MenuItem>
        <MenuItem icon={<Home />}>Home</MenuItem>
        <MenuItem icon={<Home />}>Home</MenuItem>
        <MenuItem icon={<Home />}>Home</MenuItem>
      </Menu>
    </Sidebar>
  );
}

export default SideNav;
