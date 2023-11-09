import React, { useEffect, useState } from "react";

import AES from "crypto-js/aes";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

export const Login = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem("warehouseUser");
    const user = JSON.parse(userData);
    setLoggedIn(user?.name && user?.email);
  }, [])

  const handleGoogleSuccess = resp => {
    if (!resp?.credential) {
      console.log("Failed to fetch user token");
      return;
    }
    localStorage.setItem("warehouseUser", resp.credential)
    setLoggedIn(true);
  }

  return (
    <div>
      {!loggedIn && <GoogleLogin
        useOneTap
        // auto_select
        // theme="filled_black"
        onSuccess={handleGoogleSuccess}
        onError={() => {
          console.log("Login Failed");
        }}
      />}
    </div>
  );
};

export default Login;
