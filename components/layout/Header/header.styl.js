import colors from "../../../colors";

export const navigation = {
  backgroundColor: "red",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flexEnd",
  "@media (min-width: 768px)": {
    backgroundColor: "purple",
    flexDirection: "row",
  },
  "@media (min-width: 1100px)": {
    backgroundColor: "orange",
  },
};
export const navItem = {
  textDecoration: "none",
  color: `${colors.mediumGrey}`,
  "&:active": {
    color: "white",
  },
  cursor: "pointer",
};
