import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const onPending = state => {
    state.isLoading = true;
    state.error = null;
};

const onFulfilled = state => {
    state.isLoading = false;
    state.error = null;
};

const onRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

export const contacts = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchContacts.pending]: onPending,
        [fetchContacts.fulfilled]: (state, action) => {
            state.items = action.payload;
            onFulfilled(state);
        },
        [fetchContacts.rejected]: onRejected,


        [addContact.pending]: onPending,
        [addContact.fulfilled]: (state, action) => {
            state.items.push(action.payload);
            onFulfilled(state);
        },
        [addContact.rejected]: onRejected,

        
        [deleteContact.pending]: onPending,
        [deleteContact.fulfilled]: (state, action) => {
            state.items = state.items.filter(contact => contact.id !== action.payload);
            onFulfilled(state);
        },
        [deleteContact.rejected]: onRejected,
    },
});