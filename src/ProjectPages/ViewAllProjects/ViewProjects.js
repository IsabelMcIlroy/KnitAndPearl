import React, { useState } from "react";
import useFetch from "react-fetch-hook";
import {
  Box,
  Typography,
  TextField,
  Fab,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { palette } from "../../assets/theme";
import { NewProjectSizeAndColourSelectionModal } from "../../HelperComponents/NewProjectSizeAndColourSelectionModal";
import { UsersProjectCards } from "./HelperComponents/UsersProjectCards";

export const ViewProjects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [checked, setChecked] = React.useState(true);

  const {
    isLoading,
    data: allProjects,
    error,
  } = useFetch(
    `/knitandpearl-backend.up.railway.app/projects/projectsList/${checked}`
  );

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Box
      sx={{
        backgroundColor: palette.knittingGray,
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          padding: "112px 24px 12px 24px",
        }}
      >
        <Box
          sx={{
            margin: "0 24px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "La Belle Aurore",
              color: palette.knittingPurple,
            }}
          >
            View Projects
          </Typography>
          <Box>
            <TextField
              label="Search Projects"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: palette.knittingPurple,
                      "&.Mui-checked": {
                        color: palette.knittingPurple,
                      },
                    }}
                    checked={checked}
                    onChange={handleChange}
                  />
                }
                label="My Projects Only"
                sx={{ color: palette.knittingPurple }}
              />
            </FormGroup>
          </Box>
        </Box>
        <UsersProjectCards
          searchQuery={searchQuery}
          isLoading={isLoading}
          allProjects={allProjects}
          error={error}
        />
      </Box>
      <Fab
        onClick={() => {
          setIsOpen(true);
        }}
        sx={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          padding: "8px",
          height: "84px",
          width: "84px",
          backgroundColor: palette.knittingBlue,
          color: palette.knittingGray,
          "&:hover": {
            backgroundColor: "#0B5082",
          },
        }}
      >
        New Project
      </Fab>
      <NewProjectSizeAndColourSelectionModal
        open={isOpen}
        setIsOpen={setIsOpen}
      />
    </Box>
  );
};
