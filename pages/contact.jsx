import SideText from "../components/Layout/Header/SideText";
import Layout from "../components/Layout";
import OverlappingHero from "../components/OverlappingHero";

export default function Contact() {
  return (
    <>
      <Layout>
        <SideText>Contact</SideText>
        <div css={{ "@media (max-width: 600px) ": { display: "none" } }}>
          <OverlappingHero
            imageUrl="/contact/desktop/image-hero.jpg"
            height="635px"
            width="720px"
            headerText="Contact"
            subHeaderText="Tell us about your project"
            paragraphText="We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!"
          />
        </div>
        <div css={{ "@media (min-width: 600px) ": { display: "none" } }}>
          <OverlappingHero
            imageUrl="/contact/mobile/image-hero.jpg"
            height="240px"
            width="375px"
            headerText="Contact"
            subHeaderText="Tell us about your project"
            paragraphText="We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!"
          />
        </div>
        <div>overlapping hero</div>
        <div>overlapping hero</div>
        <div>overlapping hero</div>
        <div>overlapping hero</div>
        <div>overlapping hero</div>
        <div>overlapping hero</div>
        <div>overlapping hero</div>
        <div>overlapping hero</div>
        <div>overlapping hero</div>
        <div>overlapping hero</div>
        <div>overlapping hero</div>
        <div>overlapping hero</div>
        <div>overlapping hero</div>
        <div>overlapping hero</div>
        <div>overlapping hero</div>
        <div>overlapping hero</div>
        <div>overlapping hero</div>
        <div>overlapping hero</div>
        <div>overlapping hero</div>
        <div>overlapping hero</div>
        <div>overlapping hero</div>
        <div>overlapping hero</div>
        <div>overlapping hero</div>
        <div>overlapping hero</div>
        <div>overlapping hero</div>
        <div>overlapping hero</div>
        <div>contact details</div>
        <div>map</div>
        <div>contact form</div>
      </Layout>
    </>
  );
}
