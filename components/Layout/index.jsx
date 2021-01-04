import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <div
        css={{
          maxWidth: "85%",
          margin: "0 auto",
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
