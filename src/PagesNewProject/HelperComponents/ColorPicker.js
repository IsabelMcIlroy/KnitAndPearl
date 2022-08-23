import { useState } from "react";
import { GithubPicker } from "react-color";
import { Box } from "@mui/system";

export const ColorPicker = ({
  currentlySelectedColor,
  setCurrentlySelectedColor,
}) => {
  const [isDisplayColorPicker, setIsDisplayColorPicker] = useState(false);

  const handleChange = (color) => {
    setCurrentlySelectedColor(color.rgb);
    setIsDisplayColorPicker(false);
  };
  return (
    <Box sx={{ margin: "10px", textAlign: "center" }}>
      <Box
        sx={{
          padding: "6px",
          background: "#fff",
          borderRadius: "6px",
          boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
          display: "inline-block",
          cursor: "pointer",
        }}
        onClick={() => {
          setIsDisplayColorPicker(true);
        }}
      >
        <Box
          sx={{
            width: "36px",
            height: "24px",
            borderRadius: "3px",
            background: `rgba(${currentlySelectedColor.r}, ${currentlySelectedColor.g}, ${currentlySelectedColor.b}, ${currentlySelectedColor.a})`,
          }}
        />
      </Box>
      {isDisplayColorPicker && (
        <Box sx={{ position: "absolute", zIndex: "2" }}>
          <Box
            sx={{
              position: "fixed",
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            }}
            onClick={() => {
              setIsDisplayColorPicker(false);
            }}
          />
          <GithubPicker
            triangle="hide"
            name="currentColor"
            color={currentlySelectedColor.rgb}
            onChange={handleChange}
          />
        </Box>
      )}
    </Box>
  );
};
