import React from "react";
import { Button, Typography } from "@mui/material";

function RoomList({ rooms, name }) {
  return (
    <>
      <h3 className="sidebar__room__name">{name}</h3>
      <ul className="sidebar__room__list">
        {rooms.map((room) => (
          <li className="sidebar__room__item" key={room.id}>
            <Typography component="a" className="sidebar__room__btn">
              {room.name}
            </Typography>
          </li>
        ))}
      </ul>
    </>
  );
}

export default RoomList;
