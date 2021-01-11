import Arrow from "../../../public/icons/icon-arrow-white.jsx";
import * as s from "./arrowButton.styl";

export default function ArrowButton({ children, className }) {
  return (
    <div css={s.button} className={className}>
      {children}
      <div css={{ marginLeft: "24px" }}>
        <Arrow width={24} height={18} />
      </div>
    </div>
  );
}
