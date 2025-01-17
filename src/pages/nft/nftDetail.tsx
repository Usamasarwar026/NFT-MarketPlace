import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchNFT } from "../../store/slices/nftSlice";
import { useEffect } from "react";


export function nftDetail() {
    const { marketplace, contract, identifier } = useParams<{
        marketplace: string;
        contract: string;
        identifier: string;
      }>();
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
  return{nftdetail, loading, error}
}


