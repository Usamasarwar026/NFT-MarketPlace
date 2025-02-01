import { IMAGES } from "../../constant/images";
function HeroLeft() {
  return (
    <div className=" w-[300px] h-[315] md:w-[318px] md:h-[381px] lg:w-[500px] lg:h-[544px]">
      <div>
        <img src={IMAGES.HEROIMAGE} alt="HeroImage" />
      </div>
      <div className=" p-5 rounded-bl-[20px] rounded-br-[20px] bg-secondary">
        <div>Space Walking</div>
        <div className="flex gap-3 mt-3">
          <img src={IMAGES.HEROICON} alt="HeroIcon" />
          <span>Animakid</span>
        </div>
      </div>
    </div>
  );
}

export default HeroLeft;
