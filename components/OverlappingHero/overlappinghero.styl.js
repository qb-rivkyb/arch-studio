import colors from "../../colors";

export const container = {
  position: "relative",
};

export const mainTextContainer = {
  position: "absolute",
  right: 0,
  bottom: 0,
  textAlign: "center",
  maxWidth: "65%",
  "@media (max-width: 1100px)": { maxWidth: "90%" },
  "@media (max-width: 600px) ": { position: "relative" },
};

export const subTextContainer = {
  textAlign: "left",
  backgroundColor: "white",
  paddingLeft: "182px",
  paddingTop: "235px",
  "&:before": {
    content: '""',
    borderTop: `1px solid ${colors.lightGrey}`,
    display: "block",
    marginBottom: "74px",
    width: "20%",
  },
  "@media (max-width: 1100px)": {
    paddingTop: "163px",
    paddingLeft: "59px",
    "&:before": { width: "10%" },
  },
  "@media (max-width: 600px) ": {
    paddingTop: "70px",
    paddingLeft: "32px",
    marginTop: "-35px",
    "&:before": { display: "none" },
  },
};
