import NextLink from "next/link";

export default function Link({ href, children, className }) {
  return (
    <NextLink href={href}>
      <a css={{ textDecoration: "none" }} className={className}>
        {children}
      </a>
    </NextLink>
  );
}
