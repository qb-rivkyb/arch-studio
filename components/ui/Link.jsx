import NextLink from "next/link";
import { useRouter } from "next/router";
import colors from "../../colors";

export default function Link({ href, children, activeClassName }) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <NextLink href={href}>
      <a
        css={{
          textDecoration: "none",
          display: "block",
          fontSize: "15px",
          color: colors.mediumGrey,
          fontWeight: "bold",
          cursor: "pointer",
          lineHeight: "25px",
          ":hover": {
            color: colors.darkBlue,
          },
        }}
        className={isActive && activeClassName}
      >
        {children}
      </a>
    </NextLink>
  );
}
