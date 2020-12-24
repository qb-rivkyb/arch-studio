import NextLink from "next/link";
import { useRouter } from "next/router";

export default function Link({ href, children, className, activeClassName }) {
  const router = useRouter();
  const isActive = router.pathname === href;

  const classNames = isActive ? `${className} ${activeClassName}` : className;

  return (
    <NextLink href={href}>
      <a css={{ textDecoration: "none" }} className={classNames}>
        {children}
      </a>
    </NextLink>
  );
}
