import { createTheme } from "@mui/material";

export const palette = {
  knittingGray: "#717568",
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
});
