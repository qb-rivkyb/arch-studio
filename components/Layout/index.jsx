import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <div
        css={{
          maxWidth: "1440px",
          margin: "0 auto",
          position: "relative",
          "@media (max-width: 426px)": { maxWidth: "100%" },
        }}
      >
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
}
