import React from 'react'
import Login from './components/Login'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './components/Signup'
import DataForm from './components/DataForm'
import DataTable from './components/DataTable'
import Home from './components/Home';
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>}></Route>    
        <Route path='/logina' element={<Login/>}></Route>    
        <Route path='/signup' element={<Signup/>}></Route>    
        <Route path='/create' element={<DataForm/>}></Route> 
        <Route path='/datainfo' element={<DataTable/>}></Route> 
           
      </Routes>
      {/* <Login/> */}
    </BrowserRouter>
  )
}
export default App