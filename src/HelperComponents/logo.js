import logo from "../images/logo.png";
import { Box } from "@mui/material";

export const Logo = () => {
  return (
    <Box sx={{ display: "inline-block", padding: "12px" }}>
      <img src={logo} alt="ball of wool" />
    </Box>
  );
};
