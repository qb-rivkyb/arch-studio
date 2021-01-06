import colors from "../../colors";

export const contactContainer = {
  color: colors.darkGrey,
  "@media (min-width: 768px)": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  "@media (min-width: 900px)": { display: "block", marginRight: "30px" },
};

export const contactDetailsContainer = {
  margin: "200px 0",
  "@media (max-width: 426px)": {
    maxWidth: "85%",
    margin: "0 auto",
    margin: "72px 0",
  },
  "@media (min-width: 900px)": {
    display: "flex",
    justifyContent: "space-between",
  },
};

export const contactDetailsText = {
  marginTop: 0,
  "@media (max-width: 426px)": { fontSize: "40px" },
  "&:before": {
    content: '""',
    borderTop: `1px solid ${colors.lightGrey}`,
    display: "block",
    marginBottom: "67px",
    width: "65px",
  },
};

export const viewMapButton = {
  color: colors.darkBlue,
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  border: "none",
  background: "none",
  fontSize: "15px",
  fontFamily: '"Spartan",sans-serif',
  padding: 0,
  "&:focus": {
    outline: "none",
  },
};

export const viewMapText = {
  marginRight: "24px",
  "@media (min-width: 900px)": {
    "&:hover": {
      borderBottom: `1px solid ${colors.darkBlue}`,
    },
  },
};
