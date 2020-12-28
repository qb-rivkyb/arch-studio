import Banner from "../components/Banner";
import Layout from "../components/Layout";
import SideText from "../components/Layout/Header/SideText";

export default function IndexPage() {
  return (
    <Layout>
      <SideText>Home</SideText>
      <Banner />
      <div>Welcome 👋 </div>
      <div>Link to About us</div>
      <div>Featured</div>
    </Layout>
  );
}
