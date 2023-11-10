import React, {useState} from 'react';
import {ThemeProvider, createTheme} from "@mui/material/styles";

import GlobalStyles from "@mui/material/GlobalStyles";
import {Kanban} from '../../components/kanban/Kanban';
import Layout from '@theme/Layout';
import { SnackbarProvider } from 'notistack';
import darkScrollbar from "@mui/material/darkScrollbar";

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
          <Kanban service="warehouse" kind="rfe" title="Feedback" />
        </Layout>
      </SnackbarProvider>
    </ThemeProvider>
  )
}

export default Feedback;
