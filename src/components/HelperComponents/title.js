import { Typography } from "@mui/material";
import { titleFontSx } from "../../assets/theme";

export const Title = ({ titleText }) => {
  return (
    <Typography variant="h1" sx={titleFontSx}>
      {titleText}
    </Typography>
  );
};
