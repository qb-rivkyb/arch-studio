import Layout from "../components/Layout";
import SideText from "../components/Layout/Header/SideText";
import Head from "next/head";

export default function IndexPage() {
  return (
    <>
      <Layout>
        <SideText>Home</SideText>
        <div>Slider 🙋‍♂️</div>
        <div>Welcome 👋 </div>
        <div>Link to About us</div>
        <div>Featured</div>
      </Layout>
    </>
  );
}
