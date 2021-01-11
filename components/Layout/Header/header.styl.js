import colors from "../../../colors";

export const navigation = {
  display: "flex",
  paddingTop: "56px",
  paddingBottom: "56px",
  textAlign: "center",
  alignItems: "center",
  position: "relative",
  zIndex: 1000,
  background: "white",
  "@media (max-width: 426px)": {
    padding: "32px",
    justifyContent: "space-between",
    position: "relative",
  },
};
export const logo = {
  paddingRight: "10%",
};

export const navItems = {
  display: "flex",
  justifyContent: "space-between",
  minWidth: "350px",
  "@media (max-width: 426px)": {
    display: "none",
  },
};

export const linkActiveStyles = {
  color: colors.darkBlue,
  "&::after": {
    content: '" "',
    display: "block",
    margin: "0 auto",
    width: "50%",
    paddingTop: "7px",
    borderBottom: `1px solid ${colors.darkBlue}`,
  },
};

export const navItemsMobile = {
  backgroundColor: colors.veryLightGrey,
  position: "absolute",
  top: "108px",
  width: "343px",
  height: "235px",
  right: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "flex-start",
  paddingLeft: "48px",
  zIndex: 1000,
  "@media (min-width: 426px)": {
    display: "none",
  },
};

export const navItemMobile = {
  color: colors.darkBlue,
};

export const overlay = {
  position: "fixed",
  backgroundColor: "black",
  opacity: 0.5,
  left: 0,
  bottom: 0,
  top: 0,
  right: 0,
  zIndex: 10,
  "@media (min-width: 426px)": {
    display: "none",
  },
};
