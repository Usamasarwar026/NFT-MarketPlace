import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";
import { NftType, collectionSlugSlice } from "../../types/types";

const fetchSingleCollection = createAsyncThunk<NftType[],{ collection_slug: string }>(
  "collectionSlug/fetchSingleCollection",
  async ({ collection_slug},{ rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`collection/${collection_slug}/nfts`);
      return response.data.nfts;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState :collectionSlugSlice = {
  singleCollection: [],
  loading: true,
  error: false,
};

const collectionSlug = createSlice({
  name: "collectionSlug",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleCollection.pending, (state) => {
      state.loading = true;
      state.error = false; // Reset error state on new fetch
    });
    builder.addCase(fetchSingleCollection.fulfilled, (state, action) => {
      state.loading = false;
      state.singleCollection = action.payload;
    });
    builder.addCase(fetchSingleCollection.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      console.error("Error While Fetching Single Collection:", action.payload);
    });
  },
});

export { fetchSingleCollection };
export default collectionSlug.reducer;
