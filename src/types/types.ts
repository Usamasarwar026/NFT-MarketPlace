export type NFTState = {
  nftdetail: NFTDetail | null;
  loading: boolean;
  error: boolean;
};

export type FetchNFTArgs = {
  contract: string;
  identifier: string;
};
export type CollectionState = {
  collections: CollectionType[] | [];
  loading: boolean;
  error: string | null;
};

export type CollectionType = {
  collection: string;
  name: string;
  description: string;
  image_url: string;
  banner_image_url: string;
  owner: string;
  safelist_status: string;
  category: string;
  is_disabled: false;
  is_nsfw: false;
  trait_offers_enabled: false;
  collection_offers_enabled: true;
  opensea_url: string;
  project_url: string;
  wiki_url: string;
  discord_url: string;
  telegram_url: string;
  twitter_username: string;
  instagram_username: string;
  contracts: [
    {
      address: string;
      chain: string;
    }
  ];
};

export type NFTDetail = {
  chain: string;
  address: string;
  identifier: string;
  description: string | null;
  image_url: string;
  collection: string;
  contract: string;
  creator: string;
  display_image_url: string;
  display_animation_url: string | null;
  metadata_url: string;
  name: string | null;
  opensea_url: string;
  token_standard: string;
  updated_at: string;
};

export type NftType = {
  identifier: string;
  collection: string;
  contract: string;
  token_standard: string;
  name: string;
  description: string;
  image_url: string;
  display_image_url: string;
  display_animation_url: string;
  metadata_url: string;
  opensea_url: string;
  updated_at: string;
  is_disabled: boolean;
  is_nsfw: boolean;
};

export type collectionSlugSlice = {
  singleCollection: NftType[] | null;
  loading: boolean;
  error: boolean | null;
};

export type browsercard = {
  item: {
    image: string;
    title: string;
  };
};

export type ButtonProps = {
  title?: string;
  icon?: React.ReactNode;
  className?: string;
  href?: string;
};

export type CollectionItem = {
  collection: string;
  image_url: string;
  collectionimage: string;
  collectionimg1: string;
  collectionimg2: string;
  number: number;
  name: string;
  user: string;
};

export type CollectionCard = {
  item: CollectionItem;
};

export type DiscoverCardItem = {
  item: {
    image_url?: string;
    collection: string;
    contract: string;
    identifier: string;
    title?: string;
    name?: string;
    price?: string;
    highestBid?: string;
    
  };
  disableNavigation?: boolean;
};

export type WorkCardProps = {
  item: {
    icon: string;
    title: string;
    description: string;
  };
};

export type TimeState = {
  hours: number;
  minutes: number;
  seconds: number;
};

export type TimerProps = {
  className?: string;
};

export type NFTParams = {
  marketplace: string;
  contract: string;
  identifier: string;
};
