import Button from "../button/Button";

import { IoRocketOutline } from "react-icons/io5";
import HeroLeft from "../heroLeft/HeroLeft";

function HeroSection() {
  return (
    <>
      <div className=" flex justify-center items-center h-[786px] md:h-[541px] lg:h-[650px] text-[#ffffff]">
        <div className=" border-green-600 h-[706px] w-[315px] flex flex-col md:flex-row lg:flex-row md:h-[381px] md:w-[690px] lg:h-[544px] lg:w-[1000px] gap-20">
          <div className=" w-[315px] h-[706px] md:w-[290px] gap-[30px] md:h-[381px] lg:w-[420px] lg:h-[544px]  ">
            <div className="text-2xl leading-[39px] md:text-4xl  md:leading-[45px]  lg:leading-[73px] lg:text-6xl font-semibold">
              Discover digital Art & Collect NFTs
            </div>
            <div className=" text-base md:text-base lg:text-2xl ">
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </div>
            <div className=" md:hidden lg:hideen my-7 flex justify-center items-center">
              <HeroLeft />
            </div>
            <div className="my-7 ">
              <Button
                href="/"
                title="Get Started"
                className="text-white bg-primary rounded-[10px] w-[315px] h-[60px] md:w-[224px] md:h-[60px] lg:w-[224px] lg:h-[60px] flex justify-center"
                icon={<IoRocketOutline size={20} />}
              />
            </div>
            <div className="flex gap-5 my-7">
              <div className="section1 w-[150px]">
                <div className="text-xl lg:text-2xl font-bold">240k+ </div>
                <div className="text-base lg:text-xl font-normal">
                  Total Sales
                </div>
              </div>
              <div className="section2 w-[150px]">
                <div className="text-xl lg:text-2xl font-bold">100K+ </div>
                <div className="text-base lg:text-xl font-normal">Actions</div>
              </div>
              <div className="section3 w-[150px]">
                <div className="text-xl lg:text-2xl font-bold">240k+ </div>
                <div className="text-base lg:text-xl font-normal">Artists</div>
              </div>
            </div>
          </div>

          <div className="hidden md:block lg:block md:w-[330px] lg:w-[500px] ">
            <HeroLeft />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
