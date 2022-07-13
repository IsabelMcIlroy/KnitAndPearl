import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  ThemeProvider,
  Typography,
  Box,
  TextField,
  Select,
} from "@mui/material";
import KnittingTheme, { palette, modalTitle } from "../assets/theme";
import { ModalButton } from "./ModalButton";

export const NewProjectSizeAndColourSelectionModal = ({
  open,
  onClick,
  setIsOpen,
}) => {
  const form = useRef();
  const validationSchema = yup.object().shape({
    projectName: yup.string().required("This is required"),
    Row: yup.string().required("This is required"),
    Column: yup.string().required("This is required"),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(validationSchema) });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
    setIsOpen(false);
    navigate("/NewProject");
  };
  return (
    <ThemeProvider theme={KnittingTheme}>
      <Modal open={open} onClick={onClick}>
        <Box style={{ overflow: "scroll" }}>
          <Typography variant="h4" sx={modalTitle}>
            New Knitting Project
          </Typography>
          <Box
            sx={{
              maxWidth: "80%",
              margin: "0 auto",
              paddingTop: "100px",
            }}
          >
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
              <Box padding="10px">
                <TextField
                  required
                  fullWidth
                  {...register("projectName")}
                  error={errors.projectName ? true : false}
                  placeholder="Project Name*"
                />
                <Typography variant="inherit" color={palette.knittingPurple}>
                  {errors.projectName?.message}
                </Typography>
              </Box>
              <Box padding="10px">
                <TextField
                  fullWidth
                  {...register("projectType")}
                  placeholder="Project Type"
                />
              </Box>
              <Box padding="10px" textAlign="center">
                <Select
                  required
                  {...register("Row")}
                  error={errors.Row ? true : false}
                  native
                  label="Row"
                  sx={{ margin: "10px" }}
                >
                  <option value=""> ---Row*--- </option>
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
                <Typography variant="inherit" color={palette.knittingPurple}>
                  {errors.Row?.message}
                </Typography>
                <Select
                  required
                  {...register("Column")}
                  error={errors.Column ? true : false}
                  native
                  label="Column"
                  sx={{ margin: "10px" }}
                >
                  <option value=""> --Column*-- </option>
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
                <Typography variant="inherit" color={palette.knittingPurple}>
                  {errors.Column?.message}
                </Typography>
              </Box>
              <Box textAlign="center">
                <ModalButton onClick={handleSubmit(onSubmit)} text="Submit" />
                <ModalButton
                  text="Cancel"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                />
              </Box>
            </form>
          </Box>
        </Box>
      </Modal>
    </ThemeProvider>
  );
};
