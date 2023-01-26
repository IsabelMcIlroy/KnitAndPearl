import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useFetch from "react-fetch-hook";
import { AppBar, Box, Typography, Button, Menu } from "@mui/material";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import { Logo } from "./logo";
import { palette, navBarButtons, titleFontSx } from "../assets/theme";

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const onLogout = async (data) => {
    console.log(data);
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
  const { isLoading, data: user, error } = useFetch("/currentUser");
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
          <Button
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{ ...navBarButtons, margin: "12px 24px" }}
          >
            {isLoading && (
              <>
                <EmojiFoodBeverageIcon sx={{ paddingRight: "4px" }} />
                ...
              </>
            )}
            {user && (
              <>
                <EmojiFoodBeverageIcon sx={{ paddingRight: "4px" }} />
                {user.username}
              </>
            )}
            {error && (
              <>
                <EmojiFoodBeverageIcon sx={{ paddingRight: "4px" }} />
                error
              </>
            )}
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            sx={{ marginTop: "4px" }}
          >
            <Box>
              <Link to="/KnitAndPearl/" style={{ textDecoration: "none" }}>
                <Button
                  sx={{ ...navBarButtons, margin: "0 12px" }}
                  onClick={onLogout}
                >
                  Logout
                </Button>
              </Link>
            </Box>
          </Menu>
        </Box>
      </AppBar>
      <Outlet />
    </>
  );
};
