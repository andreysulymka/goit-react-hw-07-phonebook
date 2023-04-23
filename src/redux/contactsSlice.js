import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const onPending = state => {
    state.isLoading = true;
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
             state.isLoading = false;
    state.error = null;
        },
        [fetchContacts.rejected]: onRejected,


        [addContact.pending]: onPending,
        [addContact.fulfilled]: (state, action) => {
            state.items.push(action.payload);
             state.isLoading = false;
    state.error = null;
        },
        [addContact.rejected]: onRejected,

        
        [deleteContact.pending]: onPending,
        [deleteContact.fulfilled]: (state, action) => {
            console.log(action.payload)
        state.items = state.items.filter(contact => contact.id !== action.payload.id);
        state.isLoading = false;
        state.error = null;
        },
        [deleteContact.rejected]: onRejected,
    },
});