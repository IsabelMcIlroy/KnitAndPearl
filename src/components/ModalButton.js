import { Button } from "@mui/material";

export const ModalButton = ({ text, onClick }) => {
  return (
    <Button
      variant={
        text === "Submit" ? "submit" : text === "Cancel" ? "cancel" : "other"
      }
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
