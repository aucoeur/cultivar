import { createSlice } from '@reduxjs/toolkit';

const collectionSlice = createSlice({
  name: 'collection',
  initialState: [],
  reducers: {
    addToCollection(state, action) {
      const updatedCollection = [...state, action.payload];
      return updatedCollection;
    },
    removeFromCollection(state, action) {
      const updatedCollection = [...state];
      return updatedCollection.filter((item) => item !== action.payload);
    },
  },
});

export const { addToCollection, removeFromCollection } = collectionSlice.actions;
export default collectionSlice.reducer;
