import Image from "next/image";
import colors from "../../colors";
import { H3, P } from "../ui/textTypes";
import * as s from "./leaders.styl";

export default function Leader({ imageUrl, name, title }) {
  return (
    <div
      css={{
        display: "inline-flex",
        flexDirection: "column",
        marginBottom: "40px",
      }}
    >
      <div>
        <Image src={imageUrl} height="284" width="311" alt="leader-image" />
      </div>
      <H3 css={{ margin: "24px 0px 0px" }}>{name}</H3>
      <P
        css={{
          color: `${colors.darkBlue}`,
          opacity: ".75",
          margin: "4px 0px 8px",
        }}
      >
        {title}
      </P>
      <div css={{ "@media (min-width: 1100px)": { display: "none" } }}>
        <span css={{ marginRight: "25px" }}>
          <Image src="/icons/icon-linkedin.svg" height="32" width="32" />
        </span>
        <Image src="/icons/icon-twitter.svg" height="32" width="32" />
      </div>
    </div>
  );
}
