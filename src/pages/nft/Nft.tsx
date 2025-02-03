import { CiGlobe } from "react-icons/ci";
import AuctionTime from "../../components/auctionTime/AuctionTime";
import { useNft } from "./useNft";
import Loader from "../../components/loader/Loader";
import { useEffect } from "react";
import { IMAGES } from "../../constant/images";

function Nft() {
  const { nftdetail, loading, error } = useNft();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {loading && <Loader />}
      {error && (
        <div className="flex justify-center items-center h-screen">
          <p className="text-red-500 text-lg">{error}</p>
        </div>
      )}
      {!loading && !error && nftdetail && (
        <>
          <div className="h-[500px] w-full">
            <img
              src={nftdetail?.display_image_url || IMAGES.HEROIMAGE2}
              alt=""
              className="h-full w-full object-cover object-top"
            />
          </div>

          <div className="h-auto md:h-auto lg:h-auto flex justify-center items-center my-[30px]">
            <div className="w-[315px] h-auto md:w-[690px] md:h-auto lg:w-[1000px] lg:h-auto flex flex-col md:flex-row lg:flex-row justify-between">
              <div className="md:w-[365px] lg:w-[605px] flex flex-col justify-center ">
                <div className="h-[71px] md:h-[78px]  lg:h-[101px]">
                  <div className="font-[600px] text-[28px] md:text-[38px] lg:text-[51px] text-white">
                    {nftdetail.name
                      ? nftdetail.name.slice(0, 15) +
                        (nftdetail.name.length > 15 ? "..." : "")
                      : "The Orbitians"}
                  </div>
                  <div className="font-[400px] md:text-[16px] lg:text-[22px] text-[#858584]">
                    Minted on {nftdetail?.updated_at?.split("T")[0]}
                  </div>
                </div>

                <AuctionTime className=" w-[315px] h-[234px]  p-8 bg-secondary rounded-[20px] text-white md:hidden lg:hidden flex flex-col justify-center mt-5 gap-3" />

                <div className="lg:h-[76px] mt-6 ">
                  <div className="md:font-[400px] md:text-[16px] lg:font-[700px] lg:text-[22px] text-[#858584]">
                    Created By
                  </div>
                  <div className="flex gap-3 ">
                    <img
                      src={nftdetail?.image_url || IMAGES.HEROIMAGE2}
                      className="w-[30px] h-[30px] mt-1 rounded-full"
                      alt=""
                    />
                    <span className="font-[400px] md:text-[16px] lg:text-[22px] text-white capitalize">
                      {nftdetail?.collection || "Moon Dancer"}
                    </span>
                  </div>
                </div>
                <div className="gap-7 py-5">
                  <div className="md:font-[400px] md:text-[16px] lg:font-[700px] lg:text-[22px] text-[#858584] pb-4">
                    Description
                  </div>
                  <div className="md:font-[400px] md:text-[16px] lg:font-[700px] lg:text-[22px] lg:h-auto text-white flex flex-col gap-10">
                    <p>
                      {nftdetail?.description ||
                        "The Orbitiansis a collection of 10,000 unique NFTs on the Ethereum blockchain"}
                    </p>
                  </div>
                  <div className="lg:h-[125px] flex flex-col gap-3 mt-3">
                    <div className="md:font-[400px] md:text-[16px] lg:font-[700px] lg:text-[22px] text-[#858584]">
                      Details
                    </div>
                    <div className="flex gap-3">
                      <CiGlobe color="#858584" size={32} />
                      <a
                        href={nftdetail?.opensea_url}
                        className="md:font-[400px] md:text-[16px] lg:font-[400px] lg:text-[22px] text-white"
                      >
                        View on Etherscan
                      </a>
                    </div>
                    <div className="flex gap-3">
                      <CiGlobe color="#858584" size={32} />
                      <span className="md:font-[400px] md:text-[16px] lg:font-[400px] lg:text-[22px] text-white">
                        View Original
                      </span>
                    </div>
                  </div>
                  <div className="md:h-[286px] lg:h-[97px]">
                    <div className="lg:font-[600px] lg:text-[22px] text-[#858584] py-4">
                      Tags
                    </div>
                    <div className="flex gap-3 flex-col lg:flex-row">
                      <div className="font-[600px] md:text-[16px] w-[150px] lg:text-[16px] text-white py-2 px-5 rounded-full bg-secondary flex justify-center">
                        Animation
                      </div>
                      <div className="font-[600px] md:text-[16px] w-[150px] lg:text-[16px] text-white py-2 px-5 rounded-full bg-secondary flex justify-center">
                        illustration
                      </div>
                      <div className="font-[600px] md:text-[16px] w-[110px] lg:text-[16px] text-white py-2 px-5 rounded-full bg-secondary flex justify-center">
                        Moon
                      </div>
                      <div className="font-[600px] md:text-[16px] w-[110px] lg:text-[16px] text-white py-2 px-5 rounded-full bg-secondary flex justify-center">
                        Moon
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <AuctionTime className="hidden md:w-[295px] md:h-[234px] lg:w-[295px] lg:h-[237px] p-8 bg-secondary rounded-[20px] text-white md:flex lg:flex flex-col gap-3 lg:mt-14" />
              </div>
            </div>
          </div>
        </>
      )}
      ;
    </div>
  );
}

export default Nft;
