import Layout from "../components/Layout";
import SideText from "../components/Layout/Header/SideText";
import Leaders from "../components/Leaders";
import OverlappingHero from "../components/OverlappingHero";

export default function AboutPage() {
  return (
    <Layout>
      <SideText>About Us</SideText>
      <div css={{ "@media (max-width: 600px) ": { display: "none" } }}>
        <OverlappingHero
          imageUrl="/about/desktop/image-hero.jpg"
          width="635px"
          height="720px"
          headerText="About"
          subHeaderText="Your team of professionals"
          paragraphText="Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings."
        />
      </div>
      <div css={{ "@media (min-width: 600px) ": { display: "none" } }}>
        <OverlappingHero
          imageUrl="/about/mobile/image-hero.jpg"
          width="375px"
          height="240px"
          headerText="About"
          subHeaderText="Your team of professionals"
          paragraphText="Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings."
        />
      </div>
      <div>flexbox with our heritage</div>
      <Leaders />
    </Layout>
  );
}
