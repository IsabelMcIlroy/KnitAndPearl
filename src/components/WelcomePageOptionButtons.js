import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material";
import Knittingtheme from "../assets/Theme";

export const WelcomePageOptionButtons = ({ btnText, onClick }) => {
  return (
    <>
      <ThemeProvider theme={Knittingtheme}>
        <Button onClick={onClick} size="large">
          {btnText}
        </Button>
      </ThemeProvider>
    </>
  );
};
