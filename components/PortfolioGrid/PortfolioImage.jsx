import NextLink from "next/link";
import { H3 } from "../ui/textTypes";

export default function PortfolioImage({ img }) {
  return (
    <div
      css={{
        background: `url(${`/portfolio/mobile/${img.name}`}) no-repeat`,
        backgroundSize: "cover",
        height: "240px",
        width: "100%",
        padding: "0 0 24px 24px",
        display: "flex",
        alignItems: "flex-end",
        margin: 0,
        "@media (min-width: 768px)": {
          // width: "573px",
          padding: "0 0 40px 40px",
          position: "relative",
          background: `url(${`/portfolio/tablet/${img.name}`}) no-repeat`,
          backgroundSize: "cover",
        },
        "@media (min-width: 1024px)": {
          // width: "350px",
          height: "560px",
          background: `url(${`/portfolio/desktop/${img.name}`}) no-repeat`,
          backgroundSize: "cover",
        },
      }}
    >
      {img.number && (
        <div
          css={{
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
          }}
        >
          {img.number}
        </div>
      )}
      <div>
        <H3 css={{ color: "white", marginBottom: "2px" }}>{img.header}</H3>
        {img.date ? (
          <p css={{ color: "white" }}>{img.date}</p>
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
