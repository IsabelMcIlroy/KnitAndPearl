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

export const SignupModal = ({
  open,
  onClick,
  setIsSignupOpen,
  setIsLoginOpen,
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
    const response = await fetch("https://backend.knitandpearl.online/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      if (response.status === 401) {
        console.log("Try another username");
        setErrorMessage("Try another username");
      }
    } else {
      const payload = await response.json();
      console.log(payload);
      setIsSignupOpen(false);
      navigate("/KnitAndPearl/ViewProjects", {});
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
            Signup
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
                  error={errors.username ? true : false}
                  label="Username"
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
                      setIsSignupOpen(false);
                      setIsLoginOpen(true);
                    }}
                  >
                    Already signedup?{" "}
                    <span
                      style={{
                        textDecoration: "underline",
                        color: palette.knittingLightBlue,
                        cursor: "pointer",
                      }}
                    >
                      Login Here!
                    </span>
                  </Typography>
                </Box>
              </Box>
              <Box textAlign="center">
                <ModalButton onClick={handleSubmit(onSubmit)} text="Signup" />
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
