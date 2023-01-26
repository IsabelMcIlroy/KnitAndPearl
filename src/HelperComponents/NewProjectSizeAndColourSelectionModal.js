import React, { useRef } from "react";
import _ from "lodash";
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
  const maxGrid = 12;
  var converter = require("number-to-words");
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
  const onSubmit = async (data) => {
    console.log(data);
    const response = await fetch("/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const payload = await response.json();
    console.log(payload);
    setIsOpen(false);
    navigate(`/KnitAndPearl/NewProject/${payload.id}`, {});
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSubmit(onSubmit)();
    }
  };
  return (
    <ThemeProvider theme={KnittingTheme}>
      <Modal open={open} onClick={onClick}>
        <Box
          style={{
            overflowY: "auto",
            overflowStyle: "scroll",
            transform: "translate(25%, 15%)",
            display: "inline-block",
            height: "80%",
            maxHeight: "500px",
            width: "70%",
          }}
        >
          <Typography variant="h4" sx={modalTitle}>
            New Knitting Project
          </Typography>
          <Box
            sx={{
              padding: "24px 24px 0 24px",
              backgroundColor: palette.knittingGray,
              borderRadius: "0 0 24px 24px",
            }}
          >
            <form
              ref={form}
              onSubmit={handleSubmit(onSubmit)}
              style={{ textAlign: "center" }}
            >
              <Box padding="10px">
                <TextField
                  required
                  fullWidth
                  {...register("projectName")}
                  error={errors.projectName ? true : false}
                  label="Project Name"
                  name="projectName"
                  onKeyDown={handleKeyPress}
                  sx={{ width: "90%" }}
                />
                <Typography
                  variant="inherit"
                  color={palette.knittingErrorColour}
                >
                  {errors.projectName?.message}
                </Typography>
              </Box>
              <Box padding="10px">
                <TextField
                  fullWidth
                  {...register("projectType")}
                  label="Project Type"
                  name="projectType"
                  onKeyDown={handleKeyPress}
                  sx={{ width: "90%" }}
                />
              </Box>
              <Box
                textAlign="center"
                sx={{
                  display: "inline-flex",
                  alignContent: "center",
                  flexWrap: "wrap",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    verticalAlign: "middle",
                    display: "inline",
                    padding: "12px",
                    margin: "0 auto",
                  }}
                >
                  <Typography variant="p">Row:</Typography>
                  <br />
                  <Select
                    required
                    {...register("Row")}
                    error={errors.Row ? true : false}
                    native
                    sx={{ margin: "10px" }}
                    name="Row"
                    onKeyDown={handleKeyPress}
                  >
                    {_.range(4, maxGrid + 1).map((value) => (
                      <option key={value} value={value}>
                        {converter.toWords(value).charAt(0).toUpperCase() +
                          converter.toWords(value).substring(1)}
                      </option>
                    ))}
                  </Select>
                </Box>
                <Box
                  sx={{
                    verticalAlign: "middle",
                    display: "inline",
                    padding: "12px",
                    margin: "0 auto",
                  }}
                >
                  <Typography
                    variant="inherit"
                    color={palette.knittingErrorColour}
                  >
                    {errors.Row?.message}
                  </Typography>
                  <Typography variant="p">Column:</Typography>
                  <br />
                  <Select
                    required
                    {...register("Column")}
                    error={errors.Column ? true : false}
                    native
                    sx={{ margin: "10px" }}
                    name="Column"
                    onKeyDown={handleKeyPress}
                  >
                    {_.range(6, maxGrid + 1).map((value) => (
                      <option key={value} value={value}>
                        {converter.toWords(value).charAt(0).toUpperCase() +
                          converter.toWords(value).substring(1)}
                      </option>
                    ))}
                  </Select>
                </Box>
                <Typography
                  variant="inherit"
                  color={palette.knittingErrorColour}
                >
                  {errors.Column?.message}
                </Typography>
              </Box>
              <Box textAlign="center">
                <ModalButton
                  onClick={handleSubmit(onSubmit)}
                  text="Submit"
                  variant="Sumbit"
                />
                <ModalButton
                  text="Cancel"
                  variant="Cancel"
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
