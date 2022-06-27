import Box from "@mui/material/Box";
import { titleFontSx } from "../assets/theme";

export const Title = ({ titleText }) => {
  return (
    <>
      <Box
        sx={{
          ...titleFontSx,
        }}
      >
        <h1>{titleText}</h1>
      </Box>
    </>
  );
};
