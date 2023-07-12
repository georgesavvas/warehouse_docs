import Feedback from "./Feedback";
import React from "react";
import { Typography } from "@mui/material";
import styles from "./Layout.module.css";

export const Layout = () => {
  return (
    <div className={styles.container}>
        <Typography variant="h4" textAlign="center">Feedback</Typography>
        <div className={styles.row}>
          <div className={styles.column}>
            <Feedback />
            <Feedback />
            <Feedback />
            <Feedback />
            <Feedback />
            <Feedback />
          </div>
          <div className={styles.column}>
          </div>
        </div>
    </div>
  )
}

export default Layout;
