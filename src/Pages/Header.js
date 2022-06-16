import React from "react";
import DehazeIcon from "@material-ui/icons/Dehaze";
import "../CSS/Header.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import HelpIcon from "@material-ui/icons/Help";
import SettingsIcon from "@material-ui/icons/Settings";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <DehazeIcon />
        </IconButton>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt="error"
        />
      </div>
      <div className="header_middle">
        <SearchIcon />
        <input type="text" placeholder="Search Mail" />
        <ArrowDropDownIcon />
      </div>
      <div className="header_right">
        <IconButton>
          <HelpIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>

        <Avatar />
      </div>
    </div>
  );
}

export default Header;
