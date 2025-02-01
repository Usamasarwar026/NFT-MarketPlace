import { IMAGES } from "../constant/images";

export const BROWSER_DATA = [
  {
    title: "Art",
    image: IMAGES.ART,
  },
  {
    title: "Music",
    image: IMAGES.MUSIC,
  },
  {
    title: "Collectible",
    image: IMAGES.COLLECTIBLE,
  },
  {
    title: "Photography",
    image: IMAGES.PHOTOGRAPHY,
  },
  {
    title: "Utility",
    image: IMAGES.UTILITY,
  },
  {
    title: "Sport",
    image: IMAGES.SPORT,
  },
  {
    title: "Video",
    image: IMAGES.VIDEO,
  },
  {
    title: "Virtual Word",
    image: IMAGES.VIRTUALWORD,
  },
];

export const COLLECTION_DATA = [
  {
    collectionimage: IMAGES.COLLECTION1,
    collectionimg1: IMAGES.COLLECTIONIMG1,
    collectionimg2: IMAGES.COLLECTIONIMG2,
    number: 2050,
    icon: IMAGES.FOX,
    user: "MrFox",
  },
  {
    collectionimage: IMAGES.COLLECTION2,
    collectionimg1: IMAGES.COLLECTIONIMG3,
    collectionimg2: IMAGES.COLLECTIONIMG4,
    number: 2050,
    icon: IMAGES.SHROMIE,
    user: "Shroomie",
  },
  {
    collectionimage: IMAGES.COLLECTION3,
    collectionimg1: IMAGES.COLLECTIONIMG5,
    collectionimg2: IMAGES.COLLECTIONIMG6,
    number: 2050,
    icon: IMAGES.BEKIND,
    user: "BeKind2Robots",
  },
];

export const DISCOVER_DATA = [
  {
    image_url: IMAGES.NFT1,
    title: "Distant Galaxy",
    avator: IMAGES.NFTAVATAR1,
    name: "MoonDancer",
    className: "",
    collection: "galaxy_collection",
    contract: "0xabc12345",
    identifier: "123",
  },
  {
    image_url: IMAGES.NFT2,
    title: "Life On Edena",
    avator: IMAGES.NFTAVATAR2,
    name: "NebulaKid",
    className: "",
    collection: "edena_collection",
    contract: "0xdef67890",
    identifier: "456",
  },
  {
    image_url: IMAGES.NFT3,
    title: "AstroFiction",
    avator: IMAGES.NFTAVATAR3,
    name: "Spaceone",
    className: "md:hidden lg:block",
    collection: "astro_collection",
    contract: "0xghi11223",
    identifier: "789",
  },
];

export const WORK_DATA = [
  {
    icon: IMAGES.WORKICON1,
    title: "Setup Your wallet",
    description:
      "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
  },
  {
    icon: IMAGES.WORKICON2,
    title: "Create Collection",
    description:
      "Upload your work and setup your collection. Add a description, social links and floor price.",
  },
  {
    icon: IMAGES.WORKICON3,
    title: "Start Earning",
    description:
      "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
  },
];
