import { Link } from "react-router-dom";
import { PiDiscordLogoLight } from "react-icons/pi";
import { SlSocialYoutube } from "react-icons/sl";
import { CiInstagram, CiTwitter } from "react-icons/ci";
import Button from "../button/Button";
import { AiOutlineUser } from "react-icons/ai";
import { IMAGES } from "../../constant/images";

export default function Footer() {
  return (
    <div className="bg-secondary w-full h-[776px] md:h-[703px] lg:h-[353px] flex  justify-center items-center">
      <div className="">
        <div className=" flex flex-col w-[315px] h-[633px] md:w-[690px] md:h-[541px] gap-8 lg:flex-row item-center justify-center lg:w-[1000px] lg:h-[200px] ">
          <div className=" w-[315px] h-[185px] md:w-full md:h-[163px] lg:w-[400px]">
            <div>
              <Link to={"/"}>
                <img
                  alt="Your Company"
                  src={IMAGES.LOGO}
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            <div className="w-[230px] md:w-full text-text py-2 font-[400px] text-[16px]">
              NFT marketplace UI created with Anima for Figma.
            </div>
            <div>
              <div className="text-text py-2 font-[400px] text-[16px]">
                Join Our Community
              </div>
              <div className="flex gap-2 text-text">
                <PiDiscordLogoLight size={32} />
                <SlSocialYoutube size={32} />
                <CiTwitter size={32} />
                <CiInstagram size={32} />
              </div>
            </div>
          </div>

          <div className="w-[315px] h-[161px] lg:w-[310px] md:h-[161px] md:w-full ">
            <div className="text-[#ffffff] pb-3 font-bold text-[22px]">
              Explore
            </div>
            <div className="text-text py-2 font-[400px] text-[16px]">
              Marketplace
            </div>
            <div className="text-text py-2 font-[400px] text-[16px]">
              Ranking
            </div>
            <div className="text-text py-2 font-[400px] text-[16px]">
              Connect a Wallet
            </div>
          </div>

          <div className="h-[227px]  md:h-[157px] md:w-full  lg:w-[420px]">
            <div className="text-[#ffffff] font-bold text-[22px]">
              Join Our Weekly Digest
            </div>
            <div className="text-text py-4 font-[400px] text-[16px]">
              Get exclusive promotions & updates straight to your inbox.
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row w-full rounded py-2 gap-3 md:gap-0 lg:gap-0 ">
              <input
                type="email"
                placeholder="Enter your Email"
                className="px-6 outline-none rounded-[10px]  h-[46px] md:h-auto lg:h-auto lg:w-[230px] placeholder-black"
              />
              <div className="md:relative lg:relative right-10 ">
                <Button
                  title="Subscribe"
                  icon={<AiOutlineUser size={20} />}
                  className="text-white bg-primary  rounded-[10px] w-[315px] h-[46px] md:w-[179px] lg:w-[211px] flex justify-center"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" border-t-2 mt-5 border-[#858584]">
          <div className="mt-6 md:mt-2 text-text w-full">
            Ⓒ NFT Market. Use this template freely.
          </div>
        </div>
      </div>
    </div>
  );
}
