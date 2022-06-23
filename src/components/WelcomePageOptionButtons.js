import Button from "@mui/material/Button";
import { palette } from "../assets/theme";

export const WelcomePageOptionButtons = ({ btnText }) => {
  return (
    <>
      <Button
        variant="contained"
        size="large"
        sx={{ backgroundColor: palette.knittingRosewood }}
      >
        {btnText}
      </Button>
    </>
  );
};
