import { IMAGES } from "../../constant/images";
import Button from "../button/Button";
import { CiMail } from "react-icons/ci";
function JoinWork() {
  return (
    <div className="h-[645px] md:h-[480px] lg:h-[550px] flex justify-center items-center ">
      <div className="w-[315px] h-[565px] md:w-[690px] md:h-[360px]  lg:w-[1000px] lg:h-[430px]  md:bg-secondary lg:bg-secondary flex flex-col md:flex-row lg:flex-row justify-evenly items-center rounded-[20px]">
        <div>
          <img
            src={IMAGES.JOINWORKIMAGE}
            alt="WorkImage"
            className="w-[315px] h-[255px] md:w-[300px] md:h-[280px] lg:w-[425px] lg:h-[310px]"
          />
        </div>
        <div
          id="thirdportion"
          className="h-[280px] w-[315px] md:w-[300px] lg:w-[420px] "
        >
          <div className="text-[#ffffff] font-[600px] text-[28px] md:text-[28px] lg:text-[38px]">
            Join Our Weekly Digest
          </div>
          <div className="text-text py-4 font-[400px] text-[16px] lg:text-[22px]">
            Get exclusive promotions & updates straight to your inbox.
          </div>
          <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row w-full rounded py-2">
            <input
              type="email"
              placeholder="Enter your Email"
              className="px-6 outline-none rounded-[10px] md:w-[300px] h-[46px] lg:h-[auto] placeholder-black"
            />
            <div id="btn" className=" lg:relative right-10 ">
              <Button
                title="Subscribe"
                icon={<CiMail size={20} />}
                className="text-white bg-primary  rounded-[10px] w-[315px] h-[46px] lg:w-[211px] flex justify-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinWork;
