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
          fontSize: "2vw",
          backgroundColor: palette.knittingRosewood,
          color: palette.knittingGray,
          margin: "0 20px",
          "&:hover": {
            color: palette.knittingRosewood,
            backgroundColor: palette.knittingGray,
          },
        },
      },
    },
  },
  h1: {
    typography: {
      fontFamily: [],
    },
  },
});

export default Knittingtheme;

export const titleFontSx = {
  fontFamily: "La Belle Aurore",
  color: palette.knittingBlue,
  fontSize: "4vw",
};
