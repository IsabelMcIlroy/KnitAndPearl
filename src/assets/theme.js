import { createTheme } from "@mui/material";

export const palette = {
  knittingGray: "#CAC4CE",
  knittingBlue: "#002642",
  knittingLightBlue: "#468189",
  knittingPurple: "#4B3843",
  knittingLightPurple: "#927F8A",
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
    purple: {
      main: palette.knittingLightPurple,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: palette.knittingLightBlue,
          color: palette.knittingGray,
          margin: "12px 24px",
          flexBasis: "auto",
          height: "48px",
          "&:hover": {
            backgroundColor: palette.knittingBlue,
            color: palette.knittingGray,
          },
        },
        submit: {
          backgroundColor: palette.knittingBlue,
          "&:hover": {
            backgroundColor: "#0B5082",
          },
        },
        cancel: {
          backgroundColor: palette.knittingPurple,
          "&:hover": {
            backgroundColor: "#5C3E3E",
          },
        },
        other: {
          color: palette.knittingPurple,
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          color: palette.knittingLightPurple,
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -40%)",
          height: "90%",
          width: "70%",
          display: "flex",
          flexDirection: "column",
        },
        backdrop: {
          backgroundColor: palette.knittingLightBlue,
          borderRadius: "24px",
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
  paddingTop: "18px",
  borderRadius: "12px 12px 0 0",
};
