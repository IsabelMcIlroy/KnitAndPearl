import logo from "../assets/images/logo.png";
import { Box } from "@mui/material";

export const Logo = () => {
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
