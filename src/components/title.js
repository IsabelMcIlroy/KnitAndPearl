import Box from "@mui/material/Box";
import { titleFontSx } from "../assets/Theme";

export const Title = ({ titleText }) => {
  return (
    <Box
      sx={{
        ...titleFontSx,
      }}
    >
      <h1 style={{ marginBottom: "0" }}>{titleText}</h1>
    </Box>
  );
};
