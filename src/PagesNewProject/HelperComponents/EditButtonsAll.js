import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { palette } from "../../assets/theme";
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
  const onSave = async (data) => {
    const response = await fetch("/projects/:id", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const payload = await response.json();
    console.log(payload);
  };
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
        <Box
          sx={{
            height: "fit-content",
            padding: "12px",
            borderRadius: "12px",
            backgroundColor: palette.knittingGray,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                backgroundColor: palette.knittingBlue,
                borderRadius: "12px",
                padding: "8px",
                width: "fit-content",
              }}
            >
              <Typography variant="h7" sx={{ color: palette.knittingGray }}>
                Color:
              </Typography>
              <ColorPicker
                currentlySelectedColor={currentlySelectedColor}
                setCurrentlySelectedColor={setCurrentlySelectedColor}
              />
            </Box>
          </Box>
          {pathName !== "/KnittingProjectManager/NewProject" && (
            <EditButtonsAndPopover
              popoverText={"Clear Grid."}
              onClick={() => {
                clearGrid();
              }}
            />
          )}
          {pathName === "/KnittingProjectManager/" && (
            <EditButtonsAndPopover
              popoverText={"Reset Project."}
              onClick={() => {
                clearGrid();
              }}
            />
          )}
          <EditButtonsAndPopover popoverText={"Save."} onClick={onSave()} />
          <EditButtonsAndPopover
            popoverText={"Exit."}
            onClick={() => {
              setIsOpen(true);
            }}
          />
          <ProjectExitButtonModal open={isOpen} setIsOpen={setIsOpen} />
        </Box>
      </Box>
    </>
  );
};
