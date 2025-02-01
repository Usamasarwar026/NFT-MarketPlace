
import Button from "../button/Button";
import mask from "../../assets/icon/Metamask.png";
import wallet from "../../assets/icon/WalletConnect.png";
import coin from "../../assets/icon/Coinbase.png";
import { IMAGES } from "../../constant/images";
function ConnectWallet() {
  return (
    <>
      <div className="h-[662px] md:h-[530px] lg:h-[602px] md:flex md:justify-between lg:justify-between md:gap-4 lg:gap-5">
        <div className="h-[232px] md:w-[397px] md:h-full lg:w-[610px] lg:h-full">
          <img
            src={IMAGES.ACCOUNTPIC}
            alt=""
            className="h-[232px] w-full md:h-full md:w-[397px] lg:w-[610px] lg:h-full object-cover"
          />
        </div>
        <div className=" w-[315px] h-[430px] mx-auto md:w-[397px] md:h-full lg:w-[651px] lg:h-full flex flex-col md:justify-center gap-10 ">
          <div className="w-[315px] h-[110px] md:w-[325px] lg:w-[420px] lg:h-[164px]">
            <div className="font-[600px] text-[38px] lg:text-[51px] py-5 text-white">
              Connect Wallet
            </div>
            <div className="font-[400px] text-[16px] lg:text-[22px] text-white">
              Choose a wallet you want to connect. There are several wallet
              providers.
            </div>
          </div>

          <div className="w-[320px] h-[220px] md:w-[325px] md:h-[305px] lg:w-[320px] lg:h-[305px] flex flex-col gap-10 pt-8">
            <div className="flex flex-col gap-5">
              <div className="relative w-[320px]">
                <img
                  src={mask}
                  alt=""
                  className="absolute top-1/2 left-10 transform -translate-y-1/2"
                />
                <Button
                  title="Metamask"
                  className="w-full text-white bg-[#3B3B3B] border border-primary flex justify-center items-center h-[46px] rounded-full font-[600px] text-[22px]"
                />
              </div>
              <div className="relative w-[320px]">
                <img
                  src={wallet}
                  alt=""
                  className="absolute top-1/2 left-10 transform -translate-y-1/2"
                />
                <Button
                  title="Wallet Connect"
                  className="w-full text-white bg-[#3B3B3B] border border-primary flex justify-center items-center h-[46px] rounded-full font-[600px] text-[22px]"
                />
              </div>
              <div className="relative w-[320px]">
                <img
                  src={coin}
                  alt=""
                  className="absolute top-1/2 left-10 transform -translate-y-1/2"
                />
                <Button
                  title="Coinbase"
                  className="w-full text-white bg-[#3B3B3B] border border-primary flex justify-center items-center h-[46px] rounded-full font-[600px] text-[22px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConnectWallet;
