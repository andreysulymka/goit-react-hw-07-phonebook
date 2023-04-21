import React from "react";
import { Item, Button } from "./List.styled";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "redux/contactsSlice";

const List = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filters);

  const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const getVisibleContacts = (filterValue) => {
    const normalizedFilter = filterValue.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  const visibleContacts = getVisibleContacts(filter);

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <Button onClick={() => onDeleteContact(id)}>Delete</Button>
        </Item>
      ))}
    </ul>
  );
};

List.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),    
};

export default List;