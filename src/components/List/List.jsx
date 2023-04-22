import React from "react";
import { Item, Button } from "./List.styled";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from 'redux/operations';
import { shownContacts } from 'redux/selectors';

const List = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(shownContacts);
  

  const onDeleteContact = (id, name) => {
    dispatch(deleteContact({id, name}));
  };

 

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <Button onClick={() => onDeleteContact(id, name)}>Delete</Button>
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