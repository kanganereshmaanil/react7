import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addData } from './slice'

import './AddStudent.css'

const AddStudent = () => {
const navigate = useNavigate()
const dispatch = useDispatch();
const goback = () => {
navigate('/student')
}

const obj = {
  name : '',
  age:'',
  course:'',
  batch:''
}
const addchange = (e) => {
obj[e.target.name] = e.target.value
}

const submitstu = (e) => {
  e.preventDefault();
  
  dispatch(addData(obj))
  navigate('/student')
}

  return (
    <>
    <div className='studentaddclass'>
<form >
            
           <div id='formDiv'>
            <input type="text" onChange={addchange}  name="name" placeholder='Name'></input>
            <br />
  
            <br />
            <input type="text" onChange={addchange}  name="age" placeholder='Age' ></input>
            <br />
           
            <br />
            <input type="text" onChange={addchange}  name="course" placeholder='Course'></input>
            <br />
           
            <br />
            <input type="text" onChange={addchange}  name="batch" placeholder='Batch' ></input>
            <br />
            </div>
            <button onClick={goback} className='button-cancel' >Cancel</button>
            <button onClick={submitstu} className='button-submit' >Submit</button>
          </form>
          </div>
    </>
  )
}

export default AddStudent