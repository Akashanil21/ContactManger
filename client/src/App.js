import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import EditContact from './components/EditContact';
import ViewContact from './components/ViewContact';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={'/login'} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contacts/list" element={<ContactList />} />
          <Route path="/contacts/add" element={<AddContact />} />
          <Route path="/contacts/edit/:contactId" element={<EditContact />} />
          <Route path="/contacts/view/:contactId" element={<ViewContact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
