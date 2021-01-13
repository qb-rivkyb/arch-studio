import { H2, LargeGreyText, P } from "../ui/textTypes";
import * as s from "./overlappinghero.styl";

export default function OverlappingHero({
  imageName,
  page,
  subHeaderText,
  paragraphText,
}) {
  return (
    <div css={s.container}>
      <div
        css={{
          background: `url(/${page}/mobile/${imageName}) no-repeat`,
          height: "240px",
          "@media (min-width: 426px)": {
            background: `url(/${page}/tablet/${imageName}) no-repeat`,
            height: "720px",
          },
          "@media (min-width: 1024px)": {
            background: `url(/${page}/desktop/${imageName}) no-repeat`,
            height: "720px",
          },
        }}
      ></div>
      <div css={s.mainTextContainer}>
        <LargeGreyText
          css={{
            textTransform: "capitalize",
            display: "none",

            "@media (min-width: 768px) ": {
              display: "block",
              marginBottom: "-65px",
            },
            "@media (min-width: 1024px) ": {
              position: "absolute",
              top: "-100px",
              fontSize: "180px",
              top: "-65px",
              right: "-45px",
            },
          }}
        >
          {page}
        </LargeGreyText>
        <div css={s.subTextContainer}>
          <H2>{subHeaderText}</H2>
          <P css={{ margin: 0 }}>{paragraphText}</P>
        </div>
      </div>
    </div>
  );
}
