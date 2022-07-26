import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material";
import KnittingTheme from "../../../assets/theme";

export const WelcomePageOptionButtons = ({ btnText, onClick }) => {
  return (
    <>
      <ThemeProvider theme={KnittingTheme}>
        <Button onClick={onClick} size="large">
          {btnText}
        </Button>
      </ThemeProvider>
    </>
  );
};
