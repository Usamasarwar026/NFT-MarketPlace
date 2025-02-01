import { WORK_DATA } from "../../constant/constantData";
import WorkCard from "../workCard/WorkCard";

function Work() {
  return (
    <>
      <div className="h-[685px] md:h-[528px] lg:h-[738px] text-white flex flex-col justify-center items-center gap-10 mt-12 lg:m-0">
        <div className="w-[315px] h=[71px] md:w-[690px] md:h-[71px] lg:w-[1000px] lg:h-[91px] ">
          <div className="mb-1">
            <h1 className="font-[600px] text-[32px]">How it works</h1>
            <p className="font-[400px] text-[22px]">
              Find out how to get started
            </p>
          </div>
        </div>
        <div className="w-[315px] h-[494px] md:w-[690px] lg:w-[1000px] gap-[10px] md:gap-[20px] lg:gap-[20px] flex flex-col md:flex-row lg:flex-row">
          {WORK_DATA?.map((item, index) => {
            return (
              <div key={index}>
                <WorkCard item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Work;
