
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { isLoadingSelector } from 'redux/selectors';
import List from "./List/List";
import ContactEditor from "./ContactEditor/ContactEditor";
import { Filter } from "./Filter/Filter";
import { Container } from "./App.styled";




export default function App () {
  
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);

  useEffect(()=> {
    dispatch(fetchContacts());
  }, [dispatch]);

 
  return (
  <>
       <Container>
         <h1>Phonebook</h1>
         <ContactEditor />
         <h2>Contacts</h2>
         <Filter/>
         <List />
  </Container>
      {isLoading && <h1>Data loading</h1>}
      </>
    )
}
   
  

 