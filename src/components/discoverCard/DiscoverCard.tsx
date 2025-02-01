import { Link } from "react-router-dom";
import { IMAGES } from "../../constant/images";
import { DiscoverCardItem } from "../../types/types";

function DiscoverCard({ item, disableNavigation }: DiscoverCardItem) {
  return (
    <>
      {!disableNavigation ? (
        <Link
          to={`/nft/${item?.collection}/${item?.contract}/${item?.identifier}`}
        >
          <div className="w-[315px] h-[402px] md:w-[325px] md:h-[468px] lg:w-[320px] lg:h-[468px] text-white">
            <div className="h-[238px] md:h-[295px] lg:h-[296px]">
              <img
                src={item?.image_url || IMAGES.NFT1}
                alt=""
                className="w-[315px] h-[238px] md:w-[325px]  md:h-[295px] lg:w-[330px] lg:h-[295px] rounded-tr-[20px] rounded-tl-[20px]"
              />
            </div>
            <div className="h-[164px] md:h-[173px] lg:h-[173px] bg-secondary flex flex-col justify-center items-center rounded-br-[20px] rounded-bl-[20px] ">
              <div className="w-[270px] h-[60px] ">
                <div className="font-[600px] text-[22px]">
                  {item?.title || "Distant Galaxy"}
                </div>
                <div className="flex gap-3 my-1">
                  <img
                    src={item?.image_url || IMAGES.NFTAVATAR1}
                    alt=""
                    className="h-[24px] w-[24px] rounded-full"
                  />
                  <span className="font-[400px] text-[16px]">
                    {item?.name?.slice(0, 26) || "MoonDancer".slice(0, 20)}
                  </span>
                </div>
              </div>
              <div className="w-[275px] lg:w-[270px] my-4 flex justify-between ">
                <div>
                  <div className="text-[#858584] font-[400px] text-[12px]">
                    price
                  </div>
                  <div className="font-[400px] text-[12px] lg:font-[600px] lg:text-[22px]">
                    1.63 ETH
                  </div>
                </div>
                <div>
                  <div className="text-[#858584] font-[400px] text-[12px]">
                    Highest Bid
                  </div>
                  <div className="font-[400px] text-[12px] lg:font-[600px] lg:text-[22px]">
                    0.33 wETH
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <div className="w-[315px] h-[402px] md:w-[325px] md:h-[468px] lg:w-[320px] lg:h-[468px] text-white">
          <div className="h-[238px] md:h-[295px] lg:h-[296px]">
            <img
              src={item?.image_url || IMAGES.NFT1}
              alt=""
              className="w-[315px] h-[238px] md:w-[325px]  md:h-[295px] lg:w-[330px] lg:h-[295px] rounded-tr-[20px] rounded-tl-[20px]"
            />
          </div>
          <div className="h-[164px] md:h-[173px] lg:h-[173px] bg-secondary flex flex-col justify-center items-center rounded-br-[20px] rounded-bl-[20px] ">
            <div className="w-[270px] h-[60px] ">
              <div className="font-[600px] text-[22px]">
                {item?.title || "Distant Galaxy"}
              </div>
              <div className="flex gap-3 my-1">
                <img
                  src={item?.image_url || IMAGES.NFTAVATAR1}
                  alt=""
                  className="h-[24px] w-[24px] rounded-full"
                />
                <span className="font-[400px] text-[16px]">
                  {item?.name?.slice(0, 26) || "MoonDancer".slice(0, 20)}
                </span>
              </div>
            </div>
            <div className="w-[275px] lg:w-[270px] my-4 flex justify-between ">
              <div>
                <div className="text-[#858584] font-[400px] text-[12px]">
                  price
                </div>
                <div className="font-[400px] text-[12px] lg:font-[600px] lg:text-[22px]">
                  1.63 ETH
                </div>
              </div>
              <div>
                <div className="text-[#858584] font-[400px] text-[12px]">
                  Highest Bid
                </div>
                <div className="font-[400px] text-[12px] lg:font-[600px] lg:text-[22px]">
                  0.33 wETH
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DiscoverCard;
