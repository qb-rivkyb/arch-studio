import colors from "../../colors";

export const headerText = {
  display: "none",
  "@media(min-width:768px)": {
    display: "block",
  },
};

export const subHeaderText = {
  marginTop: 0,
  fontSize: "40px",
  "@media(min-width:768px)": {
    maxWidth: "50%",
  },
  "@media(min-width:1100px)": {
    maxWidth: "80%",
  },
};

export const welcomeContainer = {
  margin: "75px auto",
  position: "relative",
  "&::before": {
    content: '""',
    borderTop: `1px solid ${colors.lightGrey}`,
    display: "block",
    marginBottom: "67px",
    width: "20%",
    "@media(min-width:768px)": {
      display: "none",
    },
    "@media (max-width: 426px)": { maxWidth: "100%" },
  },
};

export const body = {
  "@media(min-width:1100px)": {
    width: "446px",
    marginLeft: "185px",
  },
};

export const image = {
  display: "none",
  "@media(min-width:1100px)": {
    display: "block",
    position: "absolute",
    top: 120,
    right: 0,
    zIndex: -1,
  },
};
