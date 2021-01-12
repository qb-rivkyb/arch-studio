import Layout from "../components/Layout";
import SideText from "../components/Layout/Header/SideText";
import PortfolioGrid from "../components/PortfolioGrid";

export default function Portfolio() {
  return (
    <Layout>
      <SideText>Portfolio</SideText>
      <PortfolioGrid imgs={images} />
    </Layout>
  );
}

const images = [
  {
    name: "image-seraph.jpg",
    header: "Seraph Station",
    date: "April 2015",
  },
  {
    name: "image-eebox.jpg",
    header: "Eebox Building",
    date: "August 2017",
  },
  {
    name: "image-federal.jpg",
    header: "Federal II Tower",
    date: "March 2017",
  },
  {
    name: "image-del-sol.jpg",
    header: "Project Del Sol",
    date: "January 2016",
  },
  {
    name: "image-prototype.jpg",
    header: "Le Prototype",
    date: "April 2015",
  },
  {
    name: "image-228b.jpg",
    header: "228B Tower",
    date: "April 2015",
  },
  {
    name: "image-edelweiss.jpg",
    header: "Grand Edelweiss Hotel",
    date: "April 2015",
  },
  {
    name: "image-netcry.jpg",
    header: "Netcry Tower",
    date: "April 2015",
  },
  {
    name: "image-hypers.jpg",
    header: "Hypers",
    date: "April 2015",
  },
  {
    name: "image-sxiv.jpg",
    header: "SXIV Tower",
    date: "April 2015",
  },
  {
    name: "image-trinity.jpg",
    header: "Trinity Bank Tower",
    date: "April 2015",
  },
  {
    name: "image-paramour.jpg",
    header: "Project Paramour",
    date: "April 2015",
  },
];
