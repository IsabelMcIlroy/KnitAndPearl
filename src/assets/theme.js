import { createTheme } from "@mui/material";

export const palette = {
  knittingBlack: "#272727",
  knittingWhite: "#F3EFE0",
  knittingRosewood: "#650D1B",
};

const Kniitingtheme = createTheme({
  palette: {
    primary: {
      main: palette.knittingRosewood,
    },
    secondary: {
      main: palette.knittingBlack,
    },
    white: {
      main: palette.knittingWhite,
    },
  },
});
