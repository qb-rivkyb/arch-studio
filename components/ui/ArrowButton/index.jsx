import Image from "next/image";
import * as s from "./arrowButton.styl";

export default function ArrowButton({ children }) {
  return (
    <div css={s.button}>
      {children}
      <div css={{ marginLeft: "24px" }}>
        <Image
          src="/icons/icon-arrow-white.svg"
          alt="icon arrow"
          width={24}
          height={18}
        />
      </div>
    </div>
  );
}
