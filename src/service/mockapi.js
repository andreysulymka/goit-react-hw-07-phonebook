import axios from 'axios';

axios.defaults.baseURL = 'https://644152ebfadc69b8e0811d12.mockapi.io/contacts';

export async function fetchContacts() {
    const { data } = await axios.get('/contacts');
    return data;
};

export async function addContact({name, number}) {
    const { data } = await axios.post('/contacts', { name, number });
    return data;
};

export async function deleteContact(contactId) {
    const { data } = await axios.delete(`/contacts/${contactId}`);
    return data;
};