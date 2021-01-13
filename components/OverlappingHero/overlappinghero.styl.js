import colors from "../../colors";

export const container = {
  position: "relative",
};

export const mainTextContainer = {
  textAlign: "center",
  maxWidth: "343px",
  position: "relative",
  "@media (min-width: 768px)": {
    maxWidth: "515px",
    position: "absolute",
    right: 0,
    bottom: 0,
  },
};

export const subTextContainer = {
  textAlign: "left",
  backgroundColor: "white",
  "&:before": {
    content: '""',
    borderTop: `1px solid ${colors.lightGrey}`,
    display: "block",
    marginBottom: "74px",
    width: "20%",
  },

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
    paddingTop: "156px",
    paddingLeft: "100px",
  },
};
