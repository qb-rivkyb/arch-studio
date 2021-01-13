import colors from "../../colors";

export const container = {
  position: "relative",
};

export const mainTextContainer = {
  textAlign: "center",
  maxWidth: "343px",
  // paddingRight: "32px",
  "@media (min-width: 768px)": {
    maxWidth: "515px",
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  // "@media (max-width: 1024px)": { maxWidth: "90%" },
  // "@media (max-width: 425px) ": { position: "relative" },
};

export const subTextContainer = {
  textAlign: "left",
  backgroundColor: "white",
  // paddingLeft: "182px",
  // paddingTop: "235px",
  "&:before": {
    content: '""',
    borderTop: `1px solid ${colors.lightGrey}`,
    display: "block",
    marginBottom: "74px",
    width: "20%",
  },
  // "@media (max-width: 1024px)": {
  //   paddingTop: "156px",
  //   paddingLeft: "100px",
  // },

  "@media (min-width: 768px)": {
    paddingLeft: "59px",
    paddingTop: "160px",
    "&:before": { width: "10%" },
  },
  "@media (max-width: 767px) ": {
    paddingLeft: "32px",
    paddingTop: "32px",
    marginTop: "-32px",
    "&:before": { display: "none" },
  },
  "@media (min-width: 1024px)": {
    paddingLeft: "182px",
  },
};
