import { createTheme } from "@mui/material";

export const palette = {
  knittingGray: "#717566",
  knittingBlue: "#002642",
  knittingRosewood: "#650D1B",
};

const Knittingtheme = createTheme({
  palette: {
    primary: {
      main: palette.knittingRosewood,
    },
    secondary: {
      main: palette.knittingGray,
    },
    blue: {
      main: palette.knittingBlue,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          backgroundColor: palette.knittingRosewood,
          color: palette.knittingGray,
          margin: "0 20px",
          "&:hover": {
            fontSize: "1.1rem",
            backgroundColor: palette.knittingRosewood,
          },
        },
      },
    },
  },
});

export default Knittingtheme;
