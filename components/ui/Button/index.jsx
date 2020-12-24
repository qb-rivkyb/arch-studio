import Image from "next/image";
import colors from "../../../colors";

export default function Button({ children }) {
  return (
    <button
      css={{
        height: "72px",
        backgroundColor: colors.darkBlue,
        color: "white",
        border: "none",
        fontSize: "15px",
        textTransform: "capitalize",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "24px 32px",
        fontWeight: "bold",
        letterSpacing: ".04em",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: colors.darkGrey,
        },
        "&:active": {
          backgroundColor: colors.lightGrey,
        },
      }}
    >
      {children}
      <div css={{ marginLeft: "24px" }}>
        <Image
          src="/icons/icon-arrow-white.svg"
          alt="Picture of the author"
          width={24}
          height={18}
        />
      </div>
    </button>
  );
}
