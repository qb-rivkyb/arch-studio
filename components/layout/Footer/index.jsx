import Image from "next/image";
import Link from "next/link";
import { LinkText } from "../../ui/textTypes";
import * as s from "./footer.styl.js";

export default function Footer() {
  return (
    <div css={s.container}>
      <div css={s.logoContainer}>
        <Image src="/logo-white.svg" alt="logo" width="58" height="24" />
      </div>
      <Link passHref href="/portfolio">
        <LinkText css={{ paddingTop: "32px" }}>Portfolio</LinkText>
      </Link>
      <Link passHref href="/about">
        <LinkText css={{ paddingTop: "32px" }}>About Us</LinkText>
      </Link>
      <Link passHref href="/contact">
        <LinkText css={{ padding: "32px" }}>Contact</LinkText>
      </Link>
    </div>
  );
}
