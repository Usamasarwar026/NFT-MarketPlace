import Browser from "../../components/browser/Browser";
import Collection from "../../components/collection/Collection";
import Discover from "../../components/discover/Discover";
import HeroSection from "../../components/heroSection/HeroSection";
import MagicMushroom from "../../components/magicMushroom/MagicMushroom";
import Work from "../../components/work/Work";
import JoinWork from "../../components/joinWork/JoinWork";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Collection />
      <Browser />
      <Discover />
      <MagicMushroom />
      <Work />
      <JoinWork />
    </div>
  );
}
