import { browsercard } from "../../types/types";

function BrowserCard({ item }: browsercard) {
  return (
    <div className="w-[147.5px] h-[209px] md:w-[150px] lg:w-[240px] lg:h-[316px] text-white ">
      <div className=" md:h-[142px] lg:h-[240px] ">
        <img
          src={item.image}
          alt="pic"
          className=" rounded-tr-[20px] rounded-tl-[20px]"
        />
      </div>
      <div className="md:h-[67px] lg:h-[76px] md:text-[16px] lg:text-[22px] font-[600px] px-[25px] py-[20px] bg-secondary rounded-br-[20px] rounded-bl-[20px] ">
        {item.title}
      </div>
    </div>
  );
}

export default BrowserCard;
