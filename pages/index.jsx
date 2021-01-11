import Banner from "../components/Banner";
import MobileBanner from "../components/Banner/MobileBanner";
import TabletBanner from "../components/Banner/TabletBanner";
import Layout from "../components/Layout";
import SideText from "../components/Layout/Header/SideText";
import Welcome from "../components/Welcome";
import Featured from "../components/Featured";

export default function IndexPage() {
  return (
    <Layout>
      <SideText>Home</SideText>
      <Banner />
      <MobileBanner />
      <TabletBanner />
      <Welcome />
      <div>Link to About us</div>
      <Featured
        imgs={[
          { name: "image-del-sol.jpg", header: "Project Del Sol", number: 1 },
          { name: "image-228b.jpg", header: "228B Tower", number: 2 },
          { name: "image-prototype.jpg", header: "Le Prototype", number: 3 },
        ]}
      />
    </Layout>
  );
}
