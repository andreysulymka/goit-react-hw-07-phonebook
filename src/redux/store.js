import { configureStore } from '@reduxjs/toolkit';
import { filter } from './filterSlice';
import { contacts } from './contactsSlice';

export const store = configureStore({ 
    reducer: {
        contacts: contacts.reducer,
        filter: filter.reducer
    }
});
