import { Notify } from "notiflix";
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from 'service/mockapi';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async () => {
        try {
            const contacts = await contactsApi.fetchContacts();
            return contacts; 
        }  catch(error) {
            console.log(error);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contactData) => {
        try {
            const contacts = await contactsApi.addContact(contactData);
            Notify.success(`${contactData.name} is successfully added to your contact list`);
            return contacts;  
        }  catch(error) {
            console.log(error);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (data) => {
        try {
            await contactsApi.deleteContact(data.id);
            Notify.failure(`${data.name} is deleted from your contact list`);
            return data.id; 
        }  catch(error) {
            console.log(error);
        }
    }
);