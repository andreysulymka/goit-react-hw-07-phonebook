import { createSlice } from '@reduxjs/toolkit';

export const filter = createSlice({
    name: 'filter',
    initialState: "",
    reducers: {
        getFilter(_, action) {
            return action.payload;
        }
    }
});

export const { getFilter } = filter.actions;

