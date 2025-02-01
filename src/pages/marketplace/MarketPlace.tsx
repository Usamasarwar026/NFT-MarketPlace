import { useEffect, useState } from "react";
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
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <SecondHero />
          <NftCategory />
        </>
      )}
    </div>
  );
}

export default MarketPlace;
