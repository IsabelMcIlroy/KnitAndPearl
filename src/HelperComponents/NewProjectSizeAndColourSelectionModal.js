import React, { useRef, useState } from "react";
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
  const [state, setState] = useState({
    projectName: "",
    projectType: "",
    Row: " ",
    Column: " ",
  });
  const handleInput = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  const navigate = useNavigate();
  const onSubmit = (data) => {
    setIsOpen(false);
    navigate("/KnitAndPearl/NewProject", {
      state: {
        currentProjectName: data.projectName,
        currentProjectType: data.projectType,
        currentRows: data.Row,
        currentColumns: data.Column,
      },
    });
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
                  value={state.projectName}
                  onChange={handleInput}
                  sx={{ width: "90%" }}
                />
                <Typography variant="inherit" color={palette.knittingPurple}>
                  {errors.projectName?.message}
                </Typography>
              </Box>
              <Box padding="10px">
                <TextField
                  fullWidth
                  {...register("projectType")}
                  label="Project Type"
                  name="projectType"
                  value={state.projectType}
                  onChange={handleInput}
                  sx={{ width: "90%" }}
                />
              </Box>
              <Box
                textAlign="center"
                sx={{
                  display: "inline-flex",
                  alignContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <Box
                  sx={{
                    verticalAlign: "middle",
                    display: "inline",
                    padding: "12px",
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
                    value={state.Row}
                    onChange={handleInput}
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
                  }}
                >
                  <Typography variant="inherit" color={palette.knittingPurple}>
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
                    value={state.Column}
                    onChange={handleInput}
                  >
                    {_.range(6, maxGrid + 1).map((value) => (
                      <option key={value} value={value}>
                        {converter.toWords(value).charAt(0).toUpperCase() +
                          converter.toWords(value).substring(1)}
                      </option>
                    ))}
                  </Select>
                </Box>
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
