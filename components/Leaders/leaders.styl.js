import colors from "../../colors";

export const leaderContainer = {
  display: "inline-flex",
  flexDirection: "column",
  marginBottom: "40px",
};

export const leadersContainer = {
  "@media (min-width: 1100px)": {
    display: "flex",
    justifyContent: "space-between",
  },
  "@media (max-width: 425px)": {
    maxWidth: "85%",
  },
  margin: "0 auto",
};
export const imgsContainer = {
  "@media (min-width: 426px)": {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "11px",
    "@media (min-width: 1100px)": {
      gridGap: "30px",
    },
  },
};

export const titleText = {
  color: colors.darkBlue,
  opacity: ".75",
  margin: "4px 0px 8px",
};

export const headerText = {
  maxWidth: "250px",
  display: "inline-block",
  marginTop: 0,
};

export const overlayHover = {
  position: "relative",
  cursor: "pointer",
  "&:hover .overlay": {
    opacity: "0.6",
  },
};

export const overlay = {
  position: "absolute",
  opacity: 0,
  backgroundColor: "white",
  transition: "0.4s ease-out",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  color: "white",
  margin: "0 auto",
};

export const socialImages = {
  textAlign: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translateX(-50%) translateY(-50%)",
};
