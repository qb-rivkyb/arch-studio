import Layout from "../components/Layout";
import SideText from "../components/Layout/Header/SideText";
import Leaders from "../components/Leaders";

export default function AboutPage() {
  return (
    <Layout>
      <SideText>About Us</SideText>
      <div>overlapping hero</div>
      <div>flexbox with our heritage</div>
      <Leaders />
    </Layout>
  );
}
