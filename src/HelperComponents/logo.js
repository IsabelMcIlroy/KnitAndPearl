import logo from "../images/logo.png";
import { Box, Button } from "@mui/material";

export const Logo = (onClick) => {
  return (
    <Box
      sx={{
        display: "inline-block",
        paddingLeft: "12px",
        paddingRight: "12px",
      }}
    >
      <Button onClick={onClick}>
        <img src={logo} alt="ball of wool" />
      </Button>
    </Box>
  );
};
