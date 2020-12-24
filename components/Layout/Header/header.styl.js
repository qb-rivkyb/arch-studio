import colors from "../../../colors";

export const navigation = {
  display: "flex",
  padding: "56px 0",
  textAlign: "center",
  alignItems: "center",
  zIndex: "99",
  "@media (max-width: 425px)": {
    paddingTop: "32px",
    justifyContent: "space-between",
  },
};
export const logo = {
  paddingRight: "10%",
};

export const navItems = {
  display: "flex",
  justifyContent: "space-between",
  minWidth: "350px",
  "@media (max-width: 425px)": {
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
  top: "96px",
  width: "343px",
  height: "235px",
  right: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "flex-start",
  paddingLeft: "48px",
  zIndex: "1000",
  "@media (min-width: 425px)": {
    display: "none",
  },
};

export const navItemMobile = {
  color: colors.darkBlue,
};
