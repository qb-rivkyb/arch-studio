import PortfolioImage from "../PortfolioGrid/PortfolioImage";
import ArrowButton from "../ui/ArrowButton";
import Link from "../ui/Link";
import { H2 } from "../ui/textTypes";
import * as s from "./featured.styl.js";

export default function Featured({ imgs }) {
  return (
    <div css={s.featuredContainer}>
      <div
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          "@media (max-width: 480px)": { display: "contents" },
        }}
      >
        <H2 css={s.featuredText}>Featured</H2>
        <Link href="/portfolio" css={s.seeAllButton}>
          <ArrowButton css={s.arrowButton}>See all</ArrowButton>
        </Link>
      </div>
      <div css={s.imgContainer}>
        {imgs.map((img) => {
          return <PortfolioImage img={img} key={img.name} />;
        })}
      </div>
    </div>
  );
}
