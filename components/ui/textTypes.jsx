import colors from "../../colors";

const H1 = ({ children }) => (
  <h1
    css={{
      fontSize: "80px",
      lineHeight: "1em",
      fontWeight: "700",
      letterSpacing: "-2px",
    }}
  >
    {children}
  </h1>
);

const H2 = ({ children }) => (
  <h2 css={{ fontSize: "56px", lineHeight: "1em" }}>{children}</h2>
);

const H3 = ({ children }) => (
  <h3 css={{ fontSize: "18px", lineHeight: "25px" }}>{children}</h3>
);

const LargeGreyText = ({ children }) => (
  <div css={{ fontSize: "200px", color: colors.veryLightGrey }}>{children}</div>
);

export { H1, H2, H3, LargeGreyText };
