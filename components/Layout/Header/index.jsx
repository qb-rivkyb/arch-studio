import { useState } from "react";
import Link from "../../ui/Link";
import Image from "next/image";
import { useRouter } from "next/router";
import { LinkText } from "../../ui/textTypes";
import * as s from "./header.styl.js";
import MobileNav from "./MobileNav";
import colors from "../../../colors";
import { ClassNames } from "@emotion/react";

export default function Header() {
  const router = useRouter();

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      <div css={s.navigation}>
        <Link href="/" css={s.logo}>
          <Image src="/logo.svg" alt="logo" width="97" height="40" />
        </Link>
        <div
          onClick={handleToggle}
          css={{ "@media (min-width: 425px)": { display: "none" } }}
        >
          {toggleMenu ? (
            <Image
              src="/icons/icon-close.svg"
              alt="close"
              width="20"
              height="21"
            />
          ) : (
            <Image
              src="/icons/icon-hamburger.svg"
              alt="burger"
              width="24"
              height="17"
            />
          )}
        </div>
        {toggleMenu && <MobileNav />}
        <div css={s.navItems}>
          <NavLink href="/portfolio">Portfolio</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
      </div>
    </>
  );
}

export function NavLink({ href, children }) {
  return (
    <ClassNames>
      {({ css }) => (
        <Link
          href={href}
          css={{
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
          activeClassName={css(s.linkActiveStyles)}
        >
          {children}
        </Link>
      )}
    </ClassNames>
  );
}
