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
