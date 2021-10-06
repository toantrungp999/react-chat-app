import { Grid } from "@mui/material";
import Header from "features/chat/components/Header";
import Sidebar from "features/chat/components/Sidebar";
import React from "react";
import { useSelector } from "react-redux";

function MainPage() {
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  return (
    <>
      <Grid container>
        <Grid item xs={4}>
          <Sidebar avatar={auth.photoURL} name={auth.displayName} />
        </Grid>
        <Grid item>
          <Header />
        </Grid>
      </Grid>
    </>
  );
}

export default MainPage;
