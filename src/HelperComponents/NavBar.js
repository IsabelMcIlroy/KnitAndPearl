import { Link, Outlet } from "react-router-dom";
import { AppBar, Box, Typography, Button } from "@mui/material";
import { Logo } from "./logo";
import { palette, navBarButtons, titleFontSx } from "../assets/theme";

export const NavBar = () => {
  const pathName = window.location.pathname;
  return (
    <>
      <AppBar
        postion="sticky"
        sx={{
          backgroundColor: palette.knittingLightBlue,
          padding: "10px",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Logo />
          <Typography sx={titleFontSx} variant="h4">
            Knit&Pearl
          </Typography>
        </Box>
        <Box>
          {pathName !== "/KnitAndPearl/ViewProject" && (
            <Link
              to="/KnitAndPearl/ViewProject"
              style={{ textDecoration: "none" }}
            >
              <Button sx={navBarButtons}>View Projects</Button>
            </Link>
          )}
          <Link to="/KnitAndPearl/" style={{ textDecoration: "none" }}>
            <Button sx={navBarButtons}>Logout</Button>
          </Link>
        </Box>
      </AppBar>
      <Outlet />
    </>
  );
};
