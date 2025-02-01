import { IoEyeOutline } from "react-icons/io5";
import Button from "../button/Button";
import { IMAGES } from "../../constant/images";
import Timer from "../timer/Timer";

function MagicMushroom() {
  return (
    <div className="h-[590px] md:h-[630px] lg:h-[640px] ">
      <div className="bg-gradient-to-b from-[#A259FF00] to-[#A259FF] h-[640px] relative flex justify-center items-end ]">
        <img
          src={IMAGES.MUSHROOM}
          alt="Mushroom"
          className="h-[640px] w-full object-cover absolute mix-blend-lighten"
        />
        <div className="flex flex-col px-5  md:flex-row lg:flex-row justify-between items-end mb-[60px] text-white w-[315px] h-[430px] md:w-[670px] md:h-[210px] lg:w-[1050px] lg:h-[220px]">
          <div className="py-10 md:p-0 lg:p-0 flex flex-col justify-between h-[180px]">
            <div className="flex justify-start  p-2 bg-secondary rounded-[20px] w-[151px] items-center gap-3">
              <div>
                <img
                  src={IMAGES.MUSHROOM}
                  alt="Shroomie"
                  className="w-[24px] h-[24px] rounded-full"
                />
              </div>
              <div>
                <span className="mt-2 font-bold">Shroomie</span>
              </div>
            </div>

            <div>
              <h1 className="text-4xl font-bold">Magic Mushrooms</h1>
            </div>
            <div className="hidden md:block lg:block">
              <Button
                title="See NFT"
                icon={<IoEyeOutline size={20} color="#A259FF" />}
                className="text-black bg-white  rounded-[10px] w-[198px] h-[60px] flex justify-center"
              />
            </div>
          </div>

          <Timer className=" w-[315px] h-[144px] md:w-[295px] md:h-[144px] lg:w-[295px] lg:h-[144px] p-8 bg-black rounded-[20px] md:order-2 lg:order-2 md:self-end lg:self-end" />

          <div className=" w-[315px] flex justify-center md:hidden lg:hidden">
            <Button
              title="See NFT"
              icon={<IoEyeOutline size={20} color="#A259FF" />}
              className="text-black bg-white  rounded-[10px] w-[315px] h-[60px] flex justify-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MagicMushroom;
