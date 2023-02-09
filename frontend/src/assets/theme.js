import { createTheme } from "@mui/material";

export const palette = {
  knittingGray: "#E8E1EC",
  knittingBlue: "#002642",
  knittingLightBlue: "#468189",
  knittingPurple: "#4B3843",
  knittingLightPurple: "#927F8A",
  knittingErrorColour: "#D32F2F",
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
    error: {
      main: palette.knittingErrorColour,
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
          height: "3rem",
          width: "12rem",
          "&:hover": {
            backgroundColor: palette.knittingBlue,
            color: palette.knittingGray,
          },
        },
        Submit: {
          backgroundColor: palette.knittingBlue,
          width: "6rem",
          "&:hover": {
            backgroundColor: "#0B5082",
          },
        },
        SaveAndExit: {
          backgroundColor: palette.knittingLightBlue,
          width: "6rem",
          "&:hover": {
            backgroundColor: palette.knittingBlue,
          },
        },
        Cancel: {
          backgroundColor: palette.knittingPurple,
          width: "6rem",
          "&:hover": {
            backgroundColor: "#724949",
          },
        },
        Exit: {
          backgroundColor: palette.knittingPurple,
          width: "6rem",
          "&:hover": {
            backgroundColor: "#724949",
          },
        },
        ViewProjects: {
          backgroundColor: "white",
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

export const navBarButtons = {
  backgroundColor: palette.knittingGray,
  color: palette.knittingLightBlue,
  flexBasis: "auto",
  height: "3rem",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#A6A0AA",
  },
};

export const titleFontSx = {
  fontFamily: "La Belle Aurore",
  color: palette.knittingPurple,
  userSelect: "none",
};

export const modalTitle = {
  fontFamily: "La Belle Aurore",
  textAlign: "center",
  backgroundColor: palette.knittingLightBlue,
  paddingTop: "18px",
  paddingBottom: "12px",
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
  margin: "4px",
  height: "fit-content",
  width: "fit-content",
  "&:hover": {
    backgroundColor: "#0B5082",
  },
};

export const editorDrawerProjectNames = {
  margin: "0 12px",
  color: palette.knittingBlue,
  textTransform: "capitalize",
  fontWeight: "bold",
};

export const editorDrawerLabels = {
  color: palette.knittingBlue,
  textTransform: "capitalize",
};
