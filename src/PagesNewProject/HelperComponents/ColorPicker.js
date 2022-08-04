import { useState } from "react";
import { GithubPicker } from "react-color";
import { Box } from "@mui/system";

export const ColorPicker = () => {
  const [isDisplayColorPicker, setIsDisplayColorPicker] = useState(false);
  const [color, setColor] = useState({
    r: "241",
    g: "112",
    b: "19",
    a: "1",
  });

  const handleChange = (color) => {
    setColor(color.rgb);
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
            background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
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
            color={color.rgb}
            onChange={handleChange}
          />
        </Box>
      )}
    </Box>
  );
};
