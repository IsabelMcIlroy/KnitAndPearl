import { Typography } from "@mui/material";
import { titleFontSx } from "../assets/Theme";

export const Title = ({ titleText }) => {
  return (
    <Typography variant="h1" sx={{ ...titleFontSx }}>
      {titleText}
    </Typography>
  );
};
