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
          color: palette.knittingPurple,
          position: "absolute",
          top: "48%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60%",
        },
        backdrop: {
          backgroundColor: palette.knittingLightBlue,
          borderRadius: "20px",
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

export const modalTitle = {
  fontFamily: "La Belle Aurore",
  textAlign: "center",
  backgroundColor: palette.knittingBlue,
  paddingTop: "16px",
  borderRadius: "10px 10px 0 0",
};
