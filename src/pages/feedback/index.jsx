import {ThemeProvider, createTheme} from "@mui/material/styles";

import {default as FeedbackLayout} from './Layout';
import GlobalStyles from "@mui/material/GlobalStyles";
import Layout from '@theme/Layout';
import React from 'react';
import { Typography } from "@mui/material";
import darkScrollbar from "@mui/material/darkScrollbar";
import styles from "./index.module.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    lightgrey: {
      main: "rgb(200,200,200)",
    },
  },
  typography: {
    allVariants: {
      color: "lightgrey"
    }
  },
});

const Feedback = () => {
  const clientId = "d0ff51532a5a4c80514e181763912fd4c3edbf5fae07b5c5b9f6d18c545022fc";
  const redirectUri = "http://localhost:3000/feedback";
  const stateHash = "YOUR_UNIQUE_STATE_HASH";
  const url = `https://gitlab.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&state=${stateHash}`;
  const handleGitlabClick = () => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles styles={{ ...darkScrollbar() }} />
      <Layout title="Feedback">
        <div className={styles.button} onClick={handleGitlabClick}>
          <img src="img/gitlab.png" style={{objectFit: "contain", height: "100%"}} />
          <Typography>Sign in with gitlab</Typography>
        </div>
        {/* <FeedbackLayout /> */}
      </Layout>
    </ThemeProvider>
  )
}

export default Feedback;
