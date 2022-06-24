import Button from "@mui/material/Button";
import Knittingtheme from "../assets/theme";
import { ThemeProvider } from "@mui/material";

export const WelcomePageOptionButtons = ({ btnText }) => {
  return (
    <>
      <ThemeProvider theme={Knittingtheme}>
        <Button size="large">{btnText}</Button>
      </ThemeProvider>
    </>
  );
};
