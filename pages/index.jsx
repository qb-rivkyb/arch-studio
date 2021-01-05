import Banner from "../components/Banner";
import MobileBanner from "../components/Banner/MobileBanner";
import TabletBanner from "../components/Banner/TabletBanner";
import Layout from "../components/Layout";
import SideText from "../components/Layout/Header/SideText";
import Welcome from "../components/Welcome";

export default function IndexPage() {
  return (
    <Layout>
      <SideText>Home</SideText>
      <Banner />
      <MobileBanner />
      <TabletBanner />
      <Welcome />
      <div>Link to About us</div>
      <div>Featured</div>
    </Layout>
  );
}
