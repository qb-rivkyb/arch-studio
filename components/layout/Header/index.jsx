import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import * as s from "./header.styl.js";

export default function Header() {
  const router = useRouter();
  return (
    <>
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="logo"
          width="97"
          height="40"
          css={{ cursor: "pointer" }}
        />
      </Link>
      <div css={s.navigation}>
        <Link href="/portfolio">
          <span
            css={{ color: "red" }}
            className={router.asPath === "/portfolio" ? "active" : ""}
          >
            Portfolio
          </span>
        </Link>
        <Link href="/about">
          <span
            css={s.navItem}
            className={router.asPath === "/about" ? "active" : ""}
          >
            About Us
          </span>
        </Link>
        <Link href="/contact">
          <span
            css={s.navItem}
            className={router.asPath === "/contact" ? "active" : ""}
          >
            Contact
          </span>
        </Link>
      </div>
    </>
  );
}
