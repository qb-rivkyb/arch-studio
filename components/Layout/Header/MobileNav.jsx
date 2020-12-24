import Link from "../../ui/Link";
import { LinkText } from "../../ui/textTypes";
import * as s from "./header.styl.js";

export default function MobileNav() {
  return (
    <>
      <div css={s.navItemsMobile}>
        <Link href="/portfolio">
          <LinkText css={s.navItemMobile}>Portfolio</LinkText>
        </Link>
        <Link href="/about">
          <LinkText css={s.navItemMobile}>About Us</LinkText>
        </Link>
        <Link href="/contact">
          <LinkText css={s.navItemMobile}>Contact</LinkText>
        </Link>
      </div>
    </>
  );
}
