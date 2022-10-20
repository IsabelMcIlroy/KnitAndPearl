import logo from "../images/logo.png";
import { Box } from "@mui/material";

export const Logo = (onClick) => {
  return (
    <Box
      sx={{
        display: "inline-block",
        paddingLeft: "12px",
        paddingRight: "12px",
      }}
    >
      <img src={logo} alt="ball of wool" />
    </Box>
  );
};
