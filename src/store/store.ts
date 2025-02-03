import { configureStore } from "@reduxjs/toolkit";
import collectionReducer from "./slices/collectionSlice";
import collectionSlugReducer from "./slices/collectionSlugSlice";

import nftSliceReducer from "./slices/nftSlice";

export const store = configureStore({
  reducer: {
    collection: collectionReducer,
    nftByCollection: collectionSlugReducer,
    nft: nftSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
