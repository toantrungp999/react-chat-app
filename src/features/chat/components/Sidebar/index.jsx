import { Avatar, Button } from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
import RoomModal from "../RoomModal";
import "./Sidebar.scss";

function Sidebar({ avatar, name, onShow }) {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__header">
          <Avatar src={avatar} xs={{ width: 25, height: 25 }} />
          <span className="sidebar__header__name">{name}</span>
          <Button variant="outlined">Logout</Button>
        </div>
        <div className="sidebar__room">
          <h3 className="sidebar__room__name">List room</h3>
          <ul className="sidebar__room__list">
            <li className="sidebar__room__item">
              <Button variant="text">123</Button>
            </li>
            <li className="sidebar__room__item">
              <Button variant="text">123</Button>
            </li>
            <li className="sidebar__room__item">
              <Button variant="text">123</Button>
            </li>
          </ul>
        </div>
        <Button
          variant="contained"
          className="sidebar__button"
          onClick={onShow}
        >
          New Room
        </Button>
      </div>
    </>
  );
}

Sidebar.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onShow: PropTypes.func.isRequired,
};

export default Sidebar;
