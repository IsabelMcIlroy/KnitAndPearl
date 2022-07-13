import {useState} from "react";
import reactCSS from "reactcss";
import { GithubPicker } from "react-color";

const ColorPicker = () => {
  const [isDisplayColorPicker, setIsDsiplayColorPicker] = useState(false);
  const [color, setColor] = useState({
    r:"241",
    g:"112",
    b:"19",
    a:"1",
  })

  handleClick = () => {
    setIsDsiplayColorPicker(true);
  };

  handleClose = () => {
    isDisplayColorPicker(false);
  };

  handleChange = (color) => {
    setColor(color.rgb)
  };

  render() {
    const styles = reactCSS({
      default: {
        color: {
          width: "36px",
          height: "14px",
          borderRadius: "2px",
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
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
    });

    return (
      <div>
        <div style={styles.swatch} onClick={this.handleClick}>
          <div style={styles.color} />
        </div>
        {this.state.displayColorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            <GithubPicker
              color={this.state.color}
              onChange={this.handleChange}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default ColorPicker;
