import PortfolioImage from "./PortfolioImage";

export default function PortfolioGrid({ imgs }) {
  return (
    <div
      css={{
        display: "grid",
        gridRowGap: "24px",
        margin: "0 32px",
        // width: "fit-content",
        "@media (min-width: 1024px)": {
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: "30px",
        },
      }}
    >
      {imgs.map((img) => {
        return <PortfolioImage img={img} key={img.name} />;
      })}
    </div>
  );
}
