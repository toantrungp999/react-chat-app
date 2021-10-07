import { Avatar, Button } from "@mui/material";
import PropTypes from "prop-types";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { generateRoomList } from "utils/common";
import RoomList from "../RoomList";
import "./Sidebar.scss";

function Sidebar({ avatar, name, onShow, rooms, onLogout }) {
  const auth = useSelector((state) => state.auth);
  const { myRooms, otherRooms } = useMemo(() => {
    return generateRoomList(rooms, auth.uid);
  }, [rooms]);

  return (
    <>
      <div className="sidebar">
        <div className="sidebar__header">
          <Avatar src={avatar} xs={{ width: 25, height: 25 }} />
          <span className="sidebar__header__name">{name}</span>
          <Button variant="outlined" onClick={onLogout}>
            Logout
          </Button>
        </div>
        <div className="sidebar__room">
          {myRooms.length ? (
            <RoomList rooms={myRooms} name="My rooms" />
          ) : (
            <></>
          )}
          {otherRooms.length ? (
            <RoomList rooms={otherRooms} name="Other rooms" />
          ) : (
            <></>
          )}
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
