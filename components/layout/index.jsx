import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <div css={{ maxWidth: "85%", margin: "0 auto" }}>
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
}
