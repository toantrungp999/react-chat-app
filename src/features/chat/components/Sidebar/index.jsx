import React from "react";
import PropTypes from "prop-types";
import { Avatar, Button } from "@mui/material";
import "./Sidebar.scss";

function Sidebar({ avatar, name }) {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={avatar} xs={{ width: 25, height: 25 }} />
        <span className="sidebar__header__name">{name}</span>
        <Button variant="outlined">Logout</Button>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Sidebar;
