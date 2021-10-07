import { Grid } from "@mui/material";
import { logout } from "features/auth/authSlice";
import { addRoom, initialRoom } from "features/chat/chatSlice";
import Header from "features/chat/components/Header";
import RoomModal from "features/chat/components/RoomModal";
import Sidebar from "features/chat/components/Sidebar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getDocument } from "utils/firebaseServices";

function MainPage() {
  const history = useHistory();
  const auth = useSelector((state) => state.auth);
  const { rooms } = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  const [isShowRoomBox, setShowRoomBox] = useState(false);

  const handleChangeRoomBox = () => {
    setShowRoomBox(!isShowRoomBox);
  };
  const handleOnSubmit = (room) => {
    const data = { name: room, members: [auth.uid] };
    dispatch(addRoom(data));
  };

  const handleOnLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (!rooms)
      getDocument("rooms", (data) => {
        dispatch(initialRoom(data));
      });
  }, []);

  useEffect(() => {
    if (!Object.keys(auth).length) history.push("/auth");
  }, [auth]);

  return (
    <>
      <Grid container>
        <Grid item xs={4}>
          <Sidebar
            avatar={auth.photoURL}
            name={auth.displayName}
            onShow={handleChangeRoomBox}
            rooms={rooms}
            onLogout={handleOnLogout}
          />
        </Grid>
        <Grid item>
          <Header />
        </Grid>
      </Grid>
      <RoomModal
        open={isShowRoomBox}
        onClose={handleChangeRoomBox}
        onSubmit={handleOnSubmit}
      />
    </>
  );
}

export default MainPage;
