import {ThemeProvider, createTheme} from "@mui/material/styles";

import {default as FeedbackLayout} from './Layout';
import GlobalStyles from "@mui/material/GlobalStyles";
import Layout from '@theme/Layout';
import React from 'react';
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
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles styles={{ ...darkScrollbar() }} />
      <Layout title="Feedback">
        <FeedbackLayout />
      </Layout>
    </ThemeProvider>
  )
}

export default Feedback;
