import colors from "../../../colors";

export const button = {
  height: "72px",
  backgroundColor: colors.darkBlue,
  color: "white",
  border: "none",
  fontSize: "15px",
  textTransform: "capitalize",
  display: "inline-flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "24px 32px",
  fontWeight: "bold",
  letterSpacing: ".04em",
  cursor: "pointer",
  lineHeight: 0,
  "&:hover": {
    backgroundColor: colors.darkGrey,
  },
  "&:active": {
    backgroundColor: colors.lightGrey,
  },
};
