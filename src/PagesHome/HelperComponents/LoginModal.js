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
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response.ok, response.status);
    if (!response.ok) {
      if (response.status === 401) {
        console.log("Incorrect username/password");
      }
    } else {
      const payload = await response.json();
      console.log(payload);
      setIsLoginOpen(false);
      navigate("/KnitAndPearl/ViewProjects", {});
    }
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
                  label="Username"
                  error={errors.username ? true : false}
                  {...register("username")}
                  sx={{ width: "90%" }}
                />
                <Typography variant="inherit" color={palette.knittingPurple}>
                  {errors.username?.message}
                </Typography>
              </Box>
              <Box padding="12px">
                <TextField
                  fullWidth
                  error={errors.password ? true : false}
                  label="Password"
                  type="password"
                  {...register("password")}
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
