import Layout from "../components/layout/Layout";
import Head from "next/head";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>home</title>
      </Head>
      <Layout>
        <div>Slider 🙋‍♂️</div>
        <div>Welcome 👋 </div>
        <div>Link to About us</div>
        <div>Featured</div>
      </Layout>
    </>
  );
}
