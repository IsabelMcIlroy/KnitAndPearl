import { useForm } from "react-hook-form";
import Modal from "@mui/material/Modal";
import { ThemeProvider } from "@mui/material";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
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
            <Box>
              <TextField
                {...register("projectName")}
                placeholder="Project Name*"
              />
            </Box>
            <Box>
              <TextField
                {...register("projectType")}
                placeholder="Project Type"
              />
            </Box>
            <Box>
              <Select native label="Row">
                <option value="">Row*</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
                <option value={4}>Four</option>
                <option value={5}>Five</option>
                <option value={6}>Six</option>
                <option value={7}>Seven</option>
                <option value={8}>Eight</option>
                <option value={9}>Nine</option>
                <option value={10}>Ten</option>
                <option value={11}>Eleven</option>
                <option value={12}>Twelve</option>
              </Select>
              <Select native label="Column">
                <option value="">Column*</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
                <option value={4}>Four</option>
                <option value={5}>Five</option>
                <option value={6}>Six</option>
                <option value={7}>Seven</option>
                <option value={8}>Eight</option>
                <option value={9}>Nine</option>
                <option value={10}>Ten</option>
                <option value={11}>Eleven</option>
                <option value={12}>Twelve</option>
              </Select>
            </Box>
            <Button type="submit">Submit</Button>
          </form>
        </>
      </Modal>
    </ThemeProvider>
  );
};
