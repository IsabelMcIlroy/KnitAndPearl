import { createTheme } from "@mui/material";

export const palette = {
  knittingGray: "#717568",
  knittingWhite: "#61C9A8",
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
    white: {
      main: palette.knittingWhite,
    },
  },
});
