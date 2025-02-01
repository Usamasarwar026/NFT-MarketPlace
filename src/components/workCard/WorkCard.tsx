import { WorkCardProps } from "../../types/types";

function WorkCard(props: WorkCardProps) {
  const { item } = props;
  return (
    
      <div className="flex flex-row md:flex-col lg:flex-col p-2 md:p-4 lg:p-4 justify-center items-center w-[315px] h-[157px] md:w-[210px] md:h-[337px] lg:w-[320px] lg:h-[439px] text-white gap-[20px] bg-secondary rounded-[20px]">
        <div className="h-[100px] w-[100px] md:w-[160px] md:h[160px] lg:w-[250px] lg:h-[250px] flex justify-center items-center">
          <img src={item.icon} alt="" className="object-contain max-h-full" />
        </div>
        <div className="w-[155px] h-[117px] md:w-[170px] md:h-[117px] lg:w-[270px] lg:h-[129px] md:gap-[10px] lg:gap-[10px] flex flex-col md:items-center lg:items-center ">
          <div className="font-[600px] text-[16px] lg:text-[22px]">
            {item.title}
          </div>
          <div className="font-[400px] text-[12px] lg:text-[16px] md:text-center lg:text-center md:px-5 lg:px-5">
            {item.description}
          </div>
        </div>
      </div>
    
  );
}

export default WorkCard;
