import { useState } from 'react';
import './App.css';
import data from "./demo-data.json"
import {nanoid} from "nanoid"



function App() {
  

const [contacts,setContacts] = useState(data);
const [addFormData,setAddFormData] = useState({
  fullName:"",
  address:"",
  phoneNumber:"",
  email:""
})

const handleAddFormChange = (event) =>{
  event.preventDefault();

 const fieldName= event.target.getAttribute('name');
 const fieldValue= event.target.value;
 
 const newFormData = {...addFormData};
 newFormData[fieldName] =fieldValue;

 setAddFormData(newFormData);
}
const handleAddFormSubmit = (event) =>{
  event.preventDefault();

  const  newContact = {
    id: nanoid(),
    fullName: addFormData.fullName,
    address: addFormData.address,
    phoneNumber: addFormData.phoneNumber,
    email: addFormData.email
  };
  const newContacts =[...contacts,newContact]
  setContacts(newContacts);
};

  return (
    <div className="app-contaner">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) =>{
            return(
            <tr key={contact.id}>
            <td>{contact.fullName}</td>
            <td>{contact.address}</td>
            <td>{contact.phoneNumber}</td>
            <td>{contact.email}</td>
          </tr>
          );
          })}
          
        </tbody>
      </table>
      <h2>ADD CONTACT</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input 
        type='text'
        name='fullName'
        required
        placeholder='Enter name'
        onChange={handleAddFormChange}
        />
        <input 
        type='password'
        name='address'
        required
        placeholder='Enter password'
        onChange={handleAddFormChange}
        />
        <input 
        type='text'
        name='phoneNumber'
        required
        placeholder='Enter number'
        onChange={handleAddFormChange}
        />
        <input 
        type='emailt'
        name='email'
        required
        placeholder='Enter email'
        onChange={handleAddFormChange}
        />
        <button type='submit'>ADD</button>
      </form>
    </div>
  );
}

export default App;
