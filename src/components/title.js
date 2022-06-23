import { palette } from "../assets/theme";
import Box from "@mui/material/Box";

export const Title = ({ titleText }) => {
  return (
    <>
      <Box
        sx={{
          color: palette.knittingBlue,
        }}
      >
        <h1>{titleText}</h1>
      </Box>
    </>
  );
};
