import { useNavigate } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import {
  palette,
  editorDrawerProjectNames,
  editorDrawerLabels,
} from "../../assets/theme";
import { ColorPicker } from "./ColorPicker";
import { EditDrawerButtonsAndPopover } from "./EditDrawerButtonsAndPopovers";
import woolSmall from "../../images/woolSmall.jpg";

export const NewProjectEditorDrawerFillings = ({
  currentProjectNameForDrawer,
  currentProjectTypeForDrawer,
  currentlySelectedColor,
  setCurrentlySelectedColor,
  setBackground,
  defaultColor,
  gridArray,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          backgroundColor: palette.knittingLightBlue,
          paddingTop: "28px",
          fontFamily: "La Belle Aurore",
          textAlign: "center",
          color: palette.knittingPurple,
        }}
      >
        Edit Project
        <EditIcon />
      </Typography>
      <Box sx={{ margin: "24px" }}>
        <Box sx={{ display: "flex", paddingTop: "12px" }}>
          <Typography variant="h8" sx={editorDrawerLabels}>
            Project Name:
          </Typography>
          <Typography variant="h4" sx={editorDrawerProjectNames}>
            {currentProjectNameForDrawer || "---"}
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography variant="h8" sx={editorDrawerLabels}>
            Project Type:
          </Typography>
          <Typography variant="h4" sx={editorDrawerProjectNames}>
            {currentProjectTypeForDrawer || "---"}
          </Typography>
        </Box>
        <hr sx={editorDrawerLabels} />
        <Typography variant="h8" sx={editorDrawerLabels}>
          Wool Color:
        </Typography>
        <ColorPicker
          currentlySelectedColor={currentlySelectedColor}
          setCurrentlySelectedColor={setCurrentlySelectedColor}
        />
        <hr sx={editorDrawerLabels} />
        <Box sx={{ textAlign: "center", marginTop: "24px" }}>
          <EditDrawerButtonsAndPopover
            popoverText={"Clear Grid."}
            // onClick={() => {
            //   console.log("hello");
            //   for (let i = 0; i < gridArray.length; i++) {
            //     for (let j = 0; j < gridArray[i].length; j++) {
            //       gridArray[i][j] = { defaultColor };
            //     }
            //   }
            // }}
          />
          <EditDrawerButtonsAndPopover popoverText={"Save."} />
          <EditDrawerButtonsAndPopover
            popoverText={"Exit."}
            onClick={() => navigate("/KnittingProjectManager/ViewProject")}
          />
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: palette.knittingLightBlue,
          height: "100vh",
          backgroundImage: `url(${woolSmall})`,
          marginTop: "12px",
        }}
      />
    </>
  );
};
