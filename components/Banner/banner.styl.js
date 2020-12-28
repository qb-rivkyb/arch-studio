import colors from "../../colors";

export const banner = {
  backgroundRepeat: "no-repeat",
  height: "720px",
  width: "100%",
  position: "relative",
};

export const bannerButton = {
  height: "80px",
  width: "80px",
  backgroundColor: "white",
  color: colors.mediumGrey,
  border: "none",
  fontSize: "15px",
  fontWeight: "bold",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: colors.veryLightGrey,
  },
};

export const activeButton = {
  backgroundColor: colors.darkBlue,
  color: "white",
};

export const imageContainer = {
  height: "720px",
  width: "1100px",
};

export const buttonContainer = {
  display: "flex",
  marginLeft: "-80px",
  position: "absolute",
  bottom: 0,
};
