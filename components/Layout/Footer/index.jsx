import Image from "next/image";
import Link from "../../ui/Link";
import Button from "../../ui/Button";
import * as s from "./footer.styl.js";

export default function Footer() {
  return (
    <>
      <div css={s.container}>
        <div css={s.logoContainer}>
          <Image src="/logo-white.svg" alt="logo" width="58" height="24" />
        </div>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/portfolio">
          <Button>see our portfolio</Button>
        </Link>
      </div>
    </>
  );
}
