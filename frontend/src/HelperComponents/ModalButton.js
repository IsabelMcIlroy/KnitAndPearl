import { Button } from "@mui/material";

export const ModalButton = ({ text, onClick, variant }) => {
  return (
    <Button variant={variant} onClick={onClick}>
      {text}
    </Button>
  );
};
