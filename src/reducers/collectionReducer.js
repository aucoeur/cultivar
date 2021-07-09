import { createSlice } from '@reduxjs/toolkit';

const collectionSlice = createSlice({
  name: 'collection',
  initialState: {
    collection: []
  },
  reducers: {
    addToCollection(state, action) {
      const updatedCollection = [...state.collection, action.payload];
      return updatedCollection;
    }
  },
});

export const { addToCollection } = collectionSlice.actions;
export default collectionSlice.reducer;
