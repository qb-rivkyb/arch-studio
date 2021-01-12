import PortfolioImage from "./PortfolioImage";
import * as s from "./portfolioGrid.styl";

export default function PortfolioGrid({ imgs }) {
  return (
    <div css={s.grid}>
      {imgs.map((img) => {
        return <PortfolioImage img={img} key={img.name} />;
      })}
    </div>
  );
}
