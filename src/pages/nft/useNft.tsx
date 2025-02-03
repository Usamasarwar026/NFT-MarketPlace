import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { fetchNFT } from "../../store/slices/nftSlice";
import { useEffect } from "react";
import { NFTParams } from "../../types/types";

export function useNft() {
  const { marketplace, contract, identifier } = useParams<NFTParams>();
  const dispatch = useAppDispatch();
  const { nftdetail, loading, error } = useAppSelector((state) => state.nft);

  useEffect(() => {
    if (marketplace && contract && identifier) {
      dispatch(fetchNFT({ contract, identifier }));
    } else {
      console.error(
        "Missing required route parameters: collection, contract, or identifier"
      );
    }
  }, [marketplace, contract, identifier, dispatch]);
  return { nftdetail, loading, error };
}
