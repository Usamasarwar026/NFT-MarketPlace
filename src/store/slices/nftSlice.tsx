import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";
import { FetchNFTArgs, NFTDetail, NFTState } from "../../types/types";

const initialState: NFTState = {
  nftdetail: null,
  loading: true,
  error: false,
};

// Async thunk
export const fetchNFT = createAsyncThunk<NFTDetail, FetchNFTArgs>(
  "nft/fetchNFT",
  async ({contract, identifier }) => {
    const response = await axiosInstance.get(`/chain/matic/contract/${contract}/nfts/${identifier}`);
    return response.data.nft;
  }
);

// Slice
export const nftSlice = createSlice({
  name: "nft",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNFT.pending, (state) => {
      state.loading = true;
      state.error = false; // Reset error state on new fetch
    });
    builder.addCase(fetchNFT.fulfilled, (state, action) => {
      state.loading = false;
      state.nftdetail = action.payload;
    });
    builder.addCase(fetchNFT.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      console.error("Error While Fetching NFT:", action.error.message);
    });
  },
});

export default nftSlice.reducer;
