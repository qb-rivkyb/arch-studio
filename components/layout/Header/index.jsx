import Link from "../../ui/Link";
import Image from "next/image";
import { useRouter } from "next/router";
import { LinkText } from "../../ui/textTypes";
import * as s from "./header.styl.js";

export default function Header() {
  const router = useRouter();
  return (
    <>
      <div css={s.navigation}>
        <Link href="/">
          <span css={s.logo}>
            <Image src="/logo.svg" alt="logo" width="97" height="40" />
          </span>
        </Link>
        <div css={s.navItems}>
          <Link href="/portfolio">
            <LinkText
              css={[
                s.navItem,
                router.pathname === "/portfolio" && s.linkActiveStyles,
              ]}
            >
              Portfolio
            </LinkText>
          </Link>
          <Link href="/about">
            <LinkText
              css={[
                s.navItem,
                router.pathname === "/about" && s.linkActiveStyles,
              ]}
            >
              About Us
            </LinkText>
          </Link>
          <Link href="/contact">
            <LinkText
              css={[
                s.navItem,
                router.pathname === "/contact" && s.linkActiveStyles,
              ]}
            >
              Contact
            </LinkText>
          </Link>
        </div>
      </div>
    </>
  );
}
