import colors from "../../../colors";

export const sideText = {
  transform: "rotate(-270deg)",
  transformOrigin: "top left",
  position: "absolute",
  left: "64px",
  textTransform: "uppercase",
  color: colors.lightGrey,
  letterSpacing: "15px",
  fontSize: "15px",
  top: "0",
  "&::before": {
    content: "'----'",
    textDecoration: "line-through",
    paddingRight: "48px",
  },
  "@media (max-width: 768px)": {
    left: "39px",
  },
  "@media (max-width: 426px)": {
    display: "none",
  },
};
