import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Student from './Components/Student'
import EditStudent from './Components/EditStudent'
import AddStudent from './Components/AddStudent'
import store from './Components/store';
import Navbar from './Components/Navbar'


import './App.css'
import { Provider } from 'react-redux'

const App = () => {
  
  return (
    <div>
<Navbar/>
<div className='route-div'>
<Provider store={store}>
<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/student' element={<Student />}/>
  <Route path='/addstudent' element={<AddStudent />}/>
  <Route path='/contact' element={<Contact />}/>
 
  <Route path='/editstudent' element={<EditStudent />}/>
  


</Routes>
    </Provider>
</div>



    </div>
  )
}

export default App