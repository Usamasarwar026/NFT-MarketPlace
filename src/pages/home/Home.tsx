import Footer from "../../components/footer/Footer";
import Browser from "../../components/browser/Browser";
import Collection from "../../components/collection/Collection";
import Discover from "../../components/discover/Discover";
import HeroSection from "../../components/heroSection/HeroSection";
import MagicMushroom from "../../components/magicMushroom/MagicMushroom";
import Navbar from "../../components/navbar/Navbar";
import Work from "../../components/work/Work";
import JoinWork from "../../components/joinWork/JoinWork";
import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";


export default function Home() {

  const [loading, SetLoading] = useState(true);

  useEffect(
    () => {
      setTimeout(() => {
        SetLoading(false);
      }, 2000);
    }, []
  )
  return (
    <div >
      {loading ? (
        <Loader/>
      ):
      (
        <>
        <Navbar/>
       <HeroSection/>
       <Collection/>
      <Browser/>
      <Discover/>
      <MagicMushroom/>
      <Work/>
      <JoinWork/>
      <Footer/>
        </>
      )
      }
      

    </div>
  )
}
