import SideText from "../components/Layout/Header/SideText";
import Layout from "../components/Layout";
import OverlappingHero from "../components/OverlappingHero";
import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <Layout>
      <SideText>Contact</SideText>
      <OverlappingHero
        imageName="image-hero.jpg"
        page="contact"
        subHeaderText="Tell us about your project"
        paragraphText="We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!"
      />
      <ContactDetails />
      <div css={{ "@media (max-width: 426px)": { margin: "0 32px" } }}>
        <ContactForm />
      </div>
    </Layout>
  );
}
