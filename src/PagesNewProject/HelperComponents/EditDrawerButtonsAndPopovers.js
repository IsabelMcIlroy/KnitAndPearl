import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Popover, Typography, IconButton } from "@mui/material";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import SettingsBackupRestoreRoundedIcon from "@mui/icons-material/SettingsBackupRestoreRounded";
import { editBarButton, editBarButtonIcon } from "../../assets/theme";

export const EditDrawerButtonsAndPopover = ({ popoverText }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
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
        onClick={() => navigate("/KnittingProjectManager/ViewProject")}
      >
        {popoverText === "Clear Grid." ? (
          <SettingsBackupRestoreRoundedIcon sx={editBarButtonIcon} />
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
