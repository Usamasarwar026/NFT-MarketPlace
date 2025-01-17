import { IMAGES } from "../../constant/images";
function HeroLeft() {
  return (
    <>
      <div className=" w-[300px] h-[315] md:w-[318px] md:h-[381px] lg:w-[500px] lg:h-[544px]">
        <div>
          <img src={IMAGES.HEROIMAGE} alt="" />
        </div>
        <div className=" p-5 rounded-bl-[20px] rounded-br-[20px] bg-[#3B3B3B]">
          <div>Space Walking</div>
          <div className="flex gap-3 mt-3">
            <img src={IMAGES.HEROICON} alt="" />
            <span>Animakid</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroLeft;
