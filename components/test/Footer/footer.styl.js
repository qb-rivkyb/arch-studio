import colors from "../../../colors";

export const container = {
  background: colors.veryLightGrey,
  // background: `linear-gradient(to top, ${colors.veryLightGrey} 0%,${colors.veryLightGrey} 80%,${colors.veryLightGrey} 50%,white 50%,white 100%)`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "383px",
  justifyContent: "space-between",
  paddingBottom: "48px",
  marginTop: "60px",
  "@media(min-width:768px)": {
    flexDirection: "row",
    height: "120px",
    paddingBottom: 0,
    background: `linear-gradient(to right, ${colors.veryLightGrey} 0%,${colors.veryLightGrey} 80%,${colors.veryLightGrey} 50%,white 50%,white 100%)`,
  },
  "@media(min-width:1100px)": {
    maxWidth: "85%",
    margin: "0 auto",
    background: `linear-gradient(to right, ${colors.veryLightGrey} 0%,${colors.veryLightGrey} 90%,${colors.veryLightGrey} 50%,white 50%,white 100%)`,
    height: "200px",
  },
};

export const logoContainer = {
  backgroundColor: colors.darkBlue,
  height: "120px",
  width: "120px",
  display: "flex",
  justifyContent: "center",
  marginTop: "-60px",
  "@media(min-width:768px)": {
    marginTop: 0,
  },
  "@media(min-width:1100px)": {
    height: "200px",
    width: "200px",
  },
};
