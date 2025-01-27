import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import accountpic from "../../assets/image/Image Placeholder (1).png";
import Button from "../button/Button";
import { CiLock } from "react-icons/ci";
function AccountSection() {
  return (
    <>
      <div className="h-[747px] md:h-[615px] lg:h-[658px] md:flex md:justify-between lg:justify-between md:gap-4 lg:gap-5">
        <div className="h-[232px] md:w-[397px] md:h-full lg:w-[610px] lg:h-full">
          <img
            src={accountpic}
            alt=""
            className="h-[232px] w-full md:h-full md:w-[397px] lg:w-[610px] lg:h-full object-cover"
          />
        </div>
        <div className=" w-[315px] h-[515px] mx-auto md:w-[397px] md:h-full lg:w-[651px] lg:h-full flex flex-col md:justify-center gap-10 ">
          <div className="md:w-[325px] lg:w-[450px] lg:h-[164px]">
            <div className="font-[600px] text-[38px] lg:text-[51px] py-5 text-white">
              Create account
            </div>
            <div className="font-[400px] text-[16px] lg:text-[22px] text-white">
              Welcome! enter your details and start creating, collecting and
              selling NFTs.
            </div>
          </div>

          <div className="w-[315px] md:w-[325px] md:h-[305px] lg:w-[330px] lg:h-[305px] flex flex-col gap-5 pt-2">
            <div className="flex flex-col gap-3">
              <div className="relative h-[46px] w-[315px]">
                <AiOutlineUser
                  size={20}
                  color="gray"
                  className="absolute top-1/2 left-4 transform -translate-y-1/2"
                />
                <input
                  type="text"
                  placeholder="Username"
                  className="h-full w-full rounded-full pl-12 placeholder-[#2B2B2B] outline-none"
                />
              </div>
              <div className="relative h-[46px] w-[315px]">
                <AiOutlineMail
                  size={20}
                  color="gray"
                  className="absolute top-1/2 left-4 transform -translate-y-1/2"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-full w-full rounded-full pl-12 placeholder-[#2B2B2B] outline-none"
                />
              </div>
              <div className="relative h-[46px] w-[315px]">
                <CiLock
                  size={20}
                  color="gray"
                  className="absolute top-1/2 left-4 transform -translate-y-1/2"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="h-full w-full rounded-full pl-12 placeholder-[#2B2B2B] outline-none"
                />
              </div>
              <div className="relative h-[46px] w-[315px]">
                <CiLock
                  size={20}
                  color="gray"
                  className="absolute top-1/2 left-4 transform -translate-y-1/2"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="h-full w-full rounded-full pl-12 placeholder-[#2B2B2B] outline-none"
                />
              </div>
            </div>
            <div className="w-[315px]">
              <Button
                href="/"
                title="Create Account"
                className="w-full text-white bg-primary flex justify-center items-center h-[46px] rounded-full font-[600px] text-[16px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountSection;
