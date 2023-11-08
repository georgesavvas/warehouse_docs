import {ThemeProvider, createTheme} from "@mui/material/styles";

import {default as FeedbackLayout} from './Layout';
import GlobalStyles from "@mui/material/GlobalStyles";
import Layout from '@theme/Layout';
import React, {useState} from 'react';
import { Typography } from "@mui/material";
import darkScrollbar from "@mui/material/darkScrollbar";
import styles from "./index.module.css";
import { SnackbarProvider } from 'notistack';

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
      <SnackbarProvider autoHideDuration={3000} maxSnack={3}>
        <Layout title="Feedback">
          <FeedbackLayout />
        </Layout>
      </SnackbarProvider>
    </ThemeProvider>
  )
}

export default Feedback;
