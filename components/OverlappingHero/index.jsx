import Image from "next/image";
import { H2, LargeGreyText, P } from "../ui/textTypes";
import * as s from "./overlappinghero.styl";

export default function OverlappingHero({
  imageUrl,
  height,
  width,
  headerText,
  subHeaderText,
  paragraphText,
}) {
  return (
    <div css={s.container}>
      <div>
        <Image src={imageUrl} height={height} width={width} />
      </div>
      <div css={s.mainTextContainer}>
        <LargeGreyText
          css={{
            marginBottom: "-115px",
            "@media (max-width: 1100px)": { marginBottom: "-65px" },
            "@media (max-width: 600px) ": { display: "none" },
          }}
        >
          {headerText}
        </LargeGreyText>
        <div css={s.subTextContainer}>
          <H2 css={{ "@media (max-width: 600px) ": { fontSize: "40px" } }}>
            {subHeaderText}
          </H2>
          <P css={{ margin: 0 }}>{paragraphText}</P>
        </div>
      </div>
    </div>
  );
}
