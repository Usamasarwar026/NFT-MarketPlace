import { IoEyeOutline } from "react-icons/io5";
import Button from "../button/Button";
import DiscoverCard from "../discoverCard/DiscoverCard";
import { DiscoverData } from "./discoverData";

function Discover() {
  return (
    <>
      <div className="h-[1557px] md:h-[700px] lg:h-[780px] text-white flex flex-col justify-center items-center gap-10">
        <div className="md:w-[690px] md:h-[71px] lg:w-[1000px] lg:h-[91px] flex justify-between items-end">
          <div className="mb-1">
            <h1 className="font-[600px] text-[32px]">Discover More NFTs</h1>
            <p className="font-[400px] text-[22px]">
              Explore new trending NFTs
            </p>
          </div>
          <div className="hidden md:block lg:block">
            <Button
              href="/marketplace"
              title="See All"
              icon={<IoEyeOutline size={20} color="#A259FF" />}
              className="text-white bg-none border border-primary  rounded-[10px] md:w-[187px] md:h-[60px] lg:w-[187px] lg:h-[60px] flex justify-center"
            />
          </div>
        </div>
        <div className="flex-col md:flex-row lg:flex-row md:w-[690px] lg:w-[1000px] gap-[20px] flex">
          {DiscoverData.map((item, index) => {
            return (
              <div key={index} className={item.className}>
                <DiscoverCard item={item} />
              </div>
            );
          })}
        </div>
        <div className=" md:hidden lg:hidden">
          <Button
            title="See All"
            icon={<IoEyeOutline size={20} color="#A259FF" />}
            className="text-white bg-none border border-primary  rounded-[10px] w-[315px] h-[60px] flex justify-center"
          />
        </div>
      </div>
    </>
  );
}

export default Discover;
