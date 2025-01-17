import { Link } from "react-router-dom";

function Rank() {
  return (
    <>
      <div className="h-[153px] md:h-[248px] lg:h-[271px] text-white flex justify-center items-center">
        <div className="w-[315px] h-[93px] md:w-[690px] md:h-[88px] lg:w-[1000px] lg:h-[111px] ">
          <div className="font-[600px] text-[28px] md:text-[38px] lg:text-[51px]">
            Top Creators
          </div>
          <div className="font-[400px] text-[16px] lg:text-[22px]">
            Check out top ranking NFT artists on the NFT Marketplace.
          </div>
        </div>
      </div>

      <div className="h-[60px] flex justify-center">
        <div className="w-[315px] md:w-[680px] lg:w-[1000px] flex justify-evenly items-center">
          {/* Today */}
          <Link
            to="/today"
            className="text-white font-semibold text-[16px] lg:text-[22px]"
          >
            <span className="block md:hidden">1d</span>
            <span className="hidden md:block">Today</span>
          </Link>

          {/* This Week */}
          <Link
            to="#"
            className="text-[#858584] font-semibold text-[16px] lg:text-[22px]"
          >
            <span className="block md:hidden">7d</span>
            <span className="hidden md:block">This Week</span>
          </Link>

          {/* This Month */}
          <Link
            to="#"
            className="text-[#858584] font-semibold text-[16px] lg:text-[22px]"
          >
            <span className="block md:hidden">30d</span>
            <span className="hidden md:block">This Month</span>
          </Link>

          {/* All Time */}
          <Link
            to="#"
            className="text-[#858584] font-semibold text-[16px] lg:text-[22px]"
          >
            <span>All Time</span>
          </Link>
        </div>
      </div>
      {/* ----------ranking------------------- */}
      {/* <div className="h-[2260px]">
        <div className="w-[1000px]">
          <div className="lg:h-[46px]">
            <div>

            </div>
            <div>

            </div>
          </div>

        </div>

      </div> */}



    </>
  )
}

export default Rank
