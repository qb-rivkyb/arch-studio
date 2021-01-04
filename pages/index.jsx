import Banner from "../components/Banner";
import Layout from "../components/Layout";
import SideText from "../components/Layout/Header/SideText";
import Welcome from "../components/Welcome";

export default function IndexPage() {
  return (
    <Layout>
      <SideText>Home</SideText>
      <Banner />
      <Welcome />
      <div>Link to About us</div>
      <div>Featured</div>
    </Layout>
  );
}
