import { useState } from "react";
import { Typography, Box, Popover } from "@mui/material";
import {
  editorDrawerProjectNames,
  editorDrawerLabels,
} from "../../assets/theme";
import { EditProjectNameModal } from "../../ProjectPages/HelperComponents/EditProjectNameModal";
import { EditButtonsAll } from "./EditButtonsAll";

export const NewProjectEditor = ({
  currentProjectName,
  currentProjectType,
  clearGrid,
  currentlySelectedColor,
  setCurrentlySelectedColor,
  projectID,
  gridArray,
  gridColours,
  user,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  return (
    <>
      <Box
        sx={{
          borderRadius: "24px",
          backgroundColor: "#F3ECF6",
          padding: "24px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            paddingTop: "12px",
            alignItems: "baseline",
            flexWrap: "wrap",
            cursor: "pointer",
          }}
          onMouseEnter={(event) => {
            setAnchorEl(event.currentTarget);
          }}
          onMouseLeave={() => {
            setAnchorEl(null);
          }}
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <Typography variant="h5" sx={editorDrawerLabels}>
            Project Name:
          </Typography>
          <Typography variant="h5" sx={editorDrawerProjectNames}>
            {currentProjectName || "---"}
          </Typography>
        </Box>
        {currentProjectType && (
          <Box
            sx={{
              display: "flex",
              alignItems: "baseline",
              flexWrap: "wrap",
              cursor: "pointer",
            }}
            onMouseEnter={(event) => {
              setAnchorEl(event.currentTarget);
            }}
            onMouseLeave={() => {
              setAnchorEl(null);
            }}
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <Typography variant="h5" sx={editorDrawerLabels}>
              Project Type:
            </Typography>
            <Typography variant="h5" sx={editorDrawerProjectNames}>
              {currentProjectType}
            </Typography>
          </Box>
        )}
        {user && (
          <>
            <EditProjectNameModal
              open={isOpen}
              setIsOpen={setIsOpen}
              projectID={projectID}
              projectName={currentProjectName}
              projectType={currentProjectType}
              gridColours={gridColours}
            />
            <Popover
              id="mouse-over-popover"
              sx={{
                pointerEvents: "none",
              }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              disableRestoreFocus
            >
              <Typography sx={{ p: 1 }}>Edit</Typography>
            </Popover>
          </>
        )}
        <EditButtonsAll
          clearGrid={clearGrid}
          currentlySelectedColor={currentlySelectedColor}
          setCurrentlySelectedColor={setCurrentlySelectedColor}
          projectID={projectID}
          gridArray={gridArray}
          user={user}
        />
      </Box>
    </>
  );
};
