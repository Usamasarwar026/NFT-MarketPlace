import { IMAGES } from "../../constant/images";
import WorkCard from "../workCard/WorkCard";

function Work() {
  const WorkData = [
    {
      icon: IMAGES.WORKICON1,
      title: "Setup Your wallet",
      description:
        "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    },
    {
      icon: IMAGES.WORKICON2,
      title: "Create Collection",
      description:
        "Upload your work and setup your collection. Add a description, social links and floor price.",
    },
    {
      icon: IMAGES.WORKICON3,
      title: "Start Earning",
      description:
        "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    },
  ];
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
          {WorkData.map((item, index) => {
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
