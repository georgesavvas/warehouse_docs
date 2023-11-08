import React from "react";
import styles from "./Root.module.css";
import {GoogleOAuthProvider} from "@react-oauth/google";

const clientId = "472484084658-n3smfn9pdtatn5ptanda0inc7jbbjtgj.apps.googleusercontent.com";

export default function Root({children}) {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      {children}
    </GoogleOAuthProvider>
  );
};
