import { createTheme } from "@mui/material";

export const palette = {
  knittingGray: "#E8E1EC",
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
          height: "3rem",
          width: "12rem",
          "&:hover": {
            backgroundColor: palette.knittingBlue,
            color: palette.knittingGray,
          },
        },
        Submit: {
          backgroundColor: palette.knittingBlue,
          width: "fit-content",
          "&:hover": {
            backgroundColor: "#0B5082",
          },
        },
        "Save&amp; Exit": {
          backgroundColor: palette.knittingBlue,
          width: "fit-content",
          minHeight: "fit-content",
          "&:hover": {
            backgroundColor: "#0B5082",
          },
        },
        Cancel: {
          backgroundColor: palette.knittingPurple,
          width: "fit-content",
          "&:hover": {
            backgroundColor: "#724949",
          },
        },
        Exit: {
          backgroundColor: palette.knittingPurple,
          width: "fit-content",
          "&:hover": {
            backgroundColor: "#724949",
          },
        },
        "View Projects": {
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
  margin: "12px 24px",
  flexBasis: "auto",
  height: "3rem",
  "&:hover": {
    backgroundColor: "#A6A0AA",
  },
};

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
