import ArrowButton from "../ui/ArrowButton";
import Link from "../ui/Link";
import { H2 } from "../ui/textTypes";

export default function AboutUs() {
  return (
    <>
      <div
        css={{
          backgroundImage: "url(/home/mobile/image-small-team.jpg)",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "560px",
          backgroundSize: "cover",
          position: "relative",
          display: "flex",
          alignItems: "center",
          paddingLeft: "32px",
          "@media (min-width: 768px)": {
            backgroundImage: "url(/home/tablet/image-small-team.jpg)",
            paddingLeft: "58px",
          },
          "@media (min-width: 1024px)": {
            backgroundImage: "url(/home/desktop/image-small-team.jpg)",
            paddingLeft: "190px",
          },

          "&:before": {
            content: '""',
            backgroundColor: "black",
            opacity: "0.5",
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          },
        }}
      >
        <div
          css={{
            zIndex: 2,
            position: "relative",
            maxWidth: "311px",
            "@media (min-width: 426px)": {
              maxWidth: "445px",
            },
          }}
        >
          <H2 css={{ color: "white" }}>Small team, big ideas</H2>
          <Link href="/about">
            <ArrowButton>About Us</ArrowButton>
          </Link>
        </div>
      </div>
    </>
  );
}
