import { useState } from "react";
import { GithubPicker } from "react-color";

export const ColorPicker = () => {
  const [isDisplayColorPicker, setIsDisplayColorPicker] = useState(false);
  const [color, setColor] = useState({
    r: "241",
    g: "112",
    b: "19",
    a: "1",
  });

  const handleClick = () => {
    setIsDisplayColorPicker(true);
  };

  const handleClose = () => {
    setIsDisplayColorPicker(false);
  };

  const handleChange = () => {
    setColor(color.rgb);
  };

  return (
    <div>
      <div
        style={{
          padding: "5px",
          background: "#fff",
          borderRadius: "5px",
          boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
          display: "inline-block",
          cursor: "pointer",
        }}
        onClick={handleClick()}
      >
        <div
          style={{
            width: "36px",
            height: "14px",
            borderRadius: "2px",
            background: `rgba({color.r}, {color.g}, {color.b}, {color.a})`,
          }}
        />
      </div>
      {isDisplayColorPicker ? (
        <div style={{ position: "absolute", zIndex: "2" }}>
          <div
            style={{
              position: "fixed",
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            }}
            onClick={handleClose()}
          />
          <GithubPicker color={color.rgb} onChange={handleChange()} />
        </div>
      ) : null}
    </div>
  );
};
