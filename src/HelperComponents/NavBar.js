import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useFetch from "react-fetch-hook";
import { AppBar, Box, Typography, Button } from "@mui/material";
import { Logo } from "./logo";
import { palette, navBarButtons, titleFontSx } from "../assets/theme";

export const NavBar = () => {
  const navigate = useNavigate();
  const onLogout = async (data) => {
    const response = await fetch("/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const payload = await response.json();
    console.log(payload);
    navigate("/KnitAndPearl/", {});
  };
  const { loading, data: user, error } = useFetch("/currentUser");
  console.log(loading);
  console.log(error);
  return (
    <>
      <AppBar
        postion="sticky"
        sx={{
          backgroundColor: palette.knittingLightBlue,
          padding: "10px",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
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
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {user && <Typography variant="p">{user.username}</Typography>}
          <Box>
            <Link to="/KnitAndPearl/" style={{ textDecoration: "none" }}>
              <Button sx={navBarButtons} onClick={onLogout}>
                Logout
              </Button>
            </Link>
          </Box>
        </Box>
      </AppBar>
      <Outlet />
    </>
  );
};
