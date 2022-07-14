import { useState } from "react";
import { GithubPicker } from "react-color";

const styles = {
  default: {
    color: {
      width: "36px",
      height: "14px",
      borderRadius: "2px",
      background: `rgba({color.r}, {color.g}, {color.b}, {color.a})`,
    },
    swatch: {
      padding: "5px",
      background: "#fff",
      borderRadius: "5px",
      boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
      display: "inline-block",
      cursor: "pointer",
    },
    popover: {
      position: "absolute",
      zIndex: "2",
    },
    cover: {
      position: "fixed",
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px",
    },
  },
};

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

  const handleChange = (color) => {
    setColor(color.rgb);
  };

  return (
    <div>
      <div style={styles.swatch} onClick={handleClick()}>
        <div style={styles.color} />
      </div>
      {isDisplayColorPicker ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={handleClose()} />
          <GithubPicker color={color} onChange={handleChange()} />
        </div>
      ) : null}
    </div>
  );
};
