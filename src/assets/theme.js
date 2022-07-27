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
        Submit: {
          backgroundColor: palette.knittingBlue,
          "&:hover": {
            backgroundColor: "#0B5082",
          },
        },
        Cancel: {
          backgroundColor: palette.knittingPurple,
          "&:hover": {
            backgroundColor: "#724949",
          },
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          color: palette.knittingPurple,
          display: "flex",
          flexDirection: "column",
        },
        backdrop: {
          backgroundColor: "000000",
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
  backgroundColor: palette.knittingLightBlue,
  paddingTop: "18px",
  borderRadius: "12px 12px 0 0",
  width: "100%",
};

export const sideNavClosed = {
  marginTop: "90px",
  zIndex: 10,
  position: "fixed",
  height: "100%",
  backgroundColor: palette.knittingLightPurple,
};

export const editBarButtonIcon = {
  color: palette.knittingGray,
};

export const editBarButton = {
  backgroundColor: palette.knittingBlue,
  "&:hover": {
    backgroundColor: "#0B5082",
  },
};
