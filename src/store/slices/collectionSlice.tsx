import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axiosInstance';
import { CollectionState, CollectionType } from '../../types/types';


// Initial state
const initialState: CollectionState = {
  collections: [],
  loading: false,
  error: null,
};

// Async thunk to fetch collections
export const fetchCollection = createAsyncThunk<CollectionType[]>(
  'collection/fetchCollection',
  async () => {
    const response = await axiosInstance.get('/collections?chain=matic&order_by=seven_day_volume', {
      params: {limit: '30'}
    });
    return response.data.collections;
  }
  
);
// Create the slice
const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCollection.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCollection.fulfilled, (state, action) => {
        state.loading = false;
        state.collections = action.payload;
      })
      .addCase(fetchCollection.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch collections';
      });
  },
});

export default collectionSlice.reducer;
