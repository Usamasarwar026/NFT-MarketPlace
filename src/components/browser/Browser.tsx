import BrowserCard from "../browserCard/BrowserCard";
import { BrowserData } from "./browserData";

function Browser() {
  return (
    <>
      <div className="flex justify-center items-center h-[1084px] md:h-[716px] lg:h-[928px] text-white gap-[60px]  ">
        <div className="flex flex-col justify-center items-center w-[1046px] ">
          <div className="gap-[10px] h-[46px] w-[315px] md:h-[39px] md:w-[690px] lg:h-[91px] lg:w-[1000px] my-10">
            <h1 className="text-[37px] font-[600px] ">Browse Categories</h1>
          </div>
          <div className="flex flex-wrap w-[315px] md:w-[690px] lg:w-[1000px] gap-[10px] justify-center items-center">
            {BrowserData.map((item, index) => {
              return (
                <div key={index}>
                  <BrowserCard item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Browser;
