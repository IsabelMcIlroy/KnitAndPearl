import Button from "@mui/material/Button";

export const WelcomePageOptionButtons = ({ btnText }) => {
  return (
    <>
      <Button variant="contained" size="large" color="secondary">
        {btnText}
      </Button>
    </>
  );
};
