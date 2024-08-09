import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../normalized-mock";

const initialState = {
  entities: normalizedRestaurants.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
  ids: normalizedRestaurants.map(({ id }) => id),
};

export const restarauntSlice = createSlice({
  name: "restataunt",
  initialState,
  selectors: {
    selectRestarauntById: (state, id) => state.entities[id],
    selectRestarantsIds: (state) => state.ids,
  },
});

export const { selectRestarauntById, selectRestarantsIds } =
  restarauntSlice.selectors;
