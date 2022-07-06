import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "@mui/material/Modal";
import { ThemeProvider } from "@mui/material";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import KnittingTheme from "../assets/Theme";
import { modalTitle } from "../assets/Theme";
import { ModalButton } from "./ModalButton";

export const NewProjectSizeAndColourSelectionModal = ({ open, onClick }) => {
  const {
    register,
    toggleIsOpen,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <ThemeProvider theme={KnittingTheme}>
      <Modal open={open} onClose={toggleIsOpen} onClick={onClick}>
        <>
          <Typography variant="h4" sx={modalTitle}>
            New Knitting Project
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <TextField
                {...register("projectName", { required: "This is required" })}
                placeholder="Project Name*"
              />
              <Typography variant="p">{errors.projectName?.message}</Typography>
            </Box>
            <Box>
              <TextField
                {...register("projectType")}
                placeholder="Project Type"
              />
            </Box>
            <Box>
              <Select
                {...register("Row", { required: "This is required" })}
                native
                label="Row"
              >
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
              <Select
                {...register("Column", { required: "This is required" })}
                native
                label="Column"
              >
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
            <ModalButton type="submit" text="Submit" />
            <ModalButton text="Cancel" />
          </form>
        </>
      </Modal>
    </ThemeProvider>
  );
};
