export const overlay = {
  lineHeight: 0,
  "&:before": {
    content: "''",
    position: "absolute",
    opacity: 0.1,
    backgroundColor: "black",
    width: "100%",
    height: "100%",
  },
  "@media (min-width: 1024px)": {
    "&:hover": {
      "&:before": {
        opacity: 0.5,
        backgroundColor: "white",
        cursor: "pointer",
        transition: "0.3s ease-out",
      },
    },
  },
};

export const imgNumber = {
  fontSize: "200px",
  color: "white",
  fontWeight: "bold",
  opacity: ".5",
  position: "absolute",
  right: "16px",
  top: "10px",
  display: "none",
  "@media (min-width: 768px)": {
    display: "block",
  },
  "@media (min-width: 1024px)": {
    right: "-16px",
  },
};

export const textContainer = {
  position: "absolute",
  zIndex: 1,
  bottom: 24,
  left: 24,
  color: "white",
  "@media (min-width: 768px)": {
    bottom: 40,
    left: 40,
  },
};

export const grid = {
  display: "grid",
  gridRowGap: "24px",
  margin: "0 32px",
  "@media (min-width: 1024px)": {
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "30px",
  },
};
