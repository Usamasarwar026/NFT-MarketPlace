import Footer from "../../components/footer/Footer";
import Browser from "../../components/browser/Browser";
import Collection from "../../components/collection/Collection";
import Discover from "../../components/discover/Discover";
import HeroSection from "../../components/heroSection/HeroSection";
import MagicMushroom from "../../components/magicMushroom/MagicMushroom";
import Navbar from "../../components/navbar/Navbar";
import Work from "../../components/work/Work";
import JoinWork from "../../components/joinWork/JoinWork";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Collection />
      <Browser />
      <Discover />
      <MagicMushroom />
      <Work />
      <JoinWork />
      <Footer />
    </div>
  );
}
