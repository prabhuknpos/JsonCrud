import React from 'react';
import './App.css';
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom';
import AddUser from './components/AddUser';
import Edit from './components/Edit';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      <Route path='/create' element={<AddUser></AddUser>}></Route>
     <Route path='/edit' element={<Edit></Edit>}></Route>
      </Routes>
    </div>
  )
}

export default App