import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Modal,
  ThemeProvider,
  Typography,
  Box,
  TextField,
} from "@mui/material";
import KnittingTheme, { palette, modalTitle } from "../../assets/theme";
import { ModalButton } from "../../HelperComponents/ModalButton";

export const EditProjectNameModal = ({
  open,
  onClick,
  setIsOpen,
  projectID,
  projectName,
  projectType,
}) => {
  const navigate = useNavigate();
  const form = useRef();
  const validationSchema = yup.object().shape({
    projectName: yup.string().required("This is required"),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(validationSchema) });
  const [state, setState] = useState({
    projectID: projectID,
    projectName: projectName,
    projectType: projectType,
  });
  const handleInput = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmit = async (data) => {
    const response = await fetch(
      `https://backend.knitandpearl.online/projects/editNames/${projectID}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      if (response.status === 401) {
        console.log("No Project");
        navigate("/NoProject");
      }
    } else {
      const payload = await response.json();
      console.log(payload);
      setIsOpen(false);
      window.location.reload();
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
                  value={state.projectName}
                  onChange={handleInput}
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
                  textAlign: "center",
                }}
              >
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
                  variant="submit"
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
