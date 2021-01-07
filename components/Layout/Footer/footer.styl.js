import colors from "../../../colors";

export const container = {
  background: `linear-gradient(to top, ${colors.veryLightGrey} 0%,${colors.veryLightGrey} 85%,${colors.veryLightGrey} 50%,white 50%,white 100%)`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "443px",
  justifyContent: "space-between",
  paddingBottom: "48px",
  marginTop: "72px",
  "@media(min-width:768px)": {
    marginTop: "200px",
    flexDirection: "row",
    height: "120px",
    paddingBottom: 0,
    background: `linear-gradient(to right, ${colors.veryLightGrey} 0%,${colors.veryLightGrey} 80%,${colors.veryLightGrey} 50%,white 50%,white 100%)`,
  },
  "@media(min-width:1200px)": {
    maxWidth: "1440px",
    padding: "0 165px",
    margin: "0 auto",
    background: `linear-gradient(to right, ${colors.veryLightGrey} 0%,${colors.veryLightGrey} 90%,${colors.veryLightGrey} 50%,white 50%,white 100%) no-repeat`,
    backgroundOrigin: "content-box",
    height: "200px",
    justifyContent: "flex-start",
  },
};

export const linkContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  height: "100%",
  "@media(min-width:768px)": {
    flexDirection: "row",
    alignItems: "center",
    flexGrow: 1,
  },
  "@media(min-width:1200px)": {
    maxWidth: "316px",
    marginLeft: "5%",
    justifyContent: "space-between",
  },
};
export const button = {
  "@media(min-width:1200px)": {
    marginLeft: "auto",
  },
};

export const logoContainer = {
  backgroundColor: colors.darkBlue,
  height: "120px",
  width: "120px",
  display: "flex",
  justifyContent: "center",
  "@media(min-width:1200px)": {
    height: "200px",
    width: "200px",
  },
};
