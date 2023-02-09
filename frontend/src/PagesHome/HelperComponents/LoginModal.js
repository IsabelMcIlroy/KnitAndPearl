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

// const url = `${process.env.API_BASE_URL}login`;

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
  const [errorMessage, setErrorMessage] = useState("");
  const onSubmit = async (data) => {
    const response = await fetch("/api/login", {
      mode: "cors",
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
        setErrorMessage("Incorrect username/password");
      }
    } else {
      const payload = await response.json();
      console.log(payload);
      setIsLoginOpen(false);
      navigate("/ViewProjects", {});
    }
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
              {errorMessage && (
                <Typography
                  variant="inherit"
                  color={palette.knittingErrorColour}
                >
                  {errorMessage}
                </Typography>
              )}
              <Box padding="12px">
                <TextField
                  required
                  fullWidth
                  label="Username"
                  error={errors.username ? true : false}
                  {...register("username")}
                  onKeyDown={handleKeyPress}
                  sx={{ width: "90%" }}
                />
                <Typography
                  variant="inherit"
                  color={palette.knittingErrorColour}
                >
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
                  onKeyDown={handleKeyPress}
                  sx={{ width: "90%" }}
                />
                <Typography
                  variant="inherit"
                  color={palette.knittingErrorColour}
                >
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
                    <span
                      style={{
                        textDecoration: "underline",
                        color: palette.knittingLightBlue,
                        cursor: "pointer",
                      }}
                    >
                      Signup Here!
                    </span>
                  </Typography>
                </Box>
              </Box>
              <Box textAlign="center">
                <ModalButton
                  onClick={handleSubmit(onSubmit)}
                  type="submit"
                  text="Login"
                />
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
