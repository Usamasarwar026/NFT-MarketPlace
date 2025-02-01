import CollectionCard from "../collectionCard/CollectionCard";
import { useEffect, useState } from "react";
import { fetchCollection } from "../../store/slices/collectionSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import Loader from "../loader/Loader";
import { COLLECTION_DATA } from "../../constant/constantData";

function Collection() {
  const [cardsToShow, setCardsToShow] = useState<number>(1);
  const dispatch = useAppDispatch();
  const { collections, loading, error } = useAppSelector(
    (state) => state.collection
  );

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);

    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  useEffect(() => {
    dispatch(fetchCollection());
  }, [dispatch]);

  const mergedData = collections?.map((item, index) => ({
    ...item,
    ...(COLLECTION_DATA[index % COLLECTION_DATA.length] || {}),
  }));

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="flex flex-col w-full h-[718px] md:h-[716px] lg:h-[836px] text-white gap-[60px] items-center justify-center ">
        <div className="flex-col md:w-[690px] lg:w-[1000px] justify-center items-center ">
          <div className="gap-[10px] w-[315px] md:w-[690px] lg:h-[91px] lg:w-[1000px] my-10 ">
            <h1 className="text-[38px] font-[600px] ">Trending Collection</h1>
            <p className="text-[22px] font-[400px] ">
              Checkout our weekly updated trending collection.
            </p>
          </div>

          <div className="flex gap-[2px]">
            {mergedData
              ?.filter((item) => item.image_url && item.name)
              ?.slice(0, cardsToShow)
              ?.map((item, index) => (
                <div
                  key={item.collection || index}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
                >
                  <CollectionCard item={item} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Collection;
