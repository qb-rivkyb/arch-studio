import colors from "../../../colors";

export const navigation = {
  display: "flex",
  padding: "56px 0",
  textAlign: "center",
  alignItems: "center",

  "@media (max-width: 425px)": {
    paddingTop: "32px",
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
export const navItem = {};

export const linkActiveStyles = {
  color: `${colors.darkBlue}`,
  "&::after": {
    content: '" "',
    display: "block",
    margin: "0 auto",
    width: "50%",
    paddingTop: "7px",
    borderBottom: `1px solid ${colors.darkBlue}`,
  },
};
