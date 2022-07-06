import { Button } from "@mui/material";

export const ModalButton = ({ text }) => {
  return (
    <Button
      variant={
        text === "Submit" ? "submit" : text === "Cancel" ? "cancel" : "other"
      }
    >
      {text}
    </Button>
  );
};
