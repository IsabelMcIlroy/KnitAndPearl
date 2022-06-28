import logo from "../images/logo.png";
import Box from "@mui/material/Box";

export const Logo = () => {
  return (
    <Box sx={{ verticalAlign: "middle", display: "inline-block" }}>
      <img src={logo} alt="ball of wool" />
    </Box>
  );
};
