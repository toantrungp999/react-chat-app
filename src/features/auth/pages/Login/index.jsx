import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { login } from "features/auth/authSlice";
import { useHistory } from "react-router";

function Login() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const history = useHistory();

  useEffect(() => {
    if (Object.keys(auth).length) history.push("/");
  }, [auth, history]);

  const handleGGLogin = async () => {
    dispatch(login());
  };

  return (
    <Grid container justifyContent="center" marginTop={10}>
      <Grid item xs={8}>
        <Typography
          variant="h3"
          component="div"
          gutterBottom
          textAlign="center"
        >
          Welcome to Lexe Chat
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Button
          color="error"
          variant="contained"
          style={{ margin: "0 auto", display: "block" }}
          onClick={handleGGLogin}
        >
          Login with Google
        </Button>
      </Grid>
    </Grid>
  );
}

export default Login;
