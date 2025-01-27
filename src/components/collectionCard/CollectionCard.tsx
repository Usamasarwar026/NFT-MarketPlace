import { Link } from "react-router-dom";
import { type CollectionCard } from "../../types/types";

function CollectionCard({ item }: CollectionCard) {
  return (
    <>
      <Link to={`/marketplace/${item?.collection}`}>
        <div className="w-[320px] h-[525px] text-white  ">
          <div>
            <div>
              <img
                src={item?.image_url || item.collectionimage}
                alt="pic"
                className="w-full h-[315px] md:h-[330px] lg:h-[300px] object-cover rounded-[20px]"
              />
            </div>
            <div className="flex justify-between my-3 gap-2 ">
              <div>
                <img src={item.collectionimg1} alt="pic" />
              </div>
              <div>
                <img src={item.collectionimg2} alt="pic" />
              </div>
              <div className="w-[100px] h-[100px] bg-primary flex justify-center items-center text-[22px] rounded-[20px] font-bold">
                {item.number}+
              </div>
            </div>
          </div>
          <div>
            <div className="font-semibold text-[22px]">
              {item.name
                ? item.name.slice(0, 15) + (item.name.length > 15 ? "..." : "")
                : "NFT"}
            </div>
            <div className="flex gap-2 mt-2">
              <img
                src={item?.image_url}
                alt=""
                className="rounded-full w-[20px] h-[20px]"
              />
              <span className="font-[400px] text-[16px] "> {item.user}</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default CollectionCard;
