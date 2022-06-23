import Button from "@mui/material/Button";
import { palette } from "../assets/theme";

export const WelcomePageOptionButtons = ({ btnText }) => {
  return (
    <>
      <Button
        variant="contained"
        size="large"
        sx={{
          backgroundColor: palette.knittingRosewood,
          color: palette.knittingGray,
          margin: "0 20px",
        }}
      >
        {btnText}
      </Button>
    </>
  );
};
