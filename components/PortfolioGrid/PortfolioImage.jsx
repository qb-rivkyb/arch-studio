import NextLink from "next/link";
import { H3 } from "../ui/textTypes";
import * as s from "./portfolioGrid.styl";

export default function PortfolioImage({ img }) {
  return (
    <div css={{ position: "relative" }}>
      <div css={s.overlay}>
        <picture>
          <source
            media="(min-width:1024px)"
            srcset={`/portfolio/desktop/${img.name}`}
          />
          <source
            media="(min-width:426px)"
            srcset={`/portfolio/tablet/${img.name}`}
          />
          <img
            src={`/portfolio/mobile/${img.name}`}
            alt={img.name}
            css={{ width: "100%" }}
          />
        </picture>
      </div>
      {img.number && <div css={s.imgNumber}>{img.number}</div>}
      <div css={s.textContainer}>
        <H3 css={{ marginBottom: "4px" }}>{img.header}</H3>
        {img.date ? (
          <p css={{ margin: 0 }}>{img.date}</p>
        ) : (
          <NextLink href="/portfolio" passHref>
            <a css={{ color: "white", textDecoration: "none" }}>
              View All Projects
            </a>
          </NextLink>
        )}
      </div>
    </div>
  );
}
