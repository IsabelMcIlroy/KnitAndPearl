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

export const LoginModal = ({
  open,
  onClick,
  setIsLoginOpen,
  setIsSignupOpen,
}) => {
  const form = useRef();
  const validationSchema = yup.object().shape({
    username: yup.string().required("Please enter your username"),
    password: yup.string().required("Please enter your password"),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(validationSchema) });
  const [state, setState] = useState({
    username: "",
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
    setIsLoginOpen(false);
    navigate("/KnitAndPearl/ViewProjects", {});
  };
  return (
    <ThemeProvider theme={KnittingTheme}>
      <Modal open={open} onClick={onClick}>
        <Box
          style={{
            overflowY: "auto",
            overflowStyle: "scroll",
            transform: "translate(50%, 25%)",
            display: "inline-block",
            height: "80%",
            maxHeight: "500px",
            width: "50%",
          }}
        >
          <Typography variant="h4" sx={modalTitle}>
            Login
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
              <Box padding="12px">
                <TextField
                  required
                  fullWidth
                  {...register("username")}
                  error={errors.username ? true : false}
                  label="Username"
                  name="username"
                  value={state.username}
                  onChange={handleInput}
                  sx={{ width: "90%" }}
                />
                <Typography variant="inherit" color={palette.knittingPurple}>
                  {errors.username?.message}
                </Typography>
              </Box>
              <Box padding="12px">
                <TextField
                  fullWidth
                  {...register("password")}
                  error={errors.password ? true : false}
                  label="Password"
                  name="password"
                  type="password"
                  value={state.password}
                  onChange={handleInput}
                  sx={{ width: "90%" }}
                />
                <Typography variant="inherit" color={palette.knittingPurple}>
                  {errors.password?.message}
                </Typography>
                <Box padding="12px">
                  <Typography
                    variant="p"
                    onClick={() => {
                      setIsLoginOpen(false);
                      setIsSignupOpen(true);
                    }}
                  >
                    Not signed up yet?{" "}
                    <span style={{ textDecoration: "underline" }}>
                      Signup Here!
                    </span>
                  </Typography>
                </Box>
              </Box>
              <Box textAlign="center">
                <ModalButton onClick={handleSubmit(onSubmit)} text="Login" />
                <ModalButton
                  text="Cancel"
                  onClick={() => {
                    setIsLoginOpen(false);
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
