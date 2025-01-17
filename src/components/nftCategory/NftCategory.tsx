import { useState, useEffect } from "react";
import DiscoverCard from "../discoverCard/DiscoverCard"; 
import Loader from "../loader/Loader";
import { nftByCollection } from "./nftByCollection";

export default function NftCategory() {
  const { data, loading, error } = nftByCollection();
  
  const [visibleItems, setVisibleItems] = useState(12);
  
  const handleResize = () => {
    if (window.innerWidth >= 1024) { 
      setVisibleItems(12);
    } else if (window.innerWidth >= 768) { 
      setVisibleItems(8);
    } else { 
      setVisibleItems(5);
    }
  };

  useEffect(() => {
    handleResize(); 
    window.addEventListener("resize", handleResize); 
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-[auto] md:h-[auto] lg:h-auto border-t-2 border-gray-700 text-white">
      <div className="h-[70px] bg-[#2B2B2B] flex justify-center items-end">
        <div className="h-[60px] w-[315px] font-[600px] text-[16px] leading-[22px] md:w-[680px] lg:w-[1000px] flex items-center justify-center border-b-[2px] border-[#858584] gap-3">
          NFT
          <span className="hidden md:block md:text-center md:w-[50px] md:h-[32px] md:rounded-[20px] md:bg-[#858584] lg:block lg:text-center p-1 lg:w-[50px] lg:h-[32px] lg:rounded-[20px] lg:bg-[#858584]">
            {data.length}
          </span>
        </div>
      </div>
      
      <div className="h-[auto] md:h-[auto] lg:h-auto flex justify-center items-center my-[50px]">
        <div className="w-[315px] h-auto md:h-auto flex flex-col md:flex-row md:flex-wrap lg:flex-row md:w-[680px] gap-5 lg:w-[1060px] justify-center">
          {loading && <Loader />}
          {error && (
            <div className="flex justify-center items-center h-screen">
              <p className="text-red-500 text-lg">{error}</p>
            </div>
          )}
          
          {!loading &&
            !error &&
            data.slice(0, visibleItems).map((item: any, index: number) => (
              <div key={item.id || index} className="flex-shrink-0">
                <DiscoverCard item={item} />
              </div>
            ))}
        </div>
      </div>
      
      {/* Show More / Show Less Button */}
      <div className="flex justify-center my-4">
        {visibleItems < data.length ? (
          <button
            onClick={() => setVisibleItems(visibleItems + (window.innerWidth >= 1024 ? 12 : window.innerWidth >= 768 ? 8 : 5))}
            className="px-4 py-2 bg-[#3B3B3B] text-white rounded-md hover:bg-[#858584] transition"
          >
            Show More
          </button>
        ) : (
          <button
            onClick={() => setVisibleItems(window.innerWidth >= 1024 ? 12 : window.innerWidth >= 768 ? 8 : 5)}
            className="px-4 py-2 bg-[#3B3B3B] text-white rounded-md hover:bg-[#858584] transition"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
}
