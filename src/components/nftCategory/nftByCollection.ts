import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchSingleCollection } from "../../store/slices/collectionSlugSlice";
export function nftByCollection() {
    const { collection_slug } = useParams<{ collection_slug: string }>(); // Get slug from route params
  const dispatch = useAppDispatch();

  const { singleCollection, loading, error } = useAppSelector(
    (state) => state.nftByCollection
  );
  const data = Array.isArray(singleCollection) ? singleCollection : [];

  // Fetch data on component mount or slug change
  useEffect(() => {
    if (collection_slug) {
      dispatch(fetchSingleCollection({ collection_slug :collection_slug || "azukielementals" }));
    }
  }, [collection_slug, dispatch]);

  return {data, loading, error}
}

