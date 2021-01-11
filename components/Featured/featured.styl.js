export const featuredContainer = {
  "@media (max-width: 767px)": { margin: "0 32px" },
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

export const seeAllButton = {
  "@media (max-width: 480px)": {
    order: 1,
    marginTop: "24px",
  },
};

export const featuredText = {
  "@media (max-width: 540px)": { fontSize: "40px" },
};

export const arrowButton = {
  "@media (max-width: 480px)": {
    width: "100%",
    justifyContent: "center",
  },
};

export const imgContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  justifyContent: "space-between",
  "@media (min-width: 1024px)": { flexDirection: "row" },
};
