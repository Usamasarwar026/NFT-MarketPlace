import searchbar from "../../assets/icon/MagnifyingGlass.png";
function SecondHero() {
  return (
    <>
      <div className="h-[263px] md:h-[288px] text-white flex justify-center items-center ">
        <div className="w-[315px] h-[183px] md:w-[680px] md:h-[168px] flex flex-col gap-[30px] lg:w-[1000px] lg:h-[191px] ">
          <div className="h-[93px] md:h-[78px] lg:h-[101px]">
            <h1 className="font-[600px] mb-2 leading-10 text-[28px] md:text-[38px] md:leading-[46px] lg:text-[51px] lg:leading-[56px] ">
              [category]
            </h1>
            <p className="font-[400px] text-[16px] leading-[22.4px]  lg:text-[22px] lg:leading-[35px] ">
              Browse through more than 50k NFTs on the NFT Marketplace.
            </p>
          </div>
          <div className="h-[60px] flex rounded-[20px] w-[315px] md:w-[680px] border border-gray-700 lg:w-[1000px] ">
            <input
              placeholder="Search your favourite NFTs"
              type="text"
              name="searchbar"
              id="searchbar"
              className="outline-none border-none rounded-[20px] px-5 bg-transparent text-white w-[315px] md:w-[680px] lg:w-[1000px]"
            />
            <img
              src={searchbar}
              alt=""
              className="h-[24px] w-[24px] relative top-4 right-5"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondHero;
