import { createTheme } from "@mui/material"

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FF0000",
    },
    secondary: {
      main: "#000000",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          width: "100%",
          color: "black",
          border: "2px solid black",
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "8px",
          boxShadow: "3px 3px 0px black",
          transition: "0.3s",
          "&:hover": {
            backgroundColor: "#f0f0f0",
            boxShadow: "5px 5px 0px black",
            transform: "translate(-2px, -2px)",
          },
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          border: "1px solid red",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
    },
  },
})
