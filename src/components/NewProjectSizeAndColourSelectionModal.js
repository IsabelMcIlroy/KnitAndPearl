import { useForm } from "react-hook-form";
import Modal from "@mui/material/Modal";
import { ThemeProvider } from "@mui/material";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import KnittingTheme from "../assets/Theme";
import { modalTitle } from "../assets/Theme";

export const NewProjectSizeAndColourSelectionModal = ({
  open,
  handleClose,
  onClick,
}) => {
  const { register, handleSubmit } = useForm();
  return (
    <ThemeProvider theme={KnittingTheme}>
      <Modal open={open} onClose={handleClose} onClick={onClick}>
        <>
          <Typography variant="h4" sx={modalTitle}>
            New Knitting Project
          </Typography>
          <form onSubmit={handleSubmit()}>
            <TextField
              {...register("projectName")}
              placeholder="Project Name"
            />
            <Button type="submit">Submit</Button>
          </form>
        </>
      </Modal>
    </ThemeProvider>
  );
};
