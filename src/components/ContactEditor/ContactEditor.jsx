import { useState } from "react";
import PropTypes from 'prop-types';
import {Form, NameLabel, NameInput, NumberLabel, NumberInput, Button} from './ContactEditor.styled'
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from 'nanoid';
import {addContact} from "redux/contactsSlice";

function ContactEditor(){
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");


    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.contacts);
     
    
    const addNewContact = (data) => {
    const existingContact = contacts.find(
      element => element.name.toLowerCase() === data.name.toLowerCase()
    );
    if (existingContact) {
      window.alert(`${data.name} is already in contacts`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number
    };
    dispatch(addContact(newContact));
  };

    const handleChange = event => {
    const {name, value} = event.target
        switch (name) {
            case "name":
                setName(value);
                break;
            
            case "number":
                setNumber(value);
                break;
            
            default: return;
}
    }
const handleSubmit = e => {
        e.preventDefault();
        addNewContact({name: name, number: number});
    setName("");
    setNumber("");
    }


return (
<Form onSubmit = {handleSubmit}>
                <NameLabel >Name<NameInput
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
    value={name} onChange={handleChange}
/></NameLabel>
                <NumberLabel >Number<NumberInput
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    required
  value={number} onChange={handleChange}  
/></NumberLabel>
                <Button type="submit">Add Contact</Button>
            </Form>
    )
}



   

    


export default ContactEditor;

ContactEditor.propTypes = {
    handleSubmit: PropTypes.func
};
