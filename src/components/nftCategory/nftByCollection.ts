import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { fetchSingleCollection } from "../../store/slices/collectionSlugSlice";
export function nftByCollection() {
  const { collection_slug } = useParams<{ collection_slug: string }>(); 
  const dispatch = useAppDispatch();

  const { singleCollection, loading, error } = useAppSelector(
    (state) => state.nftByCollection
  );
  const data = Array.isArray(singleCollection) ? singleCollection : [];

  useEffect(() => {
    if (collection_slug) {
      dispatch(
        fetchSingleCollection({
          collection_slug: collection_slug || "azukielementals",
        })
      );
    }
  }, [collection_slug, dispatch]);

  return { data, loading, error };
}
