import { useState } from "react";
import PropTypes from 'prop-types';
import {Form, NameLabel, NameInput, NumberLabel, NumberInput, Button} from './ContactEditor.styled'
import { useDispatch, useSelector } from "react-redux";

import { addContact } from "redux/operations";
import { contactsSelector } from "redux/selectors";

function ContactEditor(){
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");


    const dispatch = useDispatch();
    const contacts = useSelector(contactsSelector);
     
    
      const handleChange = event => {
   const { name, value } = event.currentTarget;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "number":
                setNumber(value);
                break;
            default:
                return;
}
    }
const handleSubmit = e => {
        e.preventDefault();
        const existingContact = contacts.find((element) =>
            element.name === name
        );
        if(existingContact) {
        window.alert(`${name} is already in contacts`);
        return;
        };
        dispatch(addContact({name, number}));
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
