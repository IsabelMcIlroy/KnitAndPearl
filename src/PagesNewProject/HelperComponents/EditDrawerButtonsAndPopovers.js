import { useState } from "react";
import { Popover, Typography, IconButton } from "@mui/material";
import UndoRoundedIcon from "@mui/icons-material/UndoRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import SettingsBackupRestoreRoundedIcon from "@mui/icons-material/SettingsBackupRestoreRounded";
import { editBarButton, editBarButtonIcon } from "../../assets/theme";

export const EditDrawerButtonsAndPopover = ({ popoverText, background }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  return (
    <>
      <IconButton
        aria-label="Undo"
        sx={editBarButton}
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={(event) => {
          setAnchorEl(event.currentTarget);
        }}
        onMouseLeave={() => {
          setAnchorEl(null);
        }}
      >
        {popoverText === "Undo." ? (
          <UndoRoundedIcon sx={editBarButtonIcon} />
        ) : popoverText === "Clear Grid." ? (
          <SettingsBackupRestoreRoundedIcon
            sx={editBarButtonIcon}
            background={background}
          />
        ) : popoverText === "Save." ? (
          <SaveRoundedIcon sx={editBarButtonIcon} />
        ) : popoverText === "Exit." ? (
          <ExitToAppRoundedIcon sx={editBarButtonIcon} />
        ) : null}
      </IconButton>
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
        <Typography sx={{ p: 1 }}>{popoverText}</Typography>
      </Popover>
    </>
  );
};
