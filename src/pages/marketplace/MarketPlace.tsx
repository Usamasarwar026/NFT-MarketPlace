import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import NftCategory from "../../components/nftCategory/NftCategory";
import SecondHero from "../../components/secondHero/SecondHero";
import Loader from "../../components/loader/Loader";

function MarketPlace() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  return (
    <>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            <SecondHero />
            <NftCategory />
            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default MarketPlace;
