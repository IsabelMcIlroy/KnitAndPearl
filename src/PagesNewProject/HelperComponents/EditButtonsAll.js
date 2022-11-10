import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { editorDrawerLabels } from "../../assets/theme";
import { EditButtonsAndPopover } from "./EditButtonsAndPopovers";
import { ProjectExitButtonModal } from "../../HelperComponents/ProjectExitButtonModal";
import { ColorPicker } from "./ColorPicker";

export const EditButtonsAll = ({
  clearGrid,
  currentlySelectedColor,
  setCurrentlySelectedColor,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = window.location.pathname;
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          marginTop: "18px",
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h7" sx={editorDrawerLabels}>
          Wool Color:
        </Typography>
        <ColorPicker
          currentlySelectedColor={currentlySelectedColor}
          setCurrentlySelectedColor={setCurrentlySelectedColor}
        />
        {pathName !== "/KnittingProjectManager/NewProject" && (
          <EditButtonsAndPopover
            popoverText={"Reset Project."}
            onClick={() => {
              clearGrid();
            }}
          />
        )}
        {pathName === "/KnittingProjectManager/NewProject" && (
          <EditButtonsAndPopover
            popoverText={"Clear Grid."}
            onClick={() => {
              clearGrid();
            }}
          />
        )}
        <EditButtonsAndPopover popoverText={"Save."} />
        <EditButtonsAndPopover
          popoverText={"Exit."}
          onClick={() => {
            setIsOpen(true);
          }}
        />
        <ProjectExitButtonModal open={isOpen} setIsOpen={setIsOpen} />
      </Box>
    </>
  );
};
