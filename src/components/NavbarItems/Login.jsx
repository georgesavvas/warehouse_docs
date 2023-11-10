import { GoogleLogin, googleLogout } from '@react-oauth/google';
import React, { useEffect, useState } from "react";

import AES from "crypto-js/aes";
import { Button } from "@mui/material";
import { jwtDecode } from "jwt-decode";
import {useSnackbar} from "notistack";

export const Login = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const {enqueueSnackbar} = useSnackbar();

  useEffect(() => {
    const userData = localStorage.getItem("warehouseUser");
    if (!userData) {
      setLoggedIn(false);
      return;
    }
    const user = jwtDecode(userData);
    setLoggedIn(user?.name && user?.email);
  }, []);

  const handleGoogleSuccess = resp => {
    if (!resp?.credential) {
      console.log("Failed to fetch user token");
      return;
    }
    const user = jwtDecode(resp.credential);

    if (!user.email.endsWith("@electrictheatre.tv")) {
      enqueueSnackbar("Please use your Electric Theatre account", {variant: "error"});
      handleLogout();
      return;
    }
    localStorage.setItem("warehouseUser", resp.credential)
    setLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("warehouseUser");
    googleLogout();
    setLoggedIn(false);
  };

  return (
    <div>
      {!loggedIn && <GoogleLogin
        useOneTap
        onSuccess={handleGoogleSuccess}
        onError={() => {
          console.log("Login Failed");
        }}
      />}
      {loggedIn && <Button variant="outlined" onClick={handleLogout}>Logout</Button>}
    </div>
  );
};

export default Login;
