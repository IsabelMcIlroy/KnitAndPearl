import { createTheme } from "@mui/material";

export const palette = {
  knittingGray: "#CAC4CE",
  knittingBlue: "#002642",
  knittingLightBlue: "#468189",
  knittingPurple: "#4B3843",
};

const KnittingTheme = createTheme({
  palette: {
    primary: {
      main: palette.knittingPurple,
    },
    secondary: {
      main: palette.knittingBlue,
    },
    blue: {
      main: palette.knittingLightBlue,
    },
    gray: {
      main: palette.knittingGray,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: palette.knittingLightBlue,
          color: palette.knittingGray,
          margin: "0 20px",
          flexBasis: "auto",
          "&:hover": {
            backgroundColor: palette.knittingBlue,
            color: palette.knittingGray,
          },
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          backgroundColor: palette.knittingLightBlue,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "50%",
        },
      },
    },
  },
});

export default KnittingTheme;

export const titleFontSx = {
  fontFamily: "La Belle Aurore",
  color: palette.knittingPurple,
  marginBottom: "4%",
  userSelect: "none",
};
