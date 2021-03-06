import { Button } from "@material-ui/core";
import React from "react";
import "../CSS/Sidebar.css";
import AddIcon from "@material-ui/icons/Add";

function Sidebar() {
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar_compose"
      >
        Compose
      </Button>
    </div>
  );
}

export default Sidebar;
