import { Button } from "@mui/material";

export const ModalButton = ({ text, onClick }) => {
  return (
    <Button variant={text} onClick={onClick}>
      {text}
    </Button>
  );
};
