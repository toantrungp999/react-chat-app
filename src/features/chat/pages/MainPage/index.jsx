import { Grid } from "@mui/material";
import Header from "features/chat/components/Header";
import RoomModal from "features/chat/components/RoomModal";
import Sidebar from "features/chat/components/Sidebar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCollectionData } from "utils/firebaseConfig";

function MainPage() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isShowRoomBox, setShowRoomBox] = useState(false);

  const handleChangeRoomBox = () => {
    setShowRoomBox(!isShowRoomBox);
  };
  const handleOnSubmit = (room) => {
    console.log({ room });
  };

  useEffect(() => {}, []);

  return (
    <>
      <Grid container>
        <Grid item xs={4}>
          <Sidebar
            avatar={auth.photoURL}
            name={auth.displayName}
            onShow={handleChangeRoomBox}
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
