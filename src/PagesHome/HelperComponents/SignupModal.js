import React, { useRef, useState } from "react";
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
} from "@mui/material";
import KnittingTheme, { palette, modalTitle } from "../../assets/theme";
import { ModalButton } from "../../HelperComponents/ModalButton";

export const SignupModal = ({ open, onClick, setIsSignupOpen }) => {
  const form = useRef();
  const validationSchema = yup.object().shape({
    userName: yup.string().required("Please enter your username"),
    password: yup.string().required("Please enter your password"),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(validationSchema) });
  const [state, setState] = useState({
    userName: "",
    password: "",
  });
  const handleInput = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  const navigate = useNavigate();
  const onSubmit = () => {
    setIsSignupOpen(false);
    navigate("/KnittingProjectManager/", {
      state: {
        userName: "",
        password: "",
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
                  label="userame"
                  name="userName"
                  value={state.userName}
                  onChange={handleInput}
                  sx={{ width: "90%" }}
                />
                <Typography variant="inherit" color={palette.knittingPurple}>
                  {errors.userame?.message}
                </Typography>
              </Box>
              <Box padding="10px">
                <TextField
                  fullWidth
                  {...register("projectType")}
                  label="Password"
                  name="password"
                  value={state.password}
                  onChange={handleInput}
                  sx={{ width: "90%" }}
                />
                <Typography variant="inherit" color={palette.knittingPurple}>
                  {errors.password?.message}
                </Typography>
              </Box>
              <Box textAlign="center">
                <ModalButton onClick={handleSubmit(onSubmit)} text="Submit" />
                <ModalButton
                  text="Cancel"
                  onClick={() => {
                    setIsSignupOpen(false);
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
